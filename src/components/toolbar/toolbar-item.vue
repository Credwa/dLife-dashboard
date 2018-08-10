<template>
  <router-link tag="a" :to="route" class="toolbar-item">
    <span>{{label}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    route: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar-item {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  font-size: 16px;
  letter-spacing: -0.03em;
  text-transform: capitalize;
  padding: 2vh;
  color: #263238;
  text-decoration: none;
  border-left: 1px solid rgba(38, 50, 56, 0.12);
  &:hover {
      border-bottom: 1px solid #38a4dd;
  color: #38a4dd;
  }
  @media screen and (max-width: 600px) {
      padding: .5vh;
      float: none;
    }
}
</style>
