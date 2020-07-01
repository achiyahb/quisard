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

    const tableName = "chapterDetails"

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
            }
        }),
        methods: {
            submit() {
                this.item.id = new Date().getTime();
                this.item.questions = []
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