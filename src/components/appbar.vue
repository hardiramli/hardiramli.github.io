<template>
<v-app-bar app color="white" class="appBarShadow" elevation-2>
        <v-toolbar-title style="margin-left:1%">Selamat Datang {{username}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-badge top offset-x="10" dot offset-y="10" style="margin-right:20px" color="green" overlap>
            <v-icon large color="#1955AD">notifications</v-icon>
        </v-badge>

        <v-avatar ml-2>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
    
</v-app-bar>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "AppBar",
    props: {
        username: String
    }
})
</script>

<style scoped>
.appBarShadow{
    box-shadow: #d3d3d3 10px 10px 1px;
}
</style>
