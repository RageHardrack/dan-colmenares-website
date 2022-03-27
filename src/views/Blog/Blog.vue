<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { BlogService } from "../../services";
import Grid from "../../components/Layout/components/Grid.vue";
import LoadingView from "../../components/Layout/components/LoadingView.vue";
import { Publicacion } from "../../interfaces";
import BlogCard from "../../components/Pages/Blog/BlogCard.vue";
import MainBlogCard from "../../components/Pages/Blog/MainBlogCard.vue";
import Header from "../../components/Typography/Header.vue";
import BaseLayout from "../../components/Layout/BaseLayout.vue";

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
  <BaseLayout>
    <LoadingView loadMessage="Cargando Publicaciones" v-if="loading" />

    <section v-else class="flex flex-col justify-center space-y-4 md:space-y-8">
      <Header as="h1" customClass="text-primary">Última publicación</Header>

      <MainBlogCard :post="posts.slice(0, 1)[0].properties" />

      <Header as="h2" customClass="text-black-coffee">
        Publicaciones anteriores
      </Header>

      <Grid>
        <BlogCard
          v-for="{ properties, id } in posts.slice(1)"
          :post="properties"
          :key="id"
        />
      </Grid>
    </section>
  </BaseLayout>
</template>
