import { isObjectEqual } from '~/utils/index.js'
let loaddingTime = null
const requestQueue = []
// 添加请求对列
function addRequestQueue (requestConfig) {
  const obj = Object.assign({}, requestConfig)
  const off = requestQueue.some(req => req.url === obj.url && req.method === obj.method && isObjectEqual(req.data, obj.data))
  if (off) {
    // 存在就不发起请求
    return false
  }
  requestQueue.push(obj)
  if (!loaddingTime) {
    loaddingTime = setTimeout(() => {
    }, 1000)
  }
  return true
}
// 删除请求队列数据
function delRequestQueue (requestConfig) {
  if (!requestConfig) {
    console.log('delRequestQueue:Error')
    clearTimeout(loaddingTime)
    loaddingTime = null
  }
  const index = requestQueue.findIndex((req) => {
    return req.url === requestConfig.url && req.method === requestConfig.method && isObjectEqual(req.data, requestConfig.data)
  })
  if (index > -1) {
    requestQueue.splice(index, 1)
  }
  if (requestQueue.length < 1 && loaddingTime) {
    clearTimeout(loaddingTime)
    loaddingTime = null
  }
}

export default function ({ $axios, redirect, store, res, app, $winstonLog }) {
  $axios.defaults.timeout = 60000

  $axios.onRequest((config) => {
    addRequestQueue(config)
    return config
  })

  $axios.onResponse((response) => {
    try {
      delRequestQueue(response.config)
     return response
    } catch (e) {
      console.log('axios:异常', e)
      return { error: true, message: '数据异常', origin: e }
    }
  })

  $axios.onError((error) => {
    console.log(error.message)
    return { error: true, message: '数据异常', origin: error }
  })
  // utils.axios = $axios
}
