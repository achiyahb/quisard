<template>
  <div class="Questions">
    {{$route.params.qid}}
    <NewQuestion :path-num="pathNum"></NewQuestion>
<!--    <router-link to="/courses/:cid/chapters/:chid/questions/new-question">-->
<!--      <v-btn class="mx-2" fab dark color="indigo">-->
<!--        <v-icon dark>fa-plus</v-icon>-->
<!--      </v-btn>-->
<!--    </router-link>-->
  </div>
</template>

<script>
// @ is an alias to /src
import NewQuestion from "../components/questions/NewQuestion";
import firebaseApi from "../middelware/firebaseA";

export default {
  name: 'Question',
  components: {
   NewQuestion
  },
  data: () => ({
    dialog: false,
    pathNum: 6
  }),

}
</script>
