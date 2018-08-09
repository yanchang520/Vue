 import axios from 'axios'

 const baseURL = 'http://localhost:8888/api/private/v1/'
 axios.defaults.baseURL = baseURL



axios.interceptors.request.use(function (config) {
    // 将token给到一个前后台约定好的key中，作为请求发送
    let token = localStorage.getItem('mytoken')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })
  

// 验证登录
  export const checkUser = params => {
    return axios.post('login', params).then(res => res.data)
  }
  // 获取用户列表
  export const getUserList = params => {
    return axios.get('users', params).then(res => res.data)
  }