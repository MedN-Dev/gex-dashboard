<template>
  <div class="container">
    <canvas ref="canvas" width="900" height="400"></canvas>
    <div>Russia: {{ getRussia }}</div>
  </div>
</template>

<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

export default {
  name: "MainOverviewContentChartRegDevChart",
  extends: Line,
  mixins: [reactiveData],
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Countries",
            backgroundColor: "#f87979",
            data: []
          }
        ]
      }
    };
  },

  mounted() {
    this.xyu();
    this.renderChart(this.chartData);
  },

  beforeUpdate() {
    this.xyu();
    this.renderChart(this.chartData);
  },

  computed: {
    getUsers() {
      return this.$store.getters.USERS;
    },
    getRussia() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.country === "Russia") {
          array.push(item.country);
        }
      });
      return array.length;
    }
  },

  methods: {

    xyu() {
      let arr = [];
      arr.push(this.$store.getters.USERS.length);
      this.chartData.datasets[0].data = arr;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
