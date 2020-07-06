<template>
    <div>
        <NewCourseComp></NewCourseComp>
        <Chapters :cid="$route.params.cid"></Chapters>
    </div>

</template>

<script>
    import NewCourseComp from "../components/NewCourseComp";
    import Chapters from "../components/Chapters";

    const tableName = 'courseDetails';

    export default {
        name: "Course",
        components: {NewCourseComp,Chapters},
        data: () => ({


        })
    }
</script>

<style scoped>

</style>