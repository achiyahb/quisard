<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right" v-for="header in data.headers">{{header.text}}</th>
                    <th class="text-right">פעולות</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,key) in items" :key="item .name">
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
    import firebase from 'firebase/app'
    import 'firebase/database'

    export default {
        name: "GenericTable",
        props: ['data', 'cid'],
        data: () => ({
            items: []
        }),
        methods:{
            deleteItem(id){
                const path = ["courses"]
                path.push(id)
                firebaseApi.deleteData(path);
            },
        },
        // firebase: {
        //     items: firebaseApi.db.ref(),
        // },
         created() {
            const path = ["courses"]
            console.log(this.$route.params.cid)
            if (this.$route.params.cid){
            const params = this.$route.params.cid
            const part = "chapters"
            path.push(params);
            path.push(part);
            }
            const self = this;
            firebaseApi.getUserData(path)
             .then(result => {
                 self.items = result
             })
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