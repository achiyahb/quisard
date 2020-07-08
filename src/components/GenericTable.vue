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
                        <router-link v-if="$route.params.chaid" :to="`/courses/${$route.params.cid}/chapters/${$route.params.chaid}/questions/${key}`"  >
                            <v-icon
                                    small
                                    class="fas fa-bolt"
                            >
                            </v-icon>
                        </router-link>
                        <router-link v-else-if="$route.params.cid" :to="`/courses/${$route.params.cid}/chapters/${key}`"  >
                            <v-icon
                                    small
                                    class="fas fa-bolt"
                            >
                            </v-icon>
                        </router-link>
                        <router-link v-else :to="`/courses/${key}`">
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
    import firebaseInstance from '../middelware/firebase';
    import database from 'firebase/database'

    const db = firebaseInstance.firebase.database();
    export default {
        name: "GenericTable",
        props: ['data', 'cid' ,'pathNum'],
        data: () => ({
            items: []
        }),
        methods:{
            deleteItem(id){
                const self = this;
                const path = firebaseApi.pathFactory(this.data.pathNum, self, id)
                firebaseApi.deleteData(path);
            },
        },
         created() {
             const self = this;
             const path = firebaseApi.pathFactory(this.data.pathNum, self)
             this.items = firebaseApi.getData(path)
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