<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
			:style="{height: swiperHeight+'rpx'}">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
					<u-swiper :list="list1"></u-swiper>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- style="background-color: #000000;" -->
				<view>
					<view class="community" v-for="(item,index) in res" @click="addClick(index)">
						<view class="user-info">
							<view>
								<image :src="userInfo.avatarUrl"></image>
							</view>
							<view>
								<a>{{item.username}}</a>
								<a>{{item.time}}</a>
							</view>
						</view>
						<view class="content4">
							<a>{{item.title}}</a>
							<a>{{item.content2}}</a>
							<view class="content-2" v-if="item.com_img2">
								<img :src="item.com_img2"></img>
								<!-- <img :src="item.com_img3"></img>
								<img :src="item.com_img4"></img> -->
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
				<!-- <u-swiper :list="list1"></u-swiper> -->
			</swiper-item>
			<swiper-item >
				<view class="school">
					<view class="school_title">
						开发答辩开发答辩通知
						开发答辩开发答辩通知
						
					</view>
					<view class="school_zha">
						<view class="school_icon">
							<view class="demo-tag">
								<view class="demo-tag-text">
									公示公告
								</view>
							</view>
						</view>
						<view class="school_time">
				            2020-10-26
						</view>
						<view class="school_count">
				             | 阅读人数：{{count}}人
						</view>
					</view>
				</view>
				
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '学校'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				allInfo: [],
				totalPrice: 20,
				res:[],
                userInfo:[],
				swiperHeight:1600,
			};
		},
		computed:{
			count(){
				let b = 0;
				b+=1;
				return b;
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
				console.log(this.swiperCurrent)
				if(this.swiperCurrent==0){
					this.swiperHeight = this.res.length * 200
				}else if(this.swiperCurrent==1){
					this.swiperHeight = 500
				}else{
					this.swiperHeight=500
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
				if(this.swiperCurrent==0){
					this.swiperHeight=this.res.length * 800
				}else if(this.swiperCurrent==1){
					this.swiperHeight= 500
				}else{
					this.swiperHeight=500
				}
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			getCommunity(){
				uni.request({
					url:'https://abc.ilightlife.info/api/community',
					success: (res) => {
						this.res = res.data.data
						console.log(this.res)
					}
				})
			},
			addClick(index){
				
				wx.navigateTo({
					url:'../../components/comment/comment?id='+this.res[index].id
				})
				console.log(this.res[index].id)
			}
		},
		onLoad() {
        this.getCommunity()
		this.userInfo = wx.getStorageSync('userInfo')
		
		},
		activated(){
			this.getCommunity()
		},
	};
</script>
<style scoped lang="scss">
	.school {
		width: 100%;
		height: 120rpx;
		border-bottom: 1px #AAAAAA solid;
		margin-top: 30rpx;
	}

	.school_title {
		font-size: 35rpx;
		font-weight: 600;
		margin-left: 20rpx;
	}

	.demo-tag {
		display: flex;
		margin-top: 5rpx;
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
	.school_zha{
		display: flex;
		margin-top: 15rpx;
	}
	.school_icon{
		flex: 1;
	}
	.school_time{
		flex: 1;
		margin-top: 5rpx;
	}
	.school_count{
		flex: 3;
	}
	.community{
		width: 720rpx;
		height: 100%;
		background-color: white;
		margin: auto;
		border-radius: 20rpx;
		
	}
	.community>view:nth-child(2)>image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: black;
	}
	.user-info{
		display: flex;
		margin: 10rpx 0 0 10rpx;
	}
	.user-info>view:nth-child(1)>image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: black;
		margin-top: 20rpx;
	}
	.user-info>view:nth-child(2){
		display: flex;
	}
	.user-info>view:nth-child(2)>a:nth-child(1){
		margin: 45rpx 0 0 20rpx;
		font-weight: bold;
		font-size: 40rpx;
	}
	.user-info>view:nth-child(2)>a:nth-child(2){
		margin: 50rpx 0 0 300rpx;
		font-size: 30rpx;
	}
	.dianzang>a:first-child {
		margin:20rpx 0 0 630rpx;
	}
	.content4 {
		width: 98%;
		 height: 100%;
		font-size: 40rpx;
		//border: 1rpx solid pink;
		white-space: normal;
		word-break: break-all;
		// margin-top: 20rpx;
		margin: auto;
		padding-right: 10rpx;
		
	}
	.content4>a:nth-child(1){
		font-weight: bold;
	}
	.content4>a:nth-child(2) {
		font-size: 30rpx;
		
	}
</style>
