<template>
  <div>
    <h1>메인보드 게시판!</h1>
    <div class="boardSearch">
      <input type="text" value="검색해보세요" /><input
        type="button"
        value="검색"
        @click="search"/>
    </div>
                                    
    <div v-for="(title, content) in BoardList" :key="content">
     
    </div>
      <div class="boardList 11">
       
      </div> 
    <div class="">

    </div>
  
    <div>
      <button @click="write">글 작성</button>
      <!-- <div><input type="text" v-model="title" /></div>
      <! <a style="cursor: pointer" @click="example">조회</a> -->
    </div>
  </div>
</template>

<script>
// import func from 'vue-editor-bridge';
import axios from "axios";
export default {
  
  data: () => ({
    //기능, 주소 , 내용
    title: "",
    content: "",
    boardid: "",

    BoardData: {
      boardid: "",
      title: "",
      content: "",
    },
  }),
  methods: {
    write: function () {
      this.$router.push("/write");
    },

    BoardList: function () {
      axios
        .get("http://localhost:8090/board/write")
        .then((result) => {
          console.log(result);
          this.BoardData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search: function () {},
  },
};
</script>

<style>

</style>
