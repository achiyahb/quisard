<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="item.courseName"
                            :counter="100"
                            label="שם הקורס"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="item.goal"
                            label="מטרת הקורס"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="item.courseDetails"
                            label="פרטים"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="item.founderName"
                            label="שם המחבר"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="item.founderDetails"
                            label="פרטי מחבר הקורס"
                            required
                    ></v-text-field>
                </v-col>


            </v-row>
            <v-btn class="mr-4" @click="submit()">submit</v-btn>
        </v-container>

    </v-form>
</template>

<script>
    import StorageDriver from "../../middelware/StorageDriver"
    import AddImagesComp from "./AddImagesComp";
    const tableName = "courseDetails"

    export default {
        name: 'CourseSettings',
        components: {
            AddImagesComp,
        },


        data: () => ({
            valid: false,
            item: {
                courseName: '',
                goal: '',
                courseDetails: '',
                founderName: '',
                founderDetails: '',
            }
        }),
        methods: {
            submit() {
                this.item.id = new Date().getTime();
                StorageDriver.insertToStorage(tableName, this.item)
                this.$emit("addItem", item)
            }
        }
    }
</script>

