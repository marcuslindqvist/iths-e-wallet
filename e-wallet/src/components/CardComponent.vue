<template>
  <article class="card">
    <header>
      <img src="@/../../assets/chip-light.svg" alt="chip" />
    </header>
    <section class="number">{{ test.number }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ test.holder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p>{{ test.validMonth }}/{{ test.validYear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    test() {
      return this.$root.card;
    },
  },
};
</script>

<style lang="css" scoped>
.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
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
.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}
.card section.info aside.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
aside {
  display: block;
}
.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}
.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.card section aside.valid span {
  text-align: right;
}
.card section aside.valid p {
  text-align: right;
}
</style>