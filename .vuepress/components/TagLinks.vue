<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags.sort()"
      :key="tag"
      :to="{ path: `/tags/#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>
