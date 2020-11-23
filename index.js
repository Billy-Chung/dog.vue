Vue.config.devtools = true;
Vue.component("modal", {
  template: "#modal-template",
});

new Vue({
  el: "#app",
  data: {
    dogInfo: {},
  },

  created() {
    this.test();
  },
  //http://172.31.9.16/dogApi/laravel/public/api
  methods: {
    test() {
      let vueUrl = "http://172.31.9.16/dogApi/laravel/public/api";

      axios
        .post(`${vueUrl}`)
        .then((res) => {
          console.log(res);
          this.dogInfo = res.data;
        })
        .catch((err) => {
          console.log("error");
        });
    },
  },
});

new Vue({
  el: "#share",
  data: {
    showModal: false,
  },
});
