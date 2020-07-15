<template>
    <div>
        <h2>ברוכים הבאים לאפליקציית הכנת החידונים הגדולה</h2>
        <h3>בחרו את החידון שלכם והתחילו לעבוד</h3>
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
    h1{
        font-size: 1.5em;
    }

</style>