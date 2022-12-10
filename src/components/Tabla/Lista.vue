<template>
  <div class="overflow-x-auto relative flex flex-col gap-4 mx-12">
    <!-- TABLA 1 -->
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Nombre</th>
          <th scope="col" class="py-3 px-6">Apellido</th>
          <th scope="col" class="py-3 px-6">DNI</th>
          <th scope="col" class="py-3 px-6">Profesión</th>
        </tr>
      </thead>
      <TableComponent1
        v-for="(persona, i) of arrayPersonas1"
        :key="i"
        :personas1="persona"
      />
    </table>
  </div>
</template>

<script>
import TableComponent1 from "./Tabla.vue";

export default {
  name: "TableListComponent",
  components: {
    TableComponent1,
  },

  data() {
    return {
      arrayPersonas1: [
        {
          nombre: "Juan",
          apellido: "Perez",
          dni: "45324804",
          profesion: "Arquitecto",
        },
        {
          nombre: "Martin",
          apellido: "Gonzalez",
          dni: "32657891",
          profesion: "Programador",
        },
        {
          nombre: "Agustin",
          apellido: "Sosa",
          dni: "321645789",
          profesion: "Abogado",
        },
      ],
    };
  },
};
</script>
