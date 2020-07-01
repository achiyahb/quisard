<template>
    <v-form v-model="valid">
      <v-container>
        <h1>כתוב שאלה חדשה</h1>
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
          <v-spacer></v-spacer>
          <v-card-actions>
             <v-btn class="mr-4" @click="submit()">submit</v-btn>
          </v-card-actions>
        </v-row>

      </v-container>
    </v-form>
</template>

<script>
  import StorageDriver from "../../middelware/StorageDriver"
  const tableName = "questions"

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
      submit() {
        this.item.id = new Date().getTime();
        StorageDriver.insertToStorage(tableName, this.item)
        this.$emit("addItem", item)
      }
    }
  }
</script>

