<template>
    <div>
      <h1>{{ num }}</h1>
        <GenericTable :data="data" :cid="cid" v-on:childToParent="onChildReload"></GenericTable>
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <router-link :to="`/courses/${$route.params.cid}/chapters/${$route.params.chaid}/questions/new-question`">
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
    import GenericTable from "../components/GenericTable";

    const tableName = 'chapterDetails'

    export default {
        name: "questions",
        props: ['cid'],
        components: {GenericTable},
        data: () =>({
            dialog: false,
            data: {
                tableName: 'chapterDetails',
              num: null,
                headers: [
                    {
                        text: 'שאלה',
                        value: 'question',
                        align: 'start',
                        sortable: 'true',
                    },
                    { text: 'תשובה נכונה', value: 'correctAnswer' },
                    { text: 'מסיח 1', value: 'alt1' ,style:'none'},
                    { text: 'מסיח 2', value: 'alt2' ,style:'none'},
                    { text: 'מסיח 3', value: 'alt3' ,style:'none'},
                ],
                pathNum: 5
            },

            editedItem: {}
        }),
      methods: {
        onChildReload(value) {
          this.$emit('childToParent', value)
        }
      }
    }
</script>

<style scoped>
    .mx-2{
        position: ;
    }
</style>