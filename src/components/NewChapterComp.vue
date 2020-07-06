<template>
    <v-form v-model="valid">
        <h1> {{ chapter ? 'ערוך פרק קיים' : 'צור פרק חדש'}}</h1>

        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.chapterName"
                            :counter="100"
                            label="שם הפרק"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.chapterDetails"
                            label="פרטים"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-text-field
                            v-model="item.questionsNumber"
                            label="מספר השאלות"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
<!--            need to define a another destination-->
            <router-link to="/">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <router-link :to="`/courses/${cid}`">
                            <v-btn class="mr-4">חזור</v-btn>
                        </router-link>
                            <div v-if="!$route.params.chaid">
                                <v-btn class="mr-4" @click="submit(item)">שמור</v-btn>
                            </div>

                            <div v-if="$route.params.chaid">
                                <v-btn class="mr-4" @click="update(item)">ערוך</v-btn>
                            </div>

                    </v-row>
                </v-container>
            </router-link>
        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseA";

    export default {
        name: 'chapterDetails',
        props: ['chapter'],
        components: {

        },
        data: () => ({
            valid: false,
            item: {
                chapterName: '',
                chapterDetails: '',
                questionsNumber: '',
            },
            cid: "",
        }),
        methods: {
            update() {
                this.item.questions = []
                this.$emit("addItem", item)
            },
            submit(item) {
                const path = ["courses"]
                const params = this.$route.params.cid;
                const part = "chapters"
                path.push(params);
                path.push(part)
                firebaseApi.insertCourse(item, path);
            }
        },
        created() {
             const cid = this.$router.params.cid;
             this.cid = cid;
        }
    }
</script>