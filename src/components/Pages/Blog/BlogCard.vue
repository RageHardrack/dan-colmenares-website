<script setup lang="ts">
import BaseCard from "../../UI-kit/Cards/BaseCard.vue";
import Header from "../../Typography/Header.vue";
import { Properties } from "../../../interfaces";
import Pill from "../../UI-kit/Pills/Pill.vue";

interface Props {
  card: Properties;
}

const { card } = defineProps<Props>();

const { Image_URL, Tags, Fecha_Publicación, Slug, Post } = card;

const postTitle = Post.title[0].text.content;
const etiquetas = Tags.multi_select;
const cover = Image_URL.rich_text[0].plain_text;
</script>

<template>
  <BaseCard :isLink="true">
    <template #header>
      <img :src="cover" :alt="`${postTitle} cover`" class="mb-4" />
      <Header as="h2" customClass="text-gold">{{ postTitle }}</Header>
      <p class="text-bone">Publicado el {{ Fecha_Publicación.date.start }}</p>
    </template>

    <template #footer>
      <Pill v-for="{ id, name } in etiquetas" :key="id" customClass="mr-2 mb-2">
        {{ name }}</Pill
      >
    </template>
  </BaseCard>
</template>
