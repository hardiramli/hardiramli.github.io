<template>
    <v-app>
    <AppBar :username="name"></AppBar>
    <NavigationDrawer
      :items="items"
    ></NavigationDrawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/systemComponent/navigationDrawer.vue";
import AppBar from "@/components/systemComponent/appbar.vue";

export default({

  components: {
    NavigationDrawer,
    AppBar
  },
  data: () => ({
    drawer: true,
    name: "John Doe",
    items: [
      {
        id: 1,
        name: "Beranda",
        icon: "home",
        path: "/",
      },
      {
        id: 2,
        name: "Rekening",
        icon: "account_balance_wallet",
        path: "/accounts",
        children: [
          {
            id: 1,
            name: "Saldo & Mutasi",
            icon: "face",
            path: "/accounts"
          },
          {
            id: 2,
            name: "Buka Rekening",
            icon: "favorite",
            path: "/new-account"
          }
        ]
      },
      {
      
        id: 3,
        name: "Transfer",
        icon: "compare_arrows",
        path: "/fundtransfer"
      
      },
      {
        id: 4,
        name: "Bayar & Top Up",
        icon: "credit_card",
        path: "/payments"
      },
      {
        id: 5,
        name: "Investasi",
        icon: "show_chart",
        path: "/investations"
      }
    ]
  }),
  
});
</script>

<style>
.notificationMenu {
  max-height: calc(100% - 16px);
  min-width: 134px;
  top: 12px;
  left: 889px;
  transform-origin: left top;
  z-index: 8;
}
</style>