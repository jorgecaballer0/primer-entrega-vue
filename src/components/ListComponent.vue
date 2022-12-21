<template>
  <div class="my-10">
    <h1 class="my-6 text-4xl font-semibold text-center">Productos</h1>
    <div class="flex flex-wrap justify-center gap-6 mx-6">
      <CardComponent
        v-for="(producto, i) of productos"
        :key="i"
        :productos="producto"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import axios from "axios";
// import InfoComponent from "./InfoComponent.vue";

export default {
  components: { CardComponent },
  name: "ListComponent",
  data() {
    return {
      productos: [],
    };
  },
  created() {
    // LLAMADA A API DE PRODUCTOS AXIOS
    const GETURL = "https://63a23154a543280f776af0c4.mockapi.io/productos";
    axios
      .get(GETURL)
      .then((response) => {
        this.productos = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
