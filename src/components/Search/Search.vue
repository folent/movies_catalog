<template>
  <div class="search">
    <input class="search__input" placeholder="Поиск" @input="onInput" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const timer = ref(null);

const searchTimeOut = (params) => {
  if (timer.value) {
    clearTimeout(timer.value);

    timer.value = null;
  }

  timer.value = setTimeout(() => {
    store.commit('search/setQuery', params.query);
    store.dispatch('movies/getMovies', params);
  }, 1000);
};

const onInput = event => {
    searchTimeOut({ query: event.target.value });
}
</script>

<style scoped>

.search {
  width: 50%;
}

.search__input {
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  font-family: Roboto, sans-serif;
}
</style>