<template>
  <div class="mb-5">
    <h1>Ingresar</h1>
    <div>
      <label>Tu email</label>
      <input type="email" name="email" class="border" />
      <label>Tu contraseña</label>
      <input type="password" name="password" class="border" />
    </div>
    <div>
      <button>Ingresar</button>
      <p>Si no tenés una cuenta, registrate</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
