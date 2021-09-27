const app = Vue.createApp({
    data() {
        return {
            name: "André Martins",
            age: 24,
            favourite: Math.random(),
            imgUrl: "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both",
        }
    }
})

app.mount("#assignment")