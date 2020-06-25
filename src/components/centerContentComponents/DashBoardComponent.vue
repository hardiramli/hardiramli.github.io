<template>
  <v-container fluid full-width>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <div class="section">
              <h4 class="blue-title">Aktivitas Terakhir User</h4>
              <div>
                ------------------
              </div>
            </div>
          </v-col>
        </v-row>
         <v-row>
          <v-col>
          <div class="section">
              <h4 class="blue-title">Portofolio</h4>
              <div>
                ------------------
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
        
      <v-col class="col-5">
        <v-row>
          <v-col>
            <div class="section">
              <h5>Total Saldo</h5>
              <p class="currency">Rp. 123.456.789,00</p>
            </div>
          </v-col>
          <v-col>
            <div class="section">
              <h5>Income</h5>
              <p class="currency">Rp. 123.456.789,00</p>
            </div>
          </v-col>
          <v-col>
            <div class="section">
              <h5>Outcome</h5>
              <p class="currency">Rp. 123.456.789,00</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="section">
              <h4 class="blue-title">Smart Golas</h4>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8">
                  <p>icon image</p>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col>
            <div class="section">
              <h4 class="blue-title">Smart Protection</h4>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8">
                  <p>icon image</p>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="section">
              <h4 class="blue-title">Smart Spending</h4>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8">
                  <p>icon image</p>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col>
            <div class="section">
              <h4 class="blue-title">Smart Administration</h4>
              <p class="smart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
              <v-row>
                <v-col class="pl-8">
                  <p>icon image</p>
                </v-col>
                <v-col class="col-5">
                  <p class="smart-link">klik disini</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col>
          <div class="section">
              <h4 class="blue-title">Favorite</h4>
              <div>
                ------------------
              </div>
          </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div class="section">
              <h4 class="blue-title">Information</h4>
              <div>
                ------------------
              </div>
          </div>
          </v-col>
        </v-row>
      </v-col>  
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DashBoard",

  data: () => ({
  })
});
</script>

<style scoped>
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
    padding:2px;
    font-size: 12px;
  }
  .currency{
    padding-top:10px;
    padding-left:8px;
    font-size: 12px;
  }
</style>