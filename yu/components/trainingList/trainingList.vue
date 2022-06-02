<template>
	<view class="wrap">
		<block v-for="detail in trainingDetail" :key="detail.training_id">
			<view class="container" @click="jumpDetail(detail.training_id)">
				<view class="training-image">
					<image src="https://z3.ax1x.com/2021/09/18/4lFGuD.png" mode="widthFix" class="image"></image>
				</view>
				<view class="training_list">					
					<text class="txt">
						<text class="training-floor">楼层:{{detail.training_floor}}层</text>
						<text class="training-room">教室号:{{detail.training_room}}</text>
						<text class="training-address">地址:{{detail.address}}</text>
					</text>
				</view>
			</view>
			<u-gap height="12" bg-color="#f6f6f6"></u-gap>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			trainingDetail:Array
		},
		data(){
			return{
				value: 5
			}
		},
		mounted() {
			console.log(this.trainingDetail);
		},
		methods:{
			jumpDetail(trainingId){
				console.log('click')
				uni.navigateTo({
					url:"/pages/trainingdetail/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		padding: 15rpx 20rpx;
		background-color: #fff;
		.training-image{    //左边图片 
			// background-color:pink;
			.image{
				width: 180rpx;
				width: 180rpx;
			}
		}
		.training_list{
			position: relative;
			margin-left: 10px;
			font-size: 15px;
			width: 600rpx;
			
			 // border: 1px solid red;
			.training-room{
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				align-items: center;
				word-wrap: break-word;
				font-weight: bold;
			}
			.training-address{
				position: absolute;
				top: 90rpx;
				left: 10rpx;
				align-items: center;				
				margin: 15rpx 0rpx;
			}
			.training-floor{
				position: absolute;
				top: 50rpx;
				left: 10rpx;
				align-items: center;
				margin: 15rpx 0rpx;
			}
		}
	}
</style>
