<template>
    <div 
        class="
            tw-mx-5
            tw-text-justify
            tw-mt-28
            tw-lg:mx-36
        ">
        <h2
            class="
                tw-mb-8
                tw-text-2xl
            ">#about</h2>
            <p>My name is Paula and I'm a junior frontend developer. I'm an autodidact passionate with code living near Grenoble, France. I create websites and applications in different technologies. I love JavaScript and at this moment I'm discovering Vue.js. In CSS I like using Bootstrap and Tailwind and also know a bit in PHP, Symfony and mySQL. I am able to write a website from a to z and to deploy it. 
            </p>
            <p>
                If you want to know a bit more about my projects visit my <a :href="URLGitHub" target="_blank" class="tw-text-red-500 tw-no-underline hover:tw-text-white">GitHub profile</a>
            </p>
            <p>
                In my spare time I love knitting 🧶 🤩 If, like me, you are a fan of handcraft have a look at my Instagram knitting account <a :href="URLInstagram" target="_blank" class="tw-text-red-500 tw-no-underline hover:tw-text-white">wool.stories</a>
            </p>
    </div>

</template>

<script>
    export default {
        data(){
            return{
            URLGitHub: "https://github.com/PaulaDanthu",
            URLInstagram: "https://www.instagram.com/wool.stories/"
            }
        }
    }
</script>

<style scoped>
    

    @media (max-width: 1024px) {
        div {
        padding-left: 20px;
        padding-right: 20px;
        }
    }
</style>