<template>
  <div class="home">
    <HelloWorld class="hello" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
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
