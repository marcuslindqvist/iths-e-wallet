<template>
  <main class="home">
    <PageHeader class="top" />
    <CardComponent :card="activeCard" />
    <button
      v-if="activeCard.holder"
      @click="eraseCard(activeCard)"
      class="eraseBtn"
    >
      Radera kortet
    </button>
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
    CardStack
  },
  computed: {
    getCardArray() {
      return this.$root.cards;
    }
  },
  data() {
    return {
      activeCard: {
        holder: "Emil Exempelsson",
        vendor: "blank",
        number: "0000000000000000",
        validMonth: "01",
        validYear: "21",
        id: ""
      }
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
        holder: "Emil Exempelsson",
        vendor: "blank",
        number: "0000000000000000",
        validMonth: "01",
        validYear: "21",
        id: ""
      };
    }
  }
};
</script>

<style lang="css" scoped>
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
.eraseBtn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2rem;
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
  background-color: white;
  font-family: PT Mono, monospace;
}
</style>
