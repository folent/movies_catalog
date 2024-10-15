<template>
  <div class="pagination">
    <PaginationItem
        page="<"
        :disabled="currentPage === 1"
        @click="prevPage"
    />

    <PaginationItem
        v-for="page in visiblePages"
        :key="page"
        :current-page="currentPage"
        :page="page"
        :class="{ selected: currentPage === page }"
        @click="goToPage(page)"
    >
      {{ page }}
    </PaginationItem>

    <PaginationItem
        page=">"
       :disabled="currentPage === totalPages"
       @click="nextPage"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import PaginationItem from "@/components/Pagination/PaginationItem.vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1
  },
  totalCount: {
    type: Number,
    required: true,
    default: 0
  },
  take: {
    type: Number,
    default: 10
  },
});

const emit = defineEmits(["change-page"]);

const totalPages = computed(() => Math.ceil(props.totalCount / props.take));

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(props.currentPage - 5, 1);
  const end = Math.min(props.currentPage + 5, totalPages.value);

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages;
});

const goToPage = page => {
  if (props.currentPage !== page) {
    emit("change-page", page);
  }
}

const nextPage = () => {
  if (props.currentPage < totalPages.value) {
    emit("change-page", props.currentPage + 1);
  }
};

const prevPage = () => {
  if (props.currentPage > 1) {
    emit("change-page", props.currentPage - 1);
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
</style>