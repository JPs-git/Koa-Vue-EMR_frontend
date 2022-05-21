<template>
  <div>
    <el-result icon="success" title="添加用户成功" subTitle="点击按钮回到首页">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="goIndex">返回</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
export default {
  name:'NewUserOk',
  methods:{
    goIndex(){
      this.$router.push('/admin/user')
    }
  }
}
</script>

<style>

</style>