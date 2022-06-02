<template>
	<view class="container">
		<view class="login-box">
			<view class="login-title">{{title}}</view>
			<input v-model="account" id="account" class="in" placeholder="请输入学号" />
			<input v-model="password" id="password" type="password" class="in" placeholder="请输入密码" />
			
		</view>
		<br/>
		<button type="default" class="submit" style="color: #D20017;" @click="login">登录</button>
	</view>
</template>

<script>
import { loginApi } from '@/api/home'
	export default{
		data(){
			return{
				title:'登录党建系统',
				account:'',
				password:'',
			}
		},
		methods: {
		  // 获取首页轮播图
		  async login() {
		    // getBannerApi()赋值给data
		    let result = await loginApi(this.account,this.password)
		    //console.log(result.data)
		    // 打印出来是promise,异步函数,所以用async await/then
		    // this.carouselList = result.data.map(item => {
		    //  // console.log(item)
		    //   return {
		    //     image: item.img_url,
		    //     title: item.title,
		    //     content: item.content,
		    //   }
		    // })
		  },
		 
		},
	}
</script>




<style>
	.container{
		height: 100vh;
		background-color: #D20017;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.login-box{
		height: 400rpx;
		width: 500rpx;
		font-size: 50rpx;
		text-align: center;
		color: #FFFFFF;
		margin-top: 200rpx;
	}
	.in{
		margin: 0 auto;
		width: 458rpx;
		height: 84rpx;
		background: #c7c7c8;
		border-radius: 8rpx;
		margin-top: 50rpx;
		font-size: 30rpx;
		color:black;
	}
	.submit{
		width: 200rpx;
		height: 200rpx;
		font-size: 50rpx;
		border-radius: 50%;
		margin-top: 350rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 10rpx 10rpx 20rpx #333333;
	}
</style>
