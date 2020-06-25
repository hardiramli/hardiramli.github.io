<template>
  <div>
      <v-breadcrumbs :items="links" divider=">"></v-breadcrumbs>
      <v-container>
        <v-expansion-panels accordion flat v-model="panel">
            <v-expansion-panel>
                <v-expansion-panel-header class="section blue-title"><h4>Informasi Rekening</h4></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container v-if="$vuetify.breakpoint.smAndUp">
                            <v-row class="no-gutter">
                                <v-col>Nomor Rekening <span class="right">:</span></v-col>
                                <v-col>{{id}}</v-col>
                                <v-col>Mata Uang <span class="right">:</span></v-col>
                                <v-col>IDR</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Nama Produk <span class="right">:</span></v-col>
                                <v-col>Contoh</v-col>
                                <v-col>Saldo <span class="right">:</span></v-col>
                                <v-col>1234567890</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Nama Rekening <span class="right">:</span></v-col>
                                <v-col>Muhammad John Doe</v-col>
                                <v-col class="col-6"></v-col>
                            </v-row>
                        </v-container>
                        <v-container class="mobileFont" v-else>
                            <v-row class="no-gutter">
                                <v-col>Nomor Rekening <span class="right">:</span></v-col>
                                <v-col>{{id}}</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Mata Uang <span class="right">:</span></v-col>
                                <v-col>IDR</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Nama Produk <span class="right">:</span></v-col>
                                <v-col>Contoh</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Saldo <span class="right">:</span></v-col>
                                <v-col>1234567890</v-col>
                            </v-row>
                            <v-row>
                                <v-col>Nama Rekening <span class="right">:</span></v-col>
                                <v-col>Muhammad John Doe</v-col>
                            </v-row>
                        </v-container>
                    </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels accordion flat v-if="jenis != 'Tabungan'">
            <v-expansion-panel>
                <v-expansion-panel-header class="section blue-title"><h4>Informasi Tambahan</h4></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            Detail Tambahan Giro/Deposito/Pembayaran
                        </v-container>
                    </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-data-table :headers="item.headers"
                            :items="item.details" hide-default-footer>
                            <template v-slot:top="{ pagination, options, updateOptions }">
                            <v-data-footer 
                                :pagination="pagination" 
                                :options="options"
                                @update:options="updateOptions"
                                items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                            </template></v-data-table>
      </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name:"Balance",
    props: [
        'id',
        'jenis'
        ],
    data:()=>({
        panel:0,
        item:{
            headers:[
            {
                text:'Tanggal',
                value:'date',
                class:'blue-title white--text'
            },
            {
                text:'Transaksi',
                value:'transaction',
                class:'blue-title white--text'
            },
            {
                text:'Debet',
                value:'debet',
                class:'blue-title white--text'
            },
            {
                text:'Kredit',
                value:'credit',
                class:'blue-title white--text'
            },
            {
                text:'Saldo',
                value:'balance',
                class:'blue-title white--text'
            }],
            details:[
            {
                date:"19122020",
                transaction:"aaaaa",
                debet:"99999",
                credit:"",
                balance:"99999"
            },
            {
                date:"19122020",
                transaction:"aaaaa",
                debet:"99999",
                credit:"",
                balance:"99999"
            },
            {
                date:"19122020",
                transaction:"aaaaa",
                debet:"99999",
                credit:"",
                balance:"99999"
            }]
        },
        links:[
        {
            text:"Beranda",
            disabled:false,
            to:"/"
        },
        {
            text:"Rekening",
            disabled:false,
            to:"/accounts"
        },
        {
            text:"Detail Saldo",
            disabled:true,
            to:"/accounts"
        }]
    })
})
</script>

<style>
    .right{
        float:right;
    }

    .mobileFont{
        font-size: 12px;
    }
</style>