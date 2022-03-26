<script setup lang="ts">
interface Props {
  customClass?: string;
}

defineProps<Props>();
</script>

<template>
  <span
    :class="`flex text-sm px-2 py-1 rounded-lg font-semibold bg-gold ${customClass}`"
  >
    <slot />
  </span>
</template>
