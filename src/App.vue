<template>
  <div id="app">
   
    <BoardHeader></BoardHeader>
    <HelloWorld></HelloWorld>
    <BoardList></BoardList>
    <BoardFooter></BoardFooter>
    <!-- <router-link to="/board">Board</router-link> -->
  </div>
   
</template>

<script>
import BoardHeader from './components/BoardHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import BoardList  from './components/BoardList.vue'
import BoardFooter from './components/BoardFooter.vue'


export default {
  name: 'App',
  components: { 
    
    'BoardHeader': BoardHeader,
    'HelloWorld': HelloWorld,
    'BoardList': BoardList,
    'BoardFooter': BoardFooter,
    
  }
}
</script>

<style>
  html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0; padding:0;
}
</style>
