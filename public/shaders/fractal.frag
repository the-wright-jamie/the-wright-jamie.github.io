// Fractal noise fragment shader (ported and documented from Godot shader)
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_uv;

uniform vec2 resolution;
uniform float time;
uniform float pixelSize;
uniform float zoom;
uniform float gradientStep;
uniform float backgroundThreshold;
uniform float colorLowThreshold;
uniform float colorMidThreshold;

uniform vec4 colorLow;
uniform vec4 colorMid;
uniform vec4 colorHigh;

mat2 transformMatrix = mat2(0.80, -0.60, 0.60, 0.80);

float randomHash(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float valueNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);

  float c00 = randomHash(cell);
  float c10 = randomHash(cell + vec2(1.0, 0.0));
  float c01 = randomHash(cell + vec2(0.0, 1.0));
  float c11 = randomHash(cell + vec2(1.0, 1.0));

  float ix0 = mix(c00, c10, local.x);
  float ix1 = mix(c01, c11, local.x);
  float v = mix(ix0, ix1, local.y);
  return v * v;
}

// float fractalBrownianMotion(vec2 p, float t) {
//   float accum = 0.0;
//   float amp = 0.5;
//   mat2 M = transformMatrix;
//   // fewer octaves (4) - cheaper and more robust on mediump
//   for (int i = 0; i < 4; ++i) {
//     accum += amp * valueNoise(p + vec2(t * float(i) * 0.1));
//     p = M * p * 2.0;
//     amp *= 0.5;
//     // keep p in a safe range to avoid precision blowup
//     p = fract(p * 0.0625) * 16.0 - 8.0;
//   }
//   return accum;
// }

float fractalBrownianMotion(vec2 p, float t) {
  float accum = 0.0;
  accum += 0.500000 * valueNoise(p + vec2(t)); p = transformMatrix * p * 2.02;
  accum += 0.031250 * valueNoise(p); p = transformMatrix * p * 2.01;
  accum += 0.250000 * valueNoise(p); p = transformMatrix * p * 2.03;
  accum += 0.125000 * valueNoise(p); p = transformMatrix * p * 2.01;
  accum += 0.062500 * valueNoise(p); p = transformMatrix * p * 2.04;
  accum += 0.015625 * valueNoise(p + vec2(sin(t)));
  return accum / 0.96875;
}

float turbulencePattern(vec2 p, float t) {
  float a = fractalBrownianMotion(p, t);
  float b = fractalBrownianMotion(p + vec2(a), t);
  return fractalBrownianMotion(p + vec2(b), t);
}

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
  vec2 fragCoord = v_uv * resolution;
  vec2 snapped = floor(fragCoord / pixelSize) * pixelSize + pixelSize * 0.5;
  vec2 screenUv = snapped / resolution;

  float aspect = resolution.x / resolution.y;
  vec2 samplePos = vec2(screenUv.x * zoom * aspect, screenUv.y * zoom);

  float shade = turbulencePattern(samplePos, time);
  gl_FragColor = mapToColor(shade, screenUv);
}
