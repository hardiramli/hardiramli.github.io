<template>
    <v-col class="section ma-2 pa-0">
        <div v-if="borderOnly">
            <h5>{{ title }}</h5>
        </div>
        <div v-else>
            <h4 class="blue-title">{{ title }}</h4>
        </div>
            <!-- PANEL CONTENT -->
            <slot></slot>
    </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BluePanel",
  props: {
        title: String,
        borderOnly: Boolean
  },
  data: () => ({
  })
});
</script>

<style>
.section{
    border-radius: 10px;
    border: 1px solid #c6d7e4;
}
.section h4{
    padding:4px;
    padding-left:8px;
    border-top-left-radius : 5px;
    border-top-right-radius : 5px;
}
.section h5{
    padding:4px;
    padding-left:8px;
}
.blue-title{
    background:#0094ff;
    color:white;
}
</style>