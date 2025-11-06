<template>
  <canvas id="noiseCanvas" />
</template>

<script setup>
import { destroy as destroyShader, init as initShader } from '@/assets/ts/shaderBackground.js'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  if (typeof initShader === 'function') {
    initShader('noiseCanvas').catch((e) => {
      console.error('Shader init failed, falling back to window.ShaderBackground', e)
      if (window.ShaderBackground && typeof window.ShaderBackground.init === 'function') {
        window.ShaderBackground.init('noiseCanvas').catch(console.error)
      }
    })
  } else if (window.ShaderBackground && typeof window.ShaderBackground.init === 'function') {
    window.ShaderBackground.init('noiseCanvas').catch(console.error)
  }
})

onUnmounted(() => {
  if (typeof destroyShader === 'function') destroyShader()
  if (window.ShaderBackground && typeof window.ShaderBackground.destroy === 'function')
    window.ShaderBackground.destroy()
})
</script>

<style>
canvas#noiseCanvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
