<template>
  <div>
    <h2 class="text-xl font-semibold">Información del producto</h2>
    <div
      class="w-full max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img class="p-8 rounded-t-lg" :src="imagen" alt="IMAGEN DEL PRODUCTO" />
      <div class="px-5 pb-5">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          NOMBRE DEL PRODUCTO
        </h5>
        <div>
          <p>Info del producto</p>
          <p>+ detalles</p>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >$ PRECIO DEL PRODUCTO</span
          >
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Añadir al Carrito</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
