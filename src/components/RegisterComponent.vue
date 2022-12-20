<template>
  <div
    class="w-full max-w-2xl p-4 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form id="formulario" @submit.prevent="validarForm" @submit="agregarUsuario">
      <h5 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Registrarse
      </h5>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          pattern="[A-z]{1,18}"
          title="Debe contener sólo letras mínusculas y mayúsculas, entre 1 - 18 caracteres"
          id="nombre"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          v-model.lazy.trim="nombre"
          required
        />
        <label
          for="nombre"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Nombre (1 - 18 caracteres)</label
        >
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          title="Introduzca el formato correcto"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          id="email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          v-model.lazy.trim="email"
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email</label
        >
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          pattern=".{8,}"
          title="Debe contener mínimo 8 caracteres"
          v-model.lazy.trim="pass"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Contraseña</label
        >
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          pattern=".{8,}"
          title="Debe contener mínimo 8 caracteres"
          v-model.lazy.trim="passConfirm"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirmar contraseña</label
        >
      </div>

      <fieldset>
        <div class="flex items-center mb-4">
          <input
            id="checkbox-1"
            v-model="admin"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checkbox-3"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Obtener permisos de administrador</label
          >
        </div>
      </fieldset>
      <button
        type="submit"
        class="w-full mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrarme
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Ya tenés una cuenta?
        <a
          @click="cambiarRuta({ path: '/ingresar' })"
          class="text-blue-700 cursor-pointer hover:underline dark:text-blue-500"
          >Ingresar</a
        >
      </div>
    </form>
    <div class="text-center" v-if="errores.length > 0">
      <h4 class="font-bold text-white">Errores</h4>
      <ul>
        <li class="text-red-400" v-for="(error, i) of errores" v-bind:key="i">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterComponent",

  data() {
    return {
      nombre: "",
      email: "",
      pass: "",
      passConfirm: "",
      admin: "",
      errores: [],
    };
  },

  methods: {
    cambiarRuta(ruta) {
      this.$router.push(ruta);
    },
    validarForm() {
      if (
        this.nombre &&
        this.email &&
        this.pass &&
        this.passConfirm === this.pass
      ) {
        alert("Usuario cargado");
        setTimeout(() => {
          document.getElementById("formulario").reset();
          (this.nombre = ""),
            (this.email = ""),
            (this.pass = ""),
            (this.passConfirm = ""),
            (this.errores = []);
        }, 500);
        return true;
      }
      if (!this.nombre) {
        this.errores.push("El nombre es obligatorio.");
      }
      if (!this.email) {
        this.errores.push("El email es obligatorio.");
      }
      if (!this.pass) {
        this.errores.push("La contraseña es obligatoria.");
      }
      if (this.passConfirm !== this.pass) {
        this.errores.push("Las contraseñas no coinciden");
      }
    },
    agregarUsuario() {
      const URLPOST = "https://63a23154a543280f776af0c4.mockapi.io/usuarios";
      const newUser = {
        nombre: this.nombre,
        email: this.email,
        pass: this.pass,
        admin: this.admin,
      };
      axios.post(URLPOST, newUser).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
