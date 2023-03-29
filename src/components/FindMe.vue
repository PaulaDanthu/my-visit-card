<template>
    <div 
        id="find-me" 
        class="
            tw-flex 
            tw-flex-col 
            tw-justify-start
        ">
        <h2 
            class="
                tw-mb-8
                tw-text-2xl
            ">#find-me</h2>
        <ul 
            class="
                tw-flex 
                tw-flex-row 
                tw-items-start
                tw-list-none
            ">
            <li v-for="social in socialArray" 
                :key="social"
                class="
                    tw-pr-6
                    tw-w-16
                    lg:tw-w-32
                ">
                <a :href="social.website"><img :src="social.logo" /></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import githubLogo from '../../public/images/github.jpg'
    import linkedinLogo from '../../public/images/linkedin.jpg'

    const socialArray = [
        {
            name: "gitHub",
            logo: githubLogo,
            website: "https://github.com/PaulaDanthu"
        },
        {
            name: "linkedIn",
            logo: linkedinLogo,
            website: "https://www.linkedin.com/in/pauladanthu/"
        }
    ]

    export default {
        data() {
            return {
                socialArray
            }
        }
    }
</script>

<style>

</style>