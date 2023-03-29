<template>
    <div 
        class="
            tw-mx-5
            tw-text-justify
            tw-mt-28
            md:tw-mx-36
        ">
        <section 
            class="
                tw-flex
                tw-flex-row
            ">
            <div 
                class="
                    tw-w-2/4
                ">
                <h2 
                    class="
                        tw-mb-8
                        tw-text-2xl
                    ">#contact-me</h2>
                <p>You can contact me via this form. Feel free to write about anything you like 😃</p>
                <form
                    action="https://formspree.io/f/xqkoprdj"
                    method="POST"
                    @submit="submitForm"
                    class="
                        tw-mt-10
                    "
                >
                    <label>email:</label>
                    <input 
                        id="email" 
                        type="email" 
                        v-model="email.value" 
                        class="
                            tw-bg-transparent
                            tw-border-solid
                            tw-border-b-2
                            tw-w-full
                            tw-mt-12
                            tw-mb-8
                        " 
                        required  />
                    <label>message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        v-model="message.value" 
                        class="
                            tw-bg-transparent
                            tw-border-solid
                            tw-border-b-2
                            tw-w-full
                            tw-mt-12
                            tw-mb-8
                        " 
                        required  />
                    <input 
                        id="submit" 
                        type="submit"
                        value="send" 
                        class="
                            tw-bg-transparent
                            tw-border-none
                        ">
                </form>
            </div>
            <div>
                <find-me 
                class="
                    tw-w-2/4
                    tw-ml-6
                "/>
            </div>
        </section>
    </div>
</template>

<script>
    
    import FindMe from '../components/FindMe.vue'
    import {reactive} from "vue"

    export default {
        data(){
            const email = reactive({
                email: {
                    value: ''
                }
            })
            const message = reactive({
                message: {
                    value: ''
                }
            })
                return {email, message}
            },

        components: {
            'find-me': FindMe
            },
    }

</script>

<style scoped>

@media (max-width: 1024px) {
        .box {
            padding-left: 0px;
            padding-right: 0px;
        
        }
        section {
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: column !important;
        }

        .contact {
            width: 100%;
        }
        .find-me {
            margin-top: 50px;
            margin-left: 0px;
            width: 100%;
        }
        label, input, .submit-button {
            font-size: 20px;
        }
    }

</style>


