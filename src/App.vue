<template>
  <BackgroundShader class="opacity-70" />
  <div id="app">
    <h1 class="text-2xl"><router-link to="/">the-wright-jamie</router-link></h1>
    <router-view v-slot="{ Component }" :key="routeKey">
      <transition name="fade" mode="out-in">
        <component v-if="pageVisible" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import BackgroundShader from '@/components/BackgroundShader.vue'
import { pageVisible } from '@/state/transitionState'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeKey = computed(() => route.fullPath)
</script>

<style>
/* fade: fade out, pause while hidden, then fade in */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* ensure page content is above shader canvas */
#app {
  position: relative;
  z-index: 0;
}
</style>
