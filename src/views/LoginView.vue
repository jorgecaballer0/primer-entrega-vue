<template>
  <div>
    <nav-component />
    <login-component />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  components: { LoginComponent, NavComponent },
  name: "LoginView",
};
</script>
