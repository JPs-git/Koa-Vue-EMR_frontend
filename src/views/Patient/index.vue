<template>
  <div>
    <div class="patient-table">
      <el-table :data="patients.Patients" border>
        <el-table-column prop="recordNum" label="病案号" width="280">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="showDetail(scope.row)" type="text" size="small"
              >详情</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="removePatient(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout=" sizes, prev, pager, next, total, jumper"
        :total="patients.total"
        :page-size="findQuery.pageSize"
        @current-change="changePage"
        @size-change="changeSize"
      >
      </el-pagination>
    </div>

    <el-row>
      <el-button type="primary" @click="goNewPatient">新增病人</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Patient',
  data() {
    return {
      findQuery: {
        pageSize: 10,
        currentPage: 1,
      },
    }
  },
  computed: {
    // 对象写法第二个参数是模块名
    // ...mapState({Patients:'patient'})
    ...mapState(
      { patients: (state) => state.patient },
    ),
  },
  methods: {
    goNewPatient() {
      this.$router.push('/newpatient')
    },
    showDetail() {},
    removePatient() {},
    changePage(newpage) {
      this.findQuery.currentPage = newpage
      this.$store.dispatch('findPatient', this.findQuery)
    },
    changeSize(newsize) {
      this.findQuery.pageSize = newsize
      this.$store.dispatch('findPatient', this.findQuery)
    },
  },
  mounted() {
    this.$store.dispatch('findPatient', this.findQuery)
  },
}
</script>

<style scoped>
.patient-table {
  width: 621px;
  margin: 0 auto;
}
</style>
