<template>
  <v-row class="mx-auto" align="center">
      <v-col class="col-2 pa-0 pl-1" no-gutters>
          <v-icon>delete</v-icon>
          <v-icon>create</v-icon>
      </v-col>
        
      <v-col class="col-10">
        <v-card>
            <v-container>
            <v-row align="center" no-gutters>
                <v-col class="col-3 pa-0" no-gutters>
                    <v-avatar color="indigo" size="32">
                        <span class="white--text headline">32</span>
                    </v-avatar>
                </v-col>
                <v-col class="card-detail">
                    <p>{{source.name}}</p>
                    <p>{{source.detail}}</p>
                    <p>Rp. {{source.amount}}</p>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
      </v-col>
      
  </v-row>
</template>

<script>
export default {
  name: 'FavoriteListContentsItem',
  props: {
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
    .card-detail p{
        font-size:12px;
        margin:0;
        padding:0;
    }
</style>