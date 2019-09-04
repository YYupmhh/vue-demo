<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <img src="@/assets/logo.png" alt />
          </div>
        </el-col>
        <el-col :span="19">
          <h3 class="middle">这是一个vuedemo</h3>
        </el-col>
        <el-col :span="1">
          <a href="javascript" class="loginout" @click.prevent="homeLoginout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- default-active:默认展开项
          :unique-opened: 只允许同时展开一项
          :router 开启路由模式
          开启后, 设置el-menu-item的index值 为路由标识
        -->
        <el-menu default-active="2-1" class="menu" :unique-opened="true" :router="true">
          <!-- 用户管理-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user">
              <i class="el-icon-location"></i>
              用戶列表
            </el-menu-item>
          </el-submenu>
          <!-- 权限管理-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-locat ion"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="/rights">
              <i class="el-icon-view"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <!-- 商品管理-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-view"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-view"></i>
              商品分类
            </el-menu-item>
          </el-submenu>
          <!--订单管理-->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-location"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <!--数据统计-->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-location"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  beforeCreate () {
    if (!sessionStorage.getItem('token')) {
      this.$router.push({
        name: 'Login'
      });
      this.$message.warning("请先登录");
    }
  },
  methods: {
    homeLoginout() {
      sessionStorage.clear();
      this.$router.push({ name: "Login" });
      this.$message.success("退出成功");
    }
  }
};
</script>
<style>
.middle {
  text-align: center;
}
.loginout {
  text-decoration: none;
  line-height: 60px;
}
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
}

.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>