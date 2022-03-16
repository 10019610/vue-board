<template>
  <div>
    <h2>게시판 리스트</h2>
    <div>
      <div><input type="text" v-model="title" /></div>
      <a style="cursor: pointer" @click="example">조회</a>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// export default {
//   data: () => ({
//     title: "",
//   }),
//   methods: {
//     example: function () {
//       alert("example!!");
//       axios
//         .get("http://localhost:8090", this.title)
//         .then((result) => {
//           console.log(result);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     },
//   },
// };
</script>

<style scoped>
</style>