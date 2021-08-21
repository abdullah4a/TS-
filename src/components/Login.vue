<template>
  <div>
    <form action="post" @submit="login">
      <label for="UName">Enter UserName</label>
      <input type="text" id="UName " />
      <label for="Password">Enter Password</label>
      <input type="password" id="Password" />
      <input type="submit" value="Login" />
    </form></div
></template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Login extends Vue {
  private Uname = "";
  private password = "";
}
</script>
