<template>
	<view>
		<u-toast ref="uToast"/>
		<u-gap height="30" bg-color="#d5d5d5"></u-gap>
		<view class="textasd">
			<a>您对商家/菜品还满意吗？</a>
		</view>

		<view class="top">
			<view class="img3">
				<image :src="shop_img"></image>
				<a>{{shop_name}}</a>
			</view>
		</view>
		<view class="middle">
			<u-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="40" size="70" v-model="value2" @change="changex"></u-rate>
		</view>
		<view class="textdsa">
			<u-input v-model="value" :type="type" :border="border" :height="height" :auto-height="autoHeight"
				:placeholder="placeholder" />
		</view>
		<view class="shangchuan">
			<u-upload :action="action" :file-list="fileList"></u-upload>
		</view>
		<view class="ti">
			<u-button type="primary" size="medium" @click="orderSuccess">发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value2:'',
				value: '',
				type: 'textarea',
				border: true,
				height: 200,
				autoHeight: true,
				placeholder: '写下您对商家的评价把~',
				shop_name:'',
				shop_img:'',
				shopId:'',
				userInfo:[]
			}
		},
		methods:{
			changex(){
				console.log(this.value2)
			},
			orderSuccess(){
				uni.request({
					data:{
						shop_id:this.shopId,
						talk_time:this.time,
						content:this.value,
						talk_img:this.userInfo.avatarUrl,
						user_name:this.userInfo.nickName,
						star_value:this.value2
					},
					url:"http://127.0.0.1/20211019/create_talk.php",
					method:'POST',
					header:{
						"Content-Type": "application/x-www-form-urlencoded"
					},
					
					success: (res) => {
						console.log("提交了一次")
						this.$refs.uToast.show({
							title: '评论成功',
							type:'success',
							back:true,
							params: {
								id: 1,
								menu: 3,
								
							},
							// wx.navigateBack({
							//     delta: -1
							// });
						})
						// wx.navigateBack({
						//     delta: -1
						// });
						
					}
				})
			}
		},
		onLoad(options) {
			this.shop_name = decodeURIComponent(options.shop_name)
			this.shop_img = decodeURIComponent(options.shop_img5)
			this.shopId = options.shop_id
			this.userInfo = wx.getStorageSync('userInfo')
			// console.log(this.shop_name)
			// console.log(this.shop_img+this.shopId)
		},
		mounted() {
			var _this = this
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth()+1;
			let dd = new Date().getDate();
			_this.gettime = yy+'-'+mm+'-'+dd;
			this.time = this.gettime
			// console.log(this.time)
		},
	}
</script>

<style>
	.top {
		width: 100%;
		height: 100rpx;
		margin-top: 20rpx;
		/* background-color: #000000; */
	}

	.img3 {
		display: flex;
	}

	.img3>image:first-child {
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
		margin-left: 30rpx;
		margin-top: 10rpx;
	}

	.img3>a:nth-child(2) {
		font-weight: bold;
		font-size: 60rpx;
		margin: 40rpx 0 0 20rpx;
	}

	.textasd {
		text-align: center;
		font-size: 40rpx;
	}

	.middle {
		width: 100%;
		height: 100rpx;
		/* border: 1rpx solid red; */
		text-align: center;
		margin-top: 100rpx;
		margin-bottom: 20rpx;
	}

	.textdsa {

		width: 90%;
		margin: auto;
	}

	.shangchuan {
		width: 90%;
		margin: auto;

	}

	.ti {
		position: absolute;
		bottom: 50rpx;
		left: 40rpx;
		width: 90%;
		margin: auto;
		text-align: center;
	}
</style>
