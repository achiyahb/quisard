<template>
    <v-form v-model="valid">
        <h1> צור קורס חדש</h1>
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="6"
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
                        md="6"
                >
                    <v-text-field
                            v-model="item.goal"
                            label="מטרת הקורס"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.courseDetails"
                            label="פרטים"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.founderName"
                            label="שם המחבר"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.founderDetails"
                            label="פרטי מחבר הקורס"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <router-link to="/Home">
                        <v-btn class="mr-4">חזור</v-btn>
                        <v-btn class="mr-4" @click="submit()">שמור</v-btn>
                    </router-link>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseA";

    const tableName = "courseDetails"

    export default {
        name: 'CourseSettings',
        // props: ['course'],
        components: {

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
                let path = [`courses`];
                firebaseApi.insertCourse(this.item, path);
                this.$emit("addItem", item)
            }
        },
    }
</script>