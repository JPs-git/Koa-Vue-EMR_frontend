<template>
  <div>
    <el-table :data="admins" border style="width: 100%">
      <el-table-column prop="workNumber" label="工号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      

      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="removeUser(scope.row.workNumber)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout=" sizes, prev, pager, next, total, jumper"
      :total="adminTotal"
      :page-size="findQuery.pageSize"
      @current-change="changePage"
      @size-change="changeSize"
    >
    </el-pagination>
    <el-button type="primary" @click="createUser">新增管理员</el-button>
  </div>
</template>

<script>
export default {
  name: 'Admins',
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
      this.$router.push('/admin/newadmin')
    },
    modifyInfo(originInfo) {
      const location = {
        name: 'modify',
        params: { originInfo },
      }
      this.$router.push(location)
    },
    removeUser(workNumber) {
      this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$store.dispatch('adminRemove', workNumber)
        })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.$store.dispatch('adminFind')
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
    admins() {
      return this.$store.state.admin.admins
    },
    adminTotal() {
      return this.$store.state.admin.adminTotal
    },
  },
  mounted() {
    this.$store.dispatch('adminFind', this.findQuery)
  },
}
</script>

<style></style>
