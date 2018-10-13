<template>
    <q-table
    :data="tableData"
    :columns="columns"
    row-key="name"
    color="secondary"
  >
    <q-td style="display:flex; flex-direction:row; align-items: center;
    justify-content:flex-start;" slot="body-cell-count" slot-scope="props" :props="props">
      <div>{{props.row.item}}</div>
      <div class="bar" :style="`${calculatePercentage(props.row.item)}vw`"></div>
    </q-td>
  </q-table>
</template>

<script>
export default {
  props: {
    tableData: {
      required: true,
      type: Array
    },
    columns: {
      required: true,
      type: Array
    }
  },
  computed: {
    largestVal() {
      let largest = 0;
      this.tableData.forEach((val) => {
        if (val.item === 'undefined') {
          console.log(val.item);
          if (val.item > largest) {
            largest = val.count;
          }
        }
      });
      console.log(largest);
      return largest;
    }
  },
  methods: {
    calculatePercentage(count) {
      // console.log(this.largestVal);
      // console.log(Math.round(((count / this.largestVal) * 10) * 10) / 10);
      return Math.round((count / this.largestVal) * 10 * 10) / 10;
    }
  }
};
</script>

<style lang="scss" scoped>
.bar {
  margin-left: 0.5vw;
  margin-top: 0.2vh;
  background: #38a4dd;
  width: 1vw;
  height: 1.5vh;
}
</style>
