<template>
  <main class="home">
    <PageHeader class="top" :headerText="header" />
    <button
      v-if="activeCard.holder"
      @click="eraseCard(activeCard)"
      class="eraseBtn"
    >
      X
    </button>
    <CardComponent :card="activeCard" />

    <CardStack
      class="card-stack"
      :cardArray="getCardArray"
      @clickedCard="makeActive"
    />
    <router-link to="/AddCard" class="cta">Add New Card</router-link>
  </main>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import CardComponent from "@/components/CardComponent.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    PageHeader,
    CardComponent,
    CardStack,
  },
  computed: {
    getCardArray() {
      return this.$root.cards;
    },
  },
  data() {
    return {
      activeCard: {
        holder: "",
        vendor: "blank",
        number: "",
        validMonth: "01",
        validYear: "21",
        id: "",
      },
      header: {
        h1: "e-wallet",
        p: "active card",
      },
    };
  },

  methods: {
    makeActive(name) {
      this.activeCard.holder = name.holder;
      this.activeCard.vendor = name.vendor;
      this.activeCard.number = name.number;
      this.activeCard.validMonth = name.validMonth;
      this.activeCard.validYear = name.validYear;
      this.activeCard.id = name.id;
    },

    eraseCard(veryCard) {
      this.$root.setEraseCard(veryCard);
      this.activeCard = {
        holder: "",
        vendor: "blank",
        number: "",
        validMonth: "01",
        validYear: "21",
        id: "",
      };
    },
  },
};
</script>

<style lang="css" scoped>
CardComponent {
  margin-top: 2rem;
}
.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}
.cta:hover {
  background-color: black;
  color: white;
}
button {
  background-color: none;
  border: none;
}
.eraseBtn {
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  margin: -0.5rem -2.5rem -1rem auto;
  font-family: PT Mono, monospace;
  z-index: 10;
  background-color: white;
  cursor: pointer;
}
</style>
