<template>
  <div>
    <div><h1>Login Page</h1></div>
    <div v-if="error" class="errors">
      <strong>Errors</strong>
      <ul>
        <li v-for="err in error" :key="err">{{ err }}</li>
      </ul>
    </div>
    <form @submit="login">
      <label for="UName">Enter UserName</label>
      <input type="text" id="UName " v-model="Uname" />
      <label for="Password">Enter Password</label>
      <input type="password" id="Password" v-model="password" />
      <input type="submit" value="Login" />
      <input
        type="button"
        @click="$router.push({ name: 'Register' })"
        value="Register"
      />
    </form></div
></template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Login extends Vue {
  private Uname = "";
  private password = "";
  private error = [""];
  login(e: any) {
    if (this.Uname && this.password) {
      if (this.Uname === "abdullah4a" && this.password === "abc") {
        this.$router.push({ name: "Home" });
      } else {
        this.error.push("User Name Or Password is Invaild");
      }
    }
    if (this.Uname === "") {
      this.error.push("User Name is Required!");
    }
    if (this.password === "") {
      this.error.push("Password is Required!");
    }
    e.preventDefault();
  }
}
</script>
<style scoped>
.errors {
  color: red;
  font-size: 18px;
}
</style>
