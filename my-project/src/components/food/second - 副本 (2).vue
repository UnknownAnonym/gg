<template>
	<view>
		<u-navbar :background="background" :is-back="true" back-icon-color="black" height="40rpx" back-icon-size="60">
		</u-navbar>
		<u-modal v-model="show4" :content="content"></u-modal>
		<u-popup v-model="show" mode="bottom" border-radius="14">
			<view class="tang">
				gg
			</view>
		</u-popup>
		<view class="dingbu">
		</view>
		
		<view class="shopInfo" v-for="(item,index) in shop_info">
			
			<view class="shop_img">
				<img :src="item.shop_img">
			</view>
			<!-- <view class="shop_name">
				<a>{{item.shop_name}}</a><br>
				<a>起送￥{{item.start_moneny}}|配送￥{{item.worker_moneny}}</a>
				<a>营业时间:{{item.shop_time}}</a>
				<a>联系电话:{{item.shop_phone}}</a>
			</view> -->
		</view>
		<!-- 全屏选项卡 -->
		<view class="all-full-tab">
			
			<view class="all-full-child" :class="{fixedd:gglo?true:false}">

				<!-- 全屏选项卡-头部 -->
				<view class="full-tab" :scroll-top="scrollTop">
					<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="true"
						swiperWidth="750" inactive-color="#c8c9cc" bg-color=""></u-tabs-swiper>
				</view>
				<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
					class="swsw" :style="{height:swiperHeight+'rpx'}">
					<!-- style="height: 5000rpx;" -->
					<!-- <swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index"> -->
						<!-- <scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
							<u-swiper :list="list1"></u-swiper>
						</scroll-view> -->
					<!-- </swiper-item> -->
					<!-- 商品列表 -->
					<swiper-item>
						<view>
						<!-- <view class="dibu bg-gradual-blue">
							<view class="kongbai">
								<a>￥{{totalPrice}}</a>
							</view>
							<view class="geiqian" :class="{gaibian:totalprice?true:false}" @click="pay()">
								<a>结算</a>
							</view>
						</view> -->
						<view class="food">
							<!-- <a>商品列表</a> -->
							<view class="a" disableScroll: true>
								<scroll-view scroll-y class="left">
									<view class="menu_item" v-for="(item,index) in leftMenuList3" @click="click(index)"
										:class="{b:index===currentIndex}">
										<view @click="click(index)">{{item+index}}</view>
									</view>
								</scroll-view>
								<scroll-view scroll-y class="right">
                                    <view class="right_content" v-for="(item1,index2) in rightMenuList2">
										<img class="ig" :src="item1.food_img"></img>
										<view class="wenzi">
											{{item1.food_name}}
											<view>
												热销评分：1
											</view>
											<view>
												￥{{item1.food_price}}
											</view>
											<view class="all-icon">
												<view class="plus-icon">
													<u-icon name="plus-circle-fill" size="50rpx"
														@click="handlejia(index2)"></u-icon>
												</view>
												<view v-show="isshow2" class="count2">{{item1.food_num}}</view>
												<view class="minu-icon" v-show="isshow3">
													<u-icon name="minus-circle-fill" size="50rpx"
														@click="handlejian(index2)"></u-icon>
												</view>
											</view>
										</view>

									</view>
								</scroll-view>

							</view>
							<!-- 底部结算条 -->
						</view>
						</view>
					</swiper-item>
					<!-- 点评列表 -->
					<swiper-item style="background-color: #ffffff;">
						<view>
							<view class="ping">
								<view class="score">
									<a>4.6</a>
								</view>
								<view class="shop_star">
									<a>商家评分</a>
									<u-rate :current="5" :disabled="true"></u-rate>
								</view>
								<view class="di">
									<a>口味</a>
									<a>9.7</a>
								</view>
								<view class="bao">
									<a>包装</a>
									<a>9.3</a>
								</view>
								<view class="manyi">
									<a>满意度</a>
									<a>99%</a>
								</view>
							</view>
							<u-gap height="20" bg-color="#e3e3e3"></u-gap>
							<view class="ping-xiang" v-for="item in talk_info">
								<view class="ping-top">
									<view class="ping-img">
										<image :src="item.talk_img"></image>
									</view>
									<view class="ping-name">
										<a>{{item.user_name}}</a>
										<a>{{item.talk_time}}</a>
									</view>
								</view>
								<view class="content">
									{{item.content}}
									<view class="dianzang">
										<a><u-icon name="thumb-up" size="50"></u-icon></a>
									</view>
								</view>
								
							</view>
						</view>
					</swiper-item>
					<swiper-item style="background-color: #ffffff;">
						<view class="shop1">
							<view class="shop-top">
								<view class="adress-icon">
									<u-icon name="map" size="60"></u-icon>
								</view>
								<view class="adress">
									<a>广东轻工职业技术学院(南海校区)</a>
								</view>
								<view class="phone">
									<u-icon name="phone" size="60"></u-icon>
								</view>
							</view>
							<view class="shop_img">
								<scroll-view scroll-x="true" class="hengxiang">
									<view class="img1">
										<image src="https://img2.baidu.com/it/u=1985604035,104883568&fm=26&fmt=auto"></image>
									</view>
									<view class="img1">
										<image src="https://img1.baidu.com/it/u=2001436901,1485353892&fm=26&fmt=auto"></image>
									</view>
									<view class="img1">
										<image src="https://img1.baidu.com/it/u=323503604,2375435194&fm=26&fmt=auto"></image>
									</view>
									<view class="img1">
										<image src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00181-1678.jpg"></image>
									</view>
								</scroll-view>
							</view>
							<view class="shop-xiang">
								<a>营业时间：00：00-00：00</a>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>


	</view>

