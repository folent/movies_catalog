<template>
  <div class="catalog">
    <SearchParams />

    <div class="catalog__wrapper">
      <template v-for="item in movies" :key="item.imdbID">
        <Card :item="item" />
      </template>
    </div>

    <Pagination
        v-if="totalCount"
        :current-page="currentPage"
        :total-count="totalCount"
        @change-page="changePage"
    />
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import SearchParams from "../components/Search/SearchResults.vue";
import Card from "../components/Card.vue";
import Pagination from "../components/Pagination/Pagination.vue";

const store = useStore();

const movies = computed(() => store.state.movies.movies);
const currentPage = computed(() => store.state.pagination.currentPage);
const totalCount = computed(() => store.state.movies.totalCount);

const changePage = async page => {
  store.commit("pagination/setCurrentPage", page);

  await store.dispatch('movies/getMovies')
}

onBeforeMount(async() => {
  await store.dispatch('movies/getMovies');
})

</script>

<style scoped>
.catalog {
  padding: 0 20px;
}

.catalog__wrapper {
  gap: 13px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: auto;
  justify-content: center;
}
</style>