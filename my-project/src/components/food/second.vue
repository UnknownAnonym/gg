<template>
	<view>
		<u-navbar :background="background" :is-back="true" back-icon-color="black" height="40rpx" back-icon-size="60">
		</u-navbar>
		<u-modal v-model="show4" :content="content"></u-modal>
		<!-- <u-popup v-model="show" mode="bottom" border-radius="14">
			<view class="tang">
				gg
			</view>
		</u-popup> -->
		<view class="dingbu">
		</view>

		<view class="shopInfo" v-for="(item,index) in shop_info">
			<view class="shop_name">
				<a>{{item.shop_name}}</a>
				<view>
					<a>
						<u-rate :current="5" :disabled="true" v-model="averageValue"></u-rate>
					</a>
					<a>人气55</a>
					<a>{{item.cat_shop}}</a>
				</view>
			</view>
			<view>
				<scroll-view scroll-x="true" class="hengxiang">
					<view class="img1">
						<image src="https://ilightlife.info/imgs/il/lun2.jpg"></image>
					</view>
					<view class="img1">
						<image src="https://ilightlife.info/imgs/il/lun5.jpg"></image>
					</view>
					<view class="img1">
						<image src="https://ilightlife.info/imgs/il/lun1.jpg"></image>
					</view>
					<view class="img1">
						<image
							src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00181-1678.jpg">
						</image>
					</view>




				</scroll-view>
			</view>
			<view class="yingye">
				<a>营业时间：{{item.shop_time}}</a>
				<a>{{item.adress}}</a>
			</view>
		</view>
		<view class="tuijian">
			<view>
				<a>推荐菜</a>
				<a>更多<u-icon name="arrow-right"></u-icon></a>
			</view>
			<view class="middle">
				<image src="https://ilightlife.info/imgs/il/lun4.jpg"></image>
				<image src="https://ilightlife.info/imgs/il/lun5.jpg"></image>
				<image src="https://ilightlife.info/imgs/il/lun1.jpg"></image>
			</view>
			<view class="middle-2">
				<a>烤堡</a>
				<a>鸡腿堡</a>
				<a>鸡块</a>
			</view>
			<!-- <view class="middle-3">
				<a>推荐1</a><a>推荐1</a><a>推荐1</a><a>推荐1</a>
			</view> -->
		</view>
		<view class="dianping">
			<view>
				<a>评论</a>
				<a class="ss" @click="ss">
					<u-icon name="edit-pen"></u-icon>写评论
				</a>
			</view>

			<view class="ping-xiang" v-for="item in talk_info">
				<view class="ping-top">
					<view class="ping-img">
						<image :src="item.talk_img"></image>
					</view>
					<view class="ping-name">
						<a>{{item.user_name}}</a>
						<a>{{item.talk_time}}</a>
					</view>
					<view class="xingxing">
						<a>
							<u-rate :current="item.star_value" :disabled="true" gutter="1"></u-rate>
						</a>
					</view>
				</view>
				<view class="content">
					<a>{{item.content}}</a>
					<view class="content-2" v-if="item.talk_img2">
						<img :src="item.talk_img2"></img>
						<img :src="item.talk_img3"></img>
						<img :src="item.talk_img4"></img>
					</view>
					<view v-else></view>
					<view class="dianzang">
						<a>
							<u-icon name="more-dot-fill" size="40"></u-icon>
						</a>
					</view>
				</view>

			</view>
		</view>
		<!-- 点评列表 -->
		<view>



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
			   averageValue:0,
			   allValue:[],
				shop_name: '',
				shop_img5: '',
				value: '',
				talk_info: [],
				shop_info: [],
				foodinfo: '',
				allInfo: [],
				allInfo2: [],
				background: {
					background: 'url(https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00123-4027.jpg)'
				}
			}
		},
		Cc: [],
		rf: [],
		foodindex: '',
		onShow() {

		},
		computed: {
           
		},
		mounted() {

		},

		methods: {
			ss() {
				wx.navigateTo({
					url: '../../components/order/index?shop_name=' + encodeURIComponent(this.shop_info[0]
							.shop_name) +
						"&shop_img5=" + encodeURIComponent(this.shop_info[0].shop_img) +
						"&shop_id=" + this.shop_info[0].shop_id
				})
			}
			// url:"../../components/order/index?allinfo="+encodeURIComponent(this.allInfo[index].shop_name)+
			//  "&shop_img5="+encodeURIComponent(this.allInfo[index].shop_img)+
			// "&shop_id="+this.allInfo[index].shop_id
			// gotoPinglun(){
			//  console.log("dianle")

			// }
		},


		



		components: {
             
		},

		onLoad: function(options) {
			//console.log(options.index3)

			// uni.request({
			// 	url: 'http://127.0.0.1/20211019/food_info.php',
			// 	data: {
			// 		text: 'uni.request'
			// 	},
			// 	success: (res) => {
			// 		this.rf = res.data
			// 		// this.rightMenuList2 = res.data.map(v=>v.cat_id==2)
			// 		this.rightMenuList2 = this.rf.filter(v => v.cat_id == 1 && v.shop_id == this
			// 			.foodindex + 1)
			// 		//获取这个商店的所有食物
			// 		this.allList = this.rf.filter(v => v.shop_id == this.foodindex + 1)
			// 		// this.allList2 = this.allList.map(v=>v.food_num)
			// 		// this.foodprice = this.allList.map(v=>v.food_price)
			// 		// console.log(this.allList2)
			// 	},
			// 	fail: () => {
			// 		console.log("err")
			// 	}
			// })

			uni.request({
				url: 'https://abc.ilightlife.info/api/shop',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					
					
					//console.log(res.data.data.filter(v => v.shop_name == '城市行动'))
				this.shop_info = res.data.data.filter(v => v.shop_name == options.index3)
					console.log("我是" + this.shop_info[0].shop_name)
				},
				fail: () => {
					console.log("err")
				}
			})

			uni.request({
				url: 'https://abc.ilightlife.info/api/comment',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					
					let c = 0
					this.talk_info = res.data.data.filter(v => v.shop == options.index3)
					 this.allValue = this.talk_info.map(v=>v.star_value)
					 for(let i = 0 ;i<this.allValue.length;i++){
					 			c += parseInt(this.allValue[i]) 
								this.averageValue = c/this.allValue.length
					 }
					 
					
				},
			})

			this.foodindex = parseInt(options.index3)
			// console.log(this.allInfo[0])
			// console.log(this.foodindex)
			// console.log(options.index3)

		}

	}
