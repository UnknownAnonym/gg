<template>
	<view>
		<view class="top">
			<a>可选收货地址</a>
		</view>
		<view class="b">
			<u-icon name="plus-circle-fill" size="60" color="blue"></u-icon>
			<a>新增地址</a>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.top{
		background-color: white;
		width: 100%;
		height: 100%;
		padding: 20rpx 0 20rpx 20rpx;
	}
	.top>a:first-child{
		/* margin:20rpx 0 20rpx 20rpx; */
		font-size: 40rpx;
	}
	.b{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 150rpx;
		background-color: white;
		text-align: center;
		padding-top: 20rpx;
	}
</style>
