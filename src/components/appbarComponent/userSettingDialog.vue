<template>
  <v-menu attach bottom left offset-y max-height="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="ma-0 pa-0 pr-2" text style="min-width: 48px">
        <v-avatar ml-2>
          <img class="hidden-sm-and-down"  src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          <img class="hidden-md-and-up" max-width="20" max-height="20" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card class="d-inline-block mx-auto" min-width="300px">
      <v-container>
        <v-row >
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>

          <v-col cols="auto" class="text-center pa-0">
            <v-row class="flex-column ma-0" justify="center">
              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="pa-0">
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
import Store from "@/store/index";

export default Vue.extend({
  name: "UserSetting",
  data: () => ({
    open: false
  }),
  methods: {
    close() {
      this.open = false;
    }
  },
  mounted() {
    this.$root.$on("userSettings", data => {
      this.open = data;
    });
  }
});
</script>

<style scoped>
.v-list {
  padding-left: 0;
  padding-right: 1%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}

.navigation-drawer {
  margin-top: 60px;
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
