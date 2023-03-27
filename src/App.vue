<template>
  <div 
    id="app"
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
                src="../public/images/light.jpg"
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

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
    }
  }
</script>
<style src="../public/style.css">
</style>
