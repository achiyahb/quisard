<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right">שם הקורס</th>
                    <th class="text-right">מטרת הקורס</th>
                    <th class="text-right">פרטים</th>
                    <th class="text-right">שם המחבר</th>
                    <th class="text-right">פרטי המחבר</th>
                    <th class="text-right">פעולות</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,key) in items.courses" :key="item.name">
                    <td>{{ item.courseName }}</td>
                    <td>{{ item.courseDetails }}</td>
                    <td>{{ item.founderName }}</td>
                    <td>{{ item.founderDetails }}</td>
                    <td>{{ item.goal }}</td>
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
                        @click="deleteItem(keyTable[0])"
                >
                </v-icon>
                <router-link :to="`/${data.type}/${keyTable[1]}`">
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
            keyTable: [],
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
                const items = await firebaseApi.getUserData();
            },
        },
        async created() {
            const items = await firebaseApi.getUserData();
            this.items = items;
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