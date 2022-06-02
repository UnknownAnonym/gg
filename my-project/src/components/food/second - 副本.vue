<template>
	<view>
		<u-navbar
		 :background="background" :is-back="true" back-icon-color="black" height="40rpx" back-icon-size="60">
		 </u-navbar>
		<u-modal v-model="show4" :content="content"></u-modal>
		<u-popup v-model="show" mode="bottom" border-radius="14">
			<view class="tang">
				gg
			</view>
		</u-popup>
		<view class="dingbu">
		</view>
		<view class="shopInfo"  v-for="(item,index) in shop_info">
			<view class="shop_img">
				<img :src="item.shop_img">
			</view>
			<view class="shop_name">
				<a>{{item.shop_name}}</a><br>
				<a>起送￥{{item.start_moneny}}|配送￥{{item.worker_moneny}}</a>
				<a>营业时间:{{item.shop_time}}</a>
				<a>联系电话:{{item.shop_phone}}</a>
			</view>
        </view>
		<view class="food">
			<!-- <a>商品列表</a> -->
			<!-- <u-gap height="10" bg-color="#dadada"></u-gap> -->
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
									<u-icon name="plus-circle-fill" size="50rpx" @click="handlejia(index2)"></u-icon>
								</view>
								<view v-show="isshow2" class="count2">{{item1.food_num}}</view>
								<view class="minu-icon" v-show="isshow3">
									<u-icon name="minus-circle-fill" size="50rpx" @click="handlejian(index2)"></u-icon>
								</view>
							</view>
						</view>

					</view>
				</scroll-view>

			</view>
			<view class="dibu2">
				<view class="dibu bg-gradual-blue">
					<view class="pinglun">
						<u-icon name="chat-fill" size="30px"></u-icon>
					</view>
					<view class="shoppingcar" @click="show=true">
						<u-icon name="shopping-cart-fill" size="30px"></u-icon>
					</view>
					<view class="kongbai">
						<a>￥{{totalPrice}}</a>
					</view>
					<view class="geiqian" :class="{gaibian:totalprice?true:false}" @click="pay()">
						<a>给钱</a>
					</view>
				</view>
			</view>
			
		</view>
	</view>
	
</template>



