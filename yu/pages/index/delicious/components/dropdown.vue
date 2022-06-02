<template>
	<view>
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="智能排序" :options="options1" @change="filterItem(value1)"></u-dropdown-item>
			
			<u-dropdown-item v-model="value2" title="美食" :options="options2" @change="filterItem(value2)"></u-dropdown-item>
			
			
			<u-dropdown-item title="筛选">
				<view class="slot-content">
					<view class="u-text-center u-content-color u-m-t-20 u-m-b-20">
						待填充
					</view>
					<u-button type="primary" @click="closeDropdown">确定</u-button>
				</view>
			</u-dropdown-item>
			
		</u-dropdown>
		<u-line class="u-line"></u-line>
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data(){
			return {
				value1: 1,
				value2: 2,
				options1: [
					{
						label: '好评优先',
						value: 1,
					},
					{
						label: '配送最快',
						value: 2,
					},
					{
						label: '起送价最低',
						value: 3,
					},
					{
						label:'配送免费',
						value:4
					},
					{
						label:'限时秒杀',
						value:5
					}
				],
				options2: [
					{
						label: '小吃',
						value: 1,
					},
					{
						label: '麻辣烫',
						value: 2,
					},
					{
						label: '早餐',
						value: 3,
					}
				],
			
			}
		},
		methods:{
			filterItem(value){
				console.log(value)
			}
		}
	}
</script>

<style>
</style>
