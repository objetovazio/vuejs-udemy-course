const app = Vue.createApp({
  data() {
    return {
      list: [],
      task: "",
      taskCounter: 0,
      showList: true,
    };
  },
  methods: {
    addTask(text) {
      var taskObj = {
        id: ++this.taskCounter,
        text: text,
      };

      this.list.push(taskObj);
      this.task = "";
    },
  },
});

app.mount("#assignment");
