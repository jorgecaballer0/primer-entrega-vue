<template>
  <div>
    <nav-component />
    <cart-component />
  </div>
</template>

<script>
import CartComponent from "@/components/CartComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  components: { CartComponent, NavComponent },
  name: "CartView",
};
</script>
