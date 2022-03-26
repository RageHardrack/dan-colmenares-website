<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.slug);
</script>

<template>
  <div>hola mundo</div>
</template>
