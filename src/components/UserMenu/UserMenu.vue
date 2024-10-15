<template>
  <div class="user-menu">
    <div class="user-menu__header" @click="toggleMenu">
      <img :src="userIcon" class="user-menu__icon" alt="user icon">

      <span class="user-menu-name">{{ userName }}</span>

      <img :src="arrowDownIcon" class="user-menu__arrow" alt="arrow icon">
    </div>

    <ul v-if="showMenu" class="user-menu__list">
      <UserMenuItem v-for="option in menuOptions"
          :class="option.class"
          @click="option.action"
      >
        {{ option.text }}
      </UserMenuItem>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import userIcon from "@/assets/user.png";
import arrowDownIcon from "@/assets/arrowDown.png";
import UserMenuItem from "@/components/UserMenu/UserMenuItem.vue";

const store = useStore();

const showMenu = ref(false);

const menuOptions = computed(() => [
  {
    text: 'Профиль',
    action: toggleMenu.bind(this),
  },
  {
    text: 'Выход',
    class: 'logout',
    action: toggleMenu.bind(this),
  },
]);
const userName = computed(() => store.getters['user/userName']);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
}
</script>

<style scoped>
.user-menu {
  cursor: pointer;
  position: relative;
  padding: 10px 0;
  margin-left: 8px;
}

.user-menu__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu__icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.user-menu__arrow {
  width: 16px;
  height: 16px;
  margin-left: 8px;
}

.user-menu__list {
  position: absolute;
  top: 100%;
  right: 1%;
  background: #ffffff;
  box-shadow: 0 0 2px 0 #ccc;
  list-style: none;
}

@media (max-width: 768px) {
  .user-menu-name {
    display: none;
  }
}
</style>