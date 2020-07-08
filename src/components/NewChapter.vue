<template>
    <v-form v-model="valid">
        <h1 v-if="!$route.params.chaid"> צור פרק חדש:</h1>
        <h1 v-else>ערוך פרק קיים:</h1>

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
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <router-link :to="`/courses/${$route.params.cid}`">
                            <v-btn class="mr-4">חזור</v-btn>

                            <div v-if="!$route.params.chaid">
                                <v-btn class="mr-4" @click="submit(item)">שמור</v-btn>
                            </div>
                        </router-link>
                            <div v-if="$route.params.chaid">
                                <v-btn class="mr-4" @click="update(item)">ערוך</v-btn>
                            </div>
                    </v-row>
                </v-container>
        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseA";

    export default {
        name: 'chapterDetails',
        props: ['chapter', 'pathNum'],
        components: {},
        data: () => ({
            valid: false,
            item: {
                chapterName: '',
                chapterDetails: '',
                questionsNumber: '',
            },

        }),
        methods: {
            submit(item) {
                const self = this;
                const path = firebaseApi.pathFactory(3, self)
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