<template>
  <div class="my-10">
    <h1 class="text-xl font-semibold text-center">Lista de productos</h1>
    <div class="flex flex-wrap gap-8 mx-6">
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
export default {
  components: { CardComponent },
  name: "ListComponent",
  data() {
    return {
      productos: [
        {
          nombre: "producto 1",
          imagen: "../assets/logo.png",
          marca: "1",
          precio: "100",
        },
        {
          nombre: "producto 2",
          imagen: "../assets/logo.png",
          marca: "2",
          precio: "200",
        },
        {
          nombre: "producto 3",
          imagen: "../assets/logo.png",
          marca: "3",
          precio: "300",
        },
        {
          nombre: "producto 4",
          imagen: "../assets/logo.png",
          marca: "4",
          precio: "400",
        },
        {
          nombre: "producto 5",
          imagen: "../assets/logo.png",
          marca: "5",
          precio: "500",
        },
        {
          nombre: "producto 6",
          imagen: "../assets/logo.png",
          marca: "6",
          precio: "600",
        },
      ],
    };
  },
};
</script>

<style></style>
