<script setup lang="ts">
interface Props {
  customClass?: string;
}

defineProps<Props>();
</script>

<template>
  <span :class="`flex px-4 py-1 rounded-lg bg-gold ${customClass}`">
    <slot />
  </span>
</template>
