import Fly from 'flyio/dist/npm/wx'
import { baseUrl } from '@/config/index'
const fly = new Fly()

// 配置请求根域名
fly.config.baseURL = baseUrl

// 配置请求拦截器
fly.interceptors.request.use(request => {
  uni.showLoading({
    title: request.title || '加载中',
  })
  request.headers = {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': request.headers['Content-Type'] || 'application/json',
    'XX-Token': uni.getStorageSync('token'),
  }
  return request
})

// 配置响应拦截器
fly.interceptors.response.use(
  response => {
    // 如果请求报错
    if (response.status != 200) {
      uni.hideLoading()
      uni.showModal({
        title: '温馨提示',
        content: response.data.msg,
      })
    } else {
      uni.hideLoading()
      if (response.data.code == 10001) {
        uni.clearStorageSync()
        uni.showToast({
          title: '登录已失效',
        })
        setTimeout(() => {
          uni.reLaunch({
            url: '/pages/login/login',
          })
        }, 1500)
      } else if (response.data.code == 200) {
        //成功只将请求结果的data字段返回
        return response.data
      } else {
        // 失败
        uni.showToast({
          title: response.data.msg,
        })
      }
    }
  },
  err => {
    if (err.status === 500) {
      uni.showModal({
        title: '温馨提示',
        content: '后台接口报错',
      })
    } else if (err.status === 404) {
      uni.showModal({
        title: '温馨提示',
        content: '后台接口缺失',
      })
    } else {
      //发生网络错误后会走到这里
      uni.showModal({
        title: '温馨提示',
        content: '网络错误',
      })
    }
    uni.hideLoading()
    return Promise.resolve('网络请求：ERROR！')
  }
)

export default fly
