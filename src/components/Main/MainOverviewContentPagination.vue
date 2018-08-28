<template>
  <ul class="pagination">
    <li
      class="page-item"
      :class="{ disabled: page === 1 }"
      >
      <a
        href="#"
        class="page-link"
        @click.prevent="prevPage">
        <span>&laquo;</span>
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
        @click.prevent="nextPage">
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
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
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #0077ff;
  background-color: #fff;
  border: 1px solid #ebedf8;
  text-decoration: none;
}
.page-link:hover {
  z-index: 1;
  color: #0077ff;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #ebedf8;
}
.page-link:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.page-item.active .page-link {
  z-index: 1;
  color: white;
  background-color: #0077ff;
  border-color: #0077ff;
}
.page-item.disabled .page-link {
  color: #8a96a0;
  pointer-events: none;
  cursor: auto;
  background-color: white;
  border-color: #ebedf8;
}
</style>
