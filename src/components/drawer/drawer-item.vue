<template>
  <router-link tag="q-item" exact :to="route" @click.native="navigate" :class="routeMatch ? 'drawer-item drawer-item-selected' : 'drawer-item'" :style="hasChildren ? 'padding:0;' : ''">
    <q-item-main v-if="!hasChildren" :label="label"/>

    <q-collapsible @show="showing = true" @hide="showing = false" tag="q-item-main" group="drawer" v-else :label="label">
      <li class="dropdown-item" v-for="(item, index) in children" :key="item.label+index">
      {{item.label}}
      </li>
    </q-collapsible>
  </router-link>
</template>

<script>
export default {
  props: {
    label: String,
    route: String,
    hasChildren: Boolean,
    children: Array
  },
  data() {
    return {
      routeMatch: false,
      showing: false
    };
  },
  watch: {
    $route(to) {
      if (to.path === this.route) {
        this.routeMatch = true;
      } else {
        this.routeMatch = false;
      }
    }
  },
  methods: {
    navigate() {
      // programmatic navigation
      if (!this.hasChildren) {
        this.$router.push(this.route);
      }
    }
  },
  created() {
    // set active class on menu item on page load
    if (this.$route.path === this.route) {
      this.routeMatch = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-item {
  padding: 2vh;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  font-size: 16px;
  letter-spacing: -0.02em;
  background: #fff;
  border-top: 1px solid rgba(38, 50, 56, 0.12);

  &:hover {
    background: #eee;
  }
}
.dropdown-item {
  list-style-type: none;
  display: block;
  left: -10vw;
  margin-top: -1.2em !important;

  &:hover {
    color: #81d4fa;
  }
}

.drawer-item-selected {
  border-left: 3px solid #38a4dd;
  color: #38a4dd;
}

.collapse-item {
  width: 100vw;
}
</style>

