<template>
  <div class="home grid place-items-center">
    <div class="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/121819290"
        class="rounded-full h-50 mx-auto mb-10 shadow-xl/50"
      />
      <h1 class="text-8xl hero">Jamie Wright</h1>
      <br />
      <div class="flex w-full items-end justify-evenly text-lg gap-5">
        <p><router-link class="nav-link" to="/whoami">Who am I?</router-link></p>
        <p><router-link class="nav-link" to="/projects">Projects</router-link></p>
        <p><router-link class="nav-link" to="/contact">Contact</router-link></p>
        <p><router-link class="nav-link" to="/socials">Socials</router-link></p>
        <p><router-link class="nav-link" to="/showcase">Showcase</router-link></p>
        <p><router-link class="nav-link" to="/xsfs">XSFS</router-link></p>
      </div>
      <br />
      <br />
      <div class="flex w-full items-end justify-evenly text-xs gap-5">
        <p><router-link class="nav-link" to="/attributions">About this website</router-link></p>
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
