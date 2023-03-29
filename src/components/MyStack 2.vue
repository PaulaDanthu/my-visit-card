<template>
    <div 
        class="
            tw-mx-5
            tw-text-justify
            tw-mt-28
            md:tw-mx-36
            ">
        <h2
            class="
                tw-mb-8
                tw-text-2xl
            ">#technologies</h2>
        <ul 
            class="
            tw-flex
            tw-flex-wrap
            tw-pl-0
            tw-list-none
            tw-cursor-pointer
            ">
            <li v-for="technology in techArray" 
                :key="technology" 
                :class="technology.name"
                class="
                    tw-flex
                    tw-flex-col
                    tw-items-center
                    tw-w-56
                    tw-h-36
                    tw-mr-5
                    tw-mb-5
                ">
                <a :href="technology.website">
                    <img 
                    :src="technology.logo"
                    class="
                        tw-w-24
                        tw-mt-2.5
                    " /></a>
                <p
                class="
                    tw-pt-1    
                ">{{ technology.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import htmlLogo from "../../public/images/html.jpg"
    import cssLogo from "../../public/images/css.jpg"
    import jsLogo from "../../public/images/js.jpg"
    import vueLogo from "../../public/images/vue.jpg"
    import tailwindLogo from "../../public/images/tailwind.jpg"
    import bootstrapLogo from "../../public/images/bootstrap.jpg"

const techArray = [ 
    {
        name: "HTML",
        logo: htmlLogo,
        website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "e34c26"
    }, 
    {
        name: "CSS",
        logo: cssLogo,
        website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "2965f1"
    },
    {
        name: "JavaScript",
        logo: jsLogo,
        website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "f7df1e"
    }, 
    {
        name: "Vuejs",
        logo: vueLogo,
        website: "https://vuejs.org/",
        color: "41b883"
    }, 
    {
        name: "Tailwind",
        logo: tailwindLogo,
        website: "https://tailwindcss.com/",
        color: "10182F"
    },
    {
        name: "Bootstrap",
        logo: bootstrapLogo,
        website: "https://getbootstrap.com/",
        color: "563d7c"
    }
                    ]

    export default {
        data(){
            return {
            techArray
        }
        }
    }



</script>

<style scoped>
.HTML {
    background-color: #e34c26;
}
.HTML:hover {
    background-color: #e34c26DD;
}

.CSS {
    background-color: #2965f1; 
}

.CSS:hover {
    background-color: #2965f1DD; 
}

.JavaScript {
    background-color: #f7df1e;
}

.JavaScript:hover {
    background-color: #f7df1eDD;
}

.Vuejs {
    background-color: #41B883;
}

.Vuejs:hover {
    background-color: #41B883DD;
}

.Tailwind {
    background-color: #10182f;
}

.Tailwind:hover {
    background-color: #10182fDD;
}

.Bootstrap {
    background-color: #563d7c;
}

.Bootstrap:hover {
    background-color: #563d7cDD;
}

@media (max-width: 1024px) {
        div {
            padding-left: 0px;
            padding-right: 0px;
        }

        .technologies {
            padding-left: 20px;
            padding-right: 20px;
        }

        ul {
            justify-content: center;
        }
    }
</style>