<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { BlogService } from "../../services";
import Grid from "../../components/Layout/Grid.vue";
import LoadingView from "../../components/Layout/LoadingView.vue";
import { Publicacion } from "../../interfaces";

const posts = ref<Publicacion[]>([]);
const loading = ref(false);

onBeforeMount(async () => {
  try {
    loading.value = true;
    const { data } = await BlogService.getPosts();
    posts.value = data;
  } catch (error) {
    console.error(error);
    posts.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <LoadingView loadMessage="Cargando Publicaciones" v-if="loading" />

  <Grid v-else>
    <BlogCard
      v-for="{ properties, id } in posts"
      :card="properties"
      :key="id"
    />
  </Grid>
</template>
