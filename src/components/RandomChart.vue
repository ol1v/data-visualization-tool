<template>
  <div class="small">
    <h2>Data Description</h2>
    <line-chart v-if="linechart" :chart-data="datacollection"  ></line-chart>
    <bar-chart v-if="barchart" :chart-data="datacollection" />

    
    <button @click="fillData()">Randomize</button>
    <button @click="showChart()">Show barchart</button>
    <button @click="addDataSet()">Add dataset</button>

    <input type="text" v-model="label">
    <button @click="addValue()">Add</button>


  </div>
</template>
<script>
import LineChart from "./LineChart.js";
import BarChart from "./BarChart.js";
import store from "../store"

export default {
  components: {
    LineChart,
    BarChart,
  },
  props: ['options'],
  data() {
    return {
      datacollection: null,
      // Charts visible
      linechart: true,
      barchart: false,
      vueCanvas: null,
      label: null
    };
  },
  mounted() {
    // this.fillData();
    console.log(store.state.backgroundColors)
    
  },
  methods: {
    fillData() {
      
      this.datacollection = {
        labels: ['January', 'Februari'],
        datasets: [
          {
            label: this.label,
            backgroundColor: store.state.backgroundColors[0],
            borderWidth: 1,
            fill: true,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "red",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: "Data Two",
            backgroundColor: store.state.backgroundColors[1],
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };

      
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    showChart() {
      this.barchart = !this.barchart;
    },
    addDataSet() {
      let dataSet = {
        label: "Data Three",
        backgroundColor: "#f871717",
        data: [this.getRandomInt(), this.getRandomInt()],
      };
      this.datacollection.datasets.push(dataSet);
      console.log(this.datacollection);
      this.showChart();
    },
    addValue() {
      
      this.fillData()
    }
  },
};
</script>

<style>
.small {
  max-width: 600px;
  padding: 3em;
  margin: 150px auto;
  background-color: #0215205e;
  border-radius: 0.5em;
}
</style>
