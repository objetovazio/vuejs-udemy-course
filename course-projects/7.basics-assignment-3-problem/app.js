const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    add(num) {
      this.value = this.value + num;
    },
  },
    computed: {
        result() {
            if(this.value >= 37){
                return "Too much!";
            }
            else {
                return "Not there yet";
            }
      }
  },
  watch: {
        result() {
            var that = this;
            setTimeout(
                function() {
                    that.value = 0
                },
                5000);
      }
  }
});

app.mount('#assignment');
