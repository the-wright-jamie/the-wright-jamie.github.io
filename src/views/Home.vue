<template>
  <div class="home grid place-items-center">
    <div class="text-center the-stuff pt-30 lg:pt-50">
      <img
        src="https://avatars.githubusercontent.com/u/121819290"
        class="rounded-full h-50 mx-auto mb-10 shadow-xl/50"
      />
      <h1 class="lg:text-8xl md:text-6xl text-4xl pb-8 hero">Jamie Wright</h1>
      <span class="text-2xl lg:text-4xl opacity-60 forge"
        >Software Engineer & Systems Designer</span
      >
      <div class="grid w-full items-end text-center pt-8 gap-5 lg:grid-cols-6 grid-cols-2">
        <p><router-link class="nav-link text-nowrap" to="/whoami">Who am I?</router-link></p>
        <p><router-link class="nav-link" to="/portfolio">Portfolio</router-link></p>
        <p><router-link class="nav-link" to="/showcase">Showcase</router-link></p>
        <p><router-link class="nav-link" to="/rightware">rightware</router-link></p>
        <p><router-link class="nav-link" to="/contact">Contact</router-link></p>
        <p><router-link class="nav-link" to="/xsfs">XSFS</router-link></p>
      </div>
      <br />
      <div class="flex w-full items-end justify-evenly text-xs gap-5">
        <p><router-link class="nav-link" to="/attributions">About this website</router-link></p>
        <p><router-link class="nav-link" to="/watch">Watch the background</router-link></p>
      </div>
    </div>
    <div class="opacity-0 text-sm -m-10 about-rightware">rightware</div>
    <div class="opacity-0 text-sm -m-10 title">lifeline</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeader = computed(() => {
  // hide header on home route (exact '/'), show elsewhere
  return route.path !== '/'
})
</script>

<style scoped>
.the-stuff {
  margin-top: -10em;
  z-index: 60;
}
</style>
