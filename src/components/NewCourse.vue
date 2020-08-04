<template>
    <v-form v-model="valid">
        <h1 v-if="!$route.params.cid"> צור חידון חדש:</h1>
        <h1 v-if="$route.params.cid">ערוך חידון קיים:</h1>
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.courseName"
                            :counter="100"
                            label="שם החידון"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.goal"
                            label="מטרת החידון"
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
                            label="פרטי מחבר החידון"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <router-link to="/Home">
                        <v-btn class="mr-4">חזור</v-btn>
                        <div v-if="!$route.params.cid">
                            <v-btn class="mr-4" @click="submit(item)">שמור</v-btn>
                        </div>
                    </router-link>
                        <div v-if="$route.params.cid">
                            <v-btn class="mr-4" @click="update(item)">ערוך</v-btn>
                        </div>

                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseA";
    import firebaseInstance from "../middelware/firebase";

    const tableName = "newCourseComp"

    export default {
        name: 'CourseSettings',
        props: ['pathNum'],
        components: {

        },
        data: () => ({
            valid: false,
            item: {
                courseDetails: "",
                courseName: "",
                founderDetails: "",
                founderName: "",
                goal: ""
            }
        }),
        methods: {
            submit(item) {
                const self = this;
                const path = firebaseApi.pathFactory(1, self)
                firebaseApi.writeData(item, path);

            },
            update(item) {
                const self = this;
                const path = firebaseApi.pathFactory(this.pathNum, self)
                firebaseApi.updateData(item, path);

            }
        },
        created() {
            if (!this.pathNum) {
                return
            }
            const self = this;
            const path = firebaseApi.pathFactory(this.pathNum, self)
            this.item = firebaseApi.getData(path)
                .then(result => {
                    self.item = result
                })
        }
    }
</script>