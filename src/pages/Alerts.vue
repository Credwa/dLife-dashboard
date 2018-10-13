<template>
  <q-page class="flex alerts">
    <q-card class='alertPageCard'>
        <div class="table-top" :style="activeTranscript ? 'padding-bottom: 2vh;border-bottom: 1px solid #E5E5E5' : ''">
          <div class="table-title">
            {{showAddEditAlert ? 'Add Alert' : showChat ? 'User: '+activeTranscript.userid : activeAlertTable.name}}
            <span class="live" v-if="activeTranscript && activeTranscript.live">LIVE</span>
          </div>
          <q-btn
            color="white"
            text-color="blue"
            :label="'Create an alert'"
            v-if="!showAddEditAlert && activeAlertTable.name === 'Alerts' && !showChat"
            @click="showAddEditAlert = !showAddEditAlert"
          />
          <q-btn
            color="white"
            text-color="blue"
            :label="'Submit'"
            v-if="showAddEditAlert && !showChat"
            @click="onSubmit"
          />
          <q-btn
            color="white"
            text-color="grey"
            :label="'Cancel'"
            v-if="showAddEditAlert && !showChat"
            @click="showAddEditAlert = !showAddEditAlert"
          />
          <q-btn
            color="white"
            text-color="blue"
            :label="'Back to Session Transcripts'"
            v-if="showChat"
            @click="showChat = false; activeTranscript = null"
          />
          <q-btn v-if="!showAddEditAlert && !showChat" style="margin-left: 1vw" fab-mini icon="filter_list">
          </q-btn>
          <q-btn v-if="!showAddEditAlert && !showChat" fab-mini icon="more_vert" style="margin-left: 1vw" @click="tablesChoice = !tablesChoice">
            <q-popover v-model="tablesChoice" anchor="bottom right" self="top right">
            <q-list link>
              <q-item  v-for="(item, tableKey) in alertPageData" :key="item.name"  @click.native='tableChange(tableKey)' v-close-overlay>
                <q-item-main >
                  <q-item-tile label>
                    {{item.name}}
                  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
            </q-popover>
          </q-btn>
        </div>
      <alert-table v-if="activeAlertTable.name === 'Alerts'" v-show="!showAddEditAlert" @editAlert="editAlert" ref="aTable"></alert-table>

      <create-alert v-if="showAddEditAlert" :alert="alertData"></create-alert>

      <session-transcripts @gotoChat="onShowChat" v-if="activeAlertTable.name === 'Session Transcripts' && !showChat"></session-transcripts>

      <chat :live="activeTranscript.live" style="max-height: 75vh" v-if="showChat"></chat>
    </q-card>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import CreateAlert from '../components/misc/addEditAlert';
import AlertTable from '../components/tables/alerts-table';
import SessionTranscripts from '../components/tables/alertSessionTranscript';
import Chat from '../components/misc/chat';

export default {
  components: {
    AlertTable,
    CreateAlert,
    SessionTranscripts,
    Chat
  },
  data: () => ({
    showChat: false,
    activeTranscript: null,
    tablesChoice: false,
    showAddEditAlert: false,
    edit: false,
    alertData: {
      name: '',
      type: '',
      action: '',
      direction: '',
      value: '',
      destination: ''
    }
  }),
  computed: {
    ...mapState('app', ['alertPageData']),
    activeAlertTable() {
      return Object.values(this.alertPageData).find(graph => graph.active);
    },
    activeTableKey() {
      return Object.keys(this.alertPageData).find(
        key => this.alertPageData[key].active
      );
    }
  },
  methods: {
    ...mapMutations('app', ['toggleActiveAlertTable']),
    onShowChat(data) {
      this.showChat = true;
      this.activeTranscript = data;
    },
    editAlert(data) {
      this.edit = true;
      this.showAddEditAlert = true;
      this.alertData = data;
      this.alertData.destination = data.target;
    },
    onSubmit() {
      this.showAddEditAlert = false;
      if (this.edit) {
        this.$refs.aTable.editAlert(this.alertData);
      } else {
        this.$refs.aTable.addAlert(this.alertData);
      }
      this.edit = false;
    },
    tableChange(tableKey) {
      this.toggleActiveAlertTable({
        newKey: tableKey,
        prevKey: this.activeTableKey
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.alerts {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 4vh;
}
.live {
  background: #e57373;
  border-radius: 2px;
  margin-left: 1vw;
  padding:5px;
  width: 40px;
  height: 16px;
  color: white;
  font-size: .6em;
  cursor:default;
}
.alertPageCard {
  width: 85vw;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
}
.table-title {
  font-weight: 600;
  font-size: 2em;
  // display: flex;
  align-self: center;
  margin-right: auto;
  margin-left: 1vw;
}
.table-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-right: 2vw;
}
</style>

