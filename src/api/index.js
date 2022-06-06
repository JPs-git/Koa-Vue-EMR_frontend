// 当前模块进行API统一管理
import requests from './requests'

// 测试接口
export const reqTest = () => requests({ url: 'users', method: 'get' })

// admin模块接口
// admin注册接口
export const reqAdminRegister = (admin) =>
  requests({ url: 'admins/register', method: 'post', data: admin })
// 查询admin工号是否注册接口
export const reqAdminCheckWorkNum = (workNumber) =>
  requests({ url: 'admins/checkworknum', method: 'post', data: { workNumber } })
// admin登录接口
export const reqAdminLogin = (admin) =>
  requests({ url: 'admins/login', method: 'post', data: admin })
// admin查询接口
export const reqAdminFind = (query) =>
  requests({ url: 'admins/', method: 'get', params: query })
// admin 停用接口
export const reqAdminRemove = (workNumber) =>
  requests({ url: 'admins/remove', method: 'post', data:{workNumber} })
// admin当前信息接口
export const reqAdminCurrent = () =>
  requests ({url:'admins/current', method:'get'})
// 新增user接口
export const reqCreateUser = (user) =>
  requests({ url: 'users/rigister', method: 'post', data: user })
// 检查工号是否已注册接口
export const reqCheckWorkNum = (workNumber) =>
  requests({ url: 'users/checkworknum', method: 'post', data: { workNumber } })
// 查询user接口
export const reqAllUsers = (query) =>
  requests({ url: 'users/all', method: 'get', params: query })
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
// 修改patient接口
export const reqModifyPatient = (update) =>
  requests({ url: 'patients/modify', method: 'post', data: update })
