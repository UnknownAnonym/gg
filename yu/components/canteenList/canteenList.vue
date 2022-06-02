<template>
	<view class="wrap"> 
		<block v-for="detail in cateenDetail" :key="detail.shop_id">
			<view class="container" @click="jumpDetail(detail.shop_id)">
				<view class="shop-image">
					<image src="https://z3.ax1x.com/2021/09/18/4lFGuD.png" mode="widthFix" class="image"></image>
				</view>
				<view class="shop-detail">
					<view class="text-black text-bold shop-title">{{detail.shop_detail.name}}</view>
					<viwe class="star">
						<u-rate :count="5" 
						v-model="detail.star" 
						:disabled="true" 
						:min-count="1"
						gutter="0"
						active-color="#ffd800"
						:size="30"></u-rate>
						<text class="txt">
							<text class="text-yellow">{{detail.star_grade}}</text>
							<text>30条</text>
							<text class="text-price">{{detail.shop_detail.percapita}}/人</text>
						</text>
					</viwe>
					<view class="cate-detail">
						<view class="cate">
							<text style="padding-right: 20rpx;">{{detail.shop_detail.cate}}</text>
							<text>广轻南海</text>
						</view>
						<view class="address">{{detail.address}}</view>
					</view>
					<view class="hotcomment">
						<view class="comment text-black">{{detail.shop_detail.hotcomment}}</view>
						<u-line class="u-line"></u-line>
					</view>
					<block v-for="(activity,index) in detail.shop_detail.discount" :key="index">
						<view class="discount">
								<view class="dis">惠</view>
								<view class="dis_str">{{activity}}</view>
						</view>

					</block>
				</view>
				
			</view>
			<u-gap height="10" bg-color="#f6f6f6"></u-gap>
		</block>
	</view>
	
</template>

<script>
	export default {
		props:{
			cateenDetail:Array
		},
		data(){
			return {
				value: 2
			}
		},
		mounted(){
			console.log(this.cateenDetail);
		},
		methods:{
			jumpDetail(shopId){
				uni.navigateTo({
					url:"/pages/shopdetail/index"
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
		.shop-image{    //左边图片 
			// background-color:pink;
			.image{
				width: 180rpx;
				width: 180rpx;
			}
		}
		.shop-detail{   //商品详细
			padding-left: 20rpx;
			// background-color:pink;
			flex: 1;
			.shop-title{
				font-size: 35rpx;
			}
			.star{  
				padding: 20rpx 0;
				.txt{
					text{
						margin: 8rpx;
					}
				}
			}
			.cate-detail{
				display: flex;
				justify-content: space-between;
				color: #7e7e7e;
				
			}
		}
		.hotcomment{ //热门评论
			.comment{
				padding: 15rpx 0;
				font-size: 24rpx;
			}
		}
		.discount{
			margin: 15rpx 0;
			display: flex;
			.dis{
				margin-right: 10rpx;
				background-color: #f37b1d;
				color:#fff;
				padding: 3rpx 6rpx;
				font-size: 24rpx;
			}
			.dis_str{
				align-self: center;
				font-size: 24rpx;
			}
		}
	}
</style>
