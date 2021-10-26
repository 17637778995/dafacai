import axios from 'axios'

const fetch = axios.create({
  // baseURL: 'http://localhost:7001'
})

fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  ...fetch,
  get: (url, params) => fetch.get(url, { params })
}
