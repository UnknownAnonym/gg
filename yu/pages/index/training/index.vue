<template>
	<view class="">
		<dropdown></dropdown>
		<trainingList :trainingDetail="trainingDetail"></trainingList>
	</view>
</template>

<script>
	import trainingList from '../../../components/trainingList/trainingList.vue';
	import trainingdetailList from '../../../common/trainingData.js';
	import dropdown from './components/dropdown.vue';
	
	export default{
		components:{
			trainingList,dropdown
		},
		data(){
			return{
				trainingDetail:[]
			}
		},
		methods:{
			
		},
		created() {
			this.trainingDetail = trainingdetailList;
		}
	}
</script>

<style>
</style>
