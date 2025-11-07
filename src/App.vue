<template>
  <BackgroundShader class="opacity-70" />
  <button
    class="cursor-pointer return"
    @click="((forcedHideNav = false), router.push('/'))"
    aria-label="Restore navigation"
    v-if="forcedHideNav"
  >
    <h1 class="text-5xl p-6">X</h1>
  </button>
  <div v-if="!forcedHideNav" class="select-none sm:mx-4 sm:my-4">
    <!-- stack on small (centered title above), row on large -->
    <div class="flex flex-col lg:flex-row items-center lg:items-end header-row">
      <h1 class="text-2xl homelink text-nowrap w-full text-center lg:text-left lg:w-auto">
        <router-link to="/">the-wright-jamie</router-link>
      </h1>
      <div
        class="grid w-full items-end text-center lg:justify-center text-lg lg:grid-cols-6 grid-cols-2 gap-6 lg:pt-0 pt-4 mt-4 lg:mt-0 links"
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
  <div class="content-area select-none" :class="{ 'min-h-screen': isXSFSActive }">
    <div
      class="xsfs-overlay"
      ref="xsfsOverlay"
      :class="{ active: isXSFS }"
      aria-hidden="true"
    ></div>
    <router-view v-slot="{ Component }">
      <!-- responsive inner container: smaller side padding on mobile, larger on desktop -->
      <div class="px-5 pt-8 pb-8 md:px-6 lg:px-12 max-w-screen-xl mx-auto">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="routeKey" />
        </transition>
      </div>
    </router-view>
  </div>
</template>

<script setup>
import BackgroundShader from '@/components/BackgroundShader.vue'
// Removed pageVisible import as it is no longer used
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from './router'

const route = useRoute()
const routeKey = computed(() => route.fullPath)

const forcedHideNav = ref(false)
const showRestore = ref(false)
const showHeader = computed(() => {
  // hide header on home route (exact '/'), show elsewhere
  // also allow a forced hide from other views (e.g., Watch)
  if (forcedHideNav.value) return false
  return route.path !== '/'
})

function onToggleNav(ev) {
  // event detail: { hide: boolean }
  if (ev && ev.detail && typeof ev.detail.hide === 'boolean') forcedHideNav.value = ev.detail.hide
}

onMounted(() => {
  window.addEventListener('toggle-nav-visibility', onToggleNav)
})

onBeforeUnmount(() => {
  window.removeEventListener('toggle-nav-visibility', onToggleNav)
})

const isXSFS = computed(() => route.path.includes('/xsfs'))

// delayed active state: stays true until overlay transition finishes to avoid layout jumps
const isXSFSActive = ref(isXSFS.value)
const xsfsOverlay = ref(null)
let fallbackTimer = null

watch(isXSFS, (val) => {
  const el = xsfsOverlay.value
  const finish = () => {
    if (fallbackTimer) {
      clearTimeout(fallbackTimer)
      fallbackTimer = null
    }
    isXSFSActive.value = false
    if (el) el.removeEventListener('transitionend', onEnd)
  }
  const onEnd = (ev) => {
    if (ev.propertyName === 'opacity' || ev.propertyName === '') finish()
  }

  if (val) {
    // entering: set active immediately
    if (fallbackTimer) {
      clearTimeout(fallbackTimer)
      fallbackTimer = null
    }
    isXSFSActive.value = true
  } else {
    // leaving: wait for overlay to finish fading out
    if (el) {
      el.addEventListener('transitionend', onEnd, { once: true })
      // fallback in case transitionend doesn't fire
      fallbackTimer = setTimeout(finish, 600)
    } else {
      // no element found — fallback
      fallbackTimer = setTimeout(() => {
        isXSFSActive.value = false
        fallbackTimer = null
      }, 300)
    }
  }
})

onBeforeUnmount(() => {
  if (fallbackTimer) {
    clearTimeout(fallbackTimer)
    fallbackTimer = null
  }
  const el = xsfsOverlay.value
  if (el) el.removeEventListener('transitionend', () => {})
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

.return {
  opacity: 0;

  transition: opacity 100ms ease;
}

button {
  font-family: 'Forge';
  cursor: pointer;
}

.return:hover {
  opacity: 1;
  transition: opacity 100ms ease;
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

.header-row {
  position: relative;
  z-index: 40;
  padding-top: 0.75rem; /* give breathing room on small screens */
}

.homelink {
  z-index: 50;
  margin-bottom: 0.5rem; /* separate title from nav on small screens */
}

.links {
  min-height: 3rem;
  margin-top: 0; /* avoid overlapping the title on small screens */
}

/* preserve the original tighter overlap on large screens if desired */
@media (min-width: 1024px) {
  .links {
    margin-top: -2em;
  }
  .header-row {
    padding-top: 0; /* desktop original spacing */
  }
  .homelink {
    margin-bottom: 0; /* line up with desktop layout */
  }
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

/* hide nav/homelink when forced hidden */
.nav-hidden {
  opacity: 0;
  pointer-events: none;
}
.homelink.nav-hidden {
  opacity: 0;
  pointer-events: none;
}

/* restore hotspot in top-left */
.restore-hotspot {
  position: fixed;
  left: 0.5rem;
  top: 0.5rem;
  z-index: 60;
}
.restore-btn {
  display: inline-block;
  padding: 0.4rem 0.6rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.95;
}
</style>
