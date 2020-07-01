<template>
    <div id="view">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="7"
                >
                    <CourseSettings></CourseSettings>

                </v-col>
                <v-col
                        cols="12"
                        md="5"
                >
                    <br><br>
                    <AddImagesComp></AddImagesComp><br>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CourseSettings from "../components/courseSettings/CourseSettings";
    import AddImagesComp from "../components/courseSettings/AddImagesComp";
    import SelectField from "../components/SelectField";


    export default {
        name: 'settings',
        components: {
            CourseSettings,AddImagesComp,
        },
        data: () => ({

        }),
        created() {

        },
        methods: {

        },

    }
</script>

<style>
    #item{
        grid-row: auto;
    }
</style>