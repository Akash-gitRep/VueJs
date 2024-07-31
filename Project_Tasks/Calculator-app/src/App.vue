<template>
<div>
  <h1>{{title}}</h1>
 <calc-component>

 </calc-component>
  
</div>
</template>

<script>
import CalcComponent from './components/CalcComponent.vue';

export default {
  
  components: {
    CalcComponent
  },
  data(){
    return{
      title:'Demo Calculator'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
