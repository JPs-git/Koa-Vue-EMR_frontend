<template>
  <div>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" path="/user">用户管理</el-tab-pane>
          <el-tab-pane label="管理员管理" path="/admin" v-if="1">管理员管理</el-tab-pane>
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
  },
}
</script>

<style></style>
