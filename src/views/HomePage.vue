<template>
    <main
        class="
            tw-bg-black 
            tw-text-white 
            tw-font-mono
            ">
        <welcome-msg />
        <about-me />
        <my-stack />
        <contact-me />
        <my-footer />
    </main>
</template>

<script>
import WelcomeMsg from '../components/WelcomeMsg.vue'
import AboutMe from '../components/AboutMe.vue'
import MyStack from '../components/MyStack.vue'
import ContactMe from '../components/ContactMe.vue'
import MyFooter from '../components/MyFooter.vue'

import { useDark, useToggle} from '@vueuse/core'

export default {
    setup() {
        const isDark = useDark()
        const toggleDark = useToggle(isDark)
        
        return {
            useToggle,
            toggleDark
        }
    },
    name: 'App',
    components: {
    'welcome-msg': WelcomeMsg,
    'about-me': AboutMe,
    'my-stack': MyStack,
    'contact-me': ContactMe,
    'my-footer': MyFooter
    }
}


</script>

<style>
    .light-img {
        content: url('../assets/light.jpg')
    }

    .dark-img {
        content: url('../assets/dark.jpg')
    }
</style>