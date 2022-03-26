<script setup lang="ts">
interface Props {
  isLink?: boolean;
}

const { isLink = false } = defineProps<Props>();
</script>

<template>
  <article
    :class="`flex flex-col justify-between p-4 space-y-4 duration-300 transform rounded-lg shadow-lg bg-primary hover:scale-105 ${
      isLink ? 'cursor-pointer' : 'cursor-auto'
    }`"
  >
    <header>
      <slot name="header" />
    </header>

    <section>
      <slot name="content" />
    </section>

    <footer class="flex flex-wrap items-center justify-start">
      <slot name="footer" />
    </footer>
  </article>
</template>
