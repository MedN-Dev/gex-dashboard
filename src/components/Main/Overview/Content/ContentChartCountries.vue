<template>
  <div class="chart">
    <div class="container">
      <canvas ref="canvas" width="1200" height="450"></canvas>
      <div v-show="showLength">Length: {{ getUsers.length }}</div>
    </div>
  </div>
</template>

<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

export default {
  name: "ContentChartCountries",
  extends: Line,
  mixins: [reactiveData],

  data() {
    return {
      showLength: false,
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
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
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
            right: 25,
            top: 30,
            bottom: 10
          }
        }
      }
    };
  },

  mounted() {
    this.getCountiesArr();
    this.renderChart(this.chartData, this.chartOptions);
  },

  updated() {
    this.getCountiesArr();
    this.renderChart(this.chartData, this.chartOptions);
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
.chart {
  width: 557px;
  border-right: 1px solid #ebedf8;
  border-left: 1px solid #ebedf8;
  border-top: 1px solid #ebedf8;
  border-top-left-radius: 4px;
}
</style>
