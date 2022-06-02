<template>
	<view>
		<u-row gutter="16">
			<u-col span="9"><a class="two">昵称</a></u-col>
			<u-col span="3"><a class="two">{{cname}}</a></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="9"><a class="two">班级</a></u-col>
			<u-col span="3"><a class="two">{{cname}}</a></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="9"><a class="two">姓名</a></u-col>
			<u-col span="3"><a class="two">{{cname}}</a></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="9"><a class="two">学号</a></u-col>
			<u-col span="3"><a class="two">{{cname}}</a></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="10"><a class="two">修改个人信息</a></u-col>
			<u-col span="2"><navigator url="./update"><u-icon name="arrow-right" class="four"></u-icon></navigator></u-col>
		</u-row>
		
	</view>
</template>

<script>
	
	export default {
			data(){
				return{
					userInfo:[]
				}
			},
			props:['cname','cid'],
			
			onLoad() {
				// this.userInfo = wx.getStorageSync('userInfo')
				console.log("aa")
			}
			}
	
	
</script>

<style scoped lang="scss">
	.one{
		width: 100%;
		height: 20%;
		background-color: #ffffff;
	}
	.two{
		height: 45px;
		width: 750rpx;
		padding-top: 10px;
	}
	.four{
		padding-top: 15px;
	}
</style>
