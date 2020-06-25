<template>
<span>
    <v-navigation-drawer app v-model="drawer" fixed class="navigation-drawer" :mini-variant.sync="mini" :mini-variant-width="50">
        <v-list-item class="px-2">
            <v-img transition="scale-transition" v-if="!mini" src="../assets/bank_logo.png" @click.stop="mini = !mini"></v-img>
            <v-img transition="scale-transition" v-else src="../assets/logo_BMI.png" @click.stop="mini = !mini"></v-img>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-group v-for='(item,i) in items' :key="i" active-class="purple light" color="#fff">
                <v-list-item slot='activator' router :to=item.path>
                    <v-list-item-icon>
                        <v-icon color="#fff">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title class="v-list-item-title">{{item.name}}</v-list-item-title>

                </v-list-item>
                <v-list class='py-0 pl-1'>
                    <v-list-group v-for='(child,i) in item.children' :key="i" active-class="purple light">
                        <v-list-item slot='activator' router :to=child.path>
                            <v-list-item-icon>
                                <v-icon color="#fff">{{ child.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="v-list-item-title">{{child.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list class='py-0 pl-2' v-for='(grandchild,i) in child.children' :key="i">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="#fff">{{ grandchild.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-tile-title class="v-list-item-title">{{grandchild.name}}</v-list-tile-title>
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</span>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "NavigationDrawer",
    props: {
        items: Array,
        drawer: Boolean,
        
    },
    data:()=>({
        mini: true
    })
})
</script>

<style scoped>
.v-list {
    padding-left: 0;
    padding-right: 1%
}

.navigation-drawer {
    border-radius: 0px 25px 25px 0px;
    background: linear-gradient(35deg, rgba(147,121,228,1) 0%, rgba(75,8,164,0.938813025210084) 46%, rgba(122,80,237,1) 100%);


}

.v-list-item-title {
    color: white;
}
</style>
