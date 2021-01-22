<template>
<div>
  <Card v-for="item in cardArray" :key="item.id" :class="item.vendor"></Card>
</div>
</template>

<script>
import Card from "./Single-Card";

export default {
  components: { Card },
  data() {
    return {
      cardArray: [
        {
          id: "432984728397",
          holder: "The name",
          vendor: "bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5",
        },
        {
          id: "432984728395",
          holder: "The name",
          vendor: "blockchain",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5",
        },
        {
          id: "432984728399",
          holder: "The name",
          vendor: "evil",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5",
        },
      ]
    }
  },

}  </script>

<style lang="css" scoped>
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
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.card{
  margin-bottom: -150px;
}
</style>