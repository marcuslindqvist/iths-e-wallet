<template>
  <div>
    <PageHeader />
    <CardComponent :card="card" />
    <AddCardForm :card="card" />
    <a href="/Home" class="cta" @click.prevent="addCard"> Add Card </a>
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
    AddCardForm
  },

  data() {
    return {
      card: {
        holder: "Emil Exempelsson",
        vendor: "blank",
        number: "0000000000000000",
        validMonth: "01",
        validYear: "21"
      }
    };
  },
  methods: {
    addCard() {
      const newCard = {
        id: Date.now(),
        holder: this.card.holder,
        vendor: this.card.vendor,
        number: this.card.number,
        validMonth: this.card.validMonth,
        validYear: this.card.validYear
      };
      this.$root.cards.push(newCard);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="css">
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
