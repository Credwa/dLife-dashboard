<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 50;
  line-height: 20px;
  font-size: 14px;
}

.centerIt {
  margin: auto
}

.q-message-received .q-message-text:last-child:before {
  border: 12.5px solid transparent;
  border-top: 12.5px solid currentColor;
  border-bottom: 0;
  height: 0;
  width: 0;
  border-top-width: 25px;
  content: "";
  display: block;
  position: absolute;
  left: -0.5rem;
  top: -20px;
  -webkit-transform: rotate(270deg) skew(-25deg) translateY(16.6666666667px) !important;
  transform: rotate(270deg) skew(-25deg) translateY(16.6666666667px) !important;
}
.self-start {
  transform: translateX(-1em) scale(0);
  transform-origin: top left;
  animation: load-bubble 1s;
  animation-fill-mode: forwards;
}
.self-start .q-message-text-content {
  max-height: 0;
  opacity: 0;
  animation: load-text 1s;
  animation-delay: 0;
  animation-fill-mode: forwards;
  max-height: 0;
  max-width: 0;
  overflow: hidden;
  display: block;
}
.q-message-text-content {
  padding: 8px !important;
}
@keyframes load-text {
  10% {
    max-height: 0;
    max-width: 0;
  }
  50% {
    opacity: 0;
    max-height: 0;
    max-width: 600px;
  }
  90% {
    max-height: 500px;
    max-width: 600px;
  }
  100% {
    opacity: 1;
    max-height: 500px;
    max-width: 600px;
  }
}
@keyframes load-bubble {
  100% {
    transform: translateX(0) scale(1);
    max-height: 500px;
  }
}
@media screen and (min-width: 1235px) {
  .q-message-sent .q-message-text:last-child:before {
    border: 12.5px solid transparent;
    border-top: 12.5px solid currentColor;
    border-bottom: 0;
    height: 0;
    width: 0;
    border-top-width: 25px;
    content: "";
    display: block;
    position: absolute;
    bottom: -15px;
    -webkit-transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
    transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
  }
}
.q-item-label {
  text-decoration: none !important;
}
.q-message-sent .q-message-text:last-child:before {
  border: 12.5px solid transparent;
  border-top: 12.5px solid currentColor;
  border-radius: 0px !important;
  border-bottom: 0;
  height: 0;
  width: 0;
  border-top-width: 25px;
  content: "";
  display: block;
  position: absolute;
  bottom: -15px;
  -webkit-transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
  transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
}
.q-message-text:last-child:after {
  background: transparent;
  border-radius: 0px !important;
}
i.q-icon.q-if-control.material-icons {
  line-height: 32px;
}
.q-message-stamp {
  font-size: .75em;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  padding-top: 3px !important;
}
.q-message-text-content {
  padding: 0px !important;
}
.q-message-text {
  border-radius: 0px !important;
  padding: 16px;
}
.searching-results {
  max-width: 60px;
  max-height: 30px;
  background: #fafafa;
  margin-left: 30px;
  margin-top: 3vh;
}
.searching-results .q-message-container {
  max-height: 30px;
}
.searching-results .q-message-container .q-message-text {
  height: 30px;
  background: none;
}
.searching-results .q-message-container .q-message-text:before {
  opacity: 0;
}
</style>
