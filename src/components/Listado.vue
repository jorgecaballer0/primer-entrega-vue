<template>
  <div>
    <h1>Productos</h1>
    <div v-for="(producto, i) of productos" :key="i">
      <img src="producto.imagen" alt="ACA VA LA IMAGEN" />
      <p>{{ producto.nombre }}</p>
      <p>{{ producto.marca }}</p>
      <p>{{ producto.precio }}</p>
      <div>
        <button>Comprar</button>
        <button>+ Info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListadoComponent",

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
      ],
    };
  },
};
</script>

<style></style>
