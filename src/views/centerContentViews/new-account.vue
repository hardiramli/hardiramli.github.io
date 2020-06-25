<template>
  <div class="payment">
    <CreateNew class="hello"/>
  </div>
</template>

<script>

import CreateNew from "@/components/centerContentComponents/CreateAccountComponent"

export default {
  components:{
    CreateNew
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
