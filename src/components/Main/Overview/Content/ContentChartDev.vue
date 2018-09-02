<template>
  <div class="container">
    <canvas ref="canvas" width="600" height="400"></canvas>
    <div v-show="showInt">Length: {{ getUsers.length }}</div>
  </div>
</template>

<script>
import { Pie, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

export default {
  name: "MainOverviewContentChartRegDevChart",
  extends: Pie,
  mixins: [reactiveData],
  data() {
    return {
      chartData: {
        labels: ["React", "Vue", "Angular"],
        datasets: [
          {
            label: "users",
            backgroundColor: ["#0077ff", "#0db07a", "#f0166d"],
            borderWidth: 5,
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: { display: false },
          xAxes: { display: false }
        },
        legend: { display: false },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10
          }
        }
      },
      showInt: false
    };
  },
  mounted() {
    this.getDevArr();
    this.renderChart(this.chartData, this.options);
  },
  updated() {
    this.getDevArr();
    this.renderChart(this.chartData, this.options);
  },
  computed: {
    getUsers() {
      return this.$store.getters.USERS;
    },
    getReactInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.dev === "React") {
          array.push(item.dev);
        }
      });
      return array.length;
    },
    getVueInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.dev === "Vue") {
          array.push(item.dev);
        }
      });
      return array.length;
    },
    getAngularInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.dev === "Angular") {
          array.push(item.dev);
        }
      });
      return array.length;
    }
  },
  methods: {
    getDevArr() {
      let arr = [];
      arr.push(this.getReactInt, this.getVueInt, this.getAngularInt);
      this.chartData.datasets[0].data = arr;
    }
  }
};
</script>
