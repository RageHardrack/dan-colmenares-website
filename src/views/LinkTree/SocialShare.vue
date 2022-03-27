<script setup lang="ts">
// ! ESTA PÁGINA DEBERÍA SER ESTÁTICA SSG

import { onMounted, ref } from "vue";
import { LinkService } from "../../services";
import LoadingView from "../../components/Layout/components/LoadingView.vue";
import LinkButton from "../../components/Pages/SocialShare/LinkButton.vue";
import Divider from "../../components/Layout/components/Divider.vue";
import Header from "../../components/Typography/Header.vue";

const links = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    const { data } = await LinkService.getLinks();
    links.value = data;
  } catch (error) {
    console.error(error);
    links.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <LoadingView loadMessage="Cargando" v-if="loading" />

  <section
    class="container flex flex-col items-center justify-center min-h-screen py-8 space-y-4 md:space-y-8"
    v-else
  >
    <header
      class="flex flex-col items-center justify-center w-full space-y-4 md:w-1/2"
    >
      <picture
        class="flex w-48 h-48 overflow-hidden border-4 rounded-full md:w-60 md:h-60 border-gold"
      >
        <img
          src="../../assets/perfil.jpg"
          alt="Daniel Colmenares"
          class="aspect-square"
        />
      </picture>

      <Header as="h1" customClass="text-gold">Daniel Colmenares</Header>
      <Header as="h3" customClass="text-black-coffee">
        Desarrollador Web Junior
      </Header>

      <Divider />
    </header>

    <ul class="flex flex-col items-center justify-center w-full space-y-4">
      <LinkButton
        v-for="{ Link, Name, Orden } in links"
        :key="Orden"
        :enlace="Link"
      >
        {{ Name }}
      </LinkButton>
    </ul>

    <p class="text-center text-black-coffee">
      Para contactarme, enviar un email a <br />
      <a
        href="mailto:dacolmenares93@gmail.com"
        target="_blank"
        class="font-bold text-primary"
      >
        dacolmenares93@gmail.com
      </a>
    </p>
  </section>
</template>
