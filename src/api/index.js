// 当前模块进行API统一管理
import requests from './requests'

// 测试接口
export const reqTest = () => requests({url:'users', method:'get'})