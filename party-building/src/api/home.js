import fly from '@/utils/request'
import { requestTimeout } from '@/config'

/**
 * @author
 * @createTime  2021-11-23
 * @description  首页接口
 */

// 获取首页轮播图
export function getBannerApi() {
  return fly.request({
    method: 'get',
    url: '/banner',
    timeout: requestTimeout,
  })
}
export function loginApi(account,password) {
 //  return fly.request({
 //    method: 'POST',
 //    url: '/login',
	// data:{
	// 	account:'1',
	// 	password:'2'
	// },
	// success:function(data){
	// 	return data;
	// },
 //    timeout: requestTimeout,
 //  })
fly.request("/login",{account:account,password:password},{
    method:"post",
    timeout:5000 //超时设置为5s
 }).then(d=>{ console.log("request result:",d.data)})
}
// get:parmas post:data
// export function getNoticeApi(data) {
//   return fly.request({
//     method: 'post',
//     url: '/notice',
//     timeout: requestTimeout,
// 	data
//   })
// }

