<template>
  <div>
    <h2>메인보드 게시판!</h2>
    <div>
      <button @click="write">작성</button>
      <!-- <div><input type="text" v-model="title" /></div>
      <a style="cursor: pointer" @click="example">조회</a> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    write: function() {
      //write compo로 이동 
      this.$router.push('/write')
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