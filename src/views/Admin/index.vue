<template>
  <div>
    <el-container>
      <el-header>
        <div class="welcome">{{ adminName }}, 欢迎您</div>
        <a class="logout" href="javascript:;" @click="handleLogout">注销</a>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" path="/user" name="0"
            >用户管理</el-tab-pane
          >
          <el-tab-pane
            label="管理员管理"
            path="/admin"
            name="1"
            v-if="adminName === 'admin'"
            >管理员管理</el-tab-pane
          >
        </el-tabs>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      activeName: '0',
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push('/admin' + tab.$attrs.path)
    },
    handleLogout() {
      localStorage.setItem('token', '')
      this.$router.push('/login')
    },
  },
  computed: {
    adminName() {
      return this.$store.state.admin.adminInfo.name
    },
  },
  mounted() {
    this.$store.dispatch('adminCurrent')
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
.logout:hover {
  color: blue;
  text-decoration: none;
}
</style>
