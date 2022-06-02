<template>
	<div class="all">
		<div class="login-wrap">
			<view class="wenzi2">
				<a>轻life</a>
			</view>
			<image src="../../static/img/logo.png"></image>
			<button @click="getUserInfo()" class="denglu">微信授权登录</button>
			<button @click="getUserInfo()" class="">账号登录</button>
			<button class="denglu2" @click="back()">取消</button>
			<!-- <button v-show="isshow2" @click="loginout" class="tuichu">退出登录</button> -->
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				// isshow: true,
				// isshow2: false,
				userInfo: [],
				APP_ID: 'wx931f5942f4b11c08',
				APP_SECRET: '14738b647405fd607b373813c10596ca',
				OPEN_ID: '',
				SESSION_KEY: '',
				isBe: '',
			}
		},
        onShow: () => {
        	// this.onload()
        },
		methods: {
			back(){
				wx.navigateBack({
					
				})
			},
			getUserInfo() {
				wx.getUserProfile({
					desc: "展示用户信息",
					success: (res) => {
						// this.isshow = false
						// this.isshow2 = true
						// let user_info = res.detail.userInfo
						this.userInfo = res.userInfo
						wx.setStorageSync('userInfo', this.userInfo)
						wx.setStorageSync('openId',this.OPEN_ID)
						// console.log("aa")
						// console.log(this.userInfo)
						if(this.isBe==true){
							uni.request({
								url: 'http://127.0.0.1/20211019/create_user.php',
								data: {
								     openId:this.OPEN_ID,
									 user_name:this.userInfo.nickName,
									 user_img:this.userInfo.avatarUrl
								},
								header: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								method: 'POST',
								success: (res) => {
									// wx.switchTab({
									// 	url: "../index/index"
									// })
									// wx.setStorageSync('openId',this.OPEN_ID)
									wx.navigateBack({
										delta:1,
										
									})
								},
								fail: () => {
									console.log("shhibai")
									
								}
							})
						}else{
							wx.switchTab({
								url: "../mine/index"
							})
						}
					}
				})
			},
			loginout() {
				this.userInfo = ''
				wx.setStorageSync('userInfo', null)
				
			}
		},
		onLoad: function(options) {
			var that = this
			let userInfo = wx.getStorageSync('userInfo')
			if (userInfo) {
				// this.isshow = false
				// this.isshow2 = true
			}
			// this.OPEN_ID = wx.getStorageInfoSync('openId')
			// console.log(this.OPEN_ID)
			wx.login({
				success: (data) => {
					console.log(data);
					uni.request({
						//获取openid接口
						url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + this.APP_ID +
							'&secret=' + this.APP_SECRET + '&js_code=' + data.code +
							'&grant_type=authorization_code',
						data: {},
						method: 'GET',
						success: (res) => {
							// console.log(res.data)
							this.OPEN_ID = res.data.openid; //获取到的openid 
							this.SESSION_KEY = res.data.session_key; //获取到session_key 
							// console.log(this.OPEN_ID)
							// wx.setStorageSync('openId',this.OPEN_ID)
							uni.request({
								url: 'https://127.0.0.1/20211019/user_info.php',
								method:'GET',
								data: {
									openId: res.data.openid
									// id:1
								},
								header: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								success: (res) => {
									// if (res.data == "erro") {
									// 	this.isBe = true
									// } else {
									// 	this.isBe = false
									// }
									
									if(res.data.length==0){
										this.isBe = true
									}else{
										// console.log(res.data)
										this.isBe= false
									}
									
								},
								fail: (res) => {
									console.log("没有")
								}
							})
							
						}
					})
				}
			})
			
		},
	}
</script>
<style>
	body {
		background-color: white;
		text-align: center;
	}

	input {
		display: block;
		width: 80%;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		margin-bottom: 10px;
		outline: none;
		border: 1px solid #888;
		padding: 10px;
		box-sizing: border-box;
	}

	p {
		color: red;
	}

	button {
		display: block;
		width: 80%;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		border: none;
		background-color: #2b85e4;
		color: #fff;
		font-size: 16px;
		margin-bottom: 5px;
	}

	span {
		cursor: pointer;
	}

	span:hover {
		color: #2b85e4;
	}

	.r {
		border-radius: 20px;
	}

	.all {
		margin-top: 200rpx;
	}

	image {
		width: 180px;
		height: 100px;
		margin-top: 50rpx;
	}

	.ra {
		text-align: center;
		margin: auto;
		height: 100%;
		width: 100%;
	}

	.icu {
		margin: auto;
		text-align: center;
	}

	.denglu {
		margin-top: 250rpx;
	}
    .denglu2{
		margin-top: 40rpx;
		
	}
	.tuichu {
		margin-top: 250rpx;
		background-color: white;
		color: #000000;
	}

	.wenzi2 {
		margin: auto;
		font-size: 50rpx;
		font-weight: bold;

	}
</style>
