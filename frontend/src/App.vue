<template>
  <div id="app">
    <v-main-wrapper/>
  </div>
</template>

<script>
import VMainWrapper from "@/components/v-main-wrapper";


export default {
  name: 'App',
  components: {
    VMainWrapper
  },
  props: {},
  data(){
    return{}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
