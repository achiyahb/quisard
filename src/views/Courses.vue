<template>
    <div>
    <GenericTable :data="data"></GenericTable>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <router-link to="/courses/new-course">
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
    import firebaseApi from "../middelware/firebaseA";

    const tableName = 'courseDetails'

    export default {
        name: "Courses",
        components: {GenericTable},
        data: () =>({
            dialog: false,
            data: {
                tableName: 'courseDetails',
                headers: {
                0:    {
                        text: 'שם החידון',
                        value: 'courseName',
                        align: 'start',
                        sortable: 'true',
                    },
                 1:   { text: 'מטרת החידון', value: 'goal' },
                 2:   { text: 'פרטי החידון', value: 'courseDetails' ,style:'none'},
                 3:   { text: 'שם המחבר', value: 'founderName' ,style:'none'},
                 4:   { text: 'פרטי המחבר', value: 'founderDetails' ,style:'none'},
                 // 5:   { text: 'פעולות', value: 'actions', sortable: false },
                },
                pathNum: 1
            },

            editedItem: {}

        }),


    }
</script>

<style scoped>
</style>