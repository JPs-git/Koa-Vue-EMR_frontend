<template>
  <div>
    <el-button type="primary" @click="createUser">新增用户</el-button>
  </div>
</template>

<script>
export default {
  name:'User',
  methods:{
    createUser(){
      this.$router.push('/admin/newuser')
    }
  }
}
</script>

<style>

</style>