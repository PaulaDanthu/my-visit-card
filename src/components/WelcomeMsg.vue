<template>
    <div 
        class="
            tw-flex
            tw-flex-col
            tw-items-center
            ">
        <img 
            :src="image"
            class="
                tw-w-80
            ">
        <h1 
            class="
                tw-w-1/2
                md:tw-w-80
                tw-text-2xl
                md:tw-text-3xl
                tw-text-center
                tw-mt-6
        ">Hi! I'm Paula and I'm a frontend developer.</h1>
    </div>
</template>

<script>
    import image from '../../public/images/paula.jpg'

    export default {
    name: 'WelcomeMsg',
    data(){
        return {
            image: image
        }
    }
}
</script>

<style scoped>
   


</style>