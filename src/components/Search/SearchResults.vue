<template>
  <div v-if="query && totalCount" class="search-result">
    You searched for: {{ query }}, {{ totalCount }} results found
  </div>

  <div v-else-if="errorMessage" class="search-result">
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const totalCount = computed(() => store.state.movies.totalCount);
const query = computed(() => store.state.search.query);
const errorMessage = computed(() => store.state.movies.errorMessage);

</script>

<style scoped>
.search-result {
  font-size: 24px;
  font-weight: bold;
  margin: 35px 0;
}

@media (max-width: 768px) {
  .search-result {
    font-size: 18px;
  }
}
</style>