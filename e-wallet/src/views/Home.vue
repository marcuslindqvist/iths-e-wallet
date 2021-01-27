<template>
  <main class="home">
    <PageHeader />
    <!-- <CardComponent /> -->
    <CardStack v-bind:cardArray="getCardArray" @clicked="makeActive" />
    <router-link to="/AddCard">Add New Card</router-link>
  </main>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
// import CardComponent from "@/components/CardComponent.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    PageHeader,
    // CardComponent,
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
        holder: "Marcus Lindqvist",
      },
    };
  },
  methods: {
    makeActive(clickedCard) {
      this.activeCard.holder = clickedCard;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
