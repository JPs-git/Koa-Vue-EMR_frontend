<template>
  <div>
    <div class="welcome">{{ user.userInfo.name }}, 欢迎您</div>
    <a class="logout" href="javascript:;" @click="handleLogout">注销</a>
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
    goPatient() {
      this.$router.push('/patient')
    },
    handleLogout(){
      localStorage.setItem('token','')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.$store
      .dispatch('getUserInfo')
      .then()
      .catch(() => {
        this.$router.push('/login')
      })
  },
}
</script>

<style scoped>
.welcome {
  float: left;
}
.logout {
  position: relative;
  left: 5px;
}
.logout:hover{
  color: blue;
}
</style>
