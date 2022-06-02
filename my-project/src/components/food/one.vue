<template>
	<view class="bo6">
		<view class="search">
			
		<u-search placeholder="搜索商店" v-model="keyword" bg-color="white" input-align="center"></u-search>
	</view>
<!-- 	商店列表 -->
	<view class="shopinfo" @click="intoFoodMenu(item.shop_name)" v-for="(item,index) in shop_info">
		<view class="shopimg">
			<img :src="item.shop_img" class="shopimg2">
		</view>
		<view class="shopname">
			<view class="shopname1">
				{{item.shop_name}}
			</view>
			<view class="shopname3">
				<view>
					<u-rate :count="5" :disabled="true" v-model="item.star_value"></u-rate>
				</view>
				<view>
					人气55
				</view>
			</view>
			<view class="shopname4">
				<view>
					{{item.cat_shop}}
				</view>
				<view>
					{{item.address}}
				</view>
			</view>
			<view class="shopname2">
				营业时间：{{item.shop_time}}
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	// import payment from "../food/payment.vue"
	export default {
		data() {
			return {
				
				shop_info:[],
				tagText:'支持自取',
				tagText2:'支持预定',
				startMoneny:'70',
				workerMoneny:'2',
				shop_img:[],
				shop_src:"https://img0.baidu.com/it/u=502669430,2878013450&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
				index2:''
			}
		},
		onLoad:function(options) {
			console.log("dd");
			uni.request({
				url:"https://abc.ilightlife.info/api/shop",
				data:{
					text:'uni.requset'
				},
				header:{
				},
				success:(res)=>{
					this.shop_info = res.data.data//.map(v=>v.name)
					// this.shop_img = res.data.shop_img
					// console.log(this.shop_info)
					// console.log(this.shop_info)
				},
				fail: () => {
					console.log("err")
				}
			})
			
			
			
		},
		
			
		
		shoploop(){
		},
		components:{
			// payment
		},
		methods:{
			intoFoodMenu(index){
				 this.index2 = index
				  console.log(this.index2)
				wx.navigateTo({
					url:"./second?index3="+this.index2,
						
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
		}
		
		.u-body-item {
			font-size: 32rpx;
			color: #333;
			// padding: 20rpx 10rpx;
		}
			
		.u-body-item image {
			width: 120rpx;
			 flex: 0 0 120rpx;
			height: 120rpx;
			border-radius: 8rpx;
			margin-left: 15rpx;
		}
		.buttom2{
		  position: fixed;
			background-color: #19BE6B;
			width: 100%;
			height: 90rpx;
			// position: bottom;
			 bottom: 0;
			 left: 0;
			 display: flex;
		}
		.shopinfo{
			 position: relative;
			 top: 100rpx;
			 left: 30rpx;
			width: 700rpx;
			display: flex;
			// border-bottom: solid #82848A 2rpx;
			margin: auto;
			 margin-top: 20rpx;
			// margin-left: 40rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
		}
		.shopimg{
			
		}
		.shopname1{
			font-weight: bold;
			font-size: 40rpx;
		}
		.shopname{
			margin-top: 10rpx;
			margin-left: 50rpx;
			width: 60%;
			height: 200rpx;
			
		}
		.shopimg2{
			width: 200rpx;
			// height: 220rpx;
			height: 100%;
			border-top-left-radius:10rpx;
			border-bottom-left-radius: 10rpx;
		}
		.shopname2{
			margin-top: 10rpx;
		}
		.shopname3{
			display: flex;
			margin-top: 10rpx;
		}
		.shopname3>view:nth-child(2){
			margin-left: 30rpx;
		}
		.shopname4{
			margin-top: 10rpx;
			display: flex;
		}
		.shopname4>view:nth-child(2){
			margin-left: 40rpx;
		}
		.search{
			// margin: 10rpx 0rpx 0rpx 40rpx;
			// background-color: #FFFFFF;
			width: 100%;
			height: 100rpx;
			position: fixed;
			// text-align: center;
			// position: top;
			background-color: #2B85E4;
			z-index: 9999;
			 top: 0;
			 padding: 20rpx 0 0 20rpx;
		}
		.bo6{
			position: absolute;
		}
</style>