<template>
  <div class="root">
    <el-form :rules="rules" ref="ruleForm" :model="ruleForm" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="工号" prop="workNumber">
        <el-input v-model="ruleForm.workNumber"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-select placeholder="请选择" v-model="user.permission">
          <el-option :label="'医生'" :value="'doctor'"></el-option>
          <el-option :label="'护士'" :value="'nurse'"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ModifyUser',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateWorkNumber = async (rule, value, callback) => {
      if (
        this.ruleForm.workNumber == this.$route.params.originInfo.workNumber
      ) {
        callback()
      } else {
        const valid = await this.$store.dispatch(
          'checkWorkNum',
          this.ruleForm.workNumber
        )
        if (valid) {
          callback()
        } else {
          callback(new Error('此工号已被注册！'))
        }
      }
    }
    return {
      ruleForm: {
        name: '',
        email: '',
        password: '',
        checkPass: '',
        workNumber: '',
      },

      user: {
        _id:'',
        name: '',
        email: '',
        password: '',
        workNumber: '',
        permission: '',
      },

      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 2,
            max: 30,
            message: '长度在 2 到 30 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          {
            required: true,
            min: 6,
            max: 30,
            message: '长度在 6 到 30 位之间',
            trigger: 'blur',
          },
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur',
          },
        ],
        workNumber: [
          { required: true, message: '请输入工号', trigger: 'blur' },
          { validator: validateWorkNumber, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit(formName) {
      // console.log(this.user)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.user.name = this.ruleForm.name
          this.user.email = this.ruleForm.email
          this.user.password = this.ruleForm.password
          this.user.workNumber = this.ruleForm.workNumber
          
          this.$store
            .dispatch('modifyUser', this.user)
            .then((res) => {
              // console.log(res)
              this.$router.push('/admin/newuserok')
            })
            .catch((reason) => console.log(reason))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  mounted() {
    this.ruleForm.name = this.$route.params.originInfo.name
    this.ruleForm.email = this.$route.params.originInfo.email
    this.ruleForm.workNumber = this.$route.params.originInfo.workNumber
    this.user.permission = this.$route.params.originInfo.permission
    this.user._id = this.$route.params.originInfo._id
  },
}
</script>

<style scoped>
.root {
  width: 25%;
  margin: 0 auto;
}
</style>
