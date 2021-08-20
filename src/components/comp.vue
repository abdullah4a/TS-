<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @onClick="CallaFuntion">Show</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import baseClass from "./classes/baseClass";
@Component
export default class HelloWorld extends baseClass {
  CallaFuntion() {
    alert("The Class is");
  }
}
</script>
