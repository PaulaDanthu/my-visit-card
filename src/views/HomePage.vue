<template>
    <div 
        class="
            tw-bg-black 
            tw-text-white 
            tw-font-mono
            ">
        <nav 
            class="
                tw-flex 
                tw-justify-between
                tw-pt-6
                ">
            <button 
                @click="toggleDark()" 
                class="
                    tw-bg-transparent 
                    tw-border-transparent 
                    tw-w-10
                    "> 
                <img 
                    src="../../public/images/light.jpg"
                    alt="theme-switcher" 
                    class="
                        tw-w-10
                        tw-ml-10
                        ">
            </button>
            <router-link 
                to="/"
                class="
                    tw-text-red-500
                    tw-no-underline
                    tw-mr-10
                    tw-text-xl
                    hover:tw-text-white
                ">home</router-link>
        </nav>
    </div>
    <div 
        class="
            container
            tw-bg-black 
            tw-text-white
            tw-font-mono
            ">
        <welcome-msg />
        <about-me />
        <my-stack />
        <contact-me />
        <my-footer />    
    </div>
</template>


<script>
import WelcomeMsg from '../components/WelcomeMsg.vue'
import AboutMe from '../components/AboutMe.vue'
import MyStack from '../components/MyStack.vue'
import ContactMe from '../components/ContactMe.vue'
import MyFooter from '../components/MyFooter.vue'

import { useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


export default {
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
</style>