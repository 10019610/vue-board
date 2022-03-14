<template>
  <div id="app">
    <BoardHeader></BoardHeader>
    <BoardInput></BoardInput>
    <BoardList></BoardList>
    <BoardFooter></BoardFooter>
  </div>
</template>

<script>
import BoardHeader from './components/BoardHeader.vue'
import BoardInput from './components/BoardInput.vue'
import BoardList from './components/BoardList.vue'
import BoardFooter from './components/BoardFooter.vue'

export default {
  components: { 
    'BoardHeader': BoardHeader,
    'BoardInput': BoardInput,
    'BoardList': BoardList,
    'BoardFooter': BoardFooter
  }
}
</script>

<style>
  body{
  text-align : center;
  background-color: #F6F6F8;
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}

</style>
