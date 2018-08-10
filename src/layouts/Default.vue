<template>
  <q-layout view="lHh Lpr lFf" >
    <q-layout-header >
      <div class="stat-bar">
        <span>{{userEmail}}</span>
        <span>{{phoneNumber}}</span>
      </div>
      <toolbar></toolbar>
    </q-layout-header>

    <drawer></drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from '../components/drawer/drawer';
import Toolbar from '../components/toolbar/toolbar';

export default {
  name: 'MyLayout',
  components: {
    Drawer,
    Toolbar
  },
  data() {
    return {
      userEmail: 'vgolife@dlife.com',
      phoneNumber: '1-866-881-1209'
    };
  }
};
</script>

<style scoped lang="scss">
.stat-bar {
  position: fixed;
  width: 100vw;
  height: 3vh;
  padding-right: 2vw;
  left: 0px;
  top: 0px;
  background: #32383d;
  display: flex;
  color: white;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-right: 1vw;
    &:hover {
      color: #81d4fa;
      cursor: pointer;
    }
  }
}

.main-toolbar {
  position: relative;
  z-index: -1;
  background: #ffffff;
  float: right;
  overflow: hidden;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
}
</style>
