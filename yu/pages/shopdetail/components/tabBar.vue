<template>
	<view>
		<view class="container_bar">
			<view class="content_item">
				<!-- 分享 -->
				<view class="share" @tap="clickShare">
					<u-icon name="share" size="60"></u-icon>
					<text>分享</text>
				</view>
				
				<!-- 评论 -->
				<view class="write_comment" @click="clickWriteComment">
					<u-icon name="edit-pen" size="60"></u-icon>
					<text>评论</text>
				</view>
				
				<!-- 收藏 -->
				<view class="collection">
					<u-icon v-if="!isLike" id="footerContent" name="star" size="60" @click="clickCollection"></u-icon>
					<u-icon v-if="isLike" id="footerContentFill" name="star-fill" size="60" @click="clickCollection" style="color: #FBBD08;"></u-icon>
					<text v-if="!isLike" @click="clickCollection">收藏</text>
					<text v-if="isLike" @click="clickCollection">已收藏</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:5,
				isLike:false
			}
		},
		methods:{
			clickShare(){				
				uni.navigateTo({
					url:"/components/comment/share"
				})
				console.log("clickShare");
			},
			clickWriteComment(){
				uni.navigateTo({
					url:"/components/comment/write_comment"
				})
				console.log("clickWriteComment")
			},
			clickCollection(){
				console.log("clickCollection")
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
	.container_bar{
		align-items: center;
		position: relative;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 130rpx;
		width: 100%;
		z-index: 998;
		background-color: #ffffff;
		border-top: solid .5px rgba(0,0,0,.5);
		.content_item{
			display: flex;
			justify-content: center;
			position: absolute;
			color: #000000;
			font-size: 32rpx;
			margin-top: 32rpx;
			.share{
				margin-left: 95rpx;
			}
			.write_comment{
				margin-left: 95rpx;
			}
			.collection{
				margin-left: 95rpx;
			}
		}
	}
</style>
