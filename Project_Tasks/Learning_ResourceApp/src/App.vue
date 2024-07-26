<template>
<div>
<the-header heading="Learning Resource"></the-header>
<the-resources></the-resources>
</div>
</template>

<script>



import TheHeader from './components/Layouts/TheHeader.vue'
import TheResources from './components/Learning-resources/TheResources.vue'
export default {

 
    components:{
        
       
        TheHeader,TheResources

    },

}
</script>

<style>

*{
    box-sizing: border-box;
}
html{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
body{
    margin: 0;
}
</style>