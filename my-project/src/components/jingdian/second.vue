<template>
	<view class="all">
		<view>
			<u-navbar class="n" v-show="nav" :is-back="false" :style="{opacity:opacityNum}">
				<a><u-icon name="arrow-left" size="40" @click="gotoBack()"></u-icon>中央电视台南海影视城</a>
			</u-navbar>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="20" close-icon-pos="top-right" closeable="true">
			<view class="tang2">
				<a>景区游玩须知</a>
				<a>游览须知</a>
				<a>1)1111</a>
				<a>2)1111</a>
			</view>
		</u-popup>
		
		<view class="img4">
			<!-- <image src="https://img2.baidu.com/it/u=3787679915,3048616839&fm=26&fmt=auto"></image> -->
			<scroll-view scroll-x="true" class="hengxiang">
				<view class="img1"> 
					<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dlxww.com%2Fnews%2Fcontent%2Fimages%2Fattachement%2Fjpg%2Fsite102%2F20210831%2Fc89cdc37556a22979ff502.jpg&refer=http%3A%2F%2Fwww.dlxww.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643219911&t=48c4a9089a9bf303890e3ee60c0baf63" :style="{height: yemian+'rpx'}"></image>
				</view>
				<view class="img1">
					<image src="https://img1.baidu.com/it/u=2102736929,2417598652&fm=26&fmt=auto" :style="{height: yemian+'rpx'}"></image>
				</view>
				<view class="img1">
					<image src="https://img1.baidu.com/it/u=2731694141,2007573855&fm=26&fmt=auto" :style="{height: yemian+'rpx'}"></image>
				</view>
				<view class="img1">
					<image src="https://img0.baidu.com/it/u=4242822507,3014587848&fm=26&fmt=auto" :style="{height: yemian+'rpx'}">
					</image>
				</view>
			</scroll-view>
		</view>
		<view class="left-icon">
			<u-icon name="arrow-left" color="white" size="50" @click="gotoBack"></u-icon>
		</view>
		<view class="content">
			
			<view class="content-2">
				<a>儿童公园</a>
				<a>2A</a>
			</view>
			<view>
				<a>'亲子乐园'</a>
			</view>
			<view class="content-3">
				营业时间:09：30-18：30
			</view>
			<view class="adress">
				<a>广东省-广州市-海珠区-客村</a>
				<a>距你7.5公里</a><!-- <u-notice-bar mode="horizontal" :list="list" type="error"></u-notice-bar> -->
			</view>
		</view>
		<view class="meng">
			<a>景区游玩须知</a>
			<a @click='show = true'><u-icon name="arrow-right"></u-icon></a>
		</view>
		<view class="middle6">
			<a>景区概况</a>
			<a>真好玩太好了真好玩太好了真好玩太好了真好玩太好了</a>
			<view class="middle-7">
				<a>游玩时长</a>
				<a>1天</a>
			</view>
			<view class="middle-7">
				<a>联系方式</a>
				<a>（0757）1888884</a>
			</view>
			
		</view>
		
		
			<view class="ping2">
				<view class="top">
					<a>评论</a>
					<a>
						<u-icon name="edit-pen"></u-icon>写评论
					</a>
				</view>
			</view>
		
		
	</view>
</template>

<script>
	export default {
			data() {
				return {
					
					nav:false,
					yemian:400,
					scrollTop:'',
					show:false,
					list: [
						'出门在外，请做好个人防护',
						'入门请佩戴口罩',
						'洛阳亲友如相问',
						'一片冰心在玉壶'
					]
				}
			},
			methods:{
				gotoBack(){
					wx.navigateBack({
						
					})
						
					
				}
			},
			onPageScroll(e) {
				// 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
				this.scrollTop = e.scrollTop;
				console.log(this.scrollTop)
				this.yemian = 400 - this.scrollTop
				// console.log(this.yemian)
				if(this.scrollTop>=135){
					this.nav = true
				}else{
					this.nav= false
				}
				
					
			},
			onLoad() {
				
			}
		}
</script>

