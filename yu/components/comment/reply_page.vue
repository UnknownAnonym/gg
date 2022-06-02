<template>
	<view class="wrap">
		<!-- 评论对象 -->
		<view class="comment">
			<view class="top">
				<!-- 用户头像、用户名、用户发布的时间 -->
				<view class="left">
					<view class="user_photo"><image :src="comment.url" mode=""></image></view>
					<view class="user_info">
						<view class="name">{{comment.name}}</view>
						<view class="date">{{comment.date}}</view>
					</view>
				</view>
			</view>
			<view class="content">{{ comment.contentText }}</view>
		</view>
		
		<!-- 回复人群 -->
		<view class="all-reply">
			<view class="all-reply-top">全部回复（{{ comment.allReply }}）</view>
			<view class="item" v-for="(item, index) in commentList" :key="index">
				<view class="comment">
					<view class="top">
						<view class="left">
							<view class="user_photo"><image :src="comment.url" mode=""></image></view>
							<view class="user_info">
								<view class="name">{{item.name}}</view>
								<view class="date">{{item.data}}</view>
							</view>
						</view>
						<view class="right">
							<u-icon v-if="!item.isLikes" name="thumb-up" class="like" color="#9a9a9a" :size="40" @click="getLike(index)"></u-icon>
							<u-icon v-if="item.isLikes" name="thumb-up-fill" class="like" :size="40" @click="getLike(index)" style="color: #FBBD08;"></u-icon>
							<view class="num">{{ item.likeNum }}</view>
						</view>
					</view>					
					<view class="content">{{ item.contentText }}</view>
					<view class="reply" v-if="item.reply">
						<view class="username">{{comment.name}}<image src="../../static/Homer.jpg" mode="aspectFit"></view>
						<view class="text">{{item.reply.contentStr}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				commentList: [],
				comment: ''
			};
		},
		onLoad() {
			this.getReply();
		},
		methods:{
			//回复列表
			getReply(){
				this.comment = {
					id: 1,
					name: '广轻小伙0',
					date: '12-25 18:58',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					allReply: 12,
				};
				this.commentList = [
					{
						id:1,
						name:'斯巴鲁',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 13,
						isLikes: false,
						reply: {
							// 楼主回复
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
						}
					},
					{
						id:2,
						name:'巴布姆',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 33,
						isLikes: false,
					},
					{
						id:3,
						name:'杰西卡',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 33,
						isLikes: false,
					},
					{
						id:4,
						name:'阿喀琉斯',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 33,
						isLikes: false,
						reply: {
							// 楼主回复
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
						}
					},
					{
						id:5,
						name:'阿什比鲁',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 33,
						isLikes: false,
						reply: {
							// 楼主回复
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
						}
					},
				]
			},
			
			//点赞
			getLike(index){
					this.commentList[index].isLikes = !this.commentList[index].isLikes;
					let like = this.commentList[index].isLikes;
					if(like == true){
						this.commentList[index].likeNum++;
					}else{
						this.commentList[index].likeNum--;;
					}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment{
		background-color: #ffffff;
		font-size: 32rpx;
		padding: 30rpx;
		.top{
			display: flex;
			justify-content: space-between;
		}
		.left{
			display: flex;
			.user_photo{
				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
			}
			.user_info{
				margin-left: 10rpx;
				.name{
					color: #5677fc;
					font-size: 28rpx;
					margin-bottom: 4rpx;
				}
				.date{
					font-size: 28rpx;
					color: $u-light-color;
				}
			}
		}
		.right {
			display: flex;
			font-size: 20rpx;
			align-items: center;
			color: #9a9a9a;
			.like {
				margin-left: 6rpx;
			}
			.num{
				font-size: 26rpx;
				color: #9a9a9a;
			}
		}
		.highlight {
			color: #5677fc;
			.num{
				color: #5677fc;
			}
		}
	}
	
	.all-reply{
		margin-top: 10rpx;
		padding-top: 20rpx;
		background-color: #FFFFFF;
		.all-reply-top{
			margin-left: 20rpx;
			padding-left: 20rpx;
			border-left: soild 4rpx #5677fc;
			font-size: 30rpx;
			font-weight: bold;
		}
		.item{
			border-bottom: solid 2rpx $uni-border-color;
		}
		.reply{
			padding: 20rpx;
			background-color: rgb(242,242,242);
			border-radius: 12rpx;
			margin: 10rpx 0;
			.username{
				font-size: 28rpx;
				color: #7a7a7a;
				margin-bottom: 12rpx;
			}
			image {
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
				margin-left: 8rpx;
			}
		}
	}	
</style>
