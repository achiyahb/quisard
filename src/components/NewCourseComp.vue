<template>
    <v-form v-model="valid">
        <h1> {{ course ? 'ערוך קורס קיים' : 'צור קורס חדש'}}</h1>
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
            <router-link to="/">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn class="mr-4">חזור</v-btn>
                        <v-btn class="mr-4" @click="submit()">שמור</v-btn>
                    </v-row>
                </v-container>
            </router-link>
        </v-container>
    </v-form>
</template>


<script>
    import StorageDriver from "../middelware/StorageDriver"

    const tableName = "courseDetails"

    export default {
        name: 'CourseSettings',
        props: ['course'],
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
                this.item.id = new Date().getTime();
                this.item.chapters = []
                StorageDriver.insertToStorage(tableName, this.item)
                this.$emit("addItem", item)
            }
        },
        created() {
            if (this.course){
                this.item = this.course;
            }
        }
    }
</script>