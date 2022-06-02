<template>
	<view>
		<view class="recom-dishes">			
			<!-- 抽屉菜品介绍 -->
			<scroll-view scroll-x="true" style="width: 100%;" class="scroll-view_X">
				<view class="out-wrap" v-for="(item,index) in recommendList" :key="item.id">
					<view class="recom-wrap">
						<image src="https://z3.ax1x.com/2021/09/26/46cJdH.jpg" mode="widthFix">
					</view>
					<view class="tit">{{item.dishes_name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				recommendList:[
					{
						id:1,
						img_url:"",
						dishes_name:"1108"
					},
					{
						id:2,
						img_url:"",
						dishes_name:"2103"
					},
					{
						id:3,
						img_url:"",
						dishes_name:"2210"
					},
					{
						id:4,
						img_url:"",
						dishes_name:"4101"
					},
					{
						id:5,
						img_url:"",
						dishes_name:"4203"
					}
				],
				show: false
			}
		},
		methods:{
			
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
			}
			.tit{
				text-align: center;
				font-weight: 700;
			}
			
			
			
		}
		
		.scroll-view_X{
			white-space: nowrap;
		}
	}
	
</style>
