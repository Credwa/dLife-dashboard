<template>
  <q-table
    :data="tableData"
    :columns="columns"
    row-key="name"
    color="secondary"
  >
    <q-td slot="body-cell-live" slot-scope="props" :props="props">
      <div class="live" v-if="props.row.live" @click="gotoChat(props.row)">LIVE</div>
    </q-td>
    <q-td slot="body-cell-pointer" slot-scope="props" :props="props">
      <q-btn @click="gotoChat(props.row)" fab-mini icon="keyboard_arrow_right">
      </q-btn>
    </q-td>
  </q-table>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'UserID',
        required: true,
        label: 'User ID',
        align: 'left',
        field: 'userid',
        sortable: true
      },
      {
        name: 'StartTime',
        label: 'Start Time',
        align: 'left',
        field: 'startTime'
      },
      {
        name: 'live',
        label: '',
        align: 'left',
        field: 'live'
      },
      {
        name: 'SessionType',
        label: 'Session Type',
        align: 'left',
        field: 'sessionType'
      },
      {
        name: 'SpellCheck',
        label: 'Spell Check',
        align: 'left',
        field: 'spellCheck'
      },
      {
        name: 'Duration',
        label: 'Duration',
        align: 'left',
        field: 'duration'
      },
      {
        name: 'messageIn',
        label: 'Message In',
        align: 'left',
        field: 'messagesIn'
      },
      {
        name: 'messagesOut',
        label: 'Messages Out',
        align: 'left',
        field: 'messagesOut'
      },
      {
        name: 'AvgSentiment',
        label: 'Avg. Sentiment',
        align: 'left',
        field: 'avgSentiment'
      },
      {
        name: 'pointer',
        label: '',
        align: 'right',
        field: 'pointer'
      }
    ],
    tableData: [
      {
        userid: '154.253.180.227',
        startTime: '07/10/18 | 00:00:00AM',
        sessionType: 'Direct',
        spellCheck: 'No',
        duration: '30 minutes',
        messagesIn: '1',
        messagesOut: '32',
        avgSentiment: '0',
        live: true
      },
      {
        userid: '154.253.180.227',
        startTime: '07/10/18 | 00:00:00AM',
        sessionType: 'Direct',
        spellCheck: 'No',
        duration: '30 minutes',
        messagesIn: '1',
        messagesOut: '32',
        avgSentiment: '0',
        live: false
      },
      {
        userid: '154.253.180.227',
        startTime: '07/10/18 | 00:00:00AM',
        sessionType: 'Direct',
        spellCheck: 'No',
        duration: '30 minutes',
        messagesIn: '1',
        messagesOut: '32',
        avgSentiment: '0',
        live: false
      },
      {
        userid: '154.253.180.227',
        startTime: '07/10/18 | 00:00:00AM',
        sessionType: 'Direct',
        spellCheck: 'No',
        duration: '30 minutes',
        messagesIn: '1',
        messagesOut: '32',
        avgSentiment: '0',
        live: false
      }
    ]
  }),
  methods: {
    gotoChat(data) {
      this.$emit('gotoChat', data);
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

.live {
  background: #e57373;
  border-radius: 2px;
  width: 40px;
  height: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-size: .9em;
    background: #b75c5c;
  }
}
</style>
