<script setup lang="ts">
import WideCard from "../../UI-kit/Cards/WideCard.vue";
import Header from "../../Typography/Header.vue";
import { Properties } from "../../../interfaces";
import Pill from "../../UI-kit/Pills/Pill.vue";
import { DateTime } from "luxon";

interface Props {
  post: Properties;
}

const { post } = defineProps<Props>();

const { Image_URL, Tags, Fecha_Publicacion, Slug, Post, Brief } = post;

const postTitle = Post.title[0].text.content;
const etiquetas = Tags.multi_select;
const cover = Image_URL.rich_text[0].plain_text;
const resumen = Brief.rich_text[0].plain_text;
const slug = Slug.rich_text[0].plain_text;
const fecha = DateTime.fromISO(Fecha_Publicacion.date.start.toString())
  .setLocale("es")
  .toFormat("dd LLLL yyyy");
</script>

<template>
  <WideCard :isLink="true">
    <template #aside>
      <img
        :src="cover"
        :alt="`${postTitle} cover`"
        class="object-cover w-full rounded-lg aspect-square"
      />
    </template>

    <template #header>
      <Pill v-for="{ id, name } in etiquetas" :key="id" customClass="mr-2 mb-2">
        {{ name }}</Pill
      >
    </template>

    <template #content>
      <Header as="h2" customClass="text-gold">{{ postTitle }}</Header>
      <p class="text-black-coffee">{{ resumen }}</p>
    </template>

    <template #footer>
      <p class="text-black-coffee">Publicado el {{ fecha }}</p>
    </template>
  </WideCard>
</template>
