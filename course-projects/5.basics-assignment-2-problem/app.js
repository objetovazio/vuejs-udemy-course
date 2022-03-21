const app = Vue.createApp({
  data() {
    return {
        output1: 'OUTPUT',
        output2: 'OUTPUT',
    };
  },
  methods: {
    updateOutput1($event){
        this.output1 = $event.target.value;
    },
    updateOutput2($event){
        this.output2 = $event.target.value;
    },
    test(){ 
        alert('any text of your choice');
    }
  }
});

app.mount('#assignment');
