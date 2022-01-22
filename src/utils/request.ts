/**
 * @Author zhoufeng
 * @CreateTime 2022/1/20 13:40
 * @Description
 */
import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 150000
})

request.interceptors.response.use(
  (response) => {
    const res = response.data
    // code-0,请求成功；code-1，未登录；code-2,服务器返回失败信息
    if (res.code === 0) {
      res.message && message.success(res.message)
      return res
    } else if (res.code === 2) {
      // 请求错误弹窗
      message.error(res.message)
      return Promise.reject(res)
    }
  },
  (error) => {
    // 请求错误弹窗
    message.error(error)
    return Promise.reject(error)
  }
)

export default request
