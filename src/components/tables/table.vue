<template>
    <q-table
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'Duration (Sec.)',
        required: true,
        label: 'Duration (Sec.)',
        align: 'left',
        field: 'duration',
        sortable: true,
        classes: 'my-class',
        style: 'color: red'
      },
      {
        name: 'Total Sessions',
        label: 'Total Sessions',
        align: 'left',
        field: 'sessions',
        classes: 'my-class'
      },
      {
        name: '00:00 - 6:00',
        label: '00:00 - 6:00',
        align: 'left',
        field: 'first',
        classes: 'my-class'
      },
      {
        name: '6:01 -12:00',
        label: '6:01 -12:00',
        align: 'left',
        field: 'second',
        classes: 'my-class'
      },
      {
        name: '12:01 -18:00',
        label: '12:01 -18:00',
        align: 'left',
        field: 'third',
        classes: 'my-class'
      },
      {
        name: '18:01 -24:00',
        label: '18:01 -24:00',
        align: 'left',
        field: 'fourth',
        classes: 'my-class'
      }
    ],
    tableData: [
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
      {
        duration: '0-10 seconds',
        sessions: '100,000,00',
        first: '90,000,000',
        second: '5,000,000',
        third: '5,000,000',
        fourth: '0',
      },
    ]
  })
};
</script>

<style lang="scss" scoped>
.my-class {
  color: red;
}
</style>

