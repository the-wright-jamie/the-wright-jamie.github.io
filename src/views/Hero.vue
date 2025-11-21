<template>
  <div class="flex h-screen hide-scrollbar">
    <div class="m-auto">
      <h1 class="text-9xl -my-50">Jamie Wright</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const ev = new CustomEvent('toggle-nav-visibility', { detail: { hide: true } })
window.dispatchEvent(ev)
document.body.style.overflow = 'hidden'
</script>

<style scoped>
.the-stuff {
  margin-top: -10em;
  z-index: 60;
}

.hide-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
</style>
