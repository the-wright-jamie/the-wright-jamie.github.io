<template>
  <div class="home grid place-items-center">
    <div class="text-center the-stuff pt-20 lg:pt-55">
      <img
        src="https://avatars.githubusercontent.com/u/121819290"
        class="rounded-full h-50 mx-auto mb-10 shadow-xl/50"
      />
      <h1 class="lg:text-8xl text-4xl hero">Jamie Wright</h1>
      <h2 class="lg:text-8xl text-4xl hero opacity-60 pt-4">Software & Security Engineer</h2>
      <br />
      <div class="grid w-full items-end text-center gap-5 lg:grid-cols-6 grid-cols-2">
        <p><router-link class="nav-link text-nowrap" to="/whoami">Who am I?</router-link></p>
        <p><router-link class="nav-link" to="/projects">Projects</router-link></p>
        <p><router-link class="nav-link" to="/showcase">Showcase</router-link></p>
        <p><router-link class="nav-link" to="/services">Services</router-link></p>
        <p><router-link class="nav-link" to="/contact">Contact</router-link></p>
        <p><router-link class="nav-link" to="/xsfs">XSFS</router-link></p>
      </div>
      <br />
      <h2 class="lg:text-8xl text-2xl hero opacity-60 pt-4">This website is a work in progress!</h2>
      <br />
      <div class="flex w-full items-end justify-evenly text-xs gap-5">
        <p><router-link class="nav-link" to="/attributions">About this website</router-link></p>
        <p><router-link class="nav-link" to="/watch">Watch the background</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navigateWithGist } from '@/utils/navigateWithGist'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeader = computed(() => {
  // hide header on home route (exact '/'), show elsewhere
  return route.path !== '/'
})

function open(id, gistUrl) {
  navigateWithGist({ name: 'haiku', params: { id } }, gistUrl)
}
</script>

<style scoped>
.the-stuff {
  margin-top: -10em;
  z-index: 60;
}
</style>
