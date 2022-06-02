<template>
	<view class="top">
		<u-navbar class="n" v-show="true" :is-back="false" :background="background">
			<image src="../../static/img/logo.png" class="i"></image><a class="aa">轻life</a>
		</u-navbar>
		<!-- <view class="top2">
		<view><image src="../../static/img/logo2.png" class="i"></image></view>
	</view> -->

		
		<view class="body">
			<view class="header">
				<u-grid :col="4">
					<u-grid-item  @click="food">
						<u-icon name="bag-fill" :size="46"></u-icon>
						<view class="grid-text">校园美食</view>
					</u-grid-item>
                    <u-grid-item @click="gotoJingdian">
						<u-icon name="moments" :size="46"></u-icon>
						<view class="grid-text">周边打卡</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="thumb-up" :size="46"></u-icon>
						<view class="grid-text">分享推荐</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="edit-pen" :size="46"></u-icon>
						<view class="grid-text">意见反馈</view>
					</u-grid-item>

				</u-grid>

			</view>
		</view>
		
		<view>
			<lunbo></lunbo>
		</view>
		
		
		<view>
			<notice></notice>
		</view>
		<!-- <view>
		<con4></con4>
	</view> -->
		<!-- 瀑布流 -->
		<view class="wrap">
			<!-- <u-button @click="clear">清空列表</u-button> -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load> -->
						<view class="demo-img-wrap">
						<image class="demo-image" :src="item.image" mode="widthFix"></image>
						</view>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<!-- <view class="demo-score">
							半年售5000+| 4.0分
						</view> -->
						<view class="price">
							<view class="demo-price">
								{{item.price}}
							</view>
							<view class="demo-priceaaa">
								12
							</view>
							<view class="demo-tag">
								<view class="demo-tag-text">
									APP新客
								</view>
							</view>
						</view>
						
						<!-- <view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view> -->
						
						<!-- <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon> -->
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load> -->
						<view class="demo-img-wrap">
						<image class="demo-image" :src="item.image" mode="widthFix"></image>
						</view>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<!-- <view class="demo-score">
							半年售5000+| 4.0分
						</view> -->
						<view class="price">
							<view class="demo-price">
								{{item.price}}
							</view>
							<view class="demo-priceaaa">
								12
							</view>
							<view class="demo-tag">
								<view class="demo-tag-text">
									APP新客
								</view>
							</view>
						</view>
						
						<!-- <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon> -->
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
		<!-- 滑到顶部 -->
		<view class="wrap">
			<u-back-top :scroll-top="scrollTop"></u-back-top>
		</view>
	</view>

</template>

