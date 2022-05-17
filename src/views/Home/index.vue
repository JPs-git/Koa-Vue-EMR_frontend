<template>
  <div>
    <div>请选择您的身份</div>
    <el-row>
      <el-button>门诊医生</el-button>
      <el-button type="primary">住院医生</el-button>
      <el-button type="success">护士</el-button>
      <el-button type="info" @click="gotoLogin('/admin')">管理员</el-button>
      
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Home',
  methods:{
    gotoLogin(path){
      this.$router.push(path)
    }
  }
}
</script>

<style></style>
