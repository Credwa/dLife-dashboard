<template>
  <q-page class="index">
    <chart type="line"> </chart>
  </q-page>
</template>

<style>
</style>

<script>
import Chart from '../components/charts/chart-container';

export default {
  name: 'PageIndex',
  components: {
    Chart
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

