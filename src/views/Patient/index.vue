<template>
  <div>
    <p>这是patient组件！</p>
    <el-row>
      <el-button type="primary" @click="goNewPatient">新增病人</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Patient',
  methods:{
    goNewPatient(){
      this.$router.push('/newpatient')
    }
  }
}
</script>

<style>

</style>