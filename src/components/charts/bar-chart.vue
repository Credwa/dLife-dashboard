<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    const barOptions = {
      type: 'horizontalBar',
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 60 // Edit the value according to what you need
              }
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    };
    this.renderChart(this.chartData, { ...barOptions, ...this.options });
  }
};
</script>

<style>
</style>
