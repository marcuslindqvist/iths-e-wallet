<template>
  <div id="app">
    <Home></Home>
    <router-link to="/AddCard" class="cta">ADD NEW CARD</router-link>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Card from "./Single-Card";

export default {
  name: "App",
  };
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: PT Mono, monospace;
  padding: 1rem;
  height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.cta {
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
