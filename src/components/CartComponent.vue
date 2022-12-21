<template>
  <div class="text-center">
    <h2 class="text-xl font-semibold">Productos agregados al carrito</h2>
    <table
      class="w-1/2 mx-auto my-6 text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Producto</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="producto of carrito"
          :key="producto.id"
          class="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ producto.producto }}
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              :src="producto.imagen"
              :alt="producto.producto"
            />
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">
            $ {{ parseInt(producto.precio) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-semibold text-gray-900 bg-blue-600 dark:text-white">
          <th scope="row" class="px-6 py-3 text-base">
            Productos: {{ this.carrito.length }}
          </th>
          <th scope="row" class="px-6 py-3 text-base">Total</th>
          <!-- FALTA LA FUNCION PARA SUMAR EL PRECIO DE CADA PRODUCTO -->
          <td class="px-6 py-3">ACA VA EL TOTAL</td>
        </tr>
      </tfoot>
    </table>

    <div class="flex justify-center gap-4">
      <button
        type="button"
        @click="cambiarRuta({ path: '/' })"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Seguir comprando
      </button>
      <button
        type="button"
        @click="finalizarCompra"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Finalizar compra
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CartComponent",

  data() {
    return {
      carrito: [],
    };
  },
  created() {
    // LLAMADA API DE PEDIDOS AXIOS
    const GETURL = "https://63a23154a543280f776af0c4.mockapi.io/pedidos";
    axios
      .get(GETURL)
      .then((response) => {
        this.carrito = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    cambiarRuta(ruta) {
      this.$router.push(ruta);
    },
    finalizarCompra() {
      alert(
        `Finalizaste tu compra, con un total de ${this.carrito.length} productos`
      );
      const URLPOST =
        "https://63a23154a543280f776af0c4.mockapi.io/comprasFinalizadas";
      const compra = {
        cantidad: this.carrito.length,
      };
      axios.post(URLPOST, compra).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style></style>
