<script setup lang="ts">
import MenuButton from "../UI-kit/Buttons/MenuButton.vue";
import { ROUTES_LINKS } from "../../constantes";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import Logo from "./Logo.vue";

const sideNav = ref(false);
const target = ref(null);

onClickOutside(target, () => (sideNav.value = false));

const dropDown = () => (sideNav.value = !sideNav.value);
</script>

<template>
  <header class="flex items-center h-24 bg-primary" ref="target">
    <nav class="container flex items-center justify-between py-2">
      <router-link to="/">
        <Logo />
      </router-link>

      <ul
        class="items-center justify-center hidden space-x-4 font-bold md:flex text-bone"
      >
        <li v-for="{ title, path } in ROUTES_LINKS" :key="title">
          <router-link :to="path">
            {{ title }}
          </router-link>
        </li>
      </ul>

      <MenuButton @pressButton="dropDown" class="flex md:hidden" />
    </nav>
  </header>
</template>
