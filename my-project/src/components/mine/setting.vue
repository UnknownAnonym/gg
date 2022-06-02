<template>
	<view class="one">
		<u-row gutter="16">
			<u-col span="9"><a class="two">手机号码</a></u-col>
			<u-col span="3"><a class="two">135xxxxxxxx</a></u-col>
		</u-row>
		<u-gap height="20" bg-color="#bbb"></u-gap>
		<view class="two">
			<u-row gutter="16">
				<u-col span="12">
					<navigator url="./yingshi"><a>隐私与过滤</a></navigator>
				</u-col>
				
			</u-row>
			
		</view>
		<view class="two">
			<u-row gutter="16">
				<u-col span="12">
			<navigator><a>关于</a></navigator>
			</u-col>
				
			</u-row>
		</view>
		<view class="two">
			<u-row gutter="16">
				<u-col span="12">
			<navigator><a>清理缓存</a></navigator>
			</u-col>
				
			</u-row>
		</view>
	</view>
</template>

<script>
	import yingshi from "./yingshi.vue"
	export default {
			
			methods: {
				// switch打开或者关闭时触发，值为true或者false
				// 即使不监听此事件，this.checked此时也会相应的变成true或者false
				
				},
				components:{
					yingshi
				}
			}
		
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
	}
</style>
