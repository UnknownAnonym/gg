<template>
	<view>
		<tn-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">店铺</block>
			<block slot="content"></block>
		</tn-custom>
		<!-- 图片区域 -->
		<goods-img ref="goodsMethod" @click.native="jumpPhoto"></goods-img>
		<!-- 商品详细 -->
		<div class="goods-con">
			<view class="text-black text-bold shop-title">粉面世家</view>
			<viwe class="star">
				<view class="stra_wrap">
					<u-rate :count="5"
					current="4.5"
					:disabled="true" 
					:min-count="1"
					gutter="0"
					active-color="#ffd800"
					:size="35"></u-rate>
					<text class="txt">
						<text class="text-yellow">4.4</text>
						<text class="dis">30条</text>
						<text class="text-price">15/人</text>
					</text>
				</view>
			</viwe>
			<view class="business-hours">
				<view class="business-hours-wrap">
					<view class="time">
						<text class="cuIcon-time"></text>
						<text class="con">0:25-19:30</text>
					</view>
					<view class="phone">
						<text class="cuIcon-phone"></text>
						<text class="con">13380120130</text>
					</view>
					<view class="icon">
						<!-- <text class="cuIcon-right"></text> -->
						<navigator class="cuIcon-right" url="./components/storeMessage"></navigator>
					</view>
				</view>
			</view>
			
			<div class="shop-address">
				<div class="address">
					<text class="cuIcon-location"></text>
					<text class="con">广东轻工职业技术学院南海校区二饭二楼</text>
				</div>
			</div>
		</div>
		<u-gap height="15" bg-color="#f6f6f6"></u-gap>
		
		<!-- 推荐菜 -->
		<res-dishes></res-dishes>
		
		<u-gap height="15" bg-color="#f6f6f6"></u-gap>
		<!-- 评论 -->
		<comment></comment>
		<!-- 底部导航栏 -->
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import goodsImg from "./components/goodsImg.vue";
	import resDishes from "./components/resdishes.vue";
	import comment from "../../components/comment/comment.vue"
	import tabBar from "./components/tabBar.vue"
	
	export default {
		data(){
			return{
				
			}
		},
		// onLoad() {
		// 	this.tabBar = [{
		// 			pagePath:"/components/comment/share",
		// 			iconPath: "share",
		// 			selectedIconPath: "share-fill",
		// 			text: '分享',
		// 			isDot: true
		// 		},
		// 		{
		// 			pagePath:"/components/comment/write_comment",
		// 			iconPath: "edit-pen",
		// 			selectedIconPath: "edit-pen-fill",
		// 			text: '评论',
		// 			midButton: true
		// 		},
		// 		{
		// 			iconPath: "star",
		// 			selectedIconPath: "star-fill",
		// 			text: '收藏',
		// 			isDot: true
		// 		},
		// 	]
		// },
		methods:{
			jumpPhoto(){
				this.$refs.goodsMethod.jumpPhoto(`/pages/photo/photo?title=${"粉面世家"}`);
			}
		},
		components:{
			goodsImg,resDishes,comment,tabBar
		}
	}
</script>

<style lang="scss" scoped>
	.goods-con{
		padding: 0 20rpx;
		.shop-title{
			font-size: 50rpx;
			margin-bottom: 10rpx;
			
		}
		

		.star{
			.stra_wrap{
				padding: 0 0 20rpx 0;
				.txt{
					text{
						margin: 8rpx;
					}
				}
			}
		}

		
		.business-hours{
			padding: 40rpx 0;
			border-bottom: 1rpx solid #e6e6e6;
			border-top: 1rpx solid #e6e6e6;
			.business-hours-wrap{
				position: relative;
				display: flex;
				align-items: center;
				font-size: 30rpx;
				.con{
					margin: 0 10rpx;
				}
				.icon{
					position: absolute;
					right: 0;
					
				}
				
			}
		}
		
		.shop-address{
			padding: 40rpx 0;
			// border-bottom: 1rpx solid #e6e6e6;
			.con{
				margin: 0 10rpx;
			}
		}
		
	}
</style>
