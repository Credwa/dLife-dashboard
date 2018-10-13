export default {
  isDrawer: true,
  homeGraphs: {
    userSession: {
      name: 'Session/Users',
      type: 'line',
      active: true
    },
    userRetention: {
      name: 'User Retention',
      type: 'line',
      active: false
    },
    Users: {
      name: 'Users',
      type: 'multi-line',
      active: false
    },
    Sessions: {
      name: 'Sessions',
      type: 'multi-line',
      active: false
    },
    timePerSession: {
      name: 'Time Per Session',
      type: 'bar',
      active: false
    },
    messagesPerSession: {
      name: 'Messages Per Session',
      type: 'bar',
      active: false
    },
    topMessages: {
      name: 'Top 10 Messages',
      type: 'user-bar',
      active: false
    },
    topExitMessages: {
      name: 'Top Exit Messages',
      type: 'user-bar',
      active: false
    }
  },
  alertPageData: {
    alerts: {
      name: 'Alerts',
      active: true
    },
    sessionTranscripts: {
      name: 'Session Transcripts',
      active: false
    }
  }
};
