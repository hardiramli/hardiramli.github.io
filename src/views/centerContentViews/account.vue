<template>
  <div>
    <v-breadcrumbs :items="links" divider=">"></v-breadcrumbs>
    <v-container fluid full-width class="hello">
      <v-tabs v-model="selected" active-class="active" hide-slider height="100px" fixed-tabs show-arrows>
        <v-tab v-for="item in accounts" :key="item.name" class="section tabstyle mx-2">
          <template v-slot:default>
               <v-container>
                 <v-row no-gutters>
                   <v-col class="col-6 text-justify">
                     {{item.name}}
                   </v-col>
                   <v-col class="col-6"></v-col>
                 </v-row>
                 <v-row>
                   <v-col class="col-6 text-justify">
                     IDR 
                   </v-col>
                   <v-col class="col-6"></v-col>
                 </v-row>
                 <v-row no-gutters>
                   <v-col class="col-6 text-justify">
                     1234567890 
                   </v-col>
                   <v-col class="col-6"></v-col>
                 </v-row>
               </v-container>
          </template>
          
        </v-tab>
      </v-tabs>
      <v-tabs-items class="mt-5" v-model="selected">
        <v-tab-item v-for="item in accounts" :key="item.name">
          <v-data-table :headers="item.headers"
          :items="item.details">
          <template v-slot:item.controls="props">
            <v-btn text class="primary" small @click="onButtonClick(props.item, item.name)">Lihat</v-btn>
      </template></v-data-table>
        </v-tab-item>
      </v-tabs-items>
    
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import Account from "@/components/centerContentComponents/AccountComponent"

export default Vue.extend({
  components:{
    
  },
  methods: {
    onButtonClick(item, name) {
      const id = item.number;
      const jenis = name;
      this.$router.push({ name: 'Detail Saldo', params: { jenis, id } })
      console.log('click on ' + id)
    }
  },
  data:()=>({
    selected:"Tabungan",
    accounts:[
      {
        name:"Tabungan",
        headers:[
          {
            text:'Nomor Rekening',
            value:'number',
            class:'blue-title white--text'
          },
          {
            text:'Nama Rekening',
            value:'name',
            class:'blue-title white--text'
          },
          {
            text:'Nama Produk',
            value:'product',
            class:'blue-title white--text'
          },
          {
            text:'Mata Uang',
            value:'currency',
            class:'blue-title white--text'
          },
          {
            text:'Saldo',
            value:'balance',
            class:'blue-title white--text'
          },
          { text: "Mutation", 
            value: "controls", 
            sortable: false,
            class:'blue-title white--text'
          }],
        details:[{
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Tabungan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Tabungan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Tabungan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          }]
      },
      {
        name:"Giro",
        headers:[
          {
            text:'Nomor Rekening',
            value:'number',
            class:'blue-title white--text'
          },
          {
            text:'Nama Rekening',
            value:'name',
            class:'blue-title white--text'
          },
          {
            text:'Nama Produk',
            value:'product',
            class:'blue-title white--text'
          },
          {
            text:'Mata Uang',
            value:'currency',
            class:'blue-title white--text'
          },
          {
            text:'Saldo',
            value:'balance',
            class:'blue-title white--text'
          },
          { text: "Mutation", 
            value: "controls", 
            sortable: false,
            class:'blue-title white--text'
          }],
        details:[{
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Giro iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Giro iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Giro iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          }]
      },
      {
        name:"Deposito",
        headers:[
          {
            text:'Nomor Rekening',
            value:'number',
            class:'blue-title white--text'
          },
          {
            text:'Nama Rekening',
            value:'name',
            class:'blue-title white--text'
          },
          {
            text:'Nama Produk',
            value:'product',
            class:'blue-title white--text'
          },
          {
            text:'Mata Uang',
            value:'currency',
            class:'blue-title white--text'
          },
          {
            text:'Saldo',
            value:'balance',
            class:'blue-title white--text'
          },
          { text: "Mutation", 
            value: "controls", 
            sortable: false,
            class:'blue-title white--text'
          }],
        details:[{
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Deposito iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Deposito iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Deposito iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          }]
      },
      {
        name:"Pembiayaan",
        headers:[
          {
            text:'Nomor Rekening',
            value:'number',
            class:'blue-title white--text'
          },
          {
            text:'Nama Rekening',
            value:'name',
            class:'blue-title white--text'
          },
          {
            text:'Nama Produk',
            value:'product',
            class:'blue-title white--text'
          },
          {
            text:'Mata Uang',
            value:'currency',
            class:'blue-title white--text'
          },
          {
            text:'Saldo',
            value:'balance',
            class:'blue-title white--text'
          },
          { text: "Mutation", 
            value: "controls", 
            sortable: false,
            class:'blue-title white--text'
          }],
        details:[{
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Pembiayaan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Pembiayaan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          },
          {
          number:'3010141244',
          name:"Muhammad John Doe", 
          product:"Pembiayaan iB Hijrah Prima (Zakat)", 
          currency:"IDR",
          balance:12000000
          }]
      }
    ],
    links:[
      {
        text:"Beranda",
        disabled:false,
        to:"/"
      },
      {
        text:"Rekening",
        disabled:true,
        to:"/"
      }
    ]
  })


});
</script>

<style scoped>
.home {
    background: #42b983;
}

.hello {
    float: right;
}

.tabstyle{
text-transform: none !important;
color: #0094ff !important; 
}


.active{
  background:#0094ff;
  color: white !important;
}

</style>
