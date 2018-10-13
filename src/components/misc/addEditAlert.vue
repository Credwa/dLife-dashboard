<template>
  <div class="alert">
    <div class="column alertCol">
      <q-field label="Alert Name" orientation="vertical">
        <q-input class="alert-input shadow-1" v-model="alert.name" />
      </q-field>

      <q-field label="Alert Type" orientation="vertical">
        <q-select class="alert-input shadow-1"
          v-model="alert.type"
          :options="typeOptions"
        />
      </q-field>

      <q-field label="Alert Action" orientation="vertical">
        <q-select class="alert-input shadow-1"
          v-model="alert.action"
          :options="actionOptions"
        />
      </q-field>

    </div>
    <div class="column alertCol" >
      <q-field label="Alert Direction" orientation="vertical">
        <q-select class="alert-input shadow-1"
          v-model="alert.direction"
          :options="directionOptions"
        />
      </q-field>
      <q-field label="Alert Value" orientation="vertical">
        <q-input v-model="alert.value"  class="alert-input shadow-1"/>
      </q-field>
      <q-field label="Alert Destination" orientation="vertical">
        <q-input v-model="alert.destination" class="alert-input shadow-1" />
      </q-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    typeOptions: [
      {
        label: 'Test',
        value: 'Test'
      },
    ],
    actionOptions: [
      {
        label: 'Email',
        value: 'Email'
      },
      {
        label: 'Call',
        value: 'Call'
      }
    ],
    directionOptions: [
      {
        label: 'Incoming',
        value: 'Incoming'
      },
      {
        label: 'Outgoing',
        value: 'Outgoing'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 85vw;
  margin-bottom: 3vh;
}
.alertCol {
  width: 40vw;
  margin-right: 1vw;
}

.alert-input {
  width: 40vw;
  height: 35px;
  border-radius: 2px;
  padding: 0vw 2vw 0vw 2vw;
  background-color: rgba(38, 50, 56, 0.03);
}
</style>

