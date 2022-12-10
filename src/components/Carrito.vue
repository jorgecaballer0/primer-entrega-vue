<template>
  <div class="mb-5">
    <h2>Productos agregados al carrito</h2>
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">ID</th>
          <th scope="col" class="py-3 px-6">Producto</th>
          <th scope="col" class="py-3 px-6">Cantidad</th>
          <th scope="col" class="py-3 px-6">$</th>
          <th scope="col" class="py-3 px-6">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-gray-400 border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 px-6 text-gray-900 dark:text-white">1</td>
          <td
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Producto "X"
          </td>
          <td class="py-4 px-6 text-gray-900 dark:text-white">4</td>
          <td class="py-4 px-6 text-gray-900 dark:text-white">580</td>
          <td class="py-4 px-6 text-gray-900 dark:text-white">2320</td>
        </tr>
      </tbody>
    </table>
    <button>Volver</button>
  </div>
</template>

<script>
export default {
  name: "CartComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
