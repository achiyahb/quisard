<template>
  <v-container>
    <InputCom></InputCom>
    <TableCom></TableCom>
  </v-container>
</template>

<script>
  import TableCom from "./TableCom";
  import InputCom from "./InputCom";

  export default {
    name: 'HelloWorld',
    components: {InputCom,TableCom},

  }
</script>
