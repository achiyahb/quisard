<template>
    <v-container>
        <v-simple-table id="table">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right" v-for="header in data.headers" :class="{one: header.style}">{{header.text}}</th>
                    <th class="text-right">פעולות</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,key) in items" :key="item .name">
                    <td v-for="header in data.headers" :class="{one: header.style}" @click="editChild(key)">
                        {{item[header.value]}}
                    </td>
                    <td>
                        <v-icon
                                small
                                class="fas fa-trash-alt"
                                @click="deleteItem(key)"
                        ></v-icon>
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
    import router from "../router";

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
            editChild(key){
                if(this.$route.params.chaid){
                    router.push({ path: `/courses/${this.$route.params.cid}/chapters/${this.$route.params.chaid}/questions/${key}`})
                } else if (this.$route.params.cid){
                    router.push({ path: `/courses/${this.$route.params.cid}/chapters/${key}`})
                } else {
                    router.push({ path: `/courses/${key}`})
                }

            }
        },
         created() {

             const self = this;
             const path = firebaseApi.pathFactory(this.data.pathNum, self)
             this.items = firebaseApi.getData(path)
                 .then(result => {
                     self.items = result
                   let i = null
                   for (let prop in self.items){
                     i++
                   }
                   this.$emit('childToParent', i)
                 })
        },
        watch:{
            addedNewItem(){
                this.getData();
            }
        }
    }
</script>

<style>

@media only screen and (max-width: 900px) {
    .one{
        display: none;
    }

}
</style>
