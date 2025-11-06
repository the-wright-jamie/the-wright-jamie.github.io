// Fractal noise fragment shader (ported and documented from Godot shader)
// Main inputs:
// - resolution: vec2(width, height) in pixels
// - time: seconds * speed (drives animation)
// - pixelSize: size of pixel blocks in screen pixels (pixelation)
// - zoom: zoom factor applied to sampling coordinates
// - gradientStep: quantization step for gradient banding
// - thresholds and color bands: backgroundThreshold, colorLowThreshold, colorMidThreshold, colorLow, colorMid, colorHigh

precision mediump float;

// Interpolated UV from vertex shader (matches vertex shader's `v_uv`)
varying vec2 v_uv;

// Uniforms
uniform vec2 resolution; // canvas resolution in pixels
uniform float time; // animation time
uniform float pixelSize; // pixel block size for pixelation
uniform float zoom; // sampling zoom
uniform float gradientStep; // gradient quantization
uniform float backgroundThreshold;
uniform float colorLowThreshold;
uniform float colorMidThreshold;

uniform vec4 colorLow;
uniform vec4 colorMid;
uniform vec4 colorHigh;

// 2x2 matrix used to rotate + scale the sampling coordinates between octaves
mat2 transformMatrix = mat2(0.80, -0.60, 0.60, 0.80);

// Pseudo-random hash: maps integer grid position -> pseudo-random [0,1)
float randomHash(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

// Value noise: sample pseudo-random values on integer grid and bilinearly interpolate
float valueNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  // smoothstep easing to smooth interpolation
  local = local * local * (3.0 - 2.0 * local);

  float c00 = randomHash(cell);
  float c10 = randomHash(cell + vec2(1.0, 0.0));
  float c01 = randomHash(cell + vec2(0.0, 1.0));
  float c11 = randomHash(cell + vec2(1.0, 1.0));

  float ix0 = mix(c00, c10, local.x);
  float ix1 = mix(c01, c11, local.x);
  float v = mix(ix0, ix1, local.y);
  return v * v; // bias to emphasize darker regions (matches original shader)
}

// Fractal Brownian Motion: combine several octaves of valueNoise
float fractalBrownianMotion(vec2 p, float t) {
  float accum = 0.0;
  accum += 0.500000 * valueNoise(p + vec2(t)); p = transformMatrix * p * 2.02;
  accum += 0.031250 * valueNoise(p); p = transformMatrix * p * 2.01;
  accum += 0.250000 * valueNoise(p); p = transformMatrix * p * 2.03;
  accum += 0.125000 * valueNoise(p); p = transformMatrix * p * 2.01;
  accum += 0.062500 * valueNoise(p); p = transformMatrix * p * 2.04;
  accum += 0.015625 * valueNoise(p + vec2(sin(t)));
  return accum / 0.96875; // normalize
}

// Compose nested fBm calls to create turbulence-like patterns
float turbulencePattern(vec2 p, float t) {
  float a = fractalBrownianMotion(p, t);
  float b = fractalBrownianMotion(p + vec2(a), t);
  return fractalBrownianMotion(p + vec2(b), t);
}

// Map noise value to color bands with quantization and vignette
vec4 mapToColor(float value, vec2 uvCoord) {
  float d = max(abs(0.5 - uvCoord.x), abs(0.5 - uvCoord.y)) * 2.0;
  value *= (1.0 - pow(d, 3.0));

  if (value < backgroundThreshold) return vec4(0.0);

  if (value < colorLowThreshold) {
    float t = floor((value - backgroundThreshold) / (colorLowThreshold - backgroundThreshold) / gradientStep + 0.5) * gradientStep;
    return mix(vec4(0.0), colorLow, t);
  } else if (value < colorMidThreshold) {
    float t = floor((value - colorLowThreshold) / (colorMidThreshold - colorLowThreshold) / gradientStep + 0.5) * gradientStep;
    return mix(colorLow, colorMid, t);
  } else {
    float t = floor((value - colorMidThreshold) / (1.0 - colorMidThreshold) / gradientStep + 0.5) * gradientStep;
    return mix(colorMid, colorHigh, t);
  }
}

void main() {
  // fragCoord in pixels
  vec2 fragCoord = v_uv * resolution;
  // snap to pixel grid of size 'pixelSize' and sample center of block
  vec2 snapped = floor(fragCoord / pixelSize) * pixelSize + pixelSize * 0.5;
  vec2 screenUv = snapped / resolution;

  // aspect correction so pixels appear square on non-square canvases
  float aspect = resolution.x / resolution.y;
  vec2 samplePos = vec2(screenUv.x * zoom * aspect, screenUv.y * zoom);

  float shade = turbulencePattern(samplePos, time);
  gl_FragColor = mapToColor(shade, screenUv);
}
