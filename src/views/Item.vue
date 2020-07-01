<template>
    <div>
        <CardComp :item="item" @save="save()"></CardComp>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CardComp from "../components/questions/CardComp";
    import storageDriver from "../middelware/StorageDriver";
    const tableName= 'questions';
    export default {
        name: 'Item',
        components: {
            CardComp,
        },
        data: () => ({
            item: {},
        }),
        created() {
            this.item = storageDriver.findItemById(this.$route.params.id, undefined, tableName).item
        },
        methods: {
            save(){
                storageDriver.updateToStorage(tableName, this.item, this.$route.params.id)
            },
        },

    }
</script>