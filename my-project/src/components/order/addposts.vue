<template>
	<view class="all">
		
		<view>
			<u-field v-model="title" placeholder="请输入标题5-30个字" type="text" label="标题"></u-field>
		</view>
		<view>
			<u-field v-model="content" placeholder="请输入内容" type="textarea" label="内容"></u-field>
		</view>
		<view>
			<u-upload :action="action" :file-list="fileList" ></u-upload>
		</view>
		<view>
			<u-button size="medium" type="primary" @click="gotoScuess">发布</u-button>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				time:'',
				month:'',
				date:'',
				title:'',
				content2:'',
				action: 'https://127.0.0.1/20211019/create_community.php',
				userInfo:'',
				openId:'',
			}
		},
		mounted() {
			var _this = this
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth()+1;
			let dd = new Date().getDate();
			
			_this.gettime = yy+'-'+mm+'-'+dd;
			this.time = this.gettime
			this.month = mm
			this.date = dd
			console.log(this.month +"+"+this.date)
		},
		methods:{
			gotoScuess(){
				
				uni.request({
					url:"https://abc.ilightlife.info/apply",
					data:{
						username:this.userInfo.nickName,
						// userimg:this.userInfo.avatarUrl,
						title:this.title,
						content:this.content,
						// time:this.time,
						// month:this.month,
						// date:this.date,
						// co_img1:this.openId,
						
					},
					method:'POST',
					header:{
						"Content-Type": "application/x-www-form-urlencoded"
					},
				    success: (res) => {
						console.log(res)
				    	this.$refs.uToast.show({
				    		title: '发布成功',
				    		type:'success',
				    		back:true,
				    		params: {
				    			id: 1,
				    			menu: 3,
				    		},
				    	})
				    }
				})
				
			}
		},
		onLoad() {
			this.userInfo = wx.getStorageSync('userInfo')
			this.openId = wx.getStorageSync('openId')
			console.log(this.openId)
		}
	}
</script>

<style>
	.all>view:nth-child(4){
		/* margin: auto; */
		margin-top: 500rpx;
		text-align: center;
	}
</style>
