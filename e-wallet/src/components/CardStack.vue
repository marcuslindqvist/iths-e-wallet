<template>
  <section>
    <CardComponent
      v-for="card in cardArray"
      v-bind:key="card.id"
      v-bind:card="card"
      @click="$emit('clicked', card.holder)"
    />
  </section>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  props: {
    cardArray: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  margin-bottom: 15px;
}
</style>