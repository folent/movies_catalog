<template>
  <div class="card">
    <div class="card__poster">
      <img :src="cardImage" alt="poster">
    </div>
    <div class="card__content">
      <span>Name: <strong>{{ item.Title }}</strong></span>
      <span>Year: <strong>{{ item.Year }}</strong></span>
      <span>imdbID: <strong>{{ item.imdbID }}</strong></span>
      <span>Type: <strong>{{ item.Type }}</strong></span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import noImage from '@/assets/no-image.png';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const cardImage = computed(() => {
  const { Poster = null } = props.item ?? {};

  if (!Poster || Poster === 'N/A') {
    return noImage;
  }

  return Poster;
 });


</script>

<style scoped>
.card {
  width: 300px;
  height: 520px;
  overflow: hidden;
  box-shadow: 1px 1px 6px 2px #ccc;
  border-radius: 5px;
}

.card__poster img {
  width: 300px;
  height: 400px;
}

.card__content {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 10px;
}
</style>