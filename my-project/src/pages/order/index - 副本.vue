<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" style="height: 5000rpx;">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
				<u-swiper :list="list1"></u-swiper>
				</scroll-view>
			</swiper-item>
			<swiper-item ><!-- style="background-color: #000000;" -->
				<view class="all_order" v-for="(item,index) in allInfo">
					<view>
					<view class="shop_img">
						<img :src="item.shop_img">
						<view class="shop_img_right">{{item.shop_name}}</view>
						<view class="shop_img_icon">
							<u-icon name="arrow-right"></u-icon>
						</view>
						<view class="shop_img_icon_state">
							<a>订单状态</a>
						</view>
					</view>
					
					<!-- 商品的名字和数量 -->
					<view class="food_and_num">
						<view class="food_info">
							<view class="food_name">
								{{item.food_name}}
							</view>
							
							<view class="food_name">
								{{item.food_name2}}
							</view>
						</view>
						<view class="food_num">
							<view class="food_num2">
								x{{item.food_num}}
							</view>
							<view  class="food_num2">
								 {{item.food_num2}}
							</view>
						</view>
					</view>
					<view>
						<view class="total">共{{item.food_num}}件商品，实付￥{{item.total_price}}</view>
					</view>
					
					<view class="operation">
						<!-- 下单时间 -->
						<view class="order_time">
							{{item.order_time}}
						</view>
						<!-- 查看详情 -->
						<view class="details">
							<u-button size="mini">查看详情</u-button>
						</view>
						<view class="pingjia">
							<u-button size="mini" @click="gotoPingjia(index)">我要评价</u-button>
						</view>
						<view class="again">
							<u-button size="mini">再来一单</u-button>
						</view>
					</view>
				</view>
				</view>
				<!-- <u-swiper :list="list1"></u-swiper> -->
			</swiper-item>
			<swiper-item style="background-color: #aa0000;">
				<view>
					测试02
				</view>
			</swiper-item>
			<swiper-item style="background-color: #005500;">
				<view>
					测试03
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '等待中'
				}, {
					name: '热帖'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				allInfo:[],
				totalPrice:20,
				
			};
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			},
			gotoPingjia(index){
				console.log(this.allInfo[index].shop_id)
				wx.navigateTo({
					url:"../../components/order/index?allinfo="+encodeURIComponent(this.allInfo[index].shop_name)+
					 "&shop_img5="+encodeURIComponent(this.allInfo[index].shop_img)+
					"&shop_id="+this.allInfo[index].shop_id
				})
				
			},
		},
		onLoad() {
			uni.request({
				url:"http://127.0.0.1/20211019/food_order.php",
				data:{
				},
				success: (res) => {
					
					this.allInfo = res.data
					
					
				}
			})
		}
	};
</script>
<style scoped lang="scss">
	
	.all_order{
		width: 96%;
		height: 320rpx;
		margin: auto;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background-color: white;
		
	}
	.shop_img{
		display: flex;
	}
	.shop_img>img:first-child{
		// border: solid red 1px;
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		margin: 20rpx 0 0 20rpx;
		flex: 1;
	}
	.shop_img_right{
		// border: solid red 1px;
		width: 80rpx;
		height: 80rpx;
		margin: 20rpx 0 0 30rpx;
		flex: 5;
		font-weight: bold;
		font-size: 30rpx;
		line-height: 60rpx;
	}
	.shop_img_icon{
		// border: solid red 1px;
		width: 80rpx;
		height: 80rpx;
		margin: 20rpx 0 0 30rpx;
		flex: 1;
		// justify-content: center;
		// align-items: center;
		text-align: center;
		line-height: 60rpx;
	}
	.shop_img_icon_state{
		// border: solid red 1px;
		width: 80rpx;
		height: 80rpx;
		margin: 20rpx 0 0 30rpx;
		flex: 2;
		// justify-content: center;
		// align-items: center;
		text-align: center;
		line-height: 60rpx;
		color: #c5c5c5;
	}
	
	.food_info{
		margin: 10rpx 0 0 120rpx;
		// border: solid 1px red;
		width: 300rpx;
		height: 100%;
		flex: 8;
	}
	// .food_name{
	// 	flex: 9;
	// }
	.food_num{
		float: right;
		flex: 2;
		// border: solid 1px red;
		margin-top: 20rpx;
	}
	.food_and_num{
		// border: solid 1px red;
		display: flex;
	}
	.food_num2{
		margin-top: 5rpx;
	}
	.total{
		width: 300rpx;
		// border: solid 1px red;
		float: right;
		margin:5rpx 0 5rpx 0;
	}
	.operation{
		width: 100%;
		height: 100%;
		border-top: solid 1rpx #DCDFE6;
		 display: flex;
		 
	}
	.operation>view:first-child{
		flex: 6;
		margin: 30rpx 0 0 10rpx;
	}
	.operation>view:nth-child(2){
		flex:3;
		margin-top: 20rpx;
	}
	.operation>view:nth-child(3){
		flex:3;
		margin-top: 20rpx;
	}
	.operation>view:nth-child(4){
		flex:3;
		margin-top: 20rpx;
	}
</style>