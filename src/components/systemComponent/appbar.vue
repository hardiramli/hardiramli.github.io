<template>
<v-app-bar app color="white" class="appBarShadow" elevation-2>
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="openDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="margin-left:0.5%">
        <div v-if="$route.name === 'Home'">
            <span class="pr-2">Welcome</span>
            <span class="custName">{{ username }}</span>
        </div>
        <div v-else>
            <span class="pr-2">{{$route.name}}</span>
        </div>
         
         </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <userNotification />
        <userSetting />
        
    </v-toolbar-items>
</v-app-bar>
</template>

<script>
import Vue from "vue";
import Store from "@/store/index";
import UserNotification from "@/components/appbarComponent/userNotificationDialog.vue";
import UserSetting from "@/components/appbarComponent/userSettingDialog.vue";

export default Vue.extend({
    name: "AppBar",
    components: {
        UserNotification,
        UserSetting,

    },
    props: {
        username: String
    },
    methods: {
        openSetting() {
            this.$root.$emit("userSettings", true);
        },
        openNotification() {
            this.$root.$emit("userNotification", true);
        },
        openDrawer(){
            this.$root.$emit('openDrawer',true)
        }
    }
});
</script>

<style scoped>
.appBarShadow {
    box-shadow: #d3d3d3 10px 10px 5px;
}
.custName{
    color: #7D2FBA
}
</style>
