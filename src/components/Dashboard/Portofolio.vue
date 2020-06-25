<template>
    <v-row>
        <v-col>
            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import ApexCharts from 'vue-apexcharts';

export default Vue.extend({
  name: "Portofolio",
  components:{
    apexchart:ApexCharts  
  },
  data: () => ({
    series: [44, 55, 13, 80],
          chartOptions: {
            chart: {
              height: 380,
              width: '100%',
              type: 'donut',
            },
            labels: ['Tabungan', 'Giro', 'Deposito', 'Investasi'],
            dataLabels: {
              formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
              }
            },
            responsive: [{
              breakpoint: 500,
              options: {
                chart: {
                  width: '100%',
                  height:200,
                  
                },
                legend: {
                  show: false
                }
              }
            }],
            legend: {
              position: 'bottom',
              //offsetY: 0,
              //height: 230,
            }
          }
  })
});
</script>

<style>

</style>