</script>

<style lang="scss" scoped>
	body {
		position: absolute;
		// background-color: white;
	}

	.dingbu {
		margin: auto;
		width: 750rpx;
		height: 230rpx;
		// background-image: url(https://img0.baidu.com/it/u=514748814,740779416&fm=26&fmt=auto);
	}

	.shopInfo {
		width: 720rpx;
		height: 500rpx;
		margin: auto;
		position: relative;
		top: -130rpx;
		border-radius: 20rpx;
		background-color: white;
		box-shadow: 0 0 10px 0.1px #8799A3;
		padding: 40rpx 20rpx 0 40rpx;

	}

	.shop_name {
		margin-bottom: 20rpx;

	}

	.shop_name>a:first-child {
		font-size: 40rpx;
		font-weight: bold;

	}

	.shop_name>view:nth-child(2) {
		display: flex;
		margin-top: 10rpx;
	}

	.shop_name>view:nth-child(2)>a:nth-child(2) {
		font-weight: 550;
		margin-left: 20rpx;

	}

	.shop_name>view:nth-child(2)>a:nth-child(3) {
		font-weight: 550;
		margin-left: 20rpx;

	}

	.tuijian {
		width: 720rpx;
		height: 100%;
		background-color: white;
		position: relative;
		top: -100rpx;
		border-radius: 20rpx;
		margin: auto;
		padding-top: 20rpx;
	}

	.tuijian>view:first-child {
		display: flex;
	}

	.tuijian>view:first-child>a:nth-child(1) {
		font-size: 40rpx;
		font-weight: bold;
		margin-left: 40rpx;
	}

	.tuijian>view:first-child>a:nth-child(2) {
		font-size: 30rpx;
		margin-left: 450rpx;
	}

	.middle {
		width: 100%;
		height: 240rpx;
		// border: 1rpx solid red;
		display: flex;
	}

	.middle>image {
		margin: 30rpx 10rpx 0 10rpx;
		height: 200rpx;
		width: 300rpx;
		border-radius: 20rpx;
		flex: 1;
	}

	.middle-2 {
		display: flex;
	}

	.middle-2>a {
		flex: 1;
		margin: 0rpx 10rpx 0 10rpx;
		font-weight: 550;
	}

	.middle-3 {
		margin: 20rpx 10rpx 0 10rpx;
		display: flex;
	}

	.middle-3>a {
		font-size: 30rpx;
		margin-right: 40rpx;
		// word-wrap: break-word;
	}

	.dianping {
		width: 720rpx;
		margin: auto;
		height: 100%;
		background-color: white;
		border-radius: 20rpx;
		padding-top: 20rpx;
		position: relative;
		top: -70rpx;
	}

	.dianping>view:nth-child(1) {
		display: flex;
	}

	.dianping>view:nth-child(1)>a:nth-child(1) {
		font-weight: 550;
		font-size: 40rpx;
		margin-left: 40rpx;
	}

	.dianping>view:nth-child(1)>a:nth-child(2) {
		font-weight: 550;
		font-size: 30rpx;
		// margin-left: 40rpx;
		position: absolute;
		right: 30rpx;
	}

	// 评价
	.ping-xiang {
		width: 100%;
		margin: 20rpx 0 0 20rpx;
       height: 100%;
	   // border: 1rpx solid red;
	}

	.ping-top {
		display: flex;
		width: 500rpx;
		// border-bottom: 1rpx solid blue;
	}

	.xingxing {
		// border: 1rpx solid red;
		height: 50rpx;
		position: relative;
		top: 65rpx;
		left: -90rpx;
	}

	.ping-img {}

	.ping-name {
		display: flex;
		margin: 10rpx 0 0 30rpx;
	}

	.ping-name>a:nth-child(1) {
		font-weight: bold;
		font-size: 40rpx;
	}

	.ping-name>a:nth-child(2) {
		position: absolute;
		right: 20rpx;
		color: #9ea0a7;
		margin-top: 5rpx;
	}

	.ping-img>image:first-child {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}

	.content {
		width: 98%;
		 height: 100%;
		font-size: 40rpx;
		//border: 1rpx solid pink;
		white-space: normal;
		word-break: break-all;
		margin-top: 20rpx;
		padding-right: 10rpx;
		
	}

	.content>a:nth-child(1) {
		font-size: 30rpx;
	}
	// .content-2{
	// 	height: 100%;
	// 	width: 100%;
		
	// }
