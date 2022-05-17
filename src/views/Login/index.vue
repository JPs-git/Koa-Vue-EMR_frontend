<template>
  <div>
    <div class="login-input">
      <div class="workId-input">
        <span>工号</span>
        <el-input placeholder="请输入工号" v-model="workId"> </el-input>
      </div>
      <div class="password-input">
        <span>密码</span>
        <el-input placeholder="请输入密码" v-model="password" show-password>
        </el-input>
      </div>
      <el-button type="primary" class="login-button" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workId: '',
      password: '',
    }
  },
  methods:{
    login(){
      this.$store.dispatch('Test')
    }
  }
}
</script>

<style scoped>
.login-input {
  width: 25%;
  height: 170px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center
  
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
</style>
