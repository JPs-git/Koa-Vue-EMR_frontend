// 当前模块进行API统一管理
import requests from './requests'

// 测试接口
export const reqTest = () => requests({ url: 'users', method: 'get' })

// admin模块接口
// 新增user接口
export const reqCreateUser = (user) =>
  requests({ url: 'users/rigister', method: 'post', data: user })
// 检查工号是否已注册接口
export const reqCheckWorkNum = (workNumber) =>
  requests({ url: 'users/checkworknum', method: 'post', data: { workNumber } })
// 查询user接口
export const reqAllUsers = () => requests({ url: 'users/all', method: 'get' })
// 修改user接口
export const reqModifyUser = (modifiedUser) =>
  requests({ url: 'users/modify', method: 'post', data: modifiedUser })
// 登录接口
export const reqLogin = (data) =>
  requests({ url: 'users/login', method: 'post', data })
// 查询用户信息接口
export const reqUserInfo = () =>
  requests({ url: 'users/current', method: 'get' })

// patient相关接口
// 新增patient接口
export const reqNewPatient = (patient) =>
  requests({ url: 'patients', method: 'post', data: patient })
// 查询patient接口
export const reqFindPatient = (query) =>
  requests({ url: 'patients', method: 'get', params: query })
