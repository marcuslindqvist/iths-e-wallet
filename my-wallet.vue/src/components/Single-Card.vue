<template>
  <article class="card">
    <header>
      <img src="../assets/chip-light.svg" alt="" srcset="" />
      <img src="" alt="" srcset="" />
    </header>
    <section class="number"></section>
    <section class="info">
      <aside class="holder">
        <span>CARDHOLDER NAME</span>
        <p></p>
      </aside>
      <aside class="valid">
        <span>VALID UNTIL</span>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },
  created () {
    
  },
};
</script>

<style lang="css" scoped>

.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}

.card header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}
.card header img {
    opacity: .8;
}
.card section.info, .card section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: flex;
}
</style>