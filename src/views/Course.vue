<template>
    <div>
        <new-course-comp :path-num="pathNum"></new-course-comp>
        <h2>הפרקים:</h2>
        <Chapters :cid="$route.params.cid"></Chapters>
    </div>

</template>

<script>
    import NewCourseComp from "../components/NewCourse";
    import Chapters from "../components/Chapters";

    const tableName = 'courseDetails';

    export default {
        name: "Course",
        components: {NewCourseComp,Chapters},
        data: () => ({
            pathNum: 2

        })
    }
</script>

<style scoped>

</style>