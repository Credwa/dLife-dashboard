<template>
<div>
  <q-page class="items-center column justify-start search-page">
    <div class="chatbox">
      <q-scroll-area ref="chatArea" :thumb-style="{right: '4px',borderRadius: '5px',background:'none',width: '0px',opacity: 1}" style="" class="messaging items-center column justify-start" :delay="1500">
        <div style="width: 100%; padding: 0px;" class="allMessages" ref="allMessages">
          <message v-for="(message, index) in messages" :key="message.stamp+message.text+index" :myMessage="message"></message>
        </div>

      </q-scroll-area>
    </div>
  <div class="search-footer" v-if="live">
      <q-input aria-label="Say or type your search..." ref="message" @click="scrollIntoView" @keyup.enter.native="sendMessage" v-model="userMessage" color="blue 4" class="send-message shadow-1" :placeholder="userMessagePlaceholder"/>
      <div style="margin-top:5vh;">
        <q-btn @click="sendMessage" color="blue-5" class="shadow-2" style="margin-left: 1vw">Send</q-btn>
        <q-btn color="grey-4" text-color="black" class="shadow-2" style="margin-left: 1vw">Switch to bot</q-btn>
      </div>
  </div>
  <div class="search-footer-alpha" v-if="!live">
    <q-btn-dropdown size="lg" label="Exports" color="blue-5" class="shadow-2">
      <!-- dropdown content -->
      <q-list link>
        <q-item>
          <q-item-main>
            <q-item-tile label>Sample data</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>

  </div>

  </q-page>
</div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
import { scroll } from 'quasar';

const { getScrollTarget } = scroll;
import message from './message.vue';

export default {
  name: 'PageSearch',
  components: { message },
  props: {
    live: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      result: false,
      userMessagePlaceholder: 'Type response...',
      userMessage: '',
      searching: false,
      messages: [],
      moment
    };
  },
  methods: {
    scrollIntoView() {
      this.$refs.message.$el.scrollIntoView({ behavior: 'smooth' });
    },
    sendMessage() {
      if (this.userMessage.length > 0) {
        // sent message bot info setup
        const newMessage = {
          text: [this.userMessage],
          stamp: moment(),
          sent: true
        };
        this.userMessage = '';
        this.messages.push(newMessage);
      }
    }
  },
  created() {
    this.messages.push({
      text: ['I need help!'],
      stamp: moment(),
      sent: false
    });
  }
};
</script>

<style scoped lang="scss">

.messaging {
  overflow-y: scroll;
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
  padding-right: 15px;
  width: 100vw;
  height: 60vh;
  margin-top: 0vh;
  @media screen and (min-width: 575px) {
    width: 90vw;
    left: 20px;
  }
  @media screen and (min-width: 767px) {
    width: 80vw !important;
    left: 80px;
  }
  @media screen and (min-width: 991px) {
    width: 80vw !important;
    left: 10px;
  }
  @media screen and (min-width: 1199px) {
    width: 80vw !important;
  }
  &::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  /* optional: show position indicator in red */
  &::-webkit-scrollbar-thumb {
    background: none;
  }
}
.search-footer {
  border-top: 1px solid #E5E5E5;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 3vh;
  justify-content: center;
  align-items: center;
}
.search-footer-alpha {
  border-top: 1px solid #E5E5E5;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 3vh;
  padding-top: 3vh;
  padding-left: 4vw;
}
.separator {
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.08);
}
.send-message {
  width: 95vw;
  height: 35px;
  margin-top: 5vh;
  border-radius: 2px;
  padding: 0vw 2vw 0vw 2vw;
  background-color: rgba(38, 50, 56, 0.03);
  @media screen and (min-width: 586px) {
    width: 500px;
  }
}
.q-if-inner {
  color: red;
  margin-top: 40px;
}
body {
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  background-color: #fff;
}
.first-load {
  animation: types 4s steps(60, end);
  width: 30em;
  overflow-wrap: wrap;
  overflow: hidden;
  white-space: nowrap;
}
@-webkit-keyframes fadeIn {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
}
@-webkit-keyframes pulseWave {
  25% {
    box-shadow: 0 0 0 0 rgba(26, 26, 26, 0.5);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(26, 26, 26, 0);
  }
}
@keyframes pulseWave {
  25% {
    box-shadow: 0 0 0 0 rgba(26, 26, 26, 0.5);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(26, 26, 26, 0);
  }
}
</style>
