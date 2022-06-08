<template>
  <div>
    <div class="containor">
      <p>病案首页</p>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="patient.healthCardNum" placeholder="请输入内容">
            <template slot="prepend">健康卡号</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.recordNum" placeholder="请输入内容">
            <template slot="prepend">病案号</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="flex-center">
        <el-col :span="4">
          <el-input v-model="patient.name" placeholder="请输入内容">
            <template slot="prepend">姓名</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <div>
            <el-radio v-model="patient.gender" label="男">男</el-radio>
            <el-radio v-model="patient.gender" label="女">女</el-radio>
          </div>
        </el-col>
        <el-col :span="6">
          <span>出生日期 </span>
          <el-date-picker
            v-model="patient.birthDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="4">
          <el-input v-model="patient.age" placeholder="请输入内容">
            <template slot="prepend">年龄</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="patient.country" placeholder="请输入内容">
            <template slot="prepend">国籍</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="flex-center">
        <el-col :span="3">
          <div class="text-center">（年龄不足一周岁的）</div>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.ageMonth" placeholder="请输入内容">
            <template slot="prepend">年龄</template>
            <template slot="append">月</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.birthWeight" placeholder="请输入内容">
            <template slot="prepend">新生儿出生体重</template>
            <template slot="append">克</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.admissionWeight" placeholder="请输入内容">
            <template slot="prepend">新生儿入院体重</template>
            <template slot="append">克</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <span>出生地 </span>
          <el-cascader
            v-model="places.birthPlace"
            :options="provinces"
            filterable
          ></el-cascader>
        </el-col>
        <el-col :span="6">
          <span>籍贯 </span>
          <el-cascader
            v-model="places.origin"
            :options="provinces"
            filterable
          ></el-cascader>
        </el-col>
        <el-col :span="6">
          <span>现住址 </span>
          <el-cascader
            v-model="places.address"
            :options="provinces"
            filterable
          ></el-cascader>
        </el-col>
        <el-col :span="6">
          <span>户口地址 </span>
          <el-cascader
            v-model="places.account"
            :options="provinces"
            filterable
          ></el-cascader>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model="patient.phone" placeholder="请输入内容">
            <template slot="prepend">电话</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="patient.zip" placeholder="请输入内容">
            <template slot="prepend">邮编</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="patient.email" placeholder="请输入内容">
            <template slot="prepend">邮箱</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="patient.idCardNum" placeholder="请输入内容">
            <template slot="prepend">身份证号</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.job" placeholder="请输入内容">
            <template slot="prepend">职业</template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-radio-group v-model="patient.marriage" id="marriage-box">
            <el-radio :label="'未婚'">未婚</el-radio>
            <el-radio :label="'已婚'">已婚</el-radio>
            <el-radio :label="'丧偶'">丧偶</el-radio>
            <el-radio :label="'离异'">离异</el-radio>
            <el-radio :label="'其他'">其他</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="patient.workPlace" placeholder="请输入内容">
            <template slot="prepend">工作单位及地址</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.workPhone" placeholder="请输入内容">
            <template slot="prepend">单位电话</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.workZip" placeholder="请输入内容">
            <template slot="prepend">邮编</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="patient.contact" placeholder="请输入内容">
            <template slot="prepend">联系人姓名</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="patient.contactRelationship"
            placeholder="请输入内容"
          >
            <template slot="prepend">关系</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.contactAddress" placeholder="请输入内容">
            <template slot="prepend">地址</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.contactPhone" placeholder="请输入内容">
            <template slot="prepend">电话</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="1">
          <div class="nowrap">入院途径</div>
        </el-col>
        <el-col :span="12">
          <el-radio-group v-model="patient.admissionRoute">
            <el-radio :label="'门诊'">门诊</el-radio>
            <el-radio :label="'急诊'">急诊</el-radio>
            <el-radio :label="'其他医疗机构转入'">其他医疗机构转入</el-radio>
            <el-radio :label="'其他'">其他</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <span>入院日期 </span>
          <el-date-picker
            v-model="patient.admissionDate"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>入院科别 </span>
          <el-select v-model="patient.admissionDepartment" placeholder="请选择">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.ward" placeholder="请输入内容">
            <template slot="prepend">病房</template>
          </el-input>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <span>出院日期 </span>
          <el-date-picker
            v-model="patient.dischargeDate"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>出院科别 </span>
          <el-select v-model="patient.dischargeDepartment" placeholder="请选择">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="patient.totalDays">
            <template slot="prepend">实际住院</template>
            <template slot="append">天</template>
          </el-input>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="patient.diagnosis" placeholder="请输入内容">
            <template slot="prepend">门（急）诊诊断</template>
          </el-input>
        </el-col>

        <el-col :span="6">
          <span>疾病编码 </span>
          <el-select v-model="patient.diseaseNum" placeholder="请选择">
            <el-option
              v-for="item in diseaseNums"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="patient.allergies">
            <template slot="prepend">药物过敏</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <span>死亡患者尸检 </span>
          <el-radio-group v-model="patient.autopsy">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">
          <div>血型</div>
        </el-col>
        <el-col :span="10">
          <el-radio-group v-model="patient.bloodTypeABO">
            <el-radio label="A"></el-radio>
            <el-radio label="B"></el-radio>
            <el-radio label="AB"></el-radio>
            <el-radio label="O"></el-radio>
            <el-radio label="不详"></el-radio>
            <el-radio label="未查"></el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="10">
          <el-radio-group v-model="patient.bloodTypeRh">
            <el-radio label="阳"></el-radio>
            <el-radio label="阴"></el-radio>
            <el-radio label="不详"></el-radio>
            <el-radio label="未查"></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="patient.attendingName">
            <template slot="prepend">主治医师</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="patient.resNurseName">
            <template slot="prepend">责任护士</template>
          </el-input>
        </el-col>
      </el-row>
      <el-button type="primary" @click="submitPatient">提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import Province from '@/assets/data/addr'

