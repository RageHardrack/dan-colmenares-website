<script setup lang="ts">
import LoadingView from "../../components/Layout/LoadingView.vue";
import { Properties } from "../../interfaces";
import { BlogService } from "../../services";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const properties = ref<Properties | {}>({});
const content = ref<string[] | []>([]);
const loading = ref(false);

const route = useRoute();
console.log(route.params.slug);

onMounted(async () => {
  try {
    loading.value = true;
    const { data } = await BlogService.getPostBySlug(
      route.params.slug as string
    );
    console.log({ data });
    properties.value = data.properties;
    content.value = data.content;
  } catch (error) {
    console.error(error);
    properties.value = {};
    content.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <LoadingView loadMessage="Cargando Publicación" v-if="loading" />

  <section v-else>
    <article class="flex flex-col justify-start space-y-4 text-justify">
      <p v-for="(paragraph, idx) in content" :key="idx">
        {{ paragraph }}
      </p>
    </article>
  </section>
</template>
