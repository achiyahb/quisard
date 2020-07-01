<template>

  <v-container>
    <v-data-table
            :headers="headers"
            :items-per-page="5"
            :items="items"
            class="elevation-1"

    >

      <template v-slot:item.actions="{ item }">
        <v-icon
                small
                class="fas fa-edit"
                @click="editItem(item)"
        >
        </v-icon>
        <v-icon
                small
                class="fas fa-trash-alt"
                @click="deleteItem(item.id)"
        >
        </v-icon>
        <router-link :to="'/item/' + item.id">
        <v-icon
                small
                class="fas fa-bolt"
        >
        </v-icon>
        </router-link>
      </template>
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Edit item</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.question" label="שאלה"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.correctAnswer" label="תשובה נכונה"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.alt1" label="מסיח 1"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.alt2" label="מסיח 2"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.alt3" label="מסיח 3"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cancel()">Cancel</v-btn> <span> </span>
              <v-btn color="blue darken-1" text  @click="save(editedItem.id)">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

    </v-data-table>
  </v-container>
</template>

<script>
  import storageDriver from "../../middelware/StorageDriver";

  const tableName = "questions";
  export default {
    name: 'TableCom',
    props: ['addedNewItem'],
    data: () =>({
      dialog: false,
      headers: [
        {
          text: 'שאלה',
          value: 'question',
          align: 'start',
          sortable: 'true',
        },
        { text: 'תשובה נכונה', value: 'correctAnswer' },
        { text: 'מסיח 1', value: 'alt1' },
        { text: 'מסיח 2', value: 'alt2' },
        { text: 'מסיח 3', value: 'alt3' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      items: storageDriver.getFromStorage(tableName),
      editedItem: {}
    }),
    methods:{
      editItem(item){
        this.editedItem = item,
        this.dialog = true;
      },
      cancel(){
        this.dialog = false;
      },
      save(id){

        storageDriver.updateToStorage(tableName, this.editItem(), id)
        this.editedItem = {}
        this.dialog = false;
      },
      deleteItem(id){
        storageDriver.deleteFromStorage(tableName, id)
        this.getData()
      },
      getData(){
        this.items = storageDriver.getFromStorage(tableName)
      },
    },
    watch:{
      addedNewItem(){
         this.getData();
      }
    }
  }
</script>

<style scoped>


</style>