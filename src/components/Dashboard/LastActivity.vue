<template>
  <v-row>
    <v-col class="pl-4 pr-2">
      <v-row no-gutters>
        <v-col align="center">
          <v-icon x-large>calendar_today</v-icon>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          
          <p class="desc mb-0">12-12-2012</p> <!-- replace with data -->
        </v-col>
      </v-row>    
    </v-col>
    <v-col class="px-2">
      <v-row no-gutters>
        <v-col align="center">
          <v-icon x-large>history</v-icon>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          
          <p class="desc mb-0">10:10:25</p> <!-- replace with data -->
        </v-col>
      </v-row>    
    </v-col>
    <v-col class="pl-2 pr-4">
      <v-row no-gutters>
        <v-col align="center">
          <v-icon x-large>bar_chart</v-icon>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          
          <p class="desc mb-0">2 kali</p> <!-- replace with data -->
        </v-col>
      </v-row>    
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LastActivity",

  data: () => ({
  })
});
</script>

<style scoped>
  .desc{
    text-align: center;
    font-size: 11px;
  }
</style>