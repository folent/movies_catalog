<template>
  <button class="pagination-item">
    {{ page }}
  </button>
</template>

<script setup>
defineProps({
  page: {
    type: [Number, String],
    required: true,
    default: 0
  },
});

</script>

<style scoped>
.pagination-item {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #cccccc;
  padding: 6px;
  box-sizing: border-box;
  background-color: #ffffff;
}

.pagination-item:hover:not([disabled]), .pagination-item.selected {
  background-color: #cccccc;
  cursor: pointer;
}
</style>