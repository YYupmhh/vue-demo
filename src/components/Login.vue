<template>
  <div class="login_wrap">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formdata"
      class="login_form"
    >
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click="loginHome" type="primary" class="login_button">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async loginHome() {
      const res = await this.$http.post("login", this.formdata);
      const data = res.data;
      const { meta: { status, msg }} = data;
      
      if (status === 200) {
        const token = data.data.token;
        // 第一个参数是名字第二个是要存储的对象
        sessionStorage.setItem('token', token)
        this.$message.success(msg);
        this.$router.push({
          name: "home"
        });
      } else {
        this.$message.error(msg);
      }
    }
  }
};
</script>

<style>
.login_wrap {
  background-color: #324152;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_wrap .login_form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login_wrap .login_form .login_button {
  width: 100%;
}
</style>