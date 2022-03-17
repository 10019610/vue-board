<template>
  <header>
    <h1>
      <router-link to="/main"
        ><img alt="boardlogo" src="../assets/boardlogo.png" width="90"
      /></router-link>
    </h1>
    <h2>
      <!-- <a @click="toMain">메인으루</a> -->
    </h2>
    <div class="menuWrap">
      <ul class="menu">
        <a><router-link to="/board">Main Board</router-link></a>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  // methods: {
  //   toMain: function () {
  //     this.$router.push("/main/list");
  //   },
  // },
  // toMain: function() {
  //   this.$router.push("/main")
  // },
};
</script>

<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e;
}
header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}
header ul.menu:after {
  display: block;
  clear: both;
  content: "";
}
header ul.menu {
  position: absolute;
  top: 20px;
  right: 50px;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
