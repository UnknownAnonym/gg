<template>
	<view>
		<view class="top">
			<image src="../../static/img/logo.png"></image>
			<a>v1.0.2</a>
		</view>
		<view class="wenzi">
			<view class="jieshao">
				<a>介绍</a>
			</view>
			<view class="jieshao2">
				<a>【轻life】一个方便新生适应校园生活的衣食住行等的广轻专用小程序指南,该小程序中含有广轻学院的食堂介绍、创业申请指导、校内及周边交通指南等。
</a>
			</view>
			<view class="jieshao3">
				<a>合作加盟咨询【123456789】</a>
			</view>
			<view class="jieshao3">
				<a>简历投放邮箱:123444444@qq.com</a>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	image{
		margin-top: 50rpx;
		height: 250rpx;
		width: 300rpx;
		/* border: 1rpx solid red; */
	}
	.top{
		width: 400rpx;
		height: 400rpx;
		margin: auto;
		/* border: 1rpx solid red; */
		text-align: center;
		
	}
	.top>a:nth-child(2){
		font-size: 40rpx;
	}
	.jieshao{
		background-color: white;	
		padding: 20rpx 20rpx 20rpx 20rpx;
		width: 100%;
		height: 100%;
		font-size: 40rpx;
		border-bottom: 1rpx solid #C8C7CC;
		border-top: 1rpx solid #C8C7CC;
		margin: 30rpx 0 0 0 ;
	}
	.jieshao2{
		background-color: white;	
		padding: 20rpx 20rpx 20rpx 20rpx;
		width: 100%;
		height: 150rpx;
		font-size: 30rpx;
		border-bottom: 1rpx solid #C8C7CC;
	}
	.jieshao3{
		background-color: white;	
		padding: 20rpx 20rpx 20rpx 20rpx;
		width: 100%;
		height: 100%;
		font-size: 30rpx;
		border-bottom: 1rpx solid #C8C7CC;
	}
</style>
