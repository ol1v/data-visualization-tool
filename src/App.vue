<template>
  <div id="app">
    <Sidebar/>
    

    <RandomChart />
  </div>
</template>

<script>
import RandomChart from "./components/RandomChart";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    RandomChart,
    Sidebar
  },
};
</script>

<style>
body, html {
  background-color: #74ebd5;
  background-image: linear-gradient(180deg, #000000 0%, #1f9696 100%);
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
