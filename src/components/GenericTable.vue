<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right" v-for="header in data.headers">{{header.text}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,key) in items.courses" :key="item.name">
                    <td v-for="header in data.headers">{{item[header.value]}}
                    </td>
                    <td>
                    <v-icon
                            small
                            class="fas fa-trash-alt"
                            @click="deleteItem(key)"
                    ></v-icon>
                        <router-link :to="`/${data.type}/${key}`">
                            <v-icon
                                    small
                                    class="fas fa-bolt"
                            >
                            </v-icon>
                        </router-link>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    import storageDriver from "../middelware/StorageDriver";
    import firebaseApi from "../middelware/firebaseA";

    export default {
        name: "GenericTable",
        props: ['data'],
        data: () => ({
            items: []
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
                const data = null;
                firebaseApi.deleteData(data, id);
                this.getData()
            },
            async getData(){
                this.items = await firebaseApi.getUserData();
            },
        },
        async created() {
            let path = [`courses`]
            this.items = await firebaseApi.getUserData(path)
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