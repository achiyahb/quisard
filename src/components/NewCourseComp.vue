<template>
    <v-form v-model="valid">
        <h1 v-if="!$route.params.cid"> צור קורס חדש:</h1>
        <h1 v-if="$route.params.cid">ערוך קורס קיים:</h1>
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
                        <div v-if="!$route.params.cid">
                            <v-btn class="mr-4" @click="submit(item)">שמור</v-btn>
                        </div>
                        <div v-if="$route.params.cid">
                            <v-btn class="mr-4" @click="update(item)">ערוך</v-btn>
                        </div>
                    </router-link>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseA";

    const tableName = "newCourseComp"

    export default {
        name: 'CourseSettings',
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
                let path = [`courses`];
                firebaseApi.insertCourse(item, path);
            },
            update(item) {
                const path = ["courses"]
                const params = this.$route.params.cid;
                path.push(params);
                firebaseApi.updateCourse(item, path);

            }
        },
        created() {
             if(!this.$route.params.cid){
                 return
             }
            let item = []
            const params = this.$route.params.cid;
            console.log(params)
            const path = ["courses"]
            path.push(params);

            const self = this;
            item = firebaseApi.getUserData(path)
                .then(result => {
                    self.item = result
                })
            console.log(item);
            this.item = item;
        },
    }
</script>