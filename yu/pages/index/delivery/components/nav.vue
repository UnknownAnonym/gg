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
						title:"教学楼"
					},
					{
						cid:2,
						icon:"photo",
						title:"实训楼"
					},
					{
						cid:3,
						icon:"photo",
						title:"饭堂"
					},
					{
						cid:4,
						icon:"photo",
						title:"图书馆"
					},
					{
						cid:5,
						icon:"photo",
						title:"运动场"
					},
				]
			}
		}
	
	}
</script>

<style>
</style>
