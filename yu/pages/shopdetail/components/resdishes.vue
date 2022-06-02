<template>
	<view>
		<view class="recom-dishes">
			<view class="text-black text-bold title">推荐菜</view>
			<view class="divider">
				<u-divider half-width="100%" color="#787878">网友推荐(6)</u-divider>
			</view>
			
			<!-- 抽屉菜品介绍 -->
			<scroll-view scroll-x="true" style="width: 100%;" class="scroll-view_X">
				<view class="out-wrap" v-for="(item,index) in recommendList" :key="item.id">
					<view class="recom-wrap">
						<image src="https://z3.ax1x.com/2021/09/26/46cJdH.jpg" @click="show = true;" mode="widthFix">
								<u-popup mode="bottom" v-model="show" height="55%">
									<view class="content" style="background-color: #ADD8E6;">
										<scroll-view scroll-y="true" style="height: 55%;">
											<!-- 头部 -->
											<view>											
												<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
													<!-- 中间卡片内容 -->
													<view class="" slot="body">
														<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">										
															<!-- <image src="http://img.daimg.com/uploads/allimg/120727/1-120HGI603.jpg" mode="widthFix"></image> -->
															<u-image width="300rpx" height="300rpx" :src="src"></u-image>
															<u-image width="300rpx" height="300rpx" :src="src2" style="padding-left: 5%;"></u-image>
														</view>
													</view>
													<!-- 底部卡片内容 -->
													<view class="" slot="foot">
														<u-icon v-if="!isLike" id="footerContent" name="thumb-up" size="50" :label="num" @click="changeImg"></u-icon>
														<u-icon v-if="isLike" id="footerContentFill" name="thumb-up-fill" size="50" :label="num" @click="changeImg"></u-icon>
													</view>
												</u-card>
											</view>
											<!-- 店铺内容 -->
											<view>
												<u-card :title="title_selling" show-foot="false">
													<!-- 店铺卡片内容 -->
													<view class="" slot="body">
														<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
															<text style="margin-bottom: 5px;">粉面世家</text>
															<u-rate v-model="value" :colors="colors" :icons="icons" inactive-icon="thumb-up" :current="4.2" :disabled="true" class="rateStyle"></u-rate>
														</view>
													</view>
												</u-card>
											</view>
										</scroll-view>
									</view>
								</u-popup>
						<view class="mask-title">
							<text class="cuIcon-appreciatefill"></text>
							<text class="con-text">{{item.rec_con}}人推荐</text>
						</view>
					</view>
					<view class="tit">{{item.dishes_name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import comment from '../../../components/comment/comment.vue'
	
	export default {
		components:{
			comment
		},
		data(){
			return {
				recommendList:[
					{
						id:1,
						img_url:"",
						rec_con:18,
						dishes_name:"牛肉"
					},
					{
						id:2,
						img_url:"",
						rec_con:20,
						dishes_name:"宫爆鸡丁"
					},
					{
						id:3,
						img_url:"",
						rec_con:30,
						dishes_name:"小青龙"
					},
					{
						id:4,
						img_url:"",
						rec_con:40,
						dishes_name:"剁椒鱼头"
					},
					{
						id:5,
						img_url:"",
						rec_con:50,
						dishes_name:"滑虾"
					}
				],
				show: false,
				src:"https://z3.ax1x.com/2021/09/26/46cJdH.jpg",
				src2:"http://img.daimg.com/uploads/allimg/120727/1-120HGI603.jpg",
				
				price:25,
				title:"云吞面",
				subTitle:"￥8",
				thumb:"https://z3.ax1x.com/2021/09/26/46cJdH.jpg",
				thumbWidth:30,
				
				num:5,
				isLike:false,
				
				title_selling:'在售商户',
				value: 4,
				colors: ['#ffc454', '#ff9500', '#d93a49'],
				icons: ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill'],
				
				
			}
		},
		methods:{
			changeImg(){
				this.isLike = !this.isLike;
				if(this.isLike == true){
					this.num++;
				}else{
					this.num--;
				}
				console.log(this.num);
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.recom-dishes{
		padding: 20rpx 20rpx;
		.title{
			font-size: 45rpx;
			margin-bottom: 10rpx;
		}
		.divider{
			margin-bottom: 30rpx;
		}
		
		.out-wrap{
			display: inline-block;
			width: calc((100% / 2) - 70rpx);
			margin-right: 20rpx;
			border-radius: 15rpx;
			overflow: hidden;
			.recom-wrap{
				position: relative;
				overflow: hidden;
				.img{
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
					
			
				}
				.mask-title{
					position: absolute;
					bottom: 4rpx;
					left: 0;
					width: 100%;
					background-color: rgba(0,0,0,.5);
					color: #fff;
					font-weight: 500;
					padding: 7rpx 0px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom-right-radius: 15rpx;
					border-bottom-left-radius: 15rpx;
					z-index: 99;
					.con-text{
						padding-left: 10rpx;
					}
				}
			}
			.tit{
				text-align: center;
				font-weight: 700;
			}
			
			
			
		}
		
		.scroll-view_X{
			white-space: nowrap;
		}

		.rateStyle{
			float: left;
			margin: 0px 0px 5px 15px;//top right bottom left
		}
	}
	
</style>
