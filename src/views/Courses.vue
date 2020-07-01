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
    import axios from "axios";

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
                items: this.courses,
                type: ['courses'],
                generation: 1
            },

            editedItem: {}
        }),
        created () {
            axios.get('https://localhost:4000/users/1/courses')
                .then(response => (this.courses = response.courses))
        },
    }
</script>

<style scoped>
 .mx-2{
     position: ;
 }
</style>