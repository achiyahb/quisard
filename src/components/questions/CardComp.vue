<template>
    <v-card>
        <v-card-text >
            <v-container >
                <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="item.question" label="שאלה"></v-text-field>
                </v-col>
                <v-row>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="item.correctAnswer" label="תשובה נכונה"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="item.alt1"  label="מסיח 1"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="item.alt2" label="מסיח 2"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="item.alt3" label="מסיח 3"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <router-link id="routerBtn" to="/questions">
                <v-btn class="btn" color="blue darken-1"  >חזור</v-btn>
                <v-btn class="btn" color="blue darken-1"  @click="saveItem()" >שמור</v-btn>
            </router-link>
            <v-btn class="btn" color="blue darken-1"  @click="saveItem()" >החל</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import storageDriver from "../../middelware/StorageDriver";

    const tableName = "questions";

    export default {
        name: "CardComp",
        props: ['item'],

        data: () => ({

        }),
        methods: {
           saveItem(){
               this.$emit('save')
           }
        }




    }
</script>

<style>
    #routerBtn{
        text-decoration: none;
    }
    .btn{
        margin: 2px;
    }
</style>