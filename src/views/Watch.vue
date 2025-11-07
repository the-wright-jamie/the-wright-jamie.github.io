<template>
  <div class="watch-root">
    <div class="controls" v-show="!controlsHidden">
      <input type="color" v-model="lowColor" aria-label="Low shader color" />
      <input type="color" v-model="midColor" aria-label="Mid shader color" />

      <button class="toggle-nav" @click="toggleNav">Full Screen</button>
      <button class="" @click="resetColors">Reset colors</button>
    </div>
    <p v-show="!controlsHidden">
      If you go full screen, there is a hidden return button in the top left.
    </p>
    <p v-show="!controlsHidden">
      Your changes are saved so that you can use this theme across the website
    </p>
  </div>
</template>

<script setup>
import { setColorLow, setColorMid } from '@/assets/ts/shaderBackground'
import { ref, watch } from 'vue'

const lowColor = ref('#575757')
const midColor = ref('#9c9c9c')
const controlsHidden = ref(false)

// load persisted colors
try {
  const l = localStorage.getItem('shader-low')
  const m = localStorage.getItem('shader-mid')
  if (l) lowColor.value = l
  if (m) midColor.value = m
} catch (e) {}

// apply loaded colors to the shader immediately
try {
  setColorLow(lowColor.value)
  setColorMid(midColor.value)
} catch (e) {}

watch(lowColor, (v) => {
  try {
    setColorLow(v)
  } catch (e) {}
  try {
    localStorage.setItem('shader-low', v)
  } catch (e) {}
})
watch(midColor, (v) => {
  try {
    setColorMid(v)
  } catch (e) {}
  try {
    localStorage.setItem('shader-mid', v)
  } catch (e) {}
})

function toggleNav() {
  const ev = new CustomEvent('toggle-nav-visibility', { detail: { hide: true } })
  window.dispatchEvent(ev)
}

function resetColors() {
  lowColor.value = '#575757'
  midColor.value = '#9c9c9c'
  try {
    setColorLow(lowColor.value)
    setColorMid(midColor.value)
  } catch (e) {}
  try {
    localStorage.removeItem('shader-low')
    localStorage.removeItem('shader-mid')
  } catch (e) {}
}

function onToggleNav(ev) {
  if (ev && ev.detail && typeof ev.detail.hide === 'boolean') controlsHidden.value = ev.detail.hide
}

window.addEventListener('toggle-nav-visibility', onToggleNav)

// clean up when component unmounts
import { onBeforeUnmount } from 'vue'
onBeforeUnmount(() => {
  window.removeEventListener('toggle-nav-visibility', onToggleNav)
})
</script>

<style scoped>
.watch-root {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.color-picker input[type='color'] {
  margin-left: 0.5rem;
  width: 2.25rem;
  height: 2rem;
  border: none;
  background: transparent;
}
.presets {
  display: flex;
  gap: 0.5rem;
}
.preset {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.clear-btn {
  padding: 0.5rem 0.8rem;
  background: #111827;
  color: white;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  cursor: pointer;
}
.watch-note {
  color: rgba(255, 255, 255, 0.7);
}
.clear-btn {
  margin-left: 0.5rem;
}
</style>
