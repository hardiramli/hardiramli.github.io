<template>
    <v-container fluid fill-height class="bglogin pa-0">
        <v-row no-gutters>
            
            <v-col no-gutters>
                
            </v-col>

            <v-col class="col-3 bgform pa-4" no-gutters :class="{'col-12':$vuetify.breakpoint.mdAndDown}">
                <v-row class="mt-4 mx-2">                
                    <v-col class="col-8">
                        <v-img src="@/assets/bank_logo.png" height="50%" width="100%" contain position="left"></v-img>
                    </v-col>
                    <v-col>
                        
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="col-12">
                        <p class="text-center">assalamualaikum</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="col-12">
                        <p class="text-center">Internet Banking Muamalat</p>
                    </v-col>
                </v-row>
                <v-row no-gutters>                
                    <v-col>
                        <loginForm class = "mx-12 test"></loginForm>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import loginForm from "@/components/Login/loginForm.vue";

export default {
    name: "LoginPage",
    components: {
        loginForm
    }
}
</script>

<style>
.bglogin{
    background-image: url("../assets/navbar-bg.png");
    min-height: 100%;
    background-size: cover;
}
.bgplain{
    background-image: none !important;
    background-color:#6dabdb;
}
.bgform{
    background-color: beige;
    min-height: 100vh;
}
</style>