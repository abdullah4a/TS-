<template>
  <div class="home">
    <div class="login">
      <button class="btn" @click="$router.push({ path: '/Login' })">
        Login
      </button>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <comp />
  </div>
</template>

<script>
// @ is an alias to /src
import comp from "@/components/comp.vue";

export default {
  name: "Home",
  components: {
    comp,
  },
};
</script>
