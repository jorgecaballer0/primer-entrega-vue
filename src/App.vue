<template>
  <div id="app">
    <lista />
    <LoginComponent />
    <RegistroComponent />
    <CarritoComponent />
    <InfoComponent />
    <ListadoComponent />
  </div>
</template>

<script>
import CarritoComponent from "./components/Carrito.vue";
import InfoComponent from "./components/Info.vue";
import ListadoComponent from "./components/Listado.vue";
import LoginComponent from "./components/Login.vue";
import RegistroComponent from "./components/Registro.vue";
import Lista from "./components/Tabla/Lista.vue";

export default {
  name: "App",
  components: {
    ListadoComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    InfoComponent,
    Lista,
  },
};
</script>

<style></style>
