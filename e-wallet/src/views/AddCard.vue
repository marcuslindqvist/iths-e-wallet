<template>
  <div>
    <AddCardHeader></AddCardHeader>
    <CardComponent class="blank"></CardComponent>
    <AddCardForm></AddCardForm>
    <a href="#" class="cta">Add Card</a>

    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import AddCardHeader from "@/components/AddCardHeader.vue";
import CardComponent from "@/components/CardComponent.vue";
import AddCardForm from "@/components/AddCardForm.vue";

export default {
  components: {
    AddCardHeader,
    CardComponent,
    AddCardForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
