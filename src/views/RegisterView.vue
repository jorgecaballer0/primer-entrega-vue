<template>
  <div>
    <nav-component />
    <register-component />
  </div>
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  components: { RegisterComponent, NavComponent },
  name: "RegisterView",
};
</script>
