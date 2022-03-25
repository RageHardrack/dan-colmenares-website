<script setup lang="ts">
import BaseCard from "../../UI-kit/Cards/BaseCard.vue";
import Header from "../../Typography/Header.vue";
import { Properties } from "../../../interfaces";

interface Props {
  card: Properties;
}

const { card } = defineProps<Props>();

console.log({ card });

const { Status, Image_URL, Tags, Fecha_Publicación, Slug, Post } = card;
</script>

<template>
  <BaseCard>
    <template #header>
      <img
        src="https://www.kindpng.com/picc/m/162-1624185_simpsons-bart-png-transparent-png.png"
        alt="Bart Simpson"
        class="mb-4"
      />
      <Header as="h2" customClass="text-gold">{{ Post }}</Header>
      <p>{{ Fecha_Publicación }}</p>
    </template>

    <template #footer>{{ Tags }}</template>
  </BaseCard>
</template>
