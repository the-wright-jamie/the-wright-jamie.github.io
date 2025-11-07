<template>
  <BackgroundShader class="opacity-70" />
  <div class="select-none container">
    <div class="grid lg:grid-cols-4 grid-cols-1 text-center lg:text-left header-row">
      <h1 class="text-2xl homelink">
        <router-link to="/">the-wright-jamie</router-link>
      </h1>
      <div
        class="grid w-full items-end text-center lg:justify-center text-lg lg:grid-cols-6 grid-cols-2 gap-6 lg:pt-0 pt-12 links col-span-3"
        :aria-hidden="!showHeader"
        :class="{ 'nav-hidden': !showHeader }"
      >
        <p>
          <router-link class="nav-link text-nowrap" to="/whoami">Who am I?</router-link>
        </p>
        <p><router-link class="nav-link" to="/projects">Projects</router-link></p>
        <p><router-link class="nav-link" to="/services">Services</router-link></p>
        <p><router-link class="nav-link" to="/showcase">Showcase</router-link></p>
        <p><router-link class="nav-link" to="/contact">Contact</router-link></p>
        <p><router-link class="nav-link" to="/xsfs">XSFS</router-link></p>
      </div>
    </div>
  </div>
  <div class="content-area select-none">
    <div class="xsfs-overlay" :class="{ active: isXSFS }" aria-hidden="true"></div>
    <router-view v-slot="{ Component }" class="container">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="routeKey" />
      </transition>
    </router-view>
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
const isXSFS = computed(
  () => route.path === '/xsfs' || (route.name && String(route.name) === 'xsfs')
)
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

/* content area normally transparent; on xsfs it becomes black with a top gradient */
.content-area {
  position: relative;
  z-index: 20;
  background: transparent;
}

/* xsfs overlay: sits between shader and content, fades in to give a smooth background transition */
.xsfs-overlay {
  position: absolute;
  inset: 0;
  z-index: -1; /* sit above routed content to cover it, but below the header */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%);
  opacity: 0;
  transition: opacity 350ms ease;
  pointer-events: none;
}
.xsfs-overlay.active {
  opacity: 1;
  transition: opacity 350ms ease;
}

/* optional: dim the shader when xsfs is active (if you prefer to dim rather than fully cover) */
.shader-dim {
  filter: brightness(0.35) saturate(0.8);
  transition: filter 350ms ease;
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

/* ensure header is above overlay so shader shows through behind it */
.header-row {
  position: relative;
  z-index: 40;
}

.links {
  min-height: 3rem;
  margin-top: -2em;
}

.homelink {
  z-index: 50;
}

.header-row .grid[aria-hidden='true'] {
  pointer-events: none;
  /* allow fade by animating opacity instead of using visibility */
  opacity: 0;
  transition: opacity 200ms ease 100ms;
}
.header-row .grid[aria-hidden='false'] {
  opacity: 1;
  transition: opacity 200ms ease;
}
</style>