// .content-2{
// 	width: 100%;
// 	border: 1rpx solid red;
// 	height: 100%;
// }
.content-2{
	display: flex;
	// border: 1rpx solid red;
}
	.content-2>image {
		// height: 100%;
		// height: 100rpx;
		height: 200rpx;
		width: 30%;
		margin: 20rpx 20rpx 0 0 ;
		border-radius: 20rpx;
		
		// min-height: 0rpx;
		 // max-height:200rpx ;
	}
    
	.dianzang {}

	.dianzang>a:first-child {
		margin:20rpx 0 0 630rpx;
	}

	.shop1 {
		height: 100%;
		width: 100%;

	}

	.shop-top {
		height: 50rpx;
		width: 100%;
		display: flex;
		margin: 20rpx 0 0 15rpx;

	}

	.adress {
		flex: 6;
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.hengxiang {
		margin: auto;
		// margin-top: 20rpx;
		width: 100%;
		height: 230rpx;
		overflow: hidden;
		white-space: nowrap;
		padding-top: 5rpx;
		// border: 1rpx solid red;
	}

	.img1 {
		display: inline-block;
		width: 250rpx;
		height: 230rpx;
		margin-right: 20rpx;
		overflow: hidden;
		border-radius: 30rpx;
		// border: 1rpx solid red;
	}

	.yingye>a:nth-child(1) {
		font-weight: 550;
		margin-top: 20rpx;
	}

	.yingye>a:nth-child(2) {
		font-weight: 550;
		margin-top: 5rpx;
	}
</style>
