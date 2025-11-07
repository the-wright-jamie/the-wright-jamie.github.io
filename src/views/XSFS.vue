<template>
  <div class="p-8">
    <h1 class="text-4xl mt-12">XSFS</h1>
    <div
      class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      <p class="text-lg">eXtra Space For Stuff</p>
    </div>
    <!-- layout-only: index content lives in XSFSIndex.vue; posts render here -->
    <div class="mt-8 post-area">
      <div class="mb-4" v-if="showBack">
        <a @click="$router.back()" class="px-3 py-1 transition" aria-label="Go back"> ← Back </a>
      </div>
      <router-view class="select-text" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// show the back button only when a child route (post) is active
const showBack = computed(() => route.path !== '/xsfs')
</script>

<style scoped>
@import '../assets/css/xsfs.css';
</style>
