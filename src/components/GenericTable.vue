<template>
    <v-container>
        <v-data-table
                :headers="data.headers"
                :items-per-page="5"
                :items="data.items"
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
                <router-link :to="data.generation === 2 ? `/${data.type[0]}/${cid}/${data.type[1]}/${item.id}` : `/${data.type}/${item.id}`">
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


    export default {
        name: "GenericTable",
        props: ['data', 'cid'],
        data: () => ({

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


        watch:{
            addedNewItem(){
                this.getData();
            }
        }
    }
</script>

<style scoped>

</style>