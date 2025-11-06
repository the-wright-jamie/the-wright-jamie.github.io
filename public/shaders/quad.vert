// Simple full-screen quad vertex shader
// Attributes:
// - a_pos: vec2 position in clip space (range -1..1)
// Outputs:
// - v_uv: interpolated UV coordinate in 0..1 space
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = (a_pos + 1.0) * 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
