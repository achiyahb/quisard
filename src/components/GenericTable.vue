<template>
    <v-container>
        <v-data-table
                :headers="data.headers"
                :items-per-page="5"
                :items="tableArray"
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
                <router-link :to="`/${data.type}/${keyTable[0]}`">
                    <v-icon
                            small
                            class="fas fa-bolt"
                    >
                    </v-icon>
                </router-link>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import storageDriver from "../middelware/StorageDriver";
    import firebaseApi from "../middelware/firebaseApi";

    export default {
        name: "GenericTable",
        props: ['data'],
        data: () => ({
            tableArray: [],
            keyTable: []
        }),
        methods:{
            editItem(item){
                this.editedItem = item;
                    this.dialog = true;
            },
            cancel(){
                this.dialog = false;
            },
            save(id){

                storageDriver.updateToStorage(this.item.tableName, this.editItem(), id)
                this.editedItem = {}
                this.dialog = false;
            },
            deleteItem(id){
                storageDriver.deleteFromStorage(this.item.tableName, id)
                this.getData()
            },
            getData(){
                this.items = storageDriver.getFromStorage(this.item.tableName)
            },
        },
        async created() {
            const items = await firebaseApi.getUserData();
            this.keyTable = firebaseApi.getThekey(items);
            this.tableArray = firebaseApi.tableOfItems(items);
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