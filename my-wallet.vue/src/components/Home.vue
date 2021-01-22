<template>
  <main id="home">
    <Top></Top>
    <Card></Card>
    <CardStack></CardStack>    
  </main>
</template>

<script>
import Top from "./Top";
import Card from "./Single-Card";
import CardStack from "./Card-Stack";

export default {
  components: { Top, Card, CardStack },

  data() {
    return {
        };
  },
};
</script>

<style lang="css">
#home {
  color: black;
  font-family: PT Mono, monospace;
}
.card{
  margin-bottom: 40px;
}

</style>