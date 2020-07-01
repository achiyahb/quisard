<template>
    <div>
        <h1>ברוכים הבאים לאפליקציית הכנת החידונים הגדולה</h1>
        <h2>בחרו את החידון שלכם והתחילו לעבוד</h2>
        <Courses></Courses>
    </div>
</template>

<script>
    import Courses from "./Courses";

    const tableName = "courseDetails";
    export default {
        name: "Home",
        components: {
            Courses
        },


    }
</script>

<style scoped>


</style>