<script setup lang="ts">
import Header from "../../components/Typography/Header.vue";
import { BlogService } from "../../services";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { DateTime } from "luxon";
import BaseLayout from "../../components/Layout/BaseLayout.vue";
import Divider from "../../components/Layout/components/Divider.vue";
import LoadingView from "../../components/Layout/components/LoadingView.vue";

const cover = ref("");
const title = ref("");
const date = ref("");
const content = ref<string[] | []>([]);
const loading = ref(false);

const route = useRoute();

onBeforeMount(async () => {
  try {
    loading.value = true;
    const { data } = await BlogService.getPostBySlug(
      route.params.slug as string
    );
    cover.value = data.properties.Image_URL.rich_text[0].plain_text;
    title.value = data.properties.Post.title[0].text.content;
    date.value = DateTime.fromISO(
      data.properties.Fecha_Publicacion.date.start.toString()
    )
      .setLocale("es")
      .toFormat("dd LLLL yyyy");
    content.value = data.content;
    loading.value = false;
  } catch (error) {
    console.error(error);
    content.value = [];
  }
});
</script>

<template>
  <BaseLayout>
    <LoadingView loadMessage="Cargando Publicación" v-if="loading" />

    <section v-else class="flex flex-col justify-center space-y-8">
      <header class="flex flex-col space-y-4">
        <div class="w-full md:h-[40vh] overflow-hidden">
          <img
            :src="cover"
            :alt="`Banner ${title}`"
            class="object-bottom objet-cover"
          />
        </div>
        <Header as="h1">{{ title }}</Header>
        <p>Publicado el {{ date }}</p>
      </header>

      <Divider />

      <article
        class="flex flex-col justify-start flex-1 space-y-4 text-justify"
      >
        <p v-for="(paragraph, idx) in content" :key="idx">
          {{ paragraph }}
        </p>
      </article>
    </section>
  </BaseLayout>
</template>
