<template>
	<view class="body">
		<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2" >广播站没人了！nice广播站没人了！nice</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
			</u-card>
			
	</view>
	
</template>

<script>
	export default {
			data() {
				return {
					
					current: 0,
					title: '素胚勾勒出青花，笔锋浓转淡',
					subTitle: '2020-05-15',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				}
			},
			methods: {
				change(index) {
					this.current = index;
					console.log(this.current);
				}
			}
		}
</script>

<style>
	
		
		.u-card-wrap { 
				background-color: $u-bg-color;
				padding: 1px;
				
			}
			
			.u-body-item {
				font-size: 32rpx;
				color: #333;
				padding: 20rpx 10rpx;
			}
				
			.u-body-item image {
				width: 120rpx;
				flex: 0 0 120rpx;
				height: 120rpx;
				border-radius: 8rpx;
				margin-left: 12rpx;
				
			}
			
	
</style>

