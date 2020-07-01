<template>
    <div>
        {{$route.params}}
        <NewCourseComp :course="course"></NewCourseComp>
        <Chapters :cid="$route.params.cid"></Chapters>
    </div>

</template>

<script>
    import NewCourseComp from "../components/NewCourseComp";
    import StorageDriver from "../middelware/StorageDriver";
    import Chapters from "./Chapters";

    const tableName = 'courseDetails';

    export default {
        name: "Course",
        components: {NewCourseComp,Chapters},
        data: () => ({
            course: {},

        }),
        created() {
            this.course = StorageDriver.findItemById(this.$route.params.cid, undefined, tableName).item

        }
    }
</script>

<style scoped>

</style>