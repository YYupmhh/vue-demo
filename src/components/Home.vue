<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
              <img  src="@/assets/logo.png" alt />
          </div>
        </el-col>
        <el-col :span="19">
          <h3 class="middle" >这是一个vuedemo</h3>
        </el-col>
        <el-col :span="1">
          <a href="javascript" class="loginout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'home',
  // components: {
  //   HelloWorld
  // },
  // created () {
  //   this.$http.post('http://localhost:8888/api/private/v1/login',{
  //     username:'aaa',
  //     password:11111
  //   })
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
};
</script>
<style>
.middle{
  text-align: center;
}
.loginout{
  text-decoration: none;
  line-height: 60px;
}
</style>