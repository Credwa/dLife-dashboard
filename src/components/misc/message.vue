<template>
  <transition appear>
    <q-chat-message
    v-if="!myMessage.type"
          :text="myMessage.text"
          :stamp="moment(myMessage.stamp).format('MM/DD hh:mm A') + ' | ' + 'Alison'"
          :sent="myMessage.sent"
          :class="myMessage.sent ? 'self-end ' + 'sent message' : 'self-start ' + 'received message'"
          :bg-color="myMessage.sent ? 'blue-5' : 'grey-1'"
          size=12
          :text-color="myMessage.sent ? 'white' : 'black'"
    />
  </transition>
</template>

<script>
import moment from 'moment';

export default {
  // name: 'ComponentName',
  props: ['myMessage'],
  data() {
    return { moment };
  },
};
</script>

<style scoped lang="scss">

.received {
  background: #fafafa;
  font-size: 1.6em;
  // margin-left: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 0px 2px rgba(0, 0, 0, 0.14);
  width: 60vw !important;
  margin-left: 30px !important;
  @media screen and (min-width: 575px) {
    width: 50vw !important;
  }
  @media screen and (min-width: 767px) {
    width: 30vw !important;
  }
  @media screen and (min-width: 991px) {
    width: 25vw !important;
  }
  @media screen and (min-width: 1199px) {
    width: 300px !important;
  }
}
.sent {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 0px 2px rgba(0, 0, 0, 0.14);
  background: #fafafa;
  position: relative;
  left: 100px;
  font-size: 1.6em;
  // margin-left: 500px;
  @media screen and (min-width: 575px) {
    width: 50vw !important;
    left: 45vw;
  }
  @media screen and (min-width: 767px) {
    width: 30vw !important;
  }
  @media screen and (min-width: 991px) {
    width: 25vw !important;
  }
  @media screen and (min-width: 1199px) {
    width: 300px !important;
    left: 55vw;
  }
}
.message {
  // margin-left: 15px;
  // margin-right: 5px;
  margin-top: 30px;
  .sent {
  }
  .received {
  }
}
</style>
