<template>
  <section>
    <CardComponent
      v-for="card in cardArray"
      v-bind:key="card.id"
      v-bind:card="card"
      @clicked="makeActive"
    />
  </section>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  methods: {
    makeActive(name) {
      this.$emit("clickedCard", name);
    },
  },
  props: {
    cardArray: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
</style>
