<template>
  <div>
    <PageHeader class="top" :headerText="header" />
    <CardComponent :card="card" />
    <AddCardForm :card="card" />
    <a href="/Home" class="cta" @click.prevent="checkFields"> Add Card </a>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import CardComponent from "@/components/CardComponent.vue";
import AddCardForm from "@/components/AddCardForm.vue";

export default {
  name: "AddCard",
  components: {
    PageHeader,
    CardComponent,
    AddCardForm,
  },

  data() {
    return {
      card: {
        holder: "",
        vendor: "blank",
        number: "",
        validMonth: "01",
        validYear: "21",
      },
      header: {
        h1: "add new card",
        p: "new card",
      },
    };
  },
  methods: {
    checkFields() {
      if (!this.card.holder || !this.card.vendor || !this.card.number) {
        alert("Du måste fylla i alla fält");
      } else {
        this.addCard();
      }
    },
    addCard() {
      const newCard = {
        id: Date.now(),
        holder: this.card.holder,
        vendor: this.card.vendor,
        number: this.card.number,
        validMonth: this.card.validMonth,
        validYear: this.card.validYear,
      };
      this.$root.cards.push(newCard);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="css">
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
</style>
