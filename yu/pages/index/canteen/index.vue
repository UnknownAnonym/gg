<template>
	<view>
		<dropdown></dropdown>
		<canteen-list :cateenDetail="cateenDetail"></canteen-list>
	</view>
</template>

<script>
	import CanteenList from '../../../components/canteenList/canteenList.vue';
	import cateendetailList from '../../../common/canteenData.js';
	import DropDown from "./components/dropdown.vue";
	
	export default{
		components:{
			CanteenList,DropDown
		},
		data(){
			return{
				cateenDetail:[]
			}
		},
		methods:{
			
		},
		created() {
			this.cateenDetail = cateendetailList;
		}
	}
</script>

<style>
</style>
