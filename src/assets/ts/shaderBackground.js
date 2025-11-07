/*
  ES module wrapper for the background shader.
  Exports: init(canvasId) and destroy()
*/
let canvas = null
let gl = null
let prog = null
let rafId = null

// Defer uniform location queries until program is ready.
let u_resolution, u_time, u_pixelation, u_zoom, u_gradient_pixelation
let u_background_threshold, u_color_low_threshold, u_color_mid_threshold
let u_color_low, u_color_mid, u_color_high

const defaults = {
  speed: 0.05,
  pixelation: 4.0,
  zoom: 4.0,
  gradient_pixelation: 0.1,
  background_threshold: 0.0,
  color_low_threshold: 0.24,
  color_mid_threshold: 0.48,
  color_low: '#575757',
  color_mid: '#9c9c9c',
  color_high: '#000000'
}

function hexToRgba(hex) {
  if (!hex) return [0, 0, 0, 0]
  let s = String(hex).trim()
  if (s[0] === '#') s = s.slice(1)
  if (s.length === 3)
    s =
      s
        .split('')
        .map((c) => c + c)
        .join('') + 'ff'
  else if (s.length === 4)
    s = s
      .split('')
      .map((c) => c + c)
      .join('')
  else if (s.length === 6) s = s + 'ff'
  else if (s.length !== 8) return [0, 0, 0, 0]
  return [
    parseInt(s.slice(0, 2), 16) / 255,
    parseInt(s.slice(2, 4), 16) / 255,
    parseInt(s.slice(4, 6), 16) / 255,
    parseInt(s.slice(6, 8), 16) / 255
  ]
}

async function loadShaderSources() {
  try {
    const [vsText, fsText] = await Promise.all([
      fetch('/shaders/quad.vert').then((r) => r.text()),
      fetch('/shaders/fractal.frag').then((r) => r.text())
    ])
    return { vs: vsText, fs: fsText }
  } catch (e) {
    console.warn('Fetching shaders failed', e)
    throw e
  }
}

function compileShader(type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s))
  return s
}

async function createProgramFromSources() {
  const sources = await loadShaderSources()
  const program = gl.createProgram()
  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, sources.vs))
  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, sources.fs))
  gl.bindAttribLocation(program, 0, 'a_pos')
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    throw new Error(gl.getProgramInfoLog(program))
  gl.useProgram(program)
  return program
}

function setColorUniform(loc, hex) {
  const c = hexToRgba(hex)
  gl.uniform4f(loc, c[0], c[1], c[2], c[3])
}

function resizeCanvas() {
  // clamp DPR on low-end devices to reduce fragment workload
  const rawDPR = Math.max(1, window.devicePixelRatio || 1)
  const maxDPR = 1.0 // set 1.0 or 1.5 depending on look/perf tradeoff
  const devicePixelRatio = Math.min(rawDPR, maxDPR)

  const displayWidth = Math.floor(canvas.clientWidth * devicePixelRatio)
  const displayHeight = Math.floor(canvas.clientHeight * devicePixelRatio)
  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth
    canvas.height = displayHeight
    gl.viewport(0, 0, canvas.width, canvas.height)
  }
}

function initializeAfterProgramReady(program) {
  // uniforms
  u_resolution = gl.getUniformLocation(program, 'resolution')
  u_time = gl.getUniformLocation(program, 'time')
  u_pixelation = gl.getUniformLocation(program, 'pixelSize')
  u_zoom = gl.getUniformLocation(program, 'zoom')
  u_gradient_pixelation = gl.getUniformLocation(program, 'gradientStep')
  u_background_threshold = gl.getUniformLocation(program, 'backgroundThreshold')
  u_color_low_threshold = gl.getUniformLocation(program, 'colorLowThreshold')
  u_color_mid_threshold = gl.getUniformLocation(program, 'colorMidThreshold')
  u_color_low = gl.getUniformLocation(program, 'colorLow')
  u_color_mid = gl.getUniformLocation(program, 'colorMid')
  u_color_high = gl.getUniformLocation(program, 'colorHigh')
}

function setupQuad() {
  // quad
  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
}

function render(t) {
  if (!gl) return
  resizeCanvas()
  const seconds = t * 0.001 * defaults.speed
  gl.uniform2f(u_resolution, canvas.width, canvas.height)
  gl.uniform1f(u_time, seconds)
  gl.uniform1f(u_pixelation, defaults.pixelation)
  gl.uniform1f(u_zoom, defaults.zoom)
  gl.uniform1f(u_gradient_pixelation, defaults.gradient_pixelation)
  gl.uniform1f(u_background_threshold, defaults.background_threshold)
  gl.uniform1f(u_color_low_threshold, defaults.color_low_threshold)
  gl.uniform1f(u_color_mid_threshold, defaults.color_mid_threshold)
  setColorUniform(u_color_low, defaults.color_low)
  setColorUniform(u_color_mid, defaults.color_mid)
  setColorUniform(u_color_high, defaults.color_high)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  rafId = requestAnimationFrame(render)
}

/**
 * Initialize the shader background on a canvas element.
 * @param {string} canvasId
 */
export async function init(canvasId = 'noiseCanvas') {
  if (init._initialized) return Promise.resolve(init._initialized)

  canvas = document.getElementById(canvasId)
  if (!canvas) throw new Error(`Canvas element with id ${canvasId} not found`)

  gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
  if (!gl) throw new Error('WebGL not supported')

  try {
    setupQuad()
    prog = await createProgramFromSources()
    initializeAfterProgramReady(prog)
    rafId = requestAnimationFrame(render)
    init._initialized = true
    return true
  } catch (e) {
    console.error('Failed to initialize ShaderBackground', e)
    throw e
  }
}

export function destroy() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = null
  if (gl && prog) {
    try {
      gl.deleteProgram(prog)
    } catch (e) {}
  }
  prog = null
  gl = null
  canvas = null
  init._initialized = false
}
