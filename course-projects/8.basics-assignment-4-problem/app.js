const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      showParagraph: true,
      bgColor: "",
    };
  },
  methods: {
    show() {
      this.showParagraph = !this.showParagraph;
    },
  },
  computed: {
    classShowParagraph() {
      return { visible: this.showParagraph, hidden: !this.showParagraph };
    },
  },
  watch: {},
});

app.mount("#assignment");
