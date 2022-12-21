<template>
  <div>
    <nav-component />
    <info-component />
  </div>
</template>

<script>
import InfoComponent from "@/components/InfoComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  components: { InfoComponent, NavComponent },
  name: "InfoView",
};
</script>
