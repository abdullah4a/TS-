<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <comp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import comp from "./components/comp.vue";

@Component({
  components: {
    comp,
  },
})
export default class App extends Vue {}
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  padding: 10px;
}
</style>
