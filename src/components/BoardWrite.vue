<template>
  <div>
    <h1>게시물 작성</h1>
    <!-- <div>제목 : <input type="text" value="" v-model="title" /></div>
    <div>내용 : <input type="text" value="" v-model="content" /></div> -->
    <table>
      <colgroup>
        <col width="15%" />
        <col width="*" />
      </colgroup>
      <tr>
        <th>제목</th>
        <td>
          <textarea
            rows="2"
            cols="150"
            style="resize: none"
            v-model="title"
          ></textarea>
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea
            rows="20"
            cols="150"
            v-model="content"
            style="resize: none"
          ></textarea>
        </td>
      </tr>
    </table>
    <span>
      <input
        id="createbutton"
        type="button"
        value="게시글 작성"
        @click="create"
      />
    </span>
  </div>

  <!-- // 게시판 화면에 write 버튼을 만들어서 
// 여기 컴포넌트를 연결할거
작성 페이지 구성은 제목 : -----------
       <-- 내용: ----------- (박스형태로) -->
</template>

<script>
import axios from "axios";
// import routes from 'router'
export default {
  data: () => ({
    title: "",
    content: "",
    insertBoard: {
      title: "",
      content: "",
    },
  }),
  created() {
    this.create;
  },
  methods: {
    create: function () {
      //기능, 주소 , 내용
      this.insertBoard.title = this.title;
      this.insertBoard.content = this.content;
      axios
        .post("http://localhost:8090/board/write", this.insertBoard)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
      this.$router.push("/board");
    },
  },
};
</script>

<style></style>
