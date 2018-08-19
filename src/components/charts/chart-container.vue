<template>
  <q-card class="chart-container">
    <line-chart :chartData="chartData" :chartOptions="chartOptions" type="line" class="graph"></line-chart>
  </q-card>
</template>

<script>
import LineChart from './line-chart';

export default {
  props: {
    type: {
      required: true,
      type: String
    }
  },
  components: {
    LineChart
  },
  data() {
    return {
      chartOptions: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'test',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40],
            fill: false,
            borderWidth: 2,
            borderColor: '#38A4DD',
            lineTension: 0.1
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.graph {
  width: 100%;
  max-height: 28vh;
}
.chart-container {
  width: 85vw;
  max-height: 30vh;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
}
</style>

