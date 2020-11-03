<template>
  <div id="app">
    <RandomChart />
  </div>
</template>

<script>
import RandomChart from "./components/RandomChart";

export default {
  name: "App",
  components: {
    RandomChart,
  },
};
</script>

<style>
body, html {
  background-color: #74ebd5;
  background-image: linear-gradient(180deg, #1f9696 0%, #101011 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