<style lang="scss">
	.all{
		position: relative;
	}
	.img4{
		width: 100%;
		height: 400rpx;
		/* background-color: black; */
	}
	/* .img4>image{
		width: 100%;
		height: 400rpx;
	} */
	.hengxiang {
		
		width: 100%;
		height: 400rpx;
		overflow: hidden;
		white-space: nowrap;
		
	}
	
	.img1 {
		display: inline-block;
		width: 100%;
		
		height: 400rpx;
		overflow: hidden;
	}
	.img1>image{
		width: 100%;
		height: 400rpx;
	}
	.content{
		width: 730rpx;
		height: 370rpx;
		background-color: white;
		margin: auto;
		border-radius: 20rpx;
		position: absolute;
		top: 300rpx;
		left: 10rpx;
	}
	.content-2{
		
		display: flex;
	}
	.content-2>a:nth-child(1){
		font-weight: bold;
		font-size: 40rpx;
		margin: 20rpx 0 0 20rpx;
	}
	.content-2>a:nth-child(2){
		margin: 40rpx 0 0 20rpx;
		color: #959595;
	}
	.content>view:nth-child(2){
		font-size: 30rpx;
		margin: 10rpx 20rpx 0 20rpx;
		padding: 0 0 20rpx 0;
		color: #959595;
		border-bottom: solid 1rpx #f1f1f1;
	}
	
	.content-3{
		/* margin: auto; */
		color: #000000;
		margin: 20rpx 20rpx 0 20rpx;
		font-size: 32rpx;
		border-bottom: 1rpx solid #f1f1f1;
		padding: 0 0 20rpx 0;
	}
	.adress{
		width: 100%;
		height: 100%;
		font-size: 31rpx;
		margin: auto;
	}
	.adress>a:nth-child(1){
		margin: 20rpx 0 0 20rpx;
		font-weight: bold;
	}
	.adress>a:nth-child(2){
		margin: 15rpx 30rpx 0 20rpx;
		color: #959595;
		font-size: 30rpx;
	}
	.middle6{
		width: 730rpx;
		height: 100%;
		background-color: white;
		/* margin:20rpx 10rpx 0 10rpx; */
		/* position: absolute;
		top: 890rpx; */
		position: relative;
		top:330rpx;
		left: 10rpx;
		border-radius: 20rpx;
		
	}
	.middle6>a:nth-child(1){
		padding: 20rpx 0 0 20rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
	.middle6>a:nth-child(2){
		margin:20rpx 20rpx 0 20rpx;
	}
	.middle-7{
		margin: 20rpx 20rpx 0 20rpx;
		display: flex;
	}
	.middle-7>a:nth-child(1){
		font-weight: bold;
		font-size: 32rpx;
		flex: 1;
	}
	.middle-7>a:nth-child(2){
		flex: 1;
	}
	.meng{
		width: 730rpx;
		margin: auto;
		height: 80rpx;
		position: relative;
		top: 300rpx;
		background-color: white;
		border-radius: 20rpx;
		display: flex;
	}
	.meng>a:nth-child(1){
		font-size: 30rpx;
		font-weight: bold;
		margin: 20rpx 0 0 20rpx;
		/* line-height: 50rpx; */
	}
	.meng>a:nth-child(2){
		position: relative;
		left: 470rpx;
		margin: 25rpx 0 0 0;
	}
	
	.ping2{
		position: relative;
		top: 350rpx;
		left: 10rpx;
		width: 730rpx;
		height: 1000rpx;
		background-color: white;
		border-radius: 20rpx;
	}
	.top{
		display: flex;
		
	}
	.top>a:nth-child(1){
		font-size: 40rpx;
		font-weight: bold;
		margin: 20rpx 0 0 20rpx;
	}
	.top>a:nth-child(2){
		position: relative;
		left: 500rpx;
		margin-top: 20rpx;
	}
	.tang2{
		border-radius: 20rpx;
		width: 100%;
		height: 800rpx;
	}
	.tang2>a:nth-child(1){
		margin: 40rpx 0 0 30rpx;
		font-weight: bold;
		font-size: 35rpx;
	}
	.tang2>a:nth-child(2){
		margin: 50rpx 0 0 30rpx;
		font-weight: bold;
		font-size: 35rpx;
	}
	.tang2>a:nth-child(3){
		margin: 40rpx 30rpx 0 30rpx;
		
		font-size: 30rpx;
	}
	.tang2>a:nth-child(4){
		margin: 0rpx 30rpx 0 30rpx;
		
		font-size: 30rpx;
	}
	.n {
		/* background-color: #2b85e4; */
		width: 100%;
		height: 0px;
		/* position: top; */
		/* position: fixed; */
		display: flex;
	}
	.left-icon{
		 position: absolute;
		 top: 70rpx;
		 left: 10rpx;
		// position: fixed;
		// background-color: black;
	}
</style>
