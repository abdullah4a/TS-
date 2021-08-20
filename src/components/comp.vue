<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn" @click="NameFunction">Show</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import baseClass from "./classes/baseClass";
@Component
export default class HelloWorld extends baseClass {
  NameFunction() {
    this.functionName();
  }
}
</script>
