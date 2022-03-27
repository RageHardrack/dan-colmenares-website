<script setup lang="ts">
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
import SideNav from "./components/Layout/SideNav.vue";
import { provide, ref } from "vue";

const sideNav = ref<boolean>(false);

const toggleSideNav = (): boolean => (sideNav.value = !sideNav.value);

provide("sideNav", sideNav);
provide("toggleSideNav", toggleSideNav);
</script>

<template>
  <section class="flex flex-col justify-between min-h-screen">
    <Navbar />

    <transition name="left">
      <SideNav v-if="sideNav" />
    </transition>

    <main class="container flex-1 py-8">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </section>
</template>
