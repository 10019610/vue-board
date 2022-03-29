<template>
  
  <div id="app">
    
    <BoardHeader></BoardHeader>
    <!-- <div>안녕하세요? 메인으로 가시려면 왼쪽버튼</div> 
      <div>작성 및 조회를 하시려면 오른쪽 버튼을 눌러주세요.</div> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <BoardList></BoardList> -->
    <router-view></router-view>
    <BoardFooter></BoardFooter>
    
    
  </div>
   
</template>

<script>
import BoardHeader from './components/BoardHeader.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import BoardList  from './components/BoardList.vue'
import BoardFooter from './components/BoardFooter.vue'


export default {
  name: 'App',
  components: { 
    
    'BoardHeader': BoardHeader,
    // 'HelloWorld': HelloWorld,   //임시 메인 화면 컴포
    // 'BoardList': BoardList,
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
