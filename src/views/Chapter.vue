<template>
    <div>
        <new-chapter-comp :path-num="pathNum" :questionsNum="questionsNum"></new-chapter-comp>
        <h2>השאלות:</h2>
        <questions  v-on:childToParent="onChildReload"></questions>
    </div>

</template>

<script>
    import NewChapterComp from "../components/NewChapter";
    import StorageDriver from "../middelware/StorageDriver";
    import Questions from "./Questions";
    import GenericTable from "../components/GenericTable";

    const tableName = 'chapterDetails';

    export default {
        name: "Course",
        components: {GenericTable, Questions, NewChapterComp},
        data: () => ({
            pathNum: 4,
          questionsNum: null
        }),
      methods:{
        onChildReload(value){
          this.questionsNum= value
        }
      }

    }
</script>

