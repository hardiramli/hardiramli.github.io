<template>
  <v-menu attach bottom left offset-y min-height="300">
    <template v-slot:activator="{ on }">
      <v-btn class="ma-0 pa-0" v-on="on" text style="min-width: 48px">
        <v-icon color="primary">notifications</v-icon>
      </v-btn>
    </template>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "UserNotification"
});
</script>

<style scoped>
.v-list {
  padding-left: 0;
  padding-right: 1%;
}

.navigation-drawer {
  margin-top: 60px;
  height: 60vh;
  border-radius: 15px 0px 0px 15px;
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

.v-img {
  transition: none;
  width: auto;
  height: 80px;
  display: block;
  margin: 0 auto;
  padding: none;
}
</style>
