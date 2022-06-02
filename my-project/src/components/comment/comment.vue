<template>
	<view>
		<view>
			<u-toast ref="uToast" />
		</view>
		<view class="bg">
		</view>
		<view class="top4" v-for="item in res">
			<view class="title">{{item.title}}</view>
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

				<a>{{item.content2}}</a>
				<view class="content-2" v-if="item.com_img2">
					<img :src="item.com_img2"></img>
					<img :src="item.com_img3"></img>
					<img :src="item.com_img4"></img>
				</view>
				<view v-else></view>
				<view class="dianzang">
					<a>
						<u-icon name="more-dot-fill" size="40"></u-icon>
					</a>
				</view>

			</view>
			<u-gap height="20" bg-color="#bbb"></u-gap>
			<view class="comment2" v-for="(item,index) in res2">
				<view class="user-info2">
					<view>
						<image :src="item.userimg"></image>
					</view>
					<view class="comment4">
						<a>{{item.username}}</a>
						<a>{{item.comment_content}}</a>
						<a>{{item.comment_time}}</a>
					</view>
				</view>
				<view class="content4">

				</view>

			</view>
		</view>
		<view class="bottom">
			<view>
				<u-field v-model="text" placeholder="写下你的评论"></u-field>
				<a>
					<u-icon name="checkmark" size="60" @click="addComment()"></u-icon>
				</a>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				id: '',
				res: [],
				userInfo: '',
				time: '',
				res2:[]
			}
		},
		methods: {
			getComment(){
				uni.request({
					url:'https://127.0.0.1/20211019/comment.php',
					success: (res) => {
						// console.log(this.res[0].id)
						this.res2 = res.data.filter(v=>v.community_id==this.id)
						console.log(res.data.filter(v=>v.community_id==this.id))
					}
				})
			},
			getThecom() {
				uni.request({
					url: 'https://127.0.0.1/20211019/community_info.php',
					success: (res) => {
						this.res = res.data.filter(v => v.id == this.id)
						console.log(this.res)
					}

				})
			},
			addComment() {
				uni.request({
					url: 'https://127.0.0.1/20211019/create_comment.php',
					header: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						
						community_id: this.id,
						username: this.userInfo.nickName,
						userimg: this.userInfo.avatarUrl,
						comment_content: this.text,
						comment_time: this.time
					},
					method: 'POST',
					success: (res) => {
						this.$refs.uToast.show({
							title: '评论成功',
							type: 'success',

						})
						// console.log("success")
						this.text = null
					}
					// success(res) {
					// 	console.log("success")

					// }
				})
			}
		},
		mounted() {
			var _this = this
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth() + 1;
			let dd = new Date().getDate();
			_this.gettime = yy + '-' + mm + '-' + dd;
			this.time = this.gettime

		},
		onLoad(options) {

			this.userInfo = wx.getStorageSync('userInfo')
			this.id = options.id
			this.getThecom()
			this.getComment()
			// console.log(this.res)
		},

	}
</script>

<style>
	body {}

	.bg {
		background-color: #2B85E4;
		width: 750rpx;
		height: 200rpx;
	}

	.top4 {
		position: relative;
		top: -200rpx;
		width: 720rpx;
		margin: auto;
		height: 100%;
		background-color: white;
		border-radius: 20rpx;
	}

	.title {
		font-weight: bold;
		font-size: 40rpx;
		margin: 20rpx 0 0 20rpx;
	}

	.user-info {
		display: flex;
		margin: 10rpx 0 0 10rpx;
	}

	.user-info>view:nth-child(1)>image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: black;
		margin-top: 20rpx;
	}

	.user-info>view:nth-child(2) {
		/* display: flex; */
	}

	.user-info>view:nth-child(2)>a:nth-child(1) {
		margin: 35rpx 0 0 20rpx;
		font-weight: bold;
		font-size: 40rpx;
	}

	.user-info>view:nth-child(2)>a:nth-child(2) {
		margin: 10rpx 0 0 20rpx;
		font-size: 30rpx;
	}

	.content4 {
		width: 98%;
		height: 100%;
		font-size: 40rpx;

		white-space: normal;
		word-break: break-all;

		margin: auto;
		padding-right: 10rpx;

	}

	.content4>a:nth-child(1) {
		font-size: 40rpx;

	}

	.dianzang>a:first-child {
		margin: 20rpx 0 0 630rpx;
	}

	.bottom {
		width: 750rpx;
		height: 200rpx;
		position: fixed;
		background-color: white;
		position: absolute;
		bottom: 0;
	}

	.bottom>view:nth-child(1) {
		display: flex;
	}

	.bottom>view:nth-child(1)>a:nth-child(2) {
		margin: 10rpx 0 0 150rpx;
	}

	.comment4 {
		margin: 20rpx 0 0 20rpx;

	}

	.comment4>a:nth-child(1) {
		font-size: 40rpx;
		font-weight: bold;
	}

	.comment4>a:nth-child(2) {
		font-size: 35rpx;
	}

	.comment4>a:nth-child(3) {
		font-size: 30rpx;
		color: #C0C0C0;
		margin: 10rpx 0 10rpx 0;
	}

	.user-info2 {
		display: flex;
		margin: 10rpx 0 0 10rpx;
		border-bottom: 1rpx solid #C0C0C0;
	}

	.user-info2>view:nth-child(1)>image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: black;
		margin-top: 20rpx;
	}

	.user-info2>view:nth-child(2) {
		/* display: flex; */
	}

	/* .user-info>view:nth-child(2)>a:nth-child(1){
		margin: 35rpx 0 0 20rpx;
		font-weight: bold;
		font-size: 40rpx;
	}
	.user-info>view:nth-child(2)>a:nth-child(2){
		margin: 10rpx 0 0 20rpx; 
		font-size: 30rpx;
	} */
</style>
