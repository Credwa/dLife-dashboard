<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'chartOptions'],
  mounted() {
    this.renderChart(this.chartOptions, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'left',
        labels: {
          boxWidth: 0,
        }
      }
    });
  }
};
</script>

<style>
</style>
