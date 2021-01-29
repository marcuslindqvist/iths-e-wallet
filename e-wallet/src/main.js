import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      cards: [
        {
          id: 1519211809934,
          holder: "Marcus Lindqvist",
          vendor: "blockchain",
          number: "1234567812345678",
          validMonth: "07",
          validYear: "23"
        },
        {
          id: 1519211809935,
          holder: "Carl Carlsson",
          vendor: "ninja",
          number: "4321432143214321",
          validMonth: "03",
          validYear: "22"
        },
        {
          id: 1519211809936,
          holder: "Antonia Forsblom",
          vendor: "evil",
          number: "1948573849304957",
          validMonth: "12",
          validYear: "23"
        }
      ]
    };
  },
  methods: {
    setEraseCard(veryCard) {
      const pos = this.cards
        .map(function(e) {
          return e.id;
        })
        .indexOf(veryCard.id);

      if (confirm("Do you really want to delete this card?")) {
        this.cards.splice(pos, 1);
      }
    }
  },
  render: h => h(App)
}).$mount("#app");
