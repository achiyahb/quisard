<template>
    <div class="hello">
        <picture-input
                ref="pictureInput"
                @change="onChange"
                cols="12"
                md="1"
                margin="16"
                accept="image/jpeg,image/png"
                size="3"
                buttonClass="btn"
                :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'גרור את לוגו הקורס לכאן'
      }">
        </picture-input>

    </div>

</template>

<script>
    import PictureInput from 'vue-picture-input'

    export default {
        name: 'app',
        data () {
            return {
            }
        },
        components: {
            PictureInput
        },
        methods: {
            onChange (image) {
                console.log('New picture selected!')
                if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }
        }
    }
</script>

<style scoped>
    .mx-2{
        position:fixed;
        margin-top:1px;
    }
    .hello{
        position: sticky;
    }
</style>
