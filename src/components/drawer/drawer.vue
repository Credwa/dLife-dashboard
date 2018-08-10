<template>
    <!-- Left Side Drawer -->
  <q-layout-drawer @hide="hideDrawer" side="left" :value="isDrawer" class="main-drawer" :width="220">
      <div class="stat-bar">
      </div>
    <q-list no-border link class="main-drawer">
      <q-item to="/" class="logo">
        <q-item-side>
          <q-item-tile>
            <img
              src="~assets/dLife-logo.svg"
              style="width:15vw;max-width:110px;"
            >
          </q-item-tile>
        </q-item-side>
      </q-item>
      <drawer-item v-for="item in menuItems" :key="item.label" :label="item.label"
      :hasChildren="item.hasChildren"
      :children="item.children"
      :route="item.route">
      </drawer-item>
      <q-item class="hide-drawer" @click.native="hideDrawer" >
        <q-item-main label="Hide" />
      </q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import DrawerItem from './drawer-item';

export default {
  components: {
    DrawerItem
  },
  data() {
    return {
      leftDrawerOpen: true,
      menuItems: [
        {
          label: 'Home',
          route: '/',
          hasChildren: false
        },
        {
          label: 'Alerts',
          route: '/alerts',
          hasChildren: false
        },
        {
          label: 'Expert Answers',
          route: '/3',
          hasChildren: true,
          children: [
            {
              label: 'test',
              route: '/6',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/7',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/8',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/9',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            }
          ]
        },
        {
          label: 'Recipes',
          route: '/8',
          hasChildren: true,
          children: [
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            }
          ]
        },
        {
          label: 'Videos',
          route: '/9',
          hasChildren: true,
          children: [
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            }
          ]
        },
        {
          label: 'Resources',
          route: '/10',
          hasChildren: true,
          children: [
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            },
            {
              label: 'test',
              route: '/',
              hasChildren: false
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState('app', ['isDrawer'])
  },
  methods: {
    ...mapMutations('app', ['toggleDrawer']),
    hideDrawer() {
      this.toggleDrawer(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-drawer {
  width: 100%;
  z-index: 2000;
  position: absolute !important;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 5vh;
  background: #fff;
  &:hover {
    background: #fff !important;
  }
}

.hide-drawer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(38, 50, 56, 0.12);
  color: rgba(38, 50, 56, 0.5);
}
</style>