<script>
	// import payment from "./payment.vue"
	
	export default {
		data() {
			return {
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
				shop_info:[],
				foodinfo: '',
				leftMenuList2: [],
				rightMenuList2: [],
				rightMenuList3:[],
				leftMenuList3:[],
				isshow4:'',
				currentIndex2:'',
				 allList:[],
				 allInfo:[],
				 allInfo2:[],
				totalprice:'',
				background: {
					background: 'url(https://img0.baidu.com/it/u=514748814,740779416&fm=26&fmt=auto)'
				}
			}
		},
		Cc: [],
		rf: [],
		foodindex: '',
		computed: {
			totalPrice() {
				  let b = 0;
				for(let i = 0;i<this.allList.length;i++){
				  	b += this.allList[i].food_num*this.allList[i].food_price
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
		methods: {
			click(index) {
				// this.isactive=index;
				// console.log(index)
				this.currentIndex = index
				// console.log(this.currentIndex)
				// this.rightContent=this.Cc.message[index].children
				this.rightMenuList2 = this.rf.filter(v => v.cat_id == index + 1&&v.shop_id==this.foodindex+1)
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
				if(this.isshow4 == 0){
					return
				}else{
					this.rightMenuList2[index2].food_num--
				}
			},
			pay() {
				if (this.totalprice==0) {
					this.show4 = true
				} else {
					this.allInfo = this.rf.filter(v=>v.shop_id==this.foodindex+1&&v.food_num>0)
					this.allInfo2 = this.allInfo.map(v=>v.food_name)
					let allInfo5 = JSON.stringify(this.allInfo)
					// console.log(this.shop_info[0].shop_img)
					// console.log(this.allInfo2)
					wx.navigateTo({
						url: "./payment?allInfo3="+encodeURIComponent(allInfo5)+
						"&totpri="+this.totalprice+"&shopname="+this.shop_info[0].shop_name+
						"&worker="+this.shop_info[0].worker_moneny+
						"&shopimg="+encodeURIComponent(this.shop_info[0].shop_img) 
						//参数中有不识别的字符，所以用encodeURIComponent编码,子页面使用decodeURIComponent
						//this.rf.filter(v=>v.shop_id==this.foodindex+1&&v.food_num>0)
					})
				}
			}

		},
		components: {
			// payment
		},
		onLoad: function(options) {
			
			if(this.isshow4==0){
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
					this.leftMenuList2 = res.data.filter(v=>v.cat_id==this.foodindex+1)//map(v => v.cat_name)
					this.leftMenuList3 = this.leftMenuList2.map(v=>v.cat_name)
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
					this.rightMenuList2 = this.rf.filter(v => v.cat_id == 1&&v.shop_id==this.foodindex+1)
					//获取这个商店的所有食物
					 this.allList = this.rf.filter(v=>v.shop_id==this.foodindex+1)
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
					this.shop_info = res.data.filter(v=>v.shop_id==this.foodindex+1)
					// console.log(this.shop_info)
					
				},
				fail: () => {
					console.log("err")
				}
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
.shop_img>img:first-child{
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
    .food{
		height: 100%;
		width: 750rpx;
		// border:solid 1px red;
		position: relative;
		top: -100rpx;
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
		// border: solid 1px red;
	}

	.left {
		flex: 2;
		height: calc(60vh);
	}		

	.right {
		flex: 5;

		height: calc(60vh); //93vh

	}

	.menu_item {
		display: flex;
		height: 80rpx;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;

	}

	.menu_item:active {
		color: #2B85E4;
		border-left: 5px solid #2B85E4;
	}

	.b {
		color: #2B85E4;
		border-left: 5px solid #2B85E4;
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

	// .buttom2{
	//   position: fixed;
	// 	background-color: #19BE6B;
	// 	width: 100%;
	// 	height: 90rpx;
	// 	// position: bottom;
	// 	 bottom: 0;
	// 	 left: 0;
	// 	 display: flex;


	// }
	.pinglun {
		flex: 1;
		// justify-content: center;
		text-align: center;
		
		// border: solid 1px red;
	}

	.shoppingcar {
		flex: 1;
		text-align: center;
	}

	.geiqian {
		background-color: #82848A;
		color: #909399;
		flex: 2;
		text-align: center;
		font-size: 20px;
	}

	.gaibian {
		// text-align: center;
		// font-size: 20px;
		// flex: 2;
		font-size: 20px;
		background-color: red;
		flex: 2;
	}

	.kongbai {
		flex: 3
		
	}
    .kongbai>a:first-child{
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.dibu {
		display: flex;
		position: fixed;
		// bottom: 0;
		height: 100%;
		width: 100%;
		margin: auto;
		
		
		// border-radius: 30rpx;
		// background-color: #2B85E4;
		// position: relative;
		// bottom: 0;
	}

	// .dingbu{
	// 	// background-color: pink;
	// 	width: 100%;
	// 	// height: 30%;
	// 	// display: flex;
	// 	//position: fixed;
	// 	border-bottom: solid #82848A 2px;
	// }
	// .dianpuimage{
	// 	margin-left: 20rpx;
	// 	width:200rpx;
	// 	height: 200rpx;
	//     float: left;

	// }
	// .biaoti{
	// 	margin-top: 10rpx;
	// 	padding-left: 250rpx;
	// }
	// .biaoti1{
	// 	font-size: 45rpx;
	// 	font-weight: bold;
	// }
	// .biaoti2{
	// 	font-size: 30rpx;

	// }
	// .tang{
	// 	width: 100%;
	// 	height: 800rpx;

	// }
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
	
</style>
