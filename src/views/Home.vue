<template>
  <div class="mt-20 home grid place-items-center">
    <div class="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/121819290"
        class="rounded-full h-50 mx-auto mb-10 shadow-xl/50"
      />
      <h1 class="text-8xl hero">Jamie Wright</h1>
      <br />
      <p>
        <router-link to="/whoami">Who am I</router-link> -
        <router-link to="/projects">Projects</router-link> -
        <router-link to="/contact">Contact</router-link> -
        <router-link to="/socials">Socials</router-link> -
        <router-link to="/showcase">Showcase</router-link>
      </p>
    </div>
  </div>
  <!--<h2>Projects</h2>
    <ul>
      <li>
        <a
          @click.prevent="
            open(
              'hakiu',
              'https://gist.githubusercontent.com/the-wright-jamie/43d4932e0fd0fd880929ca74736c9dc5/raw'
            )
          "
          >Example Project (from gist)</a
        >
      </li>
      <li><router-link to="/">Local Project</router-link></li>
    </ul>-->
</template>

<script setup>
import { navigateWithGist } from '@/utils/navigateWithGist'

function open(id, gistUrl) {
  navigateWithGist({ name: 'haiku', params: { id } }, gistUrl)
}
</script>
