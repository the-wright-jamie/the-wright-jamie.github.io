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
        <button
          @click="$router.back()"
          class="px-3 py-1 rounded bg-gray-800 text-white hover:bg-green-600 transition"
          aria-label="Go back"
        >
          ← Back
        </button>
      </div>
      <router-view />
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
h1 {
  color: #4aaf37;
  text-shadow: 0 0 15px green;
  font-family: 'Forge';
}

h1::before {
  content: '#> ';
}

/* unvisited link */
a:link {
  color: white;
}

/* visited link */
a:visited {
  color: gray;
}

/* mouse over link */
a:hover {
  color: #4aaf37;
  text-shadow: 0 0 15px #4aaf37;
}

/* selected link */
a:active {
  color: green;
  text-shadow: 0 0 15px green;
}

.brand {
  max-width: 5em;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

code {
  padding-top: 0.25%;
  padding-bottom: 0.25%;
  padding-left: 0.5%;
  padding-right: 0.5%;
  border-radius: 0.35em;
  background-color: #333333;
  color: white;
}

img:not(.footer-img) {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

figcaption {
  text-align: center;
}

.footer {
  font-size: 0.8em;
}

#demos-target,
#thoughts-target,
#misc-target {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-success {
  filter: drop-shadow(0 0 5px green);
}

span {
  vertical-align: middle;
  padding-bottom: 0.5%;
}

/* style the rendered markdown inside this component using deep selector.
   adjust sizing / colors to taste. */
::v-deep .markdown-body {
  max-width: 70ch;
  margin: 1.5rem auto;
  padding: 1rem;
  line-height: 1.7;
  color: #e6e6e6;
}

::v-deep .markdown-body h1,
::v-deep .markdown-body h2,
::v-deep .markdown-body h3 {
  color: #4aaf37; /* keep the green header style for blog posts */
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}
::v-deep .markdown-body p {
  margin: 0.6rem 0;
}

::v-deep .markdown-body pre {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: auto;
  margin: 1rem 0;
}
::v-deep .markdown-body code {
  background: rgba(255, 255, 255, 0.04);
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;
}

::v-deep .markdown-body img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  border-radius: 0.5rem;
}
</style>
