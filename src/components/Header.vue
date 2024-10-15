<template>
  <header class="header">
    <a href="/" class="header__link">
      Movie Catalog
    </a>

    <Search />

    <UserMenu />
  </header>
</template>
<script setup>

import Search from "./Search/Search.vue";
import UserMenu from "@/components/UserMenu/UserMenu.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #cccccc;
  position: sticky;
  top: 0;
  background: #ffffff;
}

.header__link {
  color: #000000;
  font: normal bold 26px/24px "Roboto", sans-serif;
  text-decoration: none;
}

@media (max-width: 768px) {
  .header__link {
    font-size: 20px;
  }
}
</style>