<template>
  <q-table
    :data="tableData"
    :columns="columns"
    row-key="name"
    color="secondary"
  >
    <q-td slot="body-cell-Enabled" slot-scope="props" :props="props">
      <q-toggle class="toggleBtn" v-model="props.row.isEnabled"></q-toggle>
    </q-td>
    <q-td slot="body-cell-Edit" slot-scope="props" :props="props">
      <q-btn fab-mini icon="create" @click="onEditAlert(props.row)">
      </q-btn>
    </q-td>
    <q-td slot="body-cell-Logs" slot-scope="props" :props="props">
      <q-btn  fab-mini icon="keyboard_arrow_right">
      </q-btn>
    </q-td>
  </q-table>
</template>

<script>

export default {
  data: () => ({
    columns: [
      {
        name: 'Enabled',
        required: true,
        label: 'Enabled',
        align: 'left',
        field: 'enabled',
        sortable: true
      },
      {
        name: 'Name',
        label: 'name',
        align: 'left',
        field: 'name'
      },
      {
        name: 'Direction',
        label: 'Direction',
        align: 'left',
        field: 'direction'
      },
      {
        name: 'Value',
        label: 'Value',
        align: 'left',
        field: 'value'
      },
      {
        name: 'Action',
        label: 'Action',
        align: 'left',
        field: 'action'
      },
      {
        name: 'Target',
        label: 'Target',
        align: 'left',
        field: 'target'
      },
      {
        name: 'Edit',
        label: 'Edit',
        align: 'left',
        field: 'edit'
      },
      {
        name: 'Logs',
        label: 'Logs',
        align: 'left',
        field: 'logs'
      }
    ],
    tableData: [
      {
        id: 0,
        isEnabled: true,
        name: 'Help me!',
        direction: 'Incoming',
        type: 'Text',
        value: 'Help',
        action: 'Email',
        target: 'dlife.chatbot@dlife.com',
        edit: '',
        logs: ''
      },
      {
        id: 1,
        isEnabled: false,
        name: 'Help me!',
        direction: 'Incoming',
        type: 'Text',
        value: 'Help',
        action: 'Email',
        target: 'dlife.chatbot@dlife.com',
        edit: '',
        logs: ''
      },
      {
        id: 2,
        isEnabled: false,
        name: 'Help me!',
        direction: 'Incoming',
        type: 'Text',
        value: 'Help',
        action: 'Email',
        target: 'dlife.chatbot@dlife.com',
        edit: '',
        logs: ''
      }
    ]
  }),
  methods: {
    onEditAlert(data) {
      this.$emit('editAlert', data);
    },
    addAlert(data) {
      const newAlert = {
        ...data,
        id: this.tableData.length,
        edit: '',
        logs: '',
        isEnabled: true,
        target: data.destination,
      };
      this.tableData.push(newAlert);
    },
    editAlert(data) {
      const index = this.tableData.findIndex(val => val.id === data.id);
      this.tableData[index] = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.iconBtn {
  font-size: 1.4em;
  border-radius: 50px;
  &:hover {
    background-color: rgba(224, 224, 224, 0.7);
  }
  &:active {
    font-size: 1.3em;
    background-color: rgba(224, 224, 224, 1);
  }
}

</style>
