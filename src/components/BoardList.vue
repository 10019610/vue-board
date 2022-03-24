<template>
  <div>
    <h1>메인보드 게시판!</h1>
    <!-- <div class="boardSearch">
      <input type="text" value="검색해보세요" /><input
        type="button"
        value="검색"
        @click="search"/>
        
    </div> -->

    <li v-for="(listyo, index) in vuelist" :key="index">
      글 : {{ listyo.title }} 내용 : {{ listyo.content }}
    </li>
    <div><button @click="BoardList">조회</button></div>
    <div>
      <button @click="write">글 작성</button>
      <!-- 일단 콘솔로 데이터가 잘 올라오는건 확인  -->
    </div>
  </div>
</template>

<script>
// import func from 'vue-editor-bridge';
import axios from "axios";
export default {
  data: () => ({
    //기능, 주소 , 내용
    vuelist: [],
    // titlecontent: {
    //   title: '',
    //   content:'',
    // }
  }),
  // BoardList 페이지에 들어오면 따로 버튼이 아니라 바로 board가 조회될 수 있도록
  // created 단계에 조회 함수를 실행
  // 일반적으로 조회함수 이름을 search라 하는편, 순수한 검색은 다른이름으로 다시만들것
  created() {
    this.BoardList;
  },
  methods: {
    write: function () {
      this.$router.push("/write");
    },

    BoardList: function () {
      axios
        .get("http://localhost:8090/board/list")
        .then((result) => {
          console.log(result);
          this.vuelist = result.data;
          // this.content = result.data.content;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search: function () {},
  },
};
</script>

<style></style>
