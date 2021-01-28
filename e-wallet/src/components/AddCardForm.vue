<template>
  <section class="card-form">
    <label for="number" class="col-2">Card Number</label>
    <input
      type="text"
      name="number"
      maxlength="16"
      placeholder="XXXX XXXX XXXX XXXX"
      class="col-2"
      v-model="card.number"
    />
    <label for="cardholder" class="col-2">Cardholder Name</label>
    <input
      type="text"
      name="cardholder"
      placeholder="Firstname Lastname"
      maxlength="28"
      class="col-2"
      v-model="card.holder"
    />
    <label for="month" class="col-1">Month</label>
    <label for="year" class="col-1">Year</label>
    <select name="month" class="col-1" v-model="card.validMonth">
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
    <select name="year" class="col-1" v-model="card.validYear">
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
    </select>
    <label for="vendor" class="col-2">Vendor</label>
    <select name="vendor" class="col-2" v-model="card.vendor">
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="evil">Evil Corp</option>
      <option value="ninja">Ninja Bank</option>
    </select>
  </section>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
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
a.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}
</style>
