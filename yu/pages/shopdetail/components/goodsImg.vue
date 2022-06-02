<template>
	<view >
		<view class="goods-img">
			<u-image width="100%" height="360rpx" src="https://cdn.zhoukaiwen.com/project1.jpeg" border-radius="30rpx"></u-image>
			<div class="thumnail">
				<u-icon name="photo" color="#fff" size="30"></u-icon>
				<text>182</text>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			// 跳转
			jumpPhoto(navUrl){
				uni.navigateTo({
					url:navUrl
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #fff;
	}
</style>
	
<style lang="scss" scoped>
	.goods-img{
		position: relative;
		padding:20rpx;
		.thumnail{
			position: absolute;
			right: 40rpx;
			bottom: 35rpx;
			color:#fff;
			background-color: rgba(0,0,0,.5);
			padding: 10rpx 14rpx;
			border-radius: 34rpx;
		}
		
	}
</style>
