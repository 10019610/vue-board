<template>
  <div>
    <h1>BoardList !!</h1>
    <input type="text" value="검색해보세요" /><input
      type="button"
      value="검색"
      @click="BoardSearch"
    />
    <button @click="write">글 작성</button>

    <div class="board">
      <div v-if="vuelist">
        <table class="boardtable">
          <colgroup>
            <col width="550px" />
            <col width="400px" />
            <col width="400px" />
            <!-- <col width="25%" /> -->
          </colgroup>

          <th>글 번호</th>
          <th>제목</th>
          <th>내용</th>

          <tr v-for="(listyo, index) in vuelist" :key="index">
            <td>{{ index + 1 }}</td>
            <td @click="goDetail(listyo.boardId)">{{ listyo.title }}</td>
            <td>
              {{ listyo.content }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- <tr
      v-for="(listyo, index) in vuelist"
      :key="index"
      @click="detail(index)"
    ></tr> -->
  </div>
</template>

<script>
import axios from "axios";
// import func from 'vue-editor-bridge';

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
    // this.search(this.vuelist);
    this.BoardList();
    // console.log(this.search);
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
    goDetail: function (boardId) {
      console.log(boardId);
      this.$router.push({ name: "BoardDetail", params: { boardId: boardId } });
    },

    BoardSearch: function () {},
    // BoardBind: function() {
    //   this.$router.push({})
    // }
  },

  // detail: function () {
  //   this.$router.push({
  //     name: "detail",
  //     params: {
  //       boardId: "",
  //     },
  //   });
  // },
};
</script>

<style></style>
