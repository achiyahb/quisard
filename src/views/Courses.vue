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
    import firebaseApi from "../middelware/firebaseApi";

    const tableName = 'courseDetails'

    export default {
        name: "Courses",
        components: {GenericTable},
        data: () =>({
            dialog: false,
            data: {
                tableName: 'courseDetails',
                headers: [
                    {
                        text: 'שם הקורס',
                        value: 'courseName',
                        align: 'start',
                        sortable: 'true',
                    },
                    { text: 'מטרת הקורס', value: 'goal' },
                    { text: 'פרטים', value: 'courseDetails' },
                    { text: 'שם המחבר', value: 'founderName' },
                    { text: 'פרטי המחבר', value: 'founderDetails' },
                    { text: 'פעולות', value: 'actions', sortable: false },
                ],
                type: 'courses'
            },

            editedItem: {}

        })

    }
</script>

<style scoped>
</style>