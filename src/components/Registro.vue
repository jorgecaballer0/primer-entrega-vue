<template>
  <div class="mb-5">
    <h1>Registrate</h1>
    <div>
      <label>Nombre</label>
      <input type="text" name="nombre" class="border" />
      <label>Apellido</label>
      <input type="text" name="apellido" class="border" />
      <label>Contraseña</label>
      <input type="password" name="password" class="border" />
      <label>Repetir contraseña</label>
      <input type="password" name="password" class="border" />
    </div>
    <div>
      <button>Registrarme</button>
      <p>Ya estás registrado?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistroComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
