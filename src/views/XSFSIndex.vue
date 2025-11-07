<template>
  <div>
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
h1,
h2,
h3 {
  color: #4aaf37;
}
</style>
