<template>
  <div>
    <GenericTable :data="data" :cid="cid"></GenericTable>
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <router-link :to="`/courses/${$route.params.cid}/chapters/new-chapter`">
          <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark>fa-plus</v-icon>
          </v-btn>
        </router-link>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import storageDriver from "../middelware/StorageDriver";
  import GenericTable from "./GenericTable";

  export default {
    name: "chapters",
    props: ['cid'],
    components: {GenericTable},
    data: () =>({
      dialog: false,
      data: {
        headers: [
          {
            text: 'שם הפרק',
            value: 'chapterName',
            align: 'start',
            sortable: 'true',

          },
          { text: 'פרטים', value: 'chapterDetails' },
          { text: 'מספר השאלות', value: 'questionsNumber' },
          // { text: 'פעולות', value: 'actions', sortable: false ,style:'none'},
        ],
        pathNum: 3
      },

      editedItem: {}
    }),
  }
</script>

<style>
  h1{
    justify-content: center;
  }
</style>