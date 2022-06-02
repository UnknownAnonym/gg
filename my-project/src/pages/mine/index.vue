<template>
	
	<view class="header">
		<u-row gutter="16">
			<u-col span="11">
				<view v-if="!userInfo" class="denglu4">
					<a @click="gotologin()">请先登录！</a>
				</view>
				<view v-else>
					<image :src="userInfo.avatarUrl" class="img" @click="click"></image>
					<view class="name" :cname='name'>
						{{userInfo.nickName}}
					</view>
				</view>
				
			</u-col>
			
		</u-row>
		
		<!-- <view class="n">
			ID:{{id}}
		</view> -->
		<view class="top">
			<u-grid :col="2">
				
					<u-grid-item>
						<u-icon name="volume" :size="46"></u-icon>
						<navigator url="../../components/food1/one"><view class="grid-text">通知</view></navigator>
					</u-grid-item>
					<u-grid-item @click="personal">
						<u-icon name="order" :size="46" color="#2979ff"></u-icon>
						<view class="grid-text">我的账户</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="rmb-circle" :size="46" color="#beac20"></u-icon>
						<view class="grid-text">退款/售后</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="setting" :size="46"></u-icon>
						<navigator url="../../components/mine/setting">
						<view class="grid-text">设置</view><!-- @tap="gotoset" -->
						</navigator>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="star-fill" :size="46" color="#ff9900"></u-icon>
						<view class="grid-text">我的收藏</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="map-fill" :size="46" color="#e3d20e"></u-icon>
						<view class="grid-text">地址</view>
					</u-grid-item>
					<u-grid-item @click="guanyu">
						<u-icon name="account-fill" :size="46" color="#0079fa"></u-icon>
						<view class="grid-text">关于我们</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="close" :size="46" @click="loginout()"></u-icon>
						<view class="grid-text">退出登录</view>
					</u-grid-item>
					
				</u-grid>
		</view>
		
	</view>
</template>

<script>
	
	import message from "../../components/mine/message.vue"
	import setting from "../../components/mine/setting.vue"
	// import personal from "../../components/mine/personal.vue"
	
	export default {
		data() {
			return {
				openId:'',
				userInfo:[],
				id:'123' ,
				name:'昵称',
				src:'https://img1.baidu.com/it/u=395380977,272417941&fm=26&fmt=auto'
			}
		},
		watch:{
			 // userInfo:{//深度监听，可监听到对象、数组的变化
			 //         handler(val, oldVal){
			 //             console.log("userInfo: "+val, oldVal);
			 //         },
			 //         deep:true //true 深度监听
			 //     }
			 // userInfo(val, oldVal){//普通的watch监听
			 //          console.log("userInfo: "+val, oldVal);
			 //      },
		},
		methods:{
			
			adress(){
				wx.navigateTo({
					url:'../../components/mine/adress'
				})
			},
			click(){
				console.log('a');
			},
			guanyu(){
				wx.navigateTo({
					url:'../../components/mine/about'
				})
			},
			gotologin:()=>{
				wx.navigateTo({
					url:'../login/index'
				})
			},
			loginout(){
				
				this.userInfo=''	
				wx.setStorageSync('userInfo', null)
				wx.setStorageSync('openId',null)
				// let that = this
			 //    this.onReady()
				
				// console.log(this.userInfo)
			},
			personal(){
				wx.navigateTo({
					url:'../../components/mine/personal'
				})
			},
			// gotoset(){
			// 	uni.navigateTo({
			// 		url:"../../components/index/search",
			// 	})
				
			// }
		},
		components:{
			message,
			setting,
			// personal,
		},
		onLoad() {
			this.userInfo = wx.getStorageSync('userInfo')
			this.openId = wx.getStorageSync('openId')
			// console.log(this.userInfo)
		},
		onReady: () => {
			console.log('hello')
		}
	}
</script>

<style scoped lang="scss">
	.header{
		margin: auto;
		width: 750rpx;
		height: 500px;
		/* background-color: #0000FE; */
		position: absolute;
		/* margin-left: 40%; */
		//background-image: url(../../static/img/06.jpeg);
		background-size: 100% 50%;
		
		background-repeat: no-repeat;
	}
	.img{
		/* padding-left: 6%; */
		position: relative;
		margin-top: 15%;
		height: 80px;
		width: 80px;
		border-radius: 40px;
		left: 44%;
		
	}
	.top{
		border-radius: 5px;
		width: 95%;
		height: 200px;
		margin: auto;
	}
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
	.name{
		margin-bottom: 10%;
		position: relative;
		left: 49%;
		font-size: 20px;
	}
	.n{
		margin-top: 500%;
		
	}
	.denglu4{
		margin: 330rpx 0 40rpx 50rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
	
	
	
</style>
