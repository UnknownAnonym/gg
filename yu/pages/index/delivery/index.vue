<template>
	<view>
		<!-- 搜索框 -->
		<u-search placeholder="输入店铺名" 
		margin="20rpx 0 0 0"
		input-align="center" :show-action="false" :disabled="false" @search="searchStoreMessage"></u-search>
		<Nav></Nav>
		<shop-list :shopDetail="shopDetail"></shop-list>
		
	</view>
</template>

<script>
	import Nav from './components/nav.vue';
	
	export default{
		components:{
			Nav
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	} 
</script>

<style>
</style>
