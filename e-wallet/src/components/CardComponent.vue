<template>
  <article class="card" v-bind:class="card.vendor">
    <header>
      <!--  -->
      <img src="@/assets/chip-light.svg" alt="chip" />
      <!--  -->
      <!--  -->
      <img :src="`@/assets/vendor-${card.vendor}.svg`" alt="vendor" />
      <!--  -->
    </header>
    <section class="number" v-if="card.number">{{ cardNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ card.holder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p>{{ card.validMonth }} / {{ card.validYear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    cardNumber() {
      return this.card.number.match(/.{1,4}/g).join(" ");
    },
  },
  props: {
    card: {
      type: Object,
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
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
</style>