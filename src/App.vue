<template>
  <BackgroundShader class="opacity-70" />
  <div id="app">
    <div class="select-none">
      <div class="grid grid-cols-4">
        <h1 class="text-2xl">
          <router-link to="/">the-wright-jamie</router-link>
        </h1>
        <transition name="header-fade" class="col-span-3">
          <div class="flex w-full items-end justify-evenly text-lg" v-if="showHeader">
            <p><router-link class="nav-link" to="/whoami">Who am I?</router-link></p>
            <p><router-link class="nav-link" to="/projects">Projects</router-link></p>
            <p><router-link class="nav-link" to="/contact">Contact</router-link></p>
            <p><router-link class="nav-link" to="/socials">Socials</router-link></p>
            <p><router-link class="nav-link" to="/showcase">Showcase</router-link></p>
            <p><router-link class="nav-link" to="/xsfs">XSFS</router-link></p>
          </div>
        </transition>
      </div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="routeKey" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import BackgroundShader from '@/components/BackgroundShader.vue'
// Removed pageVisible import as it is no longer used
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeKey = computed(() => route.fullPath)
const showHeader = computed(() => {
  // hide header on home route (exact '/'), show elsewhere
  return route.path !== '/'
})
</script>

<style>
/* fade: fade out, pause while hidden, then fade in */
.fade-enter-active,
.fade-leave-active {
  /* stronger, more visible fade */
  transition: opacity 200ms ease 100ms !important;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1 !important;
}

/* ensure page content is above shader canvas */
#app {
  position: relative;
  z-index: 0;
}

/* header fades in halfway through the page fade (page fade = 200ms, header delay = 100ms) */
.header-fade-enter-active {
  transition: opacity 200ms ease 100ms; /* duration 200ms, delay 100ms */
}
.header-fade-leave-active {
  transition: opacity 200ms ease 0ms; /* quick fade out */
}
.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
}
.header-fade-enter-to,
.header-fade-leave-from {
  opacity: 1;
}

/* navbar link motion: hover moves down a bit, active moves down fully; active+hover does nothing */
.nav-link {
  display: inline-block; /* allow transform */
  transition:
    transform 150ms ease,
    color 120ms ease,
    opacity 120ms ease;
  transform: translateY(0);
  opacity: 0.5; /* unselected 50% */
}
.nav-link:hover:not(.router-link-active) {
  transform: translateY(4px); /* small move on hover */
  opacity: 0.75; /* hover 75% */
}
.nav-link.router-link-active {
  transform: translateY(12px); /* moved fully when selected */
  opacity: 1; /* selected 100% */
}
.nav-link.router-link-active:hover {
  transform: translateY(12px); /* don't change when hovering an active link */
}
</style>
