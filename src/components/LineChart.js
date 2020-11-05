import { Line, mixins } from 'vue-chartjs'
import store from '../store'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.gradient = this.$refs.canvas
     .getContext('2d')
     .createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas
     .getContext('2d')
     .createLinearGradient(0, 0, 0, 450)

     this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
     this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
     this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      
     this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
     this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
     this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

     let colorArray = [this.gradient, this.gradient2]
      
     store.commit('SET_BACKGROUNDCOLOR', colorArray)


     this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40]
          },{
            label: 'Data Two',
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [60, 55, 32, 10, 2, 12, 53]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
  },
}
