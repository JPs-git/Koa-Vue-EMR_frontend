<template>
  <div>
    <div>{{ user.userInfo.name }}, 欢迎您</div>
    <el-row>
      <el-button type="primary" @click="goPatient">病案管理</el-button>
      <el-button type="success">个人信息</el-button>
      <el-button type="info" @click="gotoLogin('/admin')">管理员</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',

  methods: {
    gotoLogin(path) {
      this.$router.push(path)
    },
    goPatient(){
      this.$router.push('/patient')
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.$store
      .dispatch('getUserInfo')
      .then()
      .catch((reason) => console.log(reason))
  },
}
</script>

<style></style>
