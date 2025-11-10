<template>
  <div>
    <p>
      When I get round to it, my blog will be here. This space will contain source code (or links to
      it). It will be a place for me to share thoughts and non-academic research into software and
      security. In the future, I may also share miscellaneous projects and demos here. Below is the
      current efforts of my migration from the old site.
    </p>
    <br />
    <p class="text-center">Thank you for your interest, please check back in the future</p>
    <div
      class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      <p class="">Blog Posts</p>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <router-link :to="post.path">{{ post.meta.title || post.slug }}</router-link>
        <small class="ml-3">posted {{ post.formattedDate }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
const modules = import.meta.glob('../blog/*.md', { eager: true })

const formatMonthYear = (dateValue) => {
  if (!dateValue) return ''
  console.log('Date value:', dateValue)
  try {
    const dt = new Date(dateValue)
    console.log('Parsed date:', dt)
    if (isNaN(dt.getTime())) return String(dateValue)
    return new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(dt)
  } catch (e) {
    console.error('Error formatting date:', e)
    return String(dateValue)
  }
}

const posts = Object.entries(modules)
  .map(([p, m]) => {
    console.log('Processing post:', p, m)
    const slug = p.split('/').pop().replace(/\.md$/, '')
    const meta = m.frontmatter || {}
    return {
      slug,
      path: `/xsfs/${slug}`,
      meta,
      formattedDate: formatMonthYear(meta.date)
    }
  })
  .sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''))
</script>

<style scoped>
@import '../assets/css/xsfs.css';
</style>
