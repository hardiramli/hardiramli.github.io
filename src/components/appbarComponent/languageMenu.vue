<template >
<v-menu class="pa-0" bottom offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{on}">
        <v-btn class="pa-0"  text style="min-width: 48px" color="primary" v-on="on">
            <span class="hidden-sm-and-down">{{$i18n.locale}}</span>
            <v-icon class="hidden-sm-and-down" color="primary">mdi-menu-down</v-icon>
            <v-icon class="hidden-md-and-up" color="primary">mdi-earth</v-icon>
        </v-btn>
    </template>
    <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="setlanguage(i)">
            <v-list-item-title class="pl-1" color="primary">{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
</v-menu>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "LanguageMenu",
    props: {
        items: Array
    },
    methods: {
        setlanguage(id) {
            if (id === 0) {
                this.$i18n.locale = "id"
            } else {
                this.$i18n.locale = "en"
            }
        }
    },
})
</script>

<style scoped>
.v-list-item__title {
    color: #008FD0;
}
</style>
