<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import MainApp from './components/MainApp.vue';
import 'bootstrap/dist/css/bootstrap.css'
import LangFlag from 'vue-lang-code-flags';

export default {
  components:{
    Header,
    MainApp,
    LangFlag
  }
}
</script>

<template>
  
  <Header/>
  <MainApp>
  </MainApp>
</template>

<style >
body{
  background-color: #212529;
}
</style>
