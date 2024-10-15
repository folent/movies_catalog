<template>
  <li class="user-menu__list-item">
    <slot />
  </li>
</template>

<style scoped>
.user-menu__list-item {
  font-size: 14px;
  padding: 6px 10px;
}

.user-menu__list-item:hover {
  background-color: #f1f1f1;
}

.user-menu__list-item.logout {
  color: red;
}
</style>