<!-- 首页 -->
<template>
	<view>
		<Top></Top> 					<!-- 顶部 -->
		<nav-bar></nav-bar>				<!-- 导航栏 -->
		<hot-spot></hot-spot>			<!-- 热点 -->
		<word-topic></word-topic>   	<!-- 话题 -->
		<water-fall></water-fall>		<!-- 瀑布流 -->
		
		
		
		
		

		<view style="height: 140rpx;width: 1rpx;"></view>
	</view>

</template>

<script>

	import WaterFall from "../index/waterfall.vue";
	import Top from "../index/top.vue";
	import NavBar from "../index/navbar.vue";
	import HotSpot from "../index/hotspot.vue";
	import WordTopic from "../index/wordtopic.vue";
	export default {
		components: {
			Top,WaterFall,NavBar,HotSpot,WordTopic
		},
		data() {
			return {
									
			}
		},
		watch: {

		},
		mounted() {
			// console.log(this.projectList)
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
</style>
