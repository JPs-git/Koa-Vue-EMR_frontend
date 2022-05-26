<template>
  <div>
    <el-descriptions class="margin-top" title="" :column="4" border>
      <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          姓名
        </template>
        {{ patient.name }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 病案号 </template>
        {{ patient.recordNum }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 健康卡号 </template>
        {{ patient.healthCardNum }}
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label"> 出生日期  </template>
        {{ patient.birthDate }}
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label"> 国籍 </template>
        {{ patient.country }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 年龄 </template>
        {{ patient.age }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> （年龄不足一周岁的）月龄 </template>
        {{ patient.ageMonth }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 新生儿出生体重 </template>
        {{ patient.birthWeight }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 新生儿入院体重 </template>
        {{ patient.admissionWeight }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 出生地 </template>
        {{ patient.birthPlace }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 籍贯 </template>
        {{ patient.origin }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 现住址 </template>
        {{ patient.address }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 户口地址 </template>
        {{ patient.account }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 电话 </template>
        {{ patient.Phone }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 邮编 </template>
        {{ patient.zip }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 邮箱 </template>
        {{ patient.email }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 身份证号 </template>
        {{ patient.idCardNum }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 职业 </template>
        {{ patient.job }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 婚姻 </template>
        {{ patient.marriage }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 工作单位及地址 </template>
        {{ patient.workPlace }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 单位电话 </template>
        {{ patient.workPhone }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 单位邮编 </template>
        {{ patient.workZip }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 联系人姓名 </template>
        {{ patient.contactName }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 关系 </template>
        {{ patient.contactRelationship }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 联系人地址 </template>
        {{ patient.contactAddress }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 联系人电话 </template>
        {{ patient.contactPhone }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 入院途径 </template>
        {{ patient.admissionRoute }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 入院日期 </template>
        {{ patient.admissionDate }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 入院科别 </template>
        {{ patient.admissionDepartment }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 病房 </template>
        {{ patient.ward }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 出院日期 </template>
        {{ patient.dischargeDate }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 出院科别 </template>
        {{ patient.dischargeDepartment }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 实际住院天数 </template>
        {{ patient.totalDays }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 门（急）诊诊断 </template>
        {{ patient.diagnosis }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 疾病编码 </template>
        {{ patient.diseaseNum }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 药物过敏 </template>
        {{ patient.allergic }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 死亡患者尸检 </template>
        {{ patient.autopsy }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 血型（ABO） </template>
        {{ patient.bloodTypeABO }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 血型（Rh） </template>
        {{ patient.bloodTypeRh }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 主治医师 </template>
        {{ patient.attending }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 责任护士 </template>
        {{ patient.resNurse }}
      </el-descriptions-item>

      
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'PatientDetail',
  data() {
    return {
      patient: this.$route.query,
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
}
</script>

<style></style>