<script>
	import lunbo from "../../components/index/lunbo.vue";
    import con4 from "../../components/index/con4.vue";
	import notice from "../../components/index/notice.vue";

	export default {


		data() {
			return {
				// OPEN_ID:'',
				shop_info: [],
				shop_img: [],
				shop_src: "https://img0.baidu.com/it/u=502669430,2878013450&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
				index2: '',
				scrollTop: 0,
				isshow: false,
				background: {
					backgroundColor: "#2b85e4",
				},
				//瀑布流
				productList: [],
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						price: 35,
						title: '大众餐',
						shop: '大众食堂旗舰店',
						image: 'https://ilightlife.info/imgs/il/lun1.jpg',
					},
					{
						price: 75,
						title: '美食',
						shop: '辣不死人不要钱',
						image: 'https://ilightlife.info/imgs/il/lun2.jpg',
					},
					{
						price: 385,
						title: '美食食品',
						shop: '华为的旗舰店',
						image: 'https://ilightlife.info/imgs/il/lun3.jpg',
					},
					{
						price: 784,
						title: '黄焖鸡',
						shop: '焖鸡旗舰店',
						image: 'https://ilightlife.info/imgs/il/lun4.jpg',
					},
					{
						price: 7891,
						title: '烧烤',
						shop: '串串炸物',
						image: 'https://ilightlife.info/imgs/il/lun5.jpg',
					},
					{
						price: 2341,
						shop: '隆江猪脚饭',
						title: '隆江猪脚饭隆江猪脚饭隆江猪脚饭',
						image: 'https://ilightlife.info/imgs/il/lun4.jpg',
					},
					{
						price: 661,
						shop: '饮品',
						title: '牛奶橙汁',
						image: 'https://ilightlife.info/imgs/il/lun3.jpg',
					},
					{
						price: 1654,
						title: '极尚肥牛',
						shop: '肥牛拼肥牛',
						image: 'https://ilightlife.info/imgs/il/lun2.jpg',
					},
					{
						price: 1678,
						title: '特色菜品',
						shop: '饺子嬷嬷',
						image: 'https://ilightlife.info/imgs/il/lun1.jpg',
					},
					{
						price: 924,
						title: '西餐快餐',
						shop: '汉堡炸鸡可乐薯条',
						image: 'https://ilightlife.info/imgs/il/lun2.jpg',
					},
					{
						price: 8243,
						title: '粥粉面',
						shop: '白粥河粉炒面',
						image: 'https://ilightlife.info/imgs/il/lun3.jpg',
					},
				]

			}
		},
		
		onLoad(){
			this.addRandomData();
			// console.log(getApp().data);
			// console.log("dd");
			// uni.request({
			// 	url:"http://127.0.0.1/20211019/product_info.php",
			// 	success: (res) => {
			// 		this.productList = res.data
			// 		console.log(this.productList)
			// 	}
			// })
			
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		// onShow:function(){
		// 	this.onLoad()
		// },
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			if (this.scrollTop > 80) {
				this.isshow = true
				
			} else {
				this.isshow = false
			}


		},
		methods: {
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					// console.log(item.id)
					item.id = this.$u.guid();
					this.flowList.push(item);
					// console.log("niu")
				}

			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			xiala() {
				wx.startPullDownRefresh()
			},
			food() {
				wx.navigateTo({
					url: "../../components/food/one"
				})
			},
			gotoJingdian(){
				wx.navigateTo({
					url:'../../components/jingdian/index'
				})
			},
			intoFoodMenu(index) {
				this.index2 = index
				console.log(this.index2)
				wx.navigateTo({
					url: "../../components/food/second?index3=" + this.index2,

				})
			}
		},
		components: {
			lunbo,
			// con3,
			con4,
			notice,


		}
	}
</script>

<style lang="scss" scoped>
	.top {

		width: 100%;
		height: 1000px;

	}

	.wrap {
		height: 100vh;
	}

	.top2 {
		width: 100%;
		height: 80px;
		background-color: #2b85e4; //#50cc99
		// position: fixed;
	}

	.cuIcon-scan {
		font-size: 20px;
		padding-top: 5px;
	}

	.p {
		padding-top: 5px;
	}

	.i {
		width: 40px;
		height: 40px;
	}

	.aa {
		font-size: 40rpx;
	}

	.n {
		background-color: #2b85e4;
		width: 100%;
		height: 30px;
		// position: top;
	}

	.body {
		height: 160rpx;
		width: 95%;
		background-color: #fefefe;
		margin: 0px auto;
		border-radius: 10px;
	}

	.header {
		padding: 5px;

	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	//瀑布流
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
		font-weight: bold;
	}
    .demo-score{
		margin-top: 5rpx;
		color: #AAAAAA;
	}
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
		
	}

	.demo-price {
		font-size: 40rpx;
		color: $u-type-error;
		margin-top: 5px;
		float: left;
	}
	.demo-priceaaa{
		text-decoration:line-through;
		color: #C0C0C0;
		margin: 30rpx 0 0 15rpx;
	}
 //    .demo-price>a:first-child{
	// 	
		
	// 	
	// }
	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
	.price{
		// border: 1px solid red;
		display: flex;
	}
</style>
