<template>
  <div class="Questions">
    {{$route.params.chid}}
    <NewChapterComp></NewChapterComp>
  <TableCom  :addedNewItem="addedNewItem"/>
    <router-link to="/courses/:cid/chapters/:chid/questions/new-question">
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>fa-plus</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TableCom from "../components/questions/TableCom";
import InputCom from "../components/questions/InputCom";
import NewChapterComp from "../components/NewChapterComp";
export default {
  name: 'Questions',
  components: {
    TableCom,InputCom,NewChapterComp
  },
  data: () => ({
    dialog: false,
    addedNewItem: false
  }),
  methods: {
    dataChanged() {
      this.addedNewItem = !this.addedNewItem;
    },


  }
}
</script>
