<template>
  <tbody>
    <tr class="bg-gray-400 border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {{ personas1.nombre }}
      </td>
      <td class="py-4 px-6 text-gray-900 dark:text-white">
        {{ personas1.apellido }}
      </td>
      <td class="py-4 px-6 text-gray-900 dark:text-white">
        {{ personas1.dni }}
      </td>
      <td class="py-4 px-6 text-gray-900 dark:text-white">
        {{ personas1.profesion }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TableComponent1",

  props: {
    personas1: Object,
  },
};
</script>
