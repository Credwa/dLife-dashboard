<template>
  <q-card class="chart-container">
    <div class="chart-top">
      <div class="graph-title">
        {{activeGraph.name}}
      </div>
      <q-btn-dropdown
          color="white"
          :label="activeDropDownLabel"
          class="time-dropdown"
        >
        <q-list link>
          <q-item v-for="range in timeRanges" :key="range.label" v-close-overlay >
            <q-item-main>
              <q-item-tile @click='activeDropDownLabel = range.label' label>{{range.label}}</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-tabs v-model="selectedTab" class="time-tabs" color="white" v-if="activeGraph.type !== 'bar' && activeGraph.type !== 'user-bar'">
        <q-tab slot="title" default label="Hourly" name="hourly" @click="reformatGraph('hourly')" />
        <q-tab slot="title" label="Day" name="day"  @click="reformatGraph('day')"/>
        <q-tab slot="title" label="Week" name="week" @click="reformatGraph('week')" />
        <q-tab slot="title" label="Month" name="month" @click="reformatGraph('monthly')" />
      </q-tabs>
      <q-btn fab-mini icon="more_vert" @click="graphsChoice = !graphsChoice">
        <q-popover v-model="graphsChoice" anchor="bottom right" self="top right">
        <q-list link>
          <q-item  v-for="(item, graphKey) in homeGraphs" :key="item.name"  @click.native='graphChange(graphKey)' v-close-overlay>
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
    <div v-if="activeGraph.type === 'line' || activeGraph.type === 'multi-line'" class="chart-title">{{activeGraph.name}}</div>

    <line-chart v-if="activeGraph.type === 'line' || activeGraph.type === 'multi-line'" :chartData="chartData" :options="chartOptions" class="line-graph"></line-chart>

    <table-bar class="bar-graph" style="" :tableData="tableData" :columns="columns" v-if="activeGraph.type === 'bar' || activeGraph.type === 'user-bar'"> </table-bar>
  </q-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import sampleData from '../../assets/table-data.js';
import TableBar from './table-bar';
import LineChart from './line-chart';
import BarChart from './bar-chart';

export default {
  props: {},
  components: {
    LineChart,
    BarChart,
    TableBar
  },
  data() {
    return {
      sampleData,
      tableData: null,
      columns: null,
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
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: 'bottom'
        }
      },
      chartData: null
    };
  },
  computed: {
    ...mapState('app', ['homeGraphs']),
    activeGraph() {
      return Object.values(this.homeGraphs).find(graph => graph.active);
    },
    activeGraphKey() {
      return Object.keys(this.homeGraphs).find(
        key => this.homeGraphs[key].active
      );
    }
  },
  methods: {
    ...mapMutations('app', ['toggleActiveGraph']),
    reformatGraph(time) {
      const newDataSet = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'test',
            backgroundColor: '#38A4DD',
            data: [],
            fill: false,
            borderWidth: 2,
            borderColor: '#38A4DD',
            lineTension: 0.1
          }
        ]
      };
      if (time === 'hourly') {
        this.timeRanges = [
          {
            label: 'Today'
          },
          {
            label: 'Yesterday'
          },
          {
            label: 'Monday'
          }
        ];
      } else if (time === 'day') {
        this.timeRanges = [
          { label: 'Last 7 days' },
          { label: 'Last 14 days' },
          { label: 'Last 21 days' }
        ];
      } else if (time === 'week') {
        this.timeRanges = [
          {
            label: 'Last 7 Weeks'
          },
          {
            label: 'Last 14 weeks'
          },
          {
            label: 'Last 21 weeks'
          }
        ];
      } else if (time === 'monthly') {
        this.timeRanges = [
          {
            label: 'This month'
          },
          {
            label: 'Aug 1,2018 - Aug 31,2018'
          },
          {
            label: 'Jul 1,2018 - Jul 31, 2018'
          }
        ];
      }
      this.activeDropDownLabel = this.timeRanges[0].label;

      const myRand = Math.floor(Math.random() * 100);
      if (this.activeGraph.type === 'multi-line') {
        this.chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 1,
              fontSize: 10,
              usePointStyle: true
            }
          }
        };
        newDataSet.datasets = [
          {
            label: 'All Users',
            backgroundColor: '#80CBC4',
            data: [],
            fill: false,
            borderWidth: 2,
            borderColor: '#80CBC4',
            lineTension: 0.1
          },
          {
            label: 'Active Users',
            backgroundColor: '#38A4DD',
            data: [],
            fill: false,
            borderWidth: 2,
            borderColor: '#38A4DD',
            lineTension: 0.1
          },
          {
            label: 'Engaged Users',
            backgroundColor: '#80DEEA',
            data: [],
            fill: false,
            borderWidth: 2,
            borderColor: '#80DEEA',
            lineTension: 0.1
          },
          {
            label: 'New Users',
            backgroundColor: '#7986CB',
            data: [],
            fill: false,
            borderWidth: 2,
            borderColor: '#7986CB',
            lineTension: 0.1
          }
        ];
        newDataSet.datasets.forEach((set, index) => {
          for (let i = 0; i < myRand; i += 1) {
            newDataSet.datasets[index].data.push(
              Math.floor(Math.random() * 100)
            );
          }
        });
      } else {
        this.chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
            position: 'bottom'
          }
        };
        for (let i = 0; i < myRand; i += 1) {
          newDataSet.datasets[0].data.push(Math.floor(Math.random() * 100));
        }
      }

      this.chartData = newDataSet;
    },
    graphChange(graphKey) {
      this.toggleActiveGraph({
        newKey: graphKey,
        prevKey: this.activeGraphKey
      });
      if (this.activeGraph.type === 'bar' || this.activeGraph.type === 'user-bar') {
        this.tableData = this.sampleData[graphKey].tableData;
        this.columns = this.sampleData[graphKey].columns;
      }
      this.reformatGraph('hourly');
    }
  },
  created() {
    if (this.activeGraph.type === 'bar' || this.activeGraph.type === 'user-bar') {
      this.tableData = this.sampleData[this.activeGraphKey].tableData;
      this.columns = this.sampleData[this.activeGraphKey].columns;
    }
    this.reformatGraph('hourly');
  }
};
</script>

<style lang="scss" scoped>
.line-graph {
  width: 100%;
  max-height: 28vh;
  padding-left: 3vw;
}
.bar-graph {
  width: 100%;
}
.graph-title {
  font-weight: 600;
  font-size: 20px;
  align-self: center;
  margin-right: auto;
  margin-left: 1vw;
}
.chart-container {
  margin-top: 2vh;
  width: 85vw;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
}
.chart-title {
  position: absolute;
  transform: rotate(270deg);
  margin: 0;
  padding-right: 1vw;
  top: 20vh;
}
.chart-top {
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

.q-btn-dropdown.q-btn-inner::before {
  display: none !important;
}

.time-tabs {
  width: 30vw;
  border-radius: 0;
  border-bottom: 1px solid #e5e5e5;
  .active {
    color: #38a4dd !important;
    border-bottom: 2px solid #38a4dd;
  }
  .q-tab {
    background-color: white;
    color: rgba(38, 50, 56, 0.7);
    &:focus,
    &:active {
      color: #38a4dd;
      background-color: white;
      border-bottom: 2px solid #38a4dd;
    }
  }
}
</style>

