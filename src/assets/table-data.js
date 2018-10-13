export default {
  timePerSession: {
    columns: [
      {
        name: 'Duration (Sec.)',
        required: true,
        label: 'Duration (Sec.)',
        align: 'left',
        field: 'duration',
        sortable: true,
      },
      {
        name: 'count',
        label: 'Sessions',
        align: 'left',
        field: 'item',
      },
    ],
    tableData: [
      {
        duration: '0-10 seconds',
        item: 20
      },
      {
        duration: '11 - 31 seconds',
        item: 100
      },
      {
        duration: '31-60 seconds',
        item: 10
      },
      {
        duration: '61-180 seconds',
        item: 2
      },
      {
        duration: '181-600 seconds',
        item: 0
      },
      {
        duration: '601 - 1800 seconds',
        item: 0
      },
      {
        duration: '1800+ seconds',
        item: 0
      },
    ]
  },
  messagePerSession: {
    columns: [
      {
        name: 'Messages',
        required: true,
        label: 'Messages',
        align: 'left',
        field: 'duration',
        sortable: true,
      },
      {
        name: 'count',
        label: 'Sessions',
        align: 'left',
        field: 'item',
      },
    ],
    tableData: [
      {
        duration: '0-109 messages',
        item: 20
      },
      {
        duration: '101 - 200 messages',
        item: 100
      },
      {
        duration: '201-300 messages',
        item: 10
      },
      {
        duration: '301-400 messages',
        item: 2
      },
      {
        duration: '401-500 messages',
        item: 0
      },
      {
        duration: '501 - 600 messages',
        item: 0
      },
      {
        duration: '601 - 700 messages',
        item: 0
      },
      {
        duration: '701 - 800 messages',
        item: 0
      },
      {
        duration: '801 - 900 messages',
        item: 0
      },
      {
        duration: '901+ messages',
        item: 0
      },
    ]
  },
  topMessages: {
    columns: [
      {
        name: 'Messages',
        required: true,
        label: 'Messages',
        align: 'left',
        field: 'messages',
        sortable: true,
      },
      {
        name: 'count',
        sortable: true,
        label: 'Message Count',
        align: 'left',
        field: 'item',
      },
    ],
    tableData: [
      {
        messages: 'Hi!',
        item: 1000000
      },
      {
        messages: 'Hello!',
        item: 500000
      },
      {
        messages: 'Help',
        item: 250000
      },
      {
        messages: 'No',
        item: 100000
      },
      {
        messages: 'I\'m good',
        item: 90000
      },
      {
        messages: 'What is this?',
        item: 80000
      },
      {
        messages: 'meow',
        item: 70000
      },
      {
        messages: 'woof',
        item: 60000
      },
      {
        messages: 'humor me',
        item: 50000
      },
      {
        messages: 'use the force',
        item: 40000
      },
    ]
  },
  topExitMessages: {
    columns: [
      {
        name: 'Messages',
        required: true,
        label: 'Messages',
        align: 'left',
        field: 'messages',
        sortable: true,
      },
      {
        name: 'count',
        sortable: true,
        label: 'Message Count',
        align: 'left',
        field: 'item',
      },
    ],
    tableData: [
      {
        messages: 'Sayanora',
        item: 1000000
      },
      {
        messages: 'adios',
        item: 500000
      },
      {
        messages: 'Au revoir',
        item: 250000
      },
      {
        messages: 'bye!!!',
        item: 100000
      },
      {
        messages: 'bye!!',
        item: 90000
      },
      {
        messages: 'bye!',
        item: 80000
      },
      {
        messages: 'bye',
        item: 70000
      },
      {
        messages: 'done',
        item: 60000
      },
      {
        messages: 'quit',
        item: 50000
      },
      {
        messages: 'close',
        item: 40000
      },
    ]
  }
};
