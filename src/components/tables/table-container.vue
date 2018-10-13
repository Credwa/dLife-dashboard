<template>
  <q-card class="table-container">
    <div class="table-top">
      <div class="table-title">
        {{activeGraph.name}} V2
      </div>
      <q-btn-dropdown
          color="white"
          :label="activeDropDownLabel"
          class="time-dropdown"
        >
        <q-list link>
          <q-item v-for="range in timeRanges" :key="range.label" v-close-overlay >
            <q-item-main>
              <q-item-tile label>{{range.label}}</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn style="margin-left: 1vw" fab-mini icon="more_vert">
      </q-btn>
    </div>
    <data-table></data-table>
  </q-card>
</template>

<script>
import { mapState } from 'vuex';

import DataTable from './table';

export default {
  props: {},
  components: {
    DataTable
  },
  data() {
    return {
      graphsChoice: false,
      activeDropDownLabel: 'Today',
      selectedTab: '',
      timeRanges: [
        {
          label: 'Today'
        },
        {
          label: 'Yesterday'
        },
        {
          label: 'Monday'
        }
      ]
    };
  },
  computed: {
    ...mapState('app', ['homeGraphs']),
    activeGraph() {
      return Object.values(this.homeGraphs).find(graph => graph.active);
    }
  },
  methods: {},
  created() {
    this.reformatGraph('hourly');
  }
};
</script>

<style lang="scss" scoped>
.table-title {
  font-weight: 600;
  font-size: 20px;
  // display: flex;
  align-self: center;
  margin-right: auto;
  margin-left: 1vw;
}
.table-container {
  margin-top: 2vh;
  width: 85vw;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
}
.table-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-right: 2vw;
}

.time-dropdown {
  width: 15vw !important;
  color: #263238 !important;
  border-radius: 0 !important;
  background: rgba(38, 50, 56, 0.06) !important;
  border-bottom: 2px solid rgba(38, 50, 56, 0.42) !important;
}

.graph-more {
  margin-left: 1vw;
}
</style>
