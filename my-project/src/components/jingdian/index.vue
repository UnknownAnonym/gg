<template>
	<view>
		<view class="top">
			<u-dropdown >
				<u-dropdown-item  v-model="value1" title="范围" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="分类" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="排序" :options="options3"></u-dropdown-item>
			</u-dropdown>
		</view>
		<view>
			<view class="jingdian" v-for="(item,index) in playInfo" @click="click(index)">
				<view>
					<image :src="item.play_img"></image>
				</view>
				<view class="neirong">
					<view class="fenlei">
						<a>{{item.play_name}}</a>
						<a>{{item.cat_play}}</a>
					</view>
					<view class="neirong2">
						<a>{{item.play_score}}分</a>
						<a>'{{item.introduction}}'</a>
						<a>2000条评论</a>
					</view>
					<view class="neirong3">
						<a>距你{{item.distance}}公里</a>
						<a>{{item.address}}</a>
					</view>
					<view class="neirong4">
						<a>门票</a>
						<a>￥</a>
						<a>{{item.money}}</a>
						<a>起</a>
						<a>￥{{item.after_money}}</a>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				playInfo:[],
				value1: 1,
				value2: 1,
				value3:1,
				options1: [{
						label: '默认',
						value: 1,
					},
					{
						label: '5公里',
						value: 2,
					},
					{
						label: '10公里',
						value: 3,
					},
					{
						label: '20公里',
						value: 4,
					},
					{
						label: '全市',
						value: 5,
					}
				],
				options2: [{
						label: '全部',
						value: 1,
					},
					{
						label: '公园',
						value: 2,
					},
					{
						label: '动物园',
						value: 3,
					},
					{
						label: '植物园',
						value: 4,
					},
					{
						label: '4A级景区',
						value: 5,
					},
					{
						label: '5A级景区',
						value: 6,
					},
					{
						label: '博物馆',
						value: 7,
					},
					{
						label: '游乐园',
						value: 8,
					},
				],
				options3:[
					{
						label: '综合排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
				
			]
			}
		},
		onLoad() {
			this.getPlayInfo()
			// console.log(this.playInfo)
		},
		methods:{
			getPlayInfo(){
				wx.request({
					url:'https://abc.ilightlife.info/api/playinfo',
					success:(res)=>{
						this.playInfo = res.data.data
						console.log(this.playInfo)
					}
				})
			},
			click(index){
				wx.navigateTo({
					url:'./second'
				})
				console.log(index+1)
			}
		}
	}
</script>
<style scoped lang="scss">
	.top{
		background-color: white;
		margin-bottom: 30rpx;
		
	}
	.jingdian{
		width: 720rpx;
		height: 300rpx;
		background-color: white;
		margin: auto;
		border-radius: 20rpx;
		// position: relative;
		display: flex;
		margin-top: 20rpx;
	}
	.jingdian>view:nth-child(1)>image{
		// border: 1rpx solid red;
		width: 200rpx;
		height: 150rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 0 30rpx;
		
	}
	.neirong{
		margin: 20rpx 0 0 30rpx;
	}
	.fenlei{
		display: flex;
	}
	.fenlei>a:nth-child(1){
		font-weight: 550;
		font-size: 34rpx;
	}
	.fenlei>a:nth-child(2){
		margin: 15rpx 0 0 20rpx;
		color: #959595;
	}
	.neirong2{
		display: flex;
		margin-top: 10rpx;
	}
	.neirong2>a:nth-child(1){
		color: #F43F3B;
	}
	.neirong2>a:nth-child(2){
		margin-left: 20rpx;
		color: #959595;
	}
	.neirong2>a:nth-child(3){
		color: #959595;
		margin-left: 20rpx;
	}
	.neirong3{
		display: flex;
		margin-top: 10rpx;
		color: #959595;
	}
	.neirong3>a:nth-child(2){
		margin-left: 40rpx;
	}
	.neirong4{
		display: flex;
		margin-top: 10rpx;
	}
	.neirong4>a:nth-child(1){
		font-weight: 550;
		margin-top:12rpx;
	}
	.neirong4>a:nth-child(2){
		font-weight: 550;
		color: #F43F3B;
		margin-top: 12rpx;
	}
	.neirong4>a:nth-child(3){
		font-weight: bold;
		color: #F43F3B;
		font-size: 50rpx;
		
	}
	.neirong4>a:nth-child(4){
		color: #959595;
		margin-left: 10rpx;
		margin-top: 12rpx;
	}
	.neirong4>a:nth-child(5){
		color: #959595;
		text-decoration:line-through;
		margin-left: 10rpx;
		margin-top: 12rpx;
	}
</style>