<template>
  <div class="project">
    <h2>Project: {{ id }}</h2>
    <div v-if="loading">Loading...</div>
    <pre v-else class="gist">{{ content }}</pre>
  </div>
</template>

<script setup>
import { fetchGistRaw, getCachedGist } from '@/services/gistService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id || 'unknown'
const content = ref('')
const loading = ref(true)

onMounted(async () => {
  // For demo: construct a gist url if id matches 'example'
  let url = null
  url = 'https://gist.githubusercontent.com/the-wright-jamie/43d4932e0fd0fd880929ca74736c9dc5/raw'

  if (url) {
    const cached = getCachedGist(url)
    if (cached) {
      content.value = cached
      loading.value = false
      return
    }
    try {
      content.value = await fetchGistRaw(url)
    } catch (e) {
      content.value = 'Failed to load gist.'
    } finally {
      loading.value = false
    }
  } else {
    content.value = 'No gist for this project.'
    loading.value = false
  }
})
</script>
