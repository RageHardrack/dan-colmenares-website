<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BlogService } from "../../services";

const posts = ref([]);

onMounted(async () => {
  const res = await BlogService.getPosts();
  console.log({ res });
});
</script>

<template>
  <div>hola Blog</div>
</template>
