<template>
<span>
    <v-navigation-drawer src="@/assets/nav-bg.png" app v-model="drawer" :permanent="$vuetify.breakpoint.lgAndUp" :temporary="$vuetify.breakpoint.mdAndDown" class="navigation-drawer" :mini-variant.sync="minivariant" :mini-variant-width="60">
        <v-list-item>
            <v-list-item-avatar @click.stop="setMini">
                <v-img pa-2 src="@/assets/logo_BMI.png"></v-img>
            </v-list-item-avatar>
            <v-img src="@/assets/bank_logo_1.png" height="8vh" contain position="left"></v-img>
            <!-- <v-btn icon @click.stop="mini = !mini">
                <v-icon color="#fff">mdi-chevron-left</v-icon>
            </v-btn> -->
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense class="ma-0 pa-0 pt-2">
            <v-list-group v-for="(item, i) in items" :key="i" :value='closeDrawer' class="ma-0 pa-0" active-class="light" color="#fff">
                <v-icon slot="appendIcon" color="#fff">mdi-chevron-down</v-icon>
                <v-list-item slot="activator" router :to="item.path" class="ma-0 pa-0">
                    <v-list-item-icon>
                        <v-icon color="#fff">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title class="v-list-item-title">{{item.name}}</v-list-item-title>
                </v-list-item>
                <v-list class="ml-5 pa-0">
                    <v-list-group v-for="(child, i) in item.children" :key="i" class="ma-0 pa-0" active-class="light">
                        <v-icon class="ma-0 pa-0" slot="appendIcon" color="#fff">mdi-chevron-down</v-icon>
                        <v-list-item slot="activator" router :to="child.path" class="ma-0 pa-0">
                            <v-list-item-icon>
                                <v-icon small color="#fff">fiber_manual_record</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="v-list-item-title">{{child.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list class="ml-5 pa-0" dense v-for="(grandchild, i) in child.children" :key="i">
                            <v-list-item :to="item.path" class="mb-0 pb-0">
                                <v-list-item-icon>
                                    <v-icon small color="#fff">fiber_manual_record</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="v-list-item-title">{{grandchild.name}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
            </v-list-group>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-list-item @click.stop="logOut">
                    <v-icon color="white">exit_to_app</v-icon>
                    <v-list-item-title class="v-list-item-title pl-2">Log Out</v-list-item-title>
                </v-list-item>
                <!-- bank name -->
                <!-- <v-list-item>
                    <v-list-item-title class="v-bank-corporation pl-2">&copy; Bank Muamalat</v-list-item-title>
                </v-list-item> -->
            </div>
        </template>
    </v-navigation-drawer>
</span>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "NavigationDrawer",
    props: {
        items: Array,
    },
    data: () => ({
        mini: false,
        drawer: false,
    }),
    computed: {
        closeDrawer() {
            return this.mini ? false : ''
        },
        mdAndUp() {
            return this.$vuetify.breakpoint.lgAndUp
        },
        minivariant: {
            get() {

                return (this.lgAndUp && this.mini);
            },
            set(minivariant) {
                this.mini = minivariant
            }
        },
    },
    methods: {
        setMini() {
            this.minivariant = !this.mini
        },
        logOut(){
            this.$store.dispatch('logout').then(() => this.$router.push(this.$route.query.redirect || '/login'));
        }
    },
    mounted() {
        this.$root.$on('openDrawer', data => {
            this.drawer = data
        })
    }
});
</script>

<style scoped>
.v-list {
    padding-left: 0;
    padding-right: 1%;
}

.navigation-drawer {
    border-radius: 0px 25px 25px 0px;
    background: linear-gradient(35deg,
            rgba(147, 121, 228, 1) 0%,
            rgba(75, 8, 164, 0.938813025210084) 46%,
            rgba(122, 80, 237, 1) 100%);
}

.v-list-group__header__append-icon .v-icon {
    color: white;
}

.v-bank-corporation {
    font-size: 12px;
    color: white;
}

.v-list-item-title {
    color: white;
}

.v-list-item-title-l3 {
    color: white;
    font-size: 13px
}

/* .v-list--dense .v-list-item .v-list-item__icon{
  margin: 5;
  margin-top: 7px;
  margin-right: 3px;  
  padding: 0;
}

.v-list--dense .v-list-item .v-list-item__title{
  margin: 0;  
  margin-top: 1px;  
  padding: 0;
} */

.v-img {
    transition: none;
    width: auto;
    height: 80px;
    display: block;
    margin: 0 auto;
    padding: none;
}
</style>
