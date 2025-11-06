<template>
  <div class="mt-40 home grid place-items-center">
    <div class="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/121819290"
        class="rounded-full h-50 mx-auto mb-10 shadow-xl/50"
      />
      <h1 class="text-8xl hero">Jamie Wright</h1>
      <br />
      <p>
        <router-link to="/whoami">Who am I?</router-link> -
        <router-link to="/projects">Projects</router-link> -
        <router-link to="/contact">Contact</router-link> -
        <router-link to="/socials">Socials</router-link> -
        <router-link to="/showcase">Showcase</router-link> -
        <router-link to="/xsfs">Blog (XSFS)</router-link>
      </p>
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
