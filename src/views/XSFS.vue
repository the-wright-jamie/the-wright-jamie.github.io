<template>
  <div class="p-8">
    <h1 class="text-4xl mt-12">XSFS</h1>
    <div
      class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      <p class="text-lg">eXtra Space For Stuff</p>
    </div>
    <p>
      When I get round to it, my blog will be here. This space will contain source code (or links to
      it). It will be a place for me to share thoughts and non-academic research into software and
      security. In the future, I may also share miscellaneous projects and demos here.
    </p>
    <br />
    <p class="text-center">Thank you for your interest, please check back in the future</p>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <router-link :to="post.path">{{ post.meta.title || post.slug }}</router-link>
        <small>{{ post.meta.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
const modules = import.meta.glob('../blog/*.md', { eager: true })
const posts = Object.entries(modules)
  .map(([p, m]) => {
    const slug = p.split('/').pop().replace(/\.md$/, '')
    return { slug, path: `/xsfs/${slug}`, meta: m.frontmatter || {} }
  })
  .sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''))
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
</style>
