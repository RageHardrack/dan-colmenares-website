<script setup lang="ts">
import BaseCard from "../../UI-kit/Cards/BaseCard.vue";
import Header from "../../Typography/Header.vue";
import { Properties } from "../../../interfaces";
import Pill from "../../UI-kit/Pills/Pill.vue";

interface Props {
  card: Properties;
}

const { card } = defineProps<Props>();

const { Status, Image_URL, Tags, Fecha_Publicación, Slug, Post } = card;

const postTitle = Post.title[0].text.content;
const etiquetas = Tags.multi_select;

console.log({ card });
</script>

<template>
  <BaseCard>
    <template #header>
      <img
        src="https://www.kindpng.com/picc/m/162-1624185_simpsons-bart-png-transparent-png.png"
        :alt="`${postTitle} cover`"
        class="mb-4"
      />
      <Header as="h2" customClass="text-gold">{{ postTitle }}</Header>
      <p class="text-bone">Publicado el {{ Fecha_Publicación.date.start }}</p>
    </template>

    <template #footer>
      <Pill v-for="{ id, name } in etiquetas" :key="id" customClass="ml-2 mb-2">
        {{ name }}</Pill
      >
    </template>
  </BaseCard>
</template>
