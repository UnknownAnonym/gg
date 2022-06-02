<template>
	<!-- 导航栏 -->
	<u-grid :col="5" :border="false">
		<block v-for="item in cate" :key="item.cid">
			<u-grid-item>
					<u-icon :name="item.icon" :size="46"></u-icon>
					<view class="grid-text">{{item.title}}</view>
			</u-grid-item>
			
		</block>
	</u-grid>
</template>

<script>
	export default {
		data (){
			return {
				cate:[
					{
						cid:1,
						icon:"photo",
						title:"正餐"
					},
					{
						cid:2,
						icon:"photo",
						title:"汉堡"
					},
					{
						cid:3,
						icon:"photo",
						title:"奶茶"
					},
					{
						cid:4,
						icon:"photo",
						title:"粉面"
					},
					{
						cid:5,
						icon:"photo",
						title:"蛋糕"
					},
				]
			}
		}
	
	}
</script>

<style>
</style>
