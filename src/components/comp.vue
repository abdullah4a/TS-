<template>
  <div class="hello">
    <h1 v-if="firstName">Assalam o Alaikum {{ firstName }}</h1>
    <h2 v-if="lastName">
      Mr. {{ lastName }} <br />
      we're Happy to see you here
    </h2>
    <label for="btn">Click on 'Enter Name'</label><br />
    <button class="btn" @click="NameFunction">Enter Name</button>
    <div v-if="NamesArray">
      <h2>Entered Names are in Here :</h2>
      <h5 v-for="arr in NamesArray" :key="arr">{{ arr }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import baseClass from "./classes/baseClass";
@Component
export default class HelloWorld extends baseClass {
  private superName = "";
  private firstName = "";
  private lastName = "";
  private NamesArray = [""];
  NameFunction() {
    this.superName = this.functionName();
    this.NamesArray.push(this.superName);
    this.firstName = this.superName
      ?.split(" ")
      .slice(0, -1)
      .join(" ");
    this.lastName = this.superName
      ?.split(" ")
      .splice(-1)
      .join(" ");
  }
}
</script>
