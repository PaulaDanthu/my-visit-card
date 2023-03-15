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
                tw-w-80
                tw-text-3xl
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
    
    @media (max-width: 1024px) {
        img {
            width: 250px;
        }

        h1 {
            width: 60%;
            font-size: 40px;
        }
    }


</style>