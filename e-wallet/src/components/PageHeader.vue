<template>
  <header class="top">
    <h1 class="top">add new card</h1>
    <p class="card-type">new card</p>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
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