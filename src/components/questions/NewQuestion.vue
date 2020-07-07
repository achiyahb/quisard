<template>
    <v-form v-model="valid">
      <v-container>
        <h1 v-if="!$route.params.qid"> צור שאלה חדשה:</h1>
        <h1 v-else>ערוך שאלה קיימת:</h1>
        <v-row>
          <v-col
                  cols="12"
                  md="4"
          >
            <v-text-field
                    v-model="item.question"
                    :counter="100"
                    label="שאלה"
                    required
            ></v-text-field>
          </v-col>

          <v-col
                  cols="12"
                  md="4"
          >
            <v-text-field
                    v-model="item.correctAnswer"
                    label="התשובה הנכונה"
                    required
            ></v-text-field>
          </v-col>

          <v-col
                  cols="12"
                  md="4"
          >
            <v-text-field
                    v-model="item.alt1"
                    label="מסיח 1"
                    required
            ></v-text-field>
          </v-col>

            <v-col
                    cols="12"
                    md="4"
            >
              <v-text-field
                      v-model="item.alt2"
                      label="מסיח 2"
                      required
              ></v-text-field>
            </v-col>

              <v-col
                      cols="12"
                      md="4"
              >
                <v-text-field
                        v-model="item.alt3"
                        label="מסיח 3"
                        required
                ></v-text-field>
          </v-col>

        </v-row>
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <router-link :to="`/courses/${$route.params.cid}/chapters/${$route.params.chaid}`">
              <v-btn class="mr-4">חזור</v-btn>
              <div v-if="!$route.params.qid">
                <v-btn class="mr-4" @click="submit(item)">שמור</v-btn>
              </div>
            </router-link>
            <div v-if="$route.params.qid">
              <v-btn class="mr-4" @click="update(item)">ערוך</v-btn>
            </div>

          </v-row>
        </v-container>
      </v-container>
    </v-form>
</template>

<script>
  import firebaseApi from "../../middelware/firebaseA";


  export default {
    name: 'InputCom',



      data: () => ({
        valid: false,
        item: {
          question: '',
          correctAnswer: '',
          alt1: '',
          alt2: '',
          alt3: '',
        }
      }),
      methods: {
        submit(item) {
          const path = ["courses"]
          path.push(this.$route.params.cid);
          path.push("chapters")
          path.push(this.$route.params.chaid);
          path.push("questions")
          firebaseApi.insertCourse(item, path);
        },
        update(item) {
          const path = ["courses"]
          path.push(this.$route.params.cid);
          path.push("chapters")
          path.push(this.$route.params.chaid)
          path.push("questions")
          path.push(this.$route.params.qid)
          firebaseApi.updateCourse(item, path);
        }
      },

  }
</script>

