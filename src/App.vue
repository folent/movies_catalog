<template>
  <HeaderPage />

  <CatalogView />

  <Loader />
</template>

<script setup>
import HeaderPage from "./components/Header.vue";
import CatalogView from "./views/CatalogView.vue";
import Loader from "./components/Loader.vue";
</script>
