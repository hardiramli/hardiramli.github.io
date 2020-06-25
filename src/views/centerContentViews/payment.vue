<template>
  <div class="payment">
    <Payment class="hello"/>
  </div>
</template>

<script>

import Payment from "@/components/centerContentComponents/PaymentComponent"

export default {
  components:{
    Payment
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
</style>
