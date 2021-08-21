<template>
  <div>
    <div>
      <h1>Register Page</h1>
    </div>
    <form @submit="login">
      <label for="UName">Enter UserName</label>
      <input type="text" id="UName " v-model="Uname" />
      <label for="Email">Enter Email</label>
      <input type="email" id="Email" />
      <label for="Password">Enter Password</label>
      <input type="password" id="Password" v-model="password" />
      <label for="Confirmpassword">Confirm Password</label>
      <input type="password" id="Confirmpassword" />
      <input
        type="button"
        value="Login"
        @click="$router.push({ name: 'Login' })"
      />
      <input type="submit" value="Register" />
    </form></div
></template>
<script lang="ts">
import router from "@/router";
import { Vue } from "vue-property-decorator";
export default class Login extends Vue {
  private Uname = "";
  private password = "";
  private error = [""];

  Register(e: any) {
    if (this.Uname && this.password) {
      this.$router.push({ name: "Home" });
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
