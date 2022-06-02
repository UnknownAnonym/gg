<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
					<block slot="backText">返回</block>
					<block slot="content">美食</block>
		</cu-custom>
		<!-- 搜索框 -->
		<u-search placeholder="输入店铺名" 
		margin="20rpx 0 0 0"
		input-align="center" :show-action="false" :disabled="false" @search="searchStoreMessage"></u-search>
		<Nav></Nav>
		<drop-down></drop-down>
		<shop-list :shopDetail="shopDetail"></shop-list>
		
	</view>
</template>

<script>
	import shopdetailList from "../../../common/shopDatal.js";
	import DropDown from "./components/dropdown.vue";
	import Nav from "./components/nav.vue";
	import shopList from "../../../components/shopList/shopList.vue";

	export default {
		components:{
			DropDown,Nav,shopList
		},
		data(){
			return {
				shopDetail:[]
			}
		},
		methods:{
			searchStoreMessage(e){
				console.log(e+' '+"Enter is Clicked!");	
			}
		},
		created(){
			this.shopDetail = shopdetailList;
		}
		
	}
</script>

<style>
	page{
		background-color: #fff;
	}
</style>

<style lang="scss" scoped>
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: #333333;
	}
</style>
