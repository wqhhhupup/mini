import axios from 'axios'
export function request(config) {
  //创建axios实例

  const url = "http://106.54.54.237:8000/api/v1";
  const url2 = "http://123.207.32.32:8000/api/vip";
  const instance = axios.create({
    baseURL:url||url2,
    timeout:5000
  })
  //2. axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    return config

  },error => {

  })
  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data

  },error => {
    console.log(error)
  })
  return instance(config)
}
