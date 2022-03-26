<script setup lang="ts">
import BaseCard from "../../UI-kit/Cards/BaseCard.vue";
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
  <BaseCard :isLink="true">
    <template #header>
      <img :src="cover" :alt="`${postTitle} cover`" class="aspect-square" />
    </template>

    <template #content>
      <Header as="h2" customClass="text-gold">{{ postTitle }}</Header>
      <p class="text-gray-400">Publicado el {{ fecha }}</p>
      <p class="text-bone">{{ resumen }}</p>
    </template>

    <template #footer>
      <Pill v-for="{ id, name } in etiquetas" :key="id" customClass="mr-2 mb-2">
        {{ name }}</Pill
      >
    </template>
  </BaseCard>
</template>
