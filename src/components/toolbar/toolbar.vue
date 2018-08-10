<template>
  <q-toolbar
    style="top: 3vh;"
    color="primary"
    :inverted="$q.theme === 'ios'"
    class="main-toolbar"
  >
    <q-btn
      v-if="!isDrawer"
      flat round dense
      icon="menu"
      @click="showDrawer"
      style="margin-right:2vh"
    />
    <toolbar-item v-for="(item, index) in menuItems" :key="item.route"
    :label="item.label"
    :route="item.route"
    :style="index === 0 ? 'border-left: none': ''">
    </toolbar-item>
    <div class="user gt-xs">
      <q-item>
        <q-item-side avatar="statics/lady.svg" />
        <div style="display:flex; flex-direction:column; margin-left: 15px;">
          <q-item-main style="color: #263238" label="Welcome back!"/>
          <div class="user-dashboard-options">
            <div @click="editProfile" style="margin-left: 0 !important" to="/edit_user">Edit Profile</div>
            <span>|</span>
            <div @click="logout">Logout</div>
          </div>
        </div>
      </q-item>
    </div>
  </q-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import ToolbarItem from './toolbar-item';

export default {
  components: { ToolbarItem },
  data() {
    return {
      menuItems: [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'FAQS',
          route: '/faqs'
        },
        {
          label: 'Resources',
          route: '/resources'
        },
        {
          label: 'Help',
          route: '/help'
        },
        {
          label: 'Contact Us',
          route: '/contact'
        }
      ]
    };
  },
  computed: {
    ...mapState('app', ['isDrawer'])
  },
  methods: {
    ...mapMutations('app', ['toggleDrawer']),
    showDrawer() {
      this.toggleDrawer(true);
    },
    logout() {
      console.log('Logging out');
    },
    editProfile() {
      console.log('Edit Profile');
    }
  }
};
</script>

<style lang="scss" scoped>
.main-toolbar {
  display: flex;
  align-content: space-between;
  align-items: space-between;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
}

.user {
  margin-left: auto;
  display: flex;
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
}

.user-dashboard-options {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;

  span {
    color: rgba(38, 50, 56, 0.62);
  }
  div {
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    color: #38a4dd;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: #01579b;
    }
  }
}
</style>

