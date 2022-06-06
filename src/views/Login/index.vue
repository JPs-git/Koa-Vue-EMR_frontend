<template>
  <div id="login-root">
    <div id="welcome">欢迎使用Koa-Vue-EMR!</div>
    <div class="login-input">
      <div class="workId-input">
        <span>工号</span>
        <el-input placeholder="请输入工号" v-model="user.workNumber"> </el-input>
      </div>
      <div class="password-input">
        <span>密码</span>
        <el-input placeholder="请输入密码" v-model="user.password" show-password>
        </el-input>
      </div>
      <span class="err">{{ reason }}</span>
      <el-button type="primary" class="login-button" @click="login"
        >登录</el-button
      >
      <el-button type="info" size="small" @click="adminLogin"
        >管理员登录</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        workNumber: '',
        password: '',
      },
      reason:''
    }
  },
  methods: {
    async login() {
      this.$store.dispatch('login', this.user).then(token =>{
        // 登录成功 存储token 跳转至Home
        localStorage.setItem('token', token)
        this.$router.push('/home')
      }).catch(reason => this.reason = reason)
    },
    async adminLogin(){
      this.$store.dispatch('adminLogin', this.user).then(token =>{
        // 登录成功 存储token 跳转至Admin
        localStorage.setItem('token', token)
        this.$router.push('/admin/user')
      }).catch(reason => this.reason = reason)
    }
  },
}
</script>

<style scoped>
#welcome{
  font-size: 30px;
  width: 20%;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
#login-root{
  background-image: url("./backImg.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.login-input {
  width: 25%;
  height: 170px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.workId-input {
  width: 100%;
  margin: 0 auto;
}
.password-input {
  width: 100%;
  margin: 10 auto;
}
.login-button {
  margin: 0 auto;
}
.err{
  color: red;
}
</style>
