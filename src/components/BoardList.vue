<template>
  <div>
    <h2>메인보드 게시판!</h2>
    <div class="boardSearch">
      <input type="text" value="검색해보세요"><input type="button" value="검색" @click="search">
    </div>
    <div class="boardList">
      
    </div>

    <div>
      <button @click="write">작성</button>
      <!-- <div><input type="text" v-model="title" /></div>
      <a style="cursor: pointer" @click="example">조회</a> -->
    </div>
  </div>
</template>

<script>
// import func from 'vue-editor-bridge';
// import axios from "axios";
export default {
  data: () => ({     //기능, 주소 , 내용 
    title: "",
    
  }),
  methods: {
    write: function() {
      //write compo로 이동 
      this.$router.push('/write')
     },
     search: function() {

     }
    // example: function () {
    //   alert("example!!");
    //   axios
    //     .get("http://localhost:8090", this.title)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};

</script>

<style scoped>
</style>