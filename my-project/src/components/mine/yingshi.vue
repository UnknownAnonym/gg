<template>
	<view class="one">
		<u-row gutter="16">
			<u-col span="10"><a class="two">允许关注我的人查看我的主页</a></u-col>
			<u-col span="2"><u-switch v-model="checked" class="three"></u-switch></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="10"><a class="two">允许陌生人查看我的主页</a></u-col>
			<u-col span="2"><u-switch v-model="checked" class="three"></u-switch></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="10"><a class="two">允许通过手机号查找我</a></u-col>
			<u-col span="2"><u-switch v-model="checked" class="three"></u-switch></u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="10"><a class="two">允许关注我的人查看我的主页</a></u-col>
			<u-col span="2"><u-switch v-model="checked" class="three"></u-switch></u-col>
		</u-row>
		<u-gap height="20" bg-color="#bbb"></u-gap>
		<u-row gutter="16">
			<u-col span="10"><a class="two">个性推荐</a></u-col>
			<u-col span="2"><u-switch v-model="checked" class="three"></u-switch></u-col>
		</u-row>
		<u-gap height="20" bg-color="#bbb"></u-gap>
		<u-row gutter="16">
			<u-col span="10"><a class="two">注销账号</a></u-col>
			<u-col span="2"><u-icon name="arrow-right" class="four"></u-icon></u-col>
		</u-row>
	</view>
	
</template>

<script>
	export default {
			data() {
				return {
					checked: false,
				};
			},
			methods: {
				// switch打开或者关闭时触发，值为true或者false
				// 即使不监听此事件，this.checked此时也会相应的变成true或者false
				change(status) {
					// console.log(status);
				},
			}
		};
</script>

<style lang="scss" scoped>
	.one{
		width: 100%;
		height: 20%;
		background-color: #ffffff;
	}
	.two{
		height: 45px;
		width: 750rpx;
		padding-top: 10px;
		font-weight: bold;
	}
	.three{
		padding-top: 5px;
	}
	.four{
		padding-top: 15px;
	}
</style>
