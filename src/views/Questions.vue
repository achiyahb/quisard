<template>
    <div>
        <GenericTable :data="data" :cid="cid"></GenericTable>
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <router-link to="/courses/:cid/chapters/new-chapter">
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
        name: "Courses",
        props: ['cid'],
        components: {GenericTable},
        data: () =>({
            dialog: false,
            data: {
                tableName: 'chapterDetails',
                headers: [
                    {
                        text: 'שם הפרק',
                        value: 'chapterName',
                        align: 'start',
                        sortable: 'true',
                    },
                    { text: 'פרטים', value: 'chapterDetails' },
                    { text: 'מספר השאלות', value: 'questionsNumber' },
                    { text: 'פעולות', value: 'actions', sortable: false },
                ],
                items: storageDriver.getFromStorage(tableName),
                type: ['course','chapter'],
                generation: 2,
            },

            editedItem: {}
        }),
    }
</script>

<style scoped>
    .mx-2{
        position: ;
    }
</style>