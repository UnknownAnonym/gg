<template>
	<view>
		<drop-down></drop-down>
		<academic-list :academicDetail="academicDetail"></academic-list>
	</view>
</template>

<script>
	import AcademicList from '../../../components/academicList/academicList.vue';
	import academicdetailList from '../../../common/academicData.js';
	import DropDown from './components/dropdown.vue';
	
	export default{
		components:{
			AcademicList,DropDown
		},
		data(){
			return{
				academicDetail:[]
			}
		},
		methods:{
			
		},
		created() {
			this.academicDetail = academicdetailList;
		}
	}
</script>

<style>
</style>
