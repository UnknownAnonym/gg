<template>
	<view>
		<tn-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">{{title}}</block>
			<block slot="content"></block>
		</tn-custom>
		<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="change" ></u-tabs>
		
		<!-- 图片懒加载 -->
		<view class="lazy-img">
			<!-- <view class="img-left"> -->
					<u-lazy-load class="a" 
					v-for="(item, index) in list" 
					:key="index" 
					:image="item.src"
					@click="enlargePic(index,item.src)"
					></u-lazy-load>
		</view>
	
	</view>
	
	
</template>

<script>
	export default {
		data(){
			return {
				title:"",
				tabList: [
					{
						name: '全部'
					}, {
						name: '菜品'
					}, {
						name: '环境'
					}, {
						name: '价格表',
					},
				],
				current:0,
				list: [
						{
							src: "https://z3.ax1x.com/2021/09/26/46cJdH.jpg",
						},
						{
							src: "https://z3.ax1x.com/2021/09/18/4lFGuD.png",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
						},
						{
							// 这里图片不存在，会加载失败，显示错误的占位图
							src: "xxx",
						},
				],
				preImg:[]
				
			}
		},
		computed:{
			leftList(){
				console.log(132);
			}
		},
		methods:{
			change(index) {
				this.current = index;
			},
			enlargePic(index,urls){
				this.preImg.unshift(urls);
				let previewImage = Array.from(new Set(this.preImg));
			
				wx.previewImage({
					urls:previewImage,
					showmenu:true
					
				})
				console.log(previewImage);
			}
		},
		onLoad(option){
		
			let {title} = option;
			this.title = title;
		}
	}
</script>



<style scoped lang="scss">
	
	.lazy-img{
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/deep/ u-lazy-load{
			width: calc((100% / 2) - 20rpx );
			height: 100%;
			padding-bottom: 20rpx;
		}
	
	}
	
	// .lazy-img{
	// 	// display: flex;
	// 	// padding: 20rpx;
	// 	// justify-content: space-between;
	// 	// .img-left{
	// 	// 	flex: 1;
	// 	// 	padding-right: 10rpx;
	// 	// 	/deep/ .u-wrap{
	// 	// 		padding-bottom: 20rpx;
	// 	// 	}
		

	// 	// }
	// 	// .img-right{
	// 	// 	flex:1;
	// 	// 	padding-left: 10rpx;
	// 	// 	/deep/ .u-wrap{
	// 	// 		padding-bottom: 20rpx;
	// 	// 	}
		
	// 	// }
	// }
	

	
</style>