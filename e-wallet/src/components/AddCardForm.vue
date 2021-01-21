<template>
  <section class="card-form">
    <label for="number" class="col-2">Card Number</label>
    <input
      type="text"
      name="number"
      maxlength="16"
      placeholder="XXXX XXXX XXXX XXXX"
      class="col-2"
      v-model="test.number"
    />
    <label for="cardholder" class="col-2">Cardholder Name</label>
    <input
      type="text"
      name="cardholder"
      placeholder="Firstname Lastname"
      class="col-2"
      v-model="test.holder"
    />
    <label for="month" class="col-1">Month</label>
    <label for="year" class="col-1">Year</label>
    <select name="month" class="col-1" v-model="test.validMonth">
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
    <select name="year" class="col-1" v-model="test.validYear">
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
    </select>
    <label for="vendor" class="col-2">Vendor</label>
    <select name="vendor" class="col-2" v-model="test.vendor">
      <option value="Bitcoin Inc">Bitcoin Inc</option>
      <option value="Blockchain Inc">Blockchain Inc</option>
      <option value="Evil Corp">Evil Corp</option>
      <option value="Ninja Bank">Ninja Bank</option>
    </select>
    <button @click="addCard"></button>
  </section>
</template>

<script>
export default {
  data: () => ({
    inputNumber: "",
    inputName: "",
    selectedMonth: 0,
    selectedYear: 0,
    selectedVendor: "",
  }),

  computed: {
    test() {
      return this.$root.card;
    },
  },

  methods: {
    addCard() {
      // const newCard = {
      //   number: this.inputNumber,
      //   name: this.inputName,
      //   month: this.selectedMonth,
      //   year: this.selectedYear,
      //   vendor: this.selectedVendor,
      // };
      console.log(this.getCard);
      // this.$root.cards.push(this.getCard);
    },
  },
};
</script>

<style lang="css" scoped>
.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}
.card-form label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}
.card-form input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}
.col-2 {
  grid-column: auto/span 2;
}
.col-1 {
  grid-column: auto/span 1;
}
</style>