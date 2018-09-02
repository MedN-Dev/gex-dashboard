<template>
  <div class="chart">
    <div class="chart__country">
      <div class="container">
        <canvas ref="canvas" width="600" height="400"></canvas>
        <div v-show="showInt">Framework: {{ getVueInt }}</div>
      </div>
    </div>
    <div class="chart__total">
      <div class="names">
        <div class="name">Vue.js</div>
        <div class="name">React.js</div>
        <div class="name">Angular</div>
      </div>
      <div class="values">
        <div class="value">{{ getVueInt }}</div>
        <div class="value">{{ getReactInt }}</div>
        <div class="value">{{ getAngularInt }}</div>
      </div>
    </div>
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
        labels: ["React.js", "Vue.js", "Angular"],
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
            top: 20,
            bottom: 20
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
        if (item.dev === "React.js") {
          array.push(item.dev);
        }
      });
      return array.length;
    },
    getVueInt() {
      let array = [];
      this.getUsers.forEach(item => {
        if (item.dev === "Vue.js") {
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

<style lang="scss" scoped>
.chart {
  display: flex;
  &__country {
    width: 408px;
    border-right: 1px solid #ebedf8;
    border-top: 1px solid #ebedf8;
  }
  &__total {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 269px;
    border-right: 1px solid #ebedf8;
    border-top: 1px solid #ebedf8;
    .names {
      margin-right: 25px;
      .name {
        margin-bottom: 15px;
        color: #8a96a0;
        font-size: 15px;
      }
    }
    .values {
      .value {
        margin-bottom: 15px;
        font-size: 15px;
        color: #1a173b;
        font-weight: bold;
      }
    }
  }
}
</style>
