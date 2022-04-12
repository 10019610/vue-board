<template>
  <div>
    <h2>상세페이지</h2>
    <div>제목 : {{ detailBoard.title }}</div>
    <div>내용 : {{ detailBoard.content }}</div>
    <input type="button" @click="contentUpdate" value="수정!" />
    <!-- <h2>{{ $route.params.boardId }}</h2> -->
    <!-- <h2 v-for="(detaillist, index) in detailBoard" :key="index">
      {{ detaillist.title }}
    </h2> -->
    <!-- <h3>{{ $route.params.title }}</h3> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  // List에서 보낸 params 값을 props로 받아서 세팅해준다.
  name: "boardDetail",
  // props: {
  //   boardId: [],
  // },
  data: () => ({
    detailBoard: {
      boardId: 0,
      title: "",
      content: "",
    },
  }),

  created() {
    this.detail();
  },
  methods: {
    detail: function () {
      console.log("sdsdsddsdd");
      this.detailBoard.boardId = this.$route.params.boardId;

      console.log(this.detailBoard);

      axios
        .get("http://localhost:8090/board/detail", { params: this.detailBoard })
        .then((result) => {
          console.log(result);
          this.detailBoard.title = result.data.title;
          this.detailBoard.content = result.data.content;

          // this.content = result.data.content;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    contentUpdate: function () {
      console.log("update!!");
      this.$router.push({
        name: "BoardUpdate",
      });
    },
  },
};
</script>

<style></style>
