import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      card: {
          id: Date.now(),
          holder: '',
          vendor: '',
          number: '',
          validMonth: '',
          validYear: '',
      },
      cards: [
        
      ],
    }
  },
  methods: {
    pushCard() {
      this.cards.push(this.card);
    }
  },
  render: h => h(App)
}).$mount("#app");
