<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">

      <li
        class="page-item"
        :class="{ disabled: page === 1 }"
      >
        <a
          href="#"
          class="page-link"
          aria-label="Previous"
          @click.prevent="prevPage">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        class="page-item"
        v-for="item in maxPages"
        :key="item"
        :class="{ active: page === item }">
        <a
          href="#"
          class="page-link"
          @click.prevent="selectPage(item)">
          {{ item }}
        </a>
      </li>

      <li
        class="page-item"
        :class="{ disabled: page === maxPages }"
      >
        <a
          href="#"
          class="page-link"
          aria-label="Next"
          @click.prevent="nextPage">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>

    </ul>
  </nav>
</template>

<script>
  export default {
  name: "MainOverviewContentPagination",
  model: {
    prop: "page"
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    maxPages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    prevPage() {
      const pageNum = this.page - 1;
      if (pageNum > 0) {
        this.selectPage(pageNum);
      }
    },
    nextPage() {
      const pageNum = this.page + 1;
      if (pageNum <= this.maxPages) {
        this.selectPage(pageNum);
      }
    },
    selectPage(page) {
      this.$emit("input", page);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
