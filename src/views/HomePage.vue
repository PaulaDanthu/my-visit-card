<template>
        <welcome-msg />
        <about-me />
        <my-stack />
        <contact-me />
        <my-footer />    
</template>

<script src="../src/main"></script>
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



<style>
</style>