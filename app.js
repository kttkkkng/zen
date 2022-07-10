const app = Vue.createApp({
    data () {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        register () {
            console.log(this.username, this.password);
        }
    }
});

app.mount("#app");