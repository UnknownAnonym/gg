<template>
	<!-- 校园热点 -->
	<view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">校园热点</text>
				<text class="text-ABC text-blue">HotSpots</text>
			</view>
			<view class="action">
				<text class="text-lg text-grey text-shadow">更多</text>
			</view>
			
		</view>
		<!-- 热点内容 -->
		<view class="hot-spot bg-white">
			<block v-for="item in hotSpot" :key="item.id">
				<view class="hot-text-wrap">
					<view class="hot-text text-cut">{{item.title}}</view>
					<view class="hot-time">{{item.time}}</view>
				</view>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 校园热点
				hotSpot:[
					{
						id:1,
						title:"新生必看！广东轻工职业技术学院2021级新生开学须知",
						time:"2021-09-12"
					},
					{
						id:2,
						title:"关于南海校区中心机房电力改造影响网络访问的通知",
						time:"2021-09-08"
					},
					{
						id:3,
						title:"关于6月10日全校业务系统中断及广州（新港、琶洲校区）网络中断的通知",
						time:"2021-06-09"
					},
					
				],
			}
		}
	}			
</script>

<style lang="scss" scoped>
	// 热点
	.hot-spot{
		padding:0 30rpx;
		.hot-text-wrap{
			display: flex;
			.hot-text{
				flex: 7;
				padding: 10rpx 0;
				
			}
			.hot-time{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				flex:3;
			}
		}
	
	}
</style>
