<template>
	<!-- 标题 -->
	<view class="comment-wrap">
		<view class="text-black text-bold title">
			<view>网友评论</view>
			<view class="comment-num">(256)
			</view>
		</view>
		
		<!-- 标签 -->
		<view class="comment-tabs">
			<block v-for="(item,index) in commentTabsList" :key="index">
				<view class="tab">
					<text>{{item}}<text>(45)</text></text>
				</view>
			</block>
		</view>
		
		<!-- 用户评论 -->
		<view class="comment-con">
			<!-- 评论列表 -->
			<view class="comment" v-for="(res, index) in commentList" :key="res.id">
				<!-- 用户头像 -->
				<view class="left"><image :src="res.url" mode="aspectFill"></image></view>
				<view class="right">
					<view class="top">
						<!-- 评论用户 -->
						<view class="name">{{ res.name }}</view>
						<!-- 评论点赞数域点赞 -->
						<view class="like" :class="{ highlight: res.isLike }">							
							<view class="num">{{ res.likeNum }}</view>
							<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)" style="color: #FBBD08;"></u-icon>
						</view>
					</view>
					<!-- 评论内容 -->
					<view class="content">{{ res.contentText }}</view>
					<!-- 回复内容 -->
					<view class="reply-box">
						<view class="item" v-for="(item, index) in res.replyList" :key="item.index">
							<view class="username">{{ item.name }}</view>
							<view class="text">{{ item.contentStr }}</view>
						</view>
						<view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
							全部{{ res.allReply }}条回复
							<u-icon class="more" name="arrow-right" :size="26"></u-icon>
						</view>
					</view>
					<view class="bottom">
						{{ res.date }}
						<text style="float: right;color: #007AFF;">回复</text>
					</view>
				</view>				
			</view>
		</view>		
		<u-divider half-width="100%" color="#787878">没有更多了</u-divider>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				commentTabsList:["肉类好","菜品康","回客"],
				commentList:[]
			}
		},
		mounted(){
			this.getComment();
			console.log(this.commentList)
		},
		methods:{
			// 点赞
			getLike(index) {
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					this.commentList[index].likeNum++;
				} else {
					this.commentList[index].likeNum--;
				}
			},
			// 评论列表
			getComment() {
				this.commentList = [
					{
						id: 1,
						name: '广轻小伙0',
						date: '12-25 18:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 33,
						isLike: false,
						replyList: [
							{
								name: 'uview',
								contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
							},
							{
								name: '豆包',
								contentStr: '想吃冰糖葫芦粘豆包，但没钱5555.........'
							}
						]
					},
					{
						id: 2,
						name: '广轻小伙1',
						date: '01-25 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						allReply: 0,
						likeNum: 11,
						isLike: false,
						url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
					},
					{
						id: 3,
						name: '广轻小伙2',
						date: '03-25 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						allReply: 0,
						likeNum: 21,
						isLike: false,
						allReply: 2,
						url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
					},
					{
						id: 4,
						name: '广轻小伙3',
						date: '06-20 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false,
						allReply: 10,
						replyList: [
							{
								name: 'uview',
								contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
							},
							{
								name: '豆包',
								contentStr: '想吃冰糖葫芦粘豆包，但没钱5555.........'
							}
						]
					},
					{
						id: 5,
						name: '广轻小伙3',
						date: '06-20 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false
					},
					{
						id: 6,
						name: '广轻小伙3',
						date: '06-20 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false
					},
					{
						id: 7,
						name: '广轻小伙3',
						date: '06-20 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false
					},
					{
						id: 8,
						name: '广轻小伙3',
						date: '06-20 13:58',
						contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false
					},
				];
			},
			toAllReply(){
				uni.navigateTo({
					url:'/components/comment/reply_page'
				});
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	
	//标题
	.comment-wrap{
		padding: 0 20rpx;
		.title{
			padding: 20rpx 0;
			display: flex;
			font-size: 40rpx;
			margin-bottom: 10rpx;
			align-items: center;
			.comment-num{
				color: #949494;
				font-size: 40rpx;
				padding-left: 10rpx;
				font-weight: normal;
				
			}
		}
		
		// 标签
		.comment-tabs{
			width: 100%;
			// background-color: pink;
			.tab{
				display: inline-block;
				padding: 15rpx;
				border-radius: 42rpx;
				margin:10rpx 10rpx 10rpx 0;
				background-color: #f4f4f4;
			}
			// padding: 20rpx 0rpx;
		}
		
		// 用户评论
		.comment-con{
			padding-top: 20rpx;
			// 评论列表的css
			.comment {
				display: flex;
				padding: 30rpx;
				// 头像
				.left {
					image {
						width: 64rpx;
						height: 64rpx;
						border-radius: 50%;
						background-color: #f2f2f2;
					}
				}
				
				// 用户名和点赞
				.right {
					flex: 1;
					padding-left: 20rpx;
					font-size: 30rpx;
					.top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 10rpx;
						.name {
							color: #5677fc;
						}
						.like {
							display: flex;
							align-items: center;
							color: #9a9a9a;
							font-size: 26rpx;
							.num {
								margin-right: 4rpx;
								color: #9a9a9a;
							}
						}
						.highlight {
							color: #5677fc;
							.num {
								color: #5677fc;
							}
						}
					}
					
					// 内容样式
					.content {
						margin-bottom: 10rpx;
					}
					
					// 回复框内容样式
					.reply-box{
						margin: 20px 0px 20px 0px;//top right bottom left
						background-color: rgb(242, 242, 242);
						border-radius: 12rpx;
						.item {
							padding: 10rpx;
							border-bottom: solid 2rpx $u-border-color;
							.username {
								font-size: 24rpx;
								color: #999999;
							}
						}
						.all-reply {
							padding: 10rpx;
							display: flex;
							color: #5677fc;
							align-items: center;
							.more {
								margin-left: 6rpx;
							}
						}
					}
					
					//底部(回复时间、回复按钮)
					.bottom{
						padding: 0;
					}
				}
			}
		}
	}

</style>
