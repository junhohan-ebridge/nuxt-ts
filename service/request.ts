import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'https://api-yalliyalli.ebridgelabs.net/',
  // baseURL: 'http://127.0.0.1:8000',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 10, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    return response
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  (error) => {
    return error
  }
)

export default service
