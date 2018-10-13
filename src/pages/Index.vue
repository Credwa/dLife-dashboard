<template>
  <q-page class="index">
    <chart> </chart>
    <chart-table v-if="activeGraph.type === 'bar'"> </chart-table>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex';

import Chart from '../components/charts/chart-container';
import ChartTable from '../components/tables/table-container';

export default {
  name: 'PageIndex',
  components: {
    Chart,
    ChartTable
  },
  computed: {
    ...mapState('app', ['homeGraphs']),
    activeGraph() {
      return Object.values(this.homeGraphs).find(graph => graph.active);
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 4vh;
}
</style>

