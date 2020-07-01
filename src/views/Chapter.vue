<template>
    <div>
        {{$route.params}}
    </div>

</template>

<script>
    import NewChapterComp from "../components/NewChapterComp";
    import StorageDriver from "../middelware/StorageDriver";
    import Questions from "./Questions";

    const tableName = 'chapterDetails';

    export default {
        name: "Course",
        components: {Questions, NewChapterComp},
        data: () => ({
            chapter: {},

        }),
        created() {
            this.chapter = StorageDriver.findItemById(this.$route.params.chaid, undefined, tableName).item


        }
    }
</script>

<style scoped>

</style>