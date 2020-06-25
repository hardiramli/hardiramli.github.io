<template>
  <v-row class="ma-0 pa-0">
      <v-col class="col-12">
        <v-tabs active-class="selected" v-model="selected" fixed-tabs>
        <v-tab v-for="item in items" :key="item.id">
          {{item.title}}   
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="selected">
          <v-tab-item v-for="item in items" :key="item.id">
          <FavoriteListContents :items="items[selected].content"></FavoriteListContents>
          </v-tab-item>
      </v-tabs-items>

      
      </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import FavoriteListContents from "@/components/Dashboard/FavoriteListContents.vue";

export default Vue.extend({
    name:"Favorite",
    components:{
      FavoriteListContents
    },
    data: () => ({
      selected:'0',
      items:[
        {
          id:0,
          title:"Transfer",
          active:false,
          content:[
          {index:0, name: 'Bambang P', detail: '102901293012 - BCA', amount:100000}, 
          {index:1, name: 'Edo N', detail: '102901293012 - BNI', amount:3000000},
          {index:2, name: 'Efan M', detail: '102901293012 - BNI', amount:1500000},
          {index:3, name: 'Tedi P', detail: '102901293012 - BNI', amount:3000000}]
        },
        {
          id:1,
          title:"Bayar",
          active:false,
          content:[
          {index:0, name: 'Listrik', detail: '102901293012', amount:2000000}, 
          {index:1, name: 'PDAM', detail: '102901293012', amount:30000},
          {index:2, name: 'Internet', detail: '102901293012 - BNI', amount:1500000}
          ]
        },
        {
          id:2,
          title:"TopUp",
          active:false,
          content:[
          {index:0, name: 'Pulsa', detail: '102901293012 - Telkomsel', amount:100000}, 
          {index:1, name: 'GoPay', detail: '102901293012', amount:3000000}
          ]
        },
      ]
    })

})
</script>

<style>
  .selection{
    text-align: center;
    font-size: 12px;
  }
  
  .selected{
    
    color:white;
  }
</style>