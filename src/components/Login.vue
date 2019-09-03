<template>
<div>
  <el-form :label-position="top" label-width="80px" :model="formLabelAlign">
    <el-form-item label="用户名">
      <el-input v-model="formLabelAlign.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.username"></el-input>
    </el-form-item>
  </el-form>
  <el-row>
    <el-button type="primary">主要按钮</el-button>
  </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  
};
</script>

<style>
</style>