export default {
  name: 'ModifyPatient',
  data() {
    return {
      patient: this.$route.query.patient,
      provinces: Province,
      places: this.$route.query.places,

      departments: [
        {
          value: '外科',
          label: '外科',
        },
      ],
      diseaseNums: [
        {
          value: '0001',
          label: '头疼0001',
        },
      ],
    }
  },
  methods: {
    submitPatient() {
      this.$store
        .dispatch('modifyPatient', this.patient)
        .then(() => {
          this.$router.push('/newpatientok')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    cancel() {
      this.$router.go(-1)
    },
  },
  watch: {
    places: {
      deep: true,
      handler() {
        // 将数组拆分赋值给病人对象
        // 出生地
        this.patient.birthProvince = this.places.birthPlace
          ? this.places.birthPlace[0]
          : ''
        this.patient.birthCity = this.places.birthPlace
          ? this.places.birthPlace[1]
          : ''
        this.patient.birthArea = this.places.birthPlace
          ? this.places.birthPlace[2]
          : ''
        // 籍贯
        this.patient.originProvince = this.places.origin
          ? this.places.origin[0]
          : ''
        this.patient.oringinCity = this.places.origin
          ? this.places.origin[1]
          : ''
        this.patient.originArea = this.places.origin
          ? this.places.origin[2]
          : ''
        // 现住址
        this.patient.addrProvince = this.places.address
          ? this.places.address[0]
          : ''
        this.patient.addrCity = this.places.address
          ? this.places.address[1]
          : ''
        this.patient.addrArea = this.places.address
          ? this.places.address[2]
          : ''
        // 户口地址
        this.patient.accountProvince = this.places.account
          ? this.places.account[0]
          : ''
        this.patient.accountCity = this.places.account
          ? this.places.account[1]
          : ''
        this.patient.accountArea = this.places.account
          ? this.places.account[2]
          : ''
      },
    },
  },
  mounted() {},
}
</script>

<style scoped>
.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
}
.hang {
  display: flex;
  width: 80%;
  margin: 20px auto;
  justify-content: space-evenly;
  align-items: baseline;
}
.hang1 {
  width: 30%;
}
.nowrap {
  white-space: nowrap;
}
#marriage-box {
  flex-grow: 3;
}
.containor {
  width: 80%;
  margin: 0 auto;
}
.text-center {
  text-align: center;
  align-items: center; /*新版本*/
}
.flex-center {
  align-items: baseline;
}
</style>
