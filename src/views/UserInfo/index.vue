<template>
  <el-descriptions title="用户信息" column="4" border>
    <template slot="extra">
      <el-button @click="cancel">返回</el-button>
    </template>
    <el-descriptions-item label="用户名">{{
      userInfo.name
    }}</el-descriptions-item>
    <el-descriptions-item label="工号">{{
      userInfo.workNumber
    }}</el-descriptions-item>
    <el-descriptions-item label="邮箱">{{
      userInfo.email
    }}</el-descriptions-item>
    <el-descriptions-item label="职位">{{
      userInfo.permission
    }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    },
  },
  methods:{
    cancel(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.$store.dispatch('getUserInfo')
    console.log(this.$store.state.user)
  },

}
</script>

<style></style>
