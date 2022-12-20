<template>
  <div>
    <nav-component />
    <list-component />
  </div>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  components: { ListComponent, NavComponent },
  name: "ListView",
};
</script>
