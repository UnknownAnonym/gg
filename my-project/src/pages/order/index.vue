<template>
	<view>
		<!-- <view class="empty">
			<u-empty text="列表内容为空" mode="list"></u-empty>
			<view>
				<u-button type="primary" size="medium" @click="gotoPosts">立即发布</u-button>
			</view>
		</view> -->
		<u-modal v-model="show" :content="content" @click="gotologin()" :show-confirm-button="false">
			<view style="margin:10rpx 0 0 20rpx;font-size: 30rpx;">
				<a>请先登录</a>
			</view>
			
			<view style="display: flex;margin: auto;">
				<u-button size="medium" style="margin: 30rpx 10rpx 10rpx 80rpx;" @click="this.show=false">取消</u-button>
				<u-button size="medium" type="primary" style="margin: 30rpx 10rpx 10rpx 10rpx;" @click="gotologin()">确认</u-button>
			</view>
			
		</u-modal>
		<view class="the-last" @click="gotoPosts()">发布</view>
		<view>
			<view class="all3" v-for="(item,index) in res">
				<view class="tie">
					<view class="time">
						<a>{{item.date}}</a>
						<a>{{item.month}}</a>
					</view>
					<view>
						<a>{{item.title}}</a>
					</view>
				</view>
				<view class="zujian">
					<a><u-icon name="chat" size="40" label="回复"></u-icon></a>
					<a><u-icon name="thumb-up" size="40" label="赞" @click="handleClick(index)" 
					v-if="item.status==0"></u-icon>
					<u-icon name="thumb-up-fill" size="40" label="赞" color="orange"
					 @click="handleClick2(index)" v-else></u-icon></a>
					<a><u-icon name="trash" size="40" label="删除"></u-icon></a>
				</view>
			</view>
			
		</view>
	</view>
	
</template>
<script>
	export default{
		data(){
			return{
				mm:'',
				dd:'',
				gg:true,
				gg2:false,
				res:[],
				time:'',
				openId:'',
				show:false,
				content:"请先登录!",
			}
		},
		computed:{
		},
		onLoad() {
			this.openId = wx.getStorageSync('openId')
			console.log(this.openId)
			this.getcomment()
			
		},
		mounted() {
			var _this = this
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth()+1;
			let dd = new Date().getDate();
			_this.gettime = yy+'-'+mm+'-'+dd;
			this.time = this.gettime
			this.mm = mm
			this.dd = dd
			// console.log(this.time)
		},
		methods:{
            getcomment(){
				wx.request({
					url:'https://127.0.0.1/20211019/community_info.php',
					success: (res) => {
						this.res = res.data.filter(v=>v.co_img1 == this.openId)
						
					}
				})
			},
			yes(){
				// this.show=false
			},
			gotologin(){
				wx.navigateTo({
					url:'../login/index'
				})
			},
			gotoPosts(){
				if(this.openId==null){
					this.show = true
				}else{
					wx.navigateTo({
						url:'../../components/order/addposts'
					})
				}
				
			},
			handleClick(index){
				this.gg = false
				this.gg2 = true
				let jisuan = parseInt(this.res[index].status)
				jisuan+=1
				this.res[index].status = jisuan
				console.log(this.res[index].status)
			},
			handleClick2(index){
				this.gg2 = false
				this.gg = true
				this.res[index].status = 0
				console.log(this.res[index].status)
			}
		}
	}
</script>
<style scoped>
	.empty{
		margin-top: 350rpx;
	}
	.empty>view:nth-child(2){
		text-align: center;
	}
	.all3{
		width: 100%;
		background-color: white;
		height: 180rpx;
		/* margin: auto; */
		/* border-radius: 20rpx; */
		
	}
	.tie{
		
		display: flex;
		
	}
	.tie>view:nth-child(1){
		margin: 10rpx 0 0 20rpx;
	}
	.tie>view:nth-child(1)>a:nth-child(1){
		font-size: 50rpx;
		font-weight: 550;
		margin: 0 0 0 20rpx;
	}
	.tie>view:nth-child(1)>a:nth-child(2){
		
		margin: 0 0 15rpx 0;
	}
	.tie>view:nth-child(2){
		margin: 20rpx 0 0 40rpx;
		font-size: 50rpx;
		font-weight: bold;
		/* border: 1rpx solid red; */
		/* width: 100%; */
	}
	.zujian{
		display: flex;
		/* margin: 10rpx 0 0 200rpx; */
		margin: auto;
		/* border: solid 1rpx red; */
		width: 600rpx;
		padding-bottom: 15rpx;
		border-bottom: 1rpx solid #959595;
	}
	.zujian>a:nth-child(1){
		flex: 1;
	}
	.zujian>a:nth-child(2){
		flex: 1;
	}
	.zujian>a:nth-child(3){
		flex: 1;
	}
	.the-last{
		/* border: 1rpx red solid; */
		width: 100%;
		height: 10%;
		font-size: 80rpx;
		text-align: center;
		position:absolute;
		top: 100rpx;
		margin: auto;
		position: fixed;
		background-color: #007AFF;
	}
</style>