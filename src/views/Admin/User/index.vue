<template>
  <div>
    <el-table :data="userInfo" border style="width: 100%">
      <el-table-column prop="workNumber" label="工号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="220"> </el-table-column>

      <el-table-column prop="permission" label="权限" width="120">
      </el-table-column>

      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="modifyInfo(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button type="text" size="small" @click="removeUser(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout=" sizes, prev, pager, next, total, jumper"
      :total="userTotal"
      :page-size="findQuery.pageSize"
      @current-change="changePage"
      @size-change="changeSize"
    >
    </el-pagination>
    <el-button type="primary" @click="createUser">新增用户</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      findQuery: {
        pageSize: 10,
        currentPage: 1,
      },
    }
  },
  methods: {
    createUser() {
      this.$router.push('/admin/newuser')
    },
    modifyInfo(originInfo) {
      const location = {
        name: 'modify',
        params: { originInfo },
      }
      this.$router.push(location)
    },
    removeUser(user) {
      this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          user.isActive = false
          this.$store.dispatch('modifyUser', user)
        })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.$store.dispatch('allUsers')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
     changePage(newpage) {
      this.findQuery.currentPage = newpage
      this.$store.dispatch('findPatient', this.findQuery)
    },
    changeSize(newsize) {
      this.findQuery.pageSize = newsize
      this.$store.dispatch('findPatient', this.findQuery)
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.admin.userInfo
    },
    userTotal() {
      return this.$store.state.admin.userTotal
    },
  },
  mounted() {
    this.$store.dispatch('allUsers', this.findQuery)
  },
}
</script>

<style></style>
