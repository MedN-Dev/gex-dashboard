<template>
  <div class="chart">
    <MainOverviewContentChartRegDevChart :chart-data="chartData"/>
    <button @click="fillData">Randomize</button>
    <div>VALUEEEEE---{{ getUsa }}</div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewContentChartRegDev",
  components: {
    MainOverviewContentChartRegDevChart: () =>
      import("./MainOverviewContentChartRegDevChart.vue")
  },
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData();
  },
computed: {
  getUsers() {
    return this.$store.getters.USERS;
  },
  getUsa() {
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
    fillData() {
      this.chartData = {
        labels: ["Czech", "Thailand", "Russia", "USA"],
        datasets: [
          {
            label: "Countries",
            backgroundColor: "#f87979",
            data: [7, 3, 6, this.getUsa]
          }
        ]
      };
    },

  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 549px;
  border-right: 1px solid #ebedf8;
  border-left: 1px solid #ebedf8;
  border-top: 1px solid #ebedf8;
}
</style>
