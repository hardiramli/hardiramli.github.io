<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import AppPage from "@/views/layout/AppPage.vue";
import SimplePage from "@/views/layout/SimplePage.vue";

export default Vue.extend({
    computed:{
      layout(){
        console.log(this.$store.getters.layout);
        return this.$store.getters.layout;
      }
    },
    components: {
    'app-layout': AppPage,
    'simple-layout': SimplePage
    // define as many layouts you want for the application
    }
});
</script>

<style>

</style>