</template>



<script>
	// import payment from "./payment.vue"

	export default {
		data() {
			return {
				talk_info:[],

				listHeight:0,  //内部的高度
				  swiperHeight:800,  //外部的高度
				gglo: '',
				scrollTop: 0,
				list: [{
					name: '点菜'
				}, {
					name: '评价'
				}, {
					name: '商家'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				leftMenuList: [],
				rightContent: [],
				foodimg: [],
				currentIndex: 0,
				gg: '',
				// isactive:false,
				show: false,
				pingfenCount: 1,
				isshow2: true,
				isshow3: true,
				productCount: 0,
				active: false,
				active3: false,
				content: '商品不能为空',
				show4: false,
				shop_info: [],
				foodinfo: '',
				leftMenuList2: [],
				rightMenuList2: [],
				rightMenuList3: [],
				leftMenuList3: [],
				isshow4: '',
				currentIndex2: '',
				allList: [],
				allInfo: [],
				allInfo2: [],
				totalprice: '',
				background: {
					background: 'url(https://img0.baidu.com/it/u=514748814,740779416&fm=26&fmt=auto)'
				}
			}
		},
		Cc: [],
		rf: [],
		foodindex: '',
		onShow() {
			
		},
		computed: {
			totalPrice() {
				let b = 0;
				for (let i = 0; i < this.allList.length; i++) {
					b += this.allList[i].food_num * this.allList[i].food_price
					this.totalprice = b
					// if(this.totalprice == 0){
					// 	this.show4=false
					// }
					// console.log(this.totalprice)
				}
				// this.totalprice = b
				// if(this.totalprice == 0){
				//  this.show4=false
				// }
				return b
			}
		},
		mounted() {
			
		},
		
		methods: {
			
			tabsChange(index) {
				this.swiperCurrent = index;
				if(this.swiperCurrent==1){
					this.swiperHeight=2500
				}else if(this.swiperCurrent==2){
					this.swiperHeight=100
				}else{
					this.swiperHeight=800
				}
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
				
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				if(this.current==1){
					this.swiperHeight=2500
				}else if(this.current==2){
					this.swiperHeight=800
				}else{
					this.swiperHeight=800
				}
				// console.log(this.swiperCurrent)
			},
			click(index) {
				// this.isactive=index;
				// console.log(index)
				this.currentIndex = index
				// console.log(this.currentIndex)
				// this.rightContent=this.Cc.message[index].children
				this.rightMenuList2 = this.rf.filter(v => v.cat_id == index + 1 && v.shop_id == this.foodindex + 1)
			},
			handlejia(index2) {
				this.rightMenuList2[index2].food_num++
				this.currentIndex2 = index2
				this.isshow2 = true
				this.isshow3 = true
				// console.log(this.shop_info[0].shop_name)
				// this.active3 = true
				// console.log(this.currentIndex2)
				// console.log(index2 +"+"+this.rightMenuList2[index2].food_num)

			},
			handlejian(index2) {
				this.isshow4 = this.rightMenuList2[index2].food_num
				// console.log(this.totalprice)
				if (this.isshow4 == 0) {
					return
				} else {
					this.rightMenuList2[index2].food_num--
				}
			},
			pay() {
				if (this.totalprice == 0) {
					this.show4 = true
				} else {
					this.allInfo = this.rf.filter(v => v.shop_id == this.foodindex + 1 && v.food_num > 0)
					this.allInfo2 = this.allInfo.map(v => v.food_name)
					let allInfo5 = JSON.stringify(this.allInfo)
					
					 console.log(this.shop_info[0].shop_id)
					// console.log(this.allInfo2)
					wx.navigateTo({
						url: "./payment?allInfo3=" + encodeURIComponent(allInfo5) +
							"&totpri=" + this.totalprice + "&shopname=" + this.shop_info[0].shop_name +
							"&worker=" + this.shop_info[0].worker_moneny +
							"&shopimg=" + encodeURIComponent(this.shop_info[0].shop_img)+
							"&shopId="+this.shop_info[0].shop_id
						//参数中有不识别的字符，所以用encodeURIComponent编码,子页面使用decodeURIComponent
						//this.rf.filter(v=>v.shop_id==this.foodindex+1&&v.food_num>0)
					})
				}
			}

		},
		components: {
			// payment
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
			// if (this.scrollTop > 130) {
			// 	console.log(this.scrollTop)
			// 	this.gglo = true
			// } else {
			// 	this.gglo = false
			// }
		},
		onLoad: function(options) {

			if (this.isshow4 == 0) {
				this.active3 = false
			}

			uni.request({
				url: 'http://127.0.0.1/20211019/cat_food.php',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					// this.leftMenuList = res.data
					// this.foodinfo = res.data
					// console.log(this.foodinfo)
					this.leftMenuList2 = res.data.filter(v => v.cat_id == this.foodindex +1) 
					//map(v => v.cat_name)
					this.leftMenuList3 = this.leftMenuList2.map(v => v.cat_name)
					// console.log(this.leftMenuList2)

				},
				fail: () => {
					console.log("err")
				}
			})

			uni.request({
				url: 'http://127.0.0.1/20211019/food_info.php',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					this.rf = res.data
					// this.rightMenuList2 = res.data.map(v=>v.cat_id==2)
					this.rightMenuList2 = this.rf.filter(v => v.cat_id == 1 && v.shop_id == this
						.foodindex + 1)
					//获取这个商店的所有食物
					this.allList = this.rf.filter(v => v.shop_id == this.foodindex + 1)
					// this.allList2 = this.allList.map(v=>v.food_num)
					// this.foodprice = this.allList.map(v=>v.food_price)
					// console.log(this.allList2)
				},
				fail: () => {
					console.log("err")
				}
			})

			uni.request({
				url: 'http://127.0.0.1/20211019/shop_name.php',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					this.shop_info = res.data.filter(v => v.shop_id == this.foodindex + 1)
					// console.log(this.shop_info)

				},
				fail: () => {
					console.log("err")
				}
			})
			
			uni.request({
				url:'http://127.0.0.1/20211019/talk_info.php',
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					this.talk_info = res.data.filter(v => v.shop_id == this.foodindex + 1)
					console.log(this.talk_info)
					// console.log(this.shop_info)
				},
			})

			this.foodindex = parseInt(options.index3)
			// console.log(this.foodindex)
			// console.log(options.index3)
			console.log("second页面被加载")
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
		width: 700rpx;
		height: 250rpx;
		margin: auto;
		// border: solid 1px red;
		position: relative;
		top: -130rpx;
		border-radius: 20rpx;
		background-color: white;
		box-shadow: 0 0 10px 0.1px #8799A3;
		padding-left: 40rpx;
		padding-top: 30rpx;
		display: flex;
	}

	.shop_img {
		border-radius: 10rpx;
		top: 20rpx;
		width: 150rpx;
		height: 180rpx;
		// border: solid 1px red;
		flex: 2;
	}

	.shop_img>img:first-child {
		height: 180rpx;
	}

	.shop_name {
		margin-left: 20rpx;
		flex: 6;
	}

	.shop_name>a:first-child {
		font-size: 60rpx;
		font-weight: bold;

	}

	.food {
		height: 100%;
		width: 750rpx;
		// border:solid 1px red;
		position: relative;
		top: 0;

		// background-color: white;
	}

	.food>a:first-child {
		text-align: center;
		font-size: 40rpx;
	}

	.a {
		width: 100%;
		height: 100%;
		// position: relative;
		display: flex;
		 //border: solid 1px red;
	}

	.left {
		flex: 2;
		height: 800rpx;
		height: calc(52vh);
	}

	.right {
		flex: 5;
        // height: 800rpx;
		 height: calc(52vh); //93vh

	}

	.menu_item {
		display: flex;
		height: 80rpx;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;

	}

	.menu_item:active {
		// color: #2B85E4;
		// border-left: 5px solid #2B85E4;
	}

	.b {
		background-color: white;
		// color: #2B85E4;
		font-weight: bold;
		// border-left: 5px solid #2B85E4;
	}

	.ig {
		flex: 2;
		height: 180rpx;
		width: 180rpx;
		border-radius: 10rpx;
		// border: solid 1px red;

	}

	.right_content {
		flex: 6;
		// border: solid 1px red;
		width: 100%;
		// border-bottom: solid 1px #888888;
		margin-top: 20rpx;
	}

	.wenzi {
		flex: 4;
		// border: solid 1px red;
		width: 60%;
		height: 100%;
		float: right;
		font-size: 30rpx;
		padding-bottom: 10rpx;
		padding-top: 10rpx;
	}
    
	.geiqian {
		background-color: #82848A;
		color: #909399;
		flex: 2;
		text-align: center;
		font-size: 20px;
		border-top-right-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}

	.gaibian {
		// text-align: center;
		// font-size: 20px;
		// flex: 2;
		font-size: 20px;
		background-color: red;
		flex: 2;
		color: white;
	}

	.kongbai {
		flex: 3;
		background-color: #2B85E4;
		border-top-left-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
	}

	.kongbai>a:first-child {
		line-height: 100rpx;
		font-size: 50rpx;
		margin-left: 50rpx;
	}

	// .dibu2 {
	// 	display: flex;
	// 	position: fixed;
	// 	// bottom: 0;
	// 	height: 30rpx;
	// 	width: 100%;
	// 	margin: auto;
	//        bottom: 30rpx;
	//    }
	.dibu {
		height: 100rpx;
		width: 700rpx;
		margin: auto;
		background-color: #0000FE;
		// position: absolute;
		// bottom: 0; 
		// position: fixed;
		left: 20rpx;
		border-radius: 50rpx;
		display: flex;
		z-index: 999;
		position: absolute;
		bottom: 0rpx;
		// overflow: hidden;
	}


	.all-icon {
		flex: 6;
		float: right;
	}

	.minu-icon {
		flex: 2;
		float: right;
	}

	.count2 {
		flex: 2;
		float: right;
	}

	.plus-icon {
		flex: 2;
		float: right;
	}

	// 全屏选项卡
	.all-full-tab {
		// position: absolute;
		// width: 100%;
		// height: 100rpx;
		 // top: 500rpx;
		 // border:solid 1rpx red
	}

	.all-full-child {
		 position: relative;
		 // top: -100rpx;
		 bottom: 100rpx;
		 //border:solid 1rpx red
	}

	.full-tab {
		// position: relative;
		// top: -100rpx;
		border-bottom: 1rpx solid #AAAAAA;
	}

	.swsw {
		height: 800rpx;
		// border: 1px solid red;
	}

	.fixedd {
		position: fixed;
		top: 120rpx;
		width: 100%;
		height: 100%;
		border:solid 1rpx red
	}
	
	// 评价
	.ping{
		width: 100%;
		height: 100rpx;
		//border: 1rpx solid red;
		display: flex;
		// font-size: 30rpx;
		margin-top: 20rpx;
	}
	.score{
		flex: 1;
		
	}
	.score>a:first-child{
		font-size: 60rpx;
		font-weight: bold;
		color: #FF9700;
		margin: 10rpx 0 0 20rpx;
	}
	.shop_star{
		flex: 2;
	}
	.di{
		flex: 1;
	}
	.bao{
		flex: 1;
	}
	.manyi{
		flex: 1;
	}
	.di>a:nth-child(2){
		font-weight: bold;
		margin-top: 10rpx;
	}
	.bao>a:nth-child(2){
		font-weight: bold;
		margin-top: 10rpx;
	}
	.manyi>a:nth-child(2){
		font-weight: bold;
		margin-top: 10rpx;
	}
	.ping-xiang{
		width: 94%;
		 border-bottom: 1rpx solid #dadce5;
		margin: 20rpx 0 0 20rpx;
		
	}
	.ping-top{
		display: flex;
		width: 500rpx;
		// border-bottom: 1rpx solid blue;
	}
	.ping-img{
		
	}
	.ping-name{
		margin:10rpx 0 0 30rpx
	}
	.ping-name>a:nth-child(1){
		font-weight: bold;
		font-size: 40rpx;
	}
	.ping-name>a:nth-child(2){
		color: #9ea0a7;
		margin-top: 5rpx;
	}
	.ping-img>image:first-child{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}
	.content{
		width: 100%;
		font-size: 40rpx;
		//border: 1rpx solid pink;
		white-space:normal;
		word-break: break-all;
	}
	.dianzang{
		
		
	}
	.dianzang>a:first-child{
		margin-left: 650rpx;
	}
	.shop1{
		height: 100%;
		width: 100%;
		
	}
	.shop-top{
		height: 50rpx;
		width: 100%;
		display: flex;
		margin:20rpx 0 0 15rpx;
		// border-bottom: 1rpx solid #AAAAAA;
	}
	.adress{
		flex: 6;
		font-size: 30rpx;
		margin-top: 10rpx;
	}
	.adress-icon{
		flex: 1;
	}
	.phone{
		flex: 1;
	}
	.hengxiang{
		margin-top: 20rpx;
		width: 750rpx;
		height: 230rpx;
		overflow: hidden;
		white-space: nowrap;
		border-top: 1rpx solid #AAAAAA;
		padding-top: 5rpx;
	}
	.img1{
		display: inline-block;
		    width: 300rpx;
		    height: 300rpx;
		// width: 100%;
		// height: 200rpx;
		 margin-left: 20rpx;
	}
	// .img1>a:first-child{
	// 	width: 400rpx;
	// 	height: 300rpx;
	// }
	.shop-xiang{
		width: 100%;
		height: 100rpx;
		// margin-top: 100rpx;
		margin: 80rpx 0 0 10rpx;
		border-bottom: 1rpx solid #AAAAAA;
		border-top: 1rpx solid #AAAAAA;
		font-size: 40rpx;
	}
</style>
