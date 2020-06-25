<template>
  <div class="home">
    <v-container fluid full-width py-0 class="hello">
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col class="col-3">
        <v-row>
          <BluePanel :title="'Aktivitas Terakhir'" :borderOnly="false">
                <LastActivity></LastActivity>
          </BluePanel>
        </v-row>
         <v-row align="center" justify="center">
          <BluePanel :title="'Portofolio'" :borderOnly="false">
                <Portofolio></Portofolio>
          </BluePanel>
        </v-row>
      </v-col>
        
      <v-col class="col-5">
        <v-row>
          <BluePanel :title="'Total Saldo'" :borderOnly="true">
                <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
          <BluePanel :title="'Pemasukan'" :borderOnly="true">
                <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
          <BluePanel :title="'Pengeluaran'" :borderOnly="true">
                <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Smart Goals'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8 col-7">
                  <v-img contain src="@/assets/ICON POST LOGIN/Goals.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
          <BluePanel :title="'Smart Protection'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8 col-7">
                  <v-img contain src="@/assets/ICON POST LOGIN/Protection.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Smart Spending'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8 col-7">
                  <v-img contain src="@/assets/ICON POST LOGIN/Spending.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-4">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
          <BluePanel :title="'Smart Administration'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8 col-7">
                  <v-img contain src="@/assets/ICON POST LOGIN/Administration.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
        </v-row>
      </v-col>

      <v-col class="col-4">
        <v-row>
          <BluePanel :title="'Favorit'" :borderOnly="false">
                <Favorite></Favorite>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Informasi'" :borderOnly="false">
                <Information></Information>
          </BluePanel>
        </v-row>
      </v-col>  
    </v-row>
    <!-- mobile view -->
    <v-row v-else> 
      <v-col class="col-12">
        <v-row>
          <BluePanel :title="'Aktivitas Terakhir'" :borderOnly="false">
                <LastActivity></LastActivity>
          </BluePanel>
        </v-row>
         <v-row>
          <BluePanel :title="'Favorit'" :borderOnly="false">
                <Favorite></Favorite>
          </BluePanel>
          <BluePanel :title="'Portofolio'" :borderOnly="false">
                <Portofolio></Portofolio>
          </BluePanel>          
        </v-row>
        <v-row>
          <BluePanel :title="'Total Saldo'" :borderOnly="true">
            <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
          <BluePanel :title="'Pemasukan'" :borderOnly="true">
              <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
          <BluePanel :title="'Pengeluaran'" :borderOnly="true">
              <p class="currency">Rp. 123.456.789,00</p>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Smart Goals'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-6">
                  <v-img contain src="@/assets/ICON POST LOGIN/Goals.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-6">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
          <BluePanel :title="'Smart Protection'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-6">
                  <v-img contain src="@/assets/ICON POST LOGIN/Protection.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-6">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Smart Spending'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-6">
                  <v-img contain src="@/assets/ICON POST LOGIN/Spending.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-6">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
          <BluePanel :title="'Smart Administration'" :borderOnly="false">
              <div>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-6">
                  <v-img contain src="@/assets/ICON POST LOGIN/Administration.png" height="70" width="70"></v-img>
                </v-col>
                <v-col class="col-6">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
              </div>
          </BluePanel>
        </v-row>
        <v-row>
          <BluePanel :title="'Informasi'" :borderOnly="false">
                <Information></Information>
          </BluePanel>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import LastActivity from "@/components/Dashboard/LastActivity.vue";
import BluePanel from "@/components/Dashboard/BluePanel.vue";
import Portofolio from "@/components/Dashboard/Portofolio.vue";
import Information from "@/components/Dashboard/Information.vue";
import Favorite from "@/components/Dashboard/Favorite.vue"

export default {
  name: "Home",
  components: {
    LastActivity,
    BluePanel,
    Portofolio,
    Information,
    Favorite
  }
};
</script>

<style scoped>
.home {
  background: #42b983;
}
.hello {
  float: right;
}
.section{
    border-radius: 10px;
    border: 1px solid #c6d7e4;
  }
  .section h4{
    padding:4px;
    padding-left:8px;
    border-top-left-radius : 5px;
    border-top-right-radius : 5px;
  }
  .section h5{
    padding:4px;
    padding-left:8px;
  }
  .blue-title{
    background:#0094ff;
    color:white;
  }
  .smart-description{
    padding:20px;
    padding-left:20px;
    font-size: 12px;
  }
  .smart-link{
    
    font-size: 12px;
  }
  .currency{
    padding-top:10px;
    padding-left:8px;
    font-size: 12px;
  }
</style>
