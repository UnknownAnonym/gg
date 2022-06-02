<template>
	<view class="wrap"> 
		<block v-for="detail in academicDetail" :key="detail.academic_id">
			<view class="container" @click="jumpDetail(detail)">
				<view class="academic-image">
					<image src="https://z3.ax1x.com/2021/09/18/4lFGuD.png" mode="widthFix" class="image"></image>
				</view>
				<view class="academic_list">					
					<text class="txt">
						<text class="academic-num">教室号:{{detail.academic_num}}</text>
						<text class="academic-address">地址:{{detail.address}}</text>
					</text>
				</view>
			</view>
			<u-gap height="12" bg-color="#f6f6f6"></u-gap>
		</block>
	</view>
	
</template>

<script>
	export default {
		props:{
			academicDetail:Array
		},
		data(){
			return {
				value: 2
			}
		},
		mounted(){
			console.log(this.academicDetail);
		},
		methods:{
			jumpDetail(detail){
				var i = detail.academic_id;
				console.log(i);
				uni.navigateTo({
					url:"/pages/academicdetail/index"
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
		.academic-image{    //左边图片 
			// background-color:pink;
			.image{
				width: 180rpx;
				width: 180rpx;
			}
		}
		.academic_list{
			position: relative;
			margin-left: 10px;
			font-size: 15px;
			width: 600rpx;
			
			// border: 1px solid red;
			.academic-num{
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				align-items: center;
				word-wrap: break-word;
			}
			.academic-address{
				position: absolute;
				top: 90rpx;
				left: 10rpx;
				align-items: center;
				font-weight: bold;
			}
		}
	}
</style>
