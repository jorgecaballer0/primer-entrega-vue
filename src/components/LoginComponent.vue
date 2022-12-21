<template>
  <div
    class="w-full max-w-md p-4 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-6" @submit.prevent="ingresar">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        Ingresar
      </h5>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="email"
          v-model="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="tucorreo@email.com"
          required
        />
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Contraseña</label
        >
        <input
          type="password"
          v-model="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ingresar a tu cuenta
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        No estás registrado?
        <a
          @click="cambiarRuta({ path: '/registrarse' })"
          class="text-blue-700 cursor-pointer hover:underline dark:text-blue-500"
          >Crear una cuenta</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",

  data() {
    return {
      email: "",
      password: "",
      usuario: [],
    };
  },

  methods: {
    cambiarRuta(ruta) {
      this.$router.push(ruta);
    },
    ingresar() {
      const GETURL = "https://63a23154a543280f776af0c4.mockapi.io/usuarios";
      axios
        .get(GETURL)
        .then((response) => {
          this.usuario = response.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
