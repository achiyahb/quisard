<template>
    <v-container  fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="12">
                <v-select
                        dir="ltr"
                        :items="items"
                        label="קורסים"
                        dense
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import storageDriver from "../middelware/StorageDriver";

    const tableName = 'courseDetails'
    const prop = 'courseName'
    export default {
        name: 'SelectField',
        data: () => ({
            items: storageDriver.getNamesArrayFromItems(tableName, prop).namesMap
        }),




    }
</script>
