<template>
  <header class="top">
    <h1 class="top">{{ headerText.h1 }}</h1>
    <p class="card-type">{{ headerText.p }}</p>
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
.top h1,
.top p {
  text-align: center;
  margin: 0;
}
.top h1 {
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
}
</style>
