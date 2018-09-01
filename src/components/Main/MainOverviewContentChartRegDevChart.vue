<template>
  <div class="container">
    <canvas ref="canvas" width="900" height="400"></canvas>
    <div v-show="showInt">Length: {{ getUsers.length }}</div>
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
        labels: ["USA", "Thailand", "Russia", "Czech"],
        datasets: [
          {
            label: "users",
            backgroundColor: "#0077ff",
            borderWidth: 0,
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        labels: { fontColor: "red" },
        scales: {
          yAxes: [
            {
              ticks: { fontColor: "#8a96a0" },
              gridLines: { display: false }
            }
          ],
          xAxes: [
            {
              ticks: { fontColor: "#8a96a0" },
              gridLines: { display: false }
            }
          ]
        },
        legend: { display: false },
        layout: {
          padding: {
            left: 10,
            right: 30,
            top: 40,
            bottom: 0
          }
        }
      },
      showInt: false
    };
  },
  mounted() {
    this.getCountiesArr();
    this.renderChart(this.chartData, this.options);
  },
  beforeUpdate() {
    this.getCountiesArr();
    this.renderChart(this.chartData, this.options);
  },
  computed: {
    getUsers() {
      return this.$store.getters.USERS;
    },
    getRussiaInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.country === "Russia") {
          array.push(item.country);
        }
      });
      return array.length;
    },
    getThailandInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.country === "Thailand") {
          array.push(item.country);
        }
      });
      return array.length;
    },
    getCzechInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.country === "Czech") {
          array.push(item.country);
        }
      });
      return array.length;
    },
    getUsaInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.country === "USA") {
          array.push(item.country);
        }
      });
      return array.length;
    }
  },
  methods: {
    getCountiesArr() {
      let arr = [];
      arr.push(
        this.getUsaInt,
        this.getThailandInt,
        this.getRussiaInt,
        this.getCzechInt
      );
      this.chartData.datasets[0].data = arr;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
