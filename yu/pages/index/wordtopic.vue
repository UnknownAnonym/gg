<template>
	<!-- 话题 -->
	<view class="skill-sequence-panel-content-wrapper">
				<!-- 左虚化 -->
				<view class="hide-content-box hide-content-box-left"></view>
				<!-- 右虚化 -->
				<view class="hide-content-box hide-content-box-right"></view>
				
				<scroll-view scroll-x="true" class="kite-classify-scroll">
					
					<view class="topoc-wrap shadow" v-for="topicItem in topicList" :key="topicItem.id">
							<image src="../../static/me/zjx_me_bg6.jpg" mode="widthFix">
								<view class="nav-content">
									#{{topicItem.topicTitle}}#
								</view>
							</image>
					</view>
				
				</scroll-view>
				
	</view>
</template>

<script>
	export default {
		data (){
			return {
				// 话题
				topicList:[
					{
						id:1,
						topicTitle:"吹爆的军训神器",
					},
					{
						id:2,
						topicTitle:"老师说过的经典语录",
					},
					{
						id:3,
						topicTitle:"室友的奇葩特产",
					},
					{
						id:4,
						topicTitle:"你好,新同学",
					},
				
					{
						id:5,
						topicTitle:"吹爆的军训神器",
					},
					{
						id:6,
						topicTitle:"老师说过的经典语录",
					},
					
						
				],
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*左右渐变遮罩*/
	.swiper-box {
			flex: 1;
		}
		.swiper-item {
			height: 100%;
		}
		/*scroll-view外层*/
		.skill-sequence-panel-content-wrapper {
			position: relative;
			white-space: nowrap;
			padding: 10rpx 0 10rpx 10rpx;
		}
		.hide-content-box {
			position: absolute;
			top: 0;
			height: 100%;
			width: 10px;
			z-index: 2;
		}
	
		.hide-content-box-left {
			left: 0;
			background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
		}
	
		.hide-content-box-right {
			right: 0;
			background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
		}
	
		.kite-classify-scroll {
			width: 100%;
			height: 90rpx;
			overflow: hidden;
			white-space: nowrap;
		}
	
		.topoc-wrap {
			position: relative;
			display: inline-block;
			width: calc((100% / 4) - 30rpx);
			height: 90rpx;
			margin-right: 20rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			overflow: hidden;
			box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
			image{
				position: absolute;
				top: 0;
				left: 0;
			}
			.nav-content {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				padding: 10rpx 15rpx;
				flex-wrap: wrap;
				overflow: hidden;
				white-space: normal;
				color: #fff;
				letter-spacing: 3rpx;
				font-weight: 400;
				font-size: 22rpx;
				background-color: rgba(0,0,0,.4);
			}
		}
	
	
</style>
