<template>
	<view class="">
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="位置" :options="options1"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="栋数" :options="options2"></u-dropdown-item>
			<u-dropdown-item v-model="value3" title="楼层" :options="options3"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				value1:1,
				options1:[
					{
						label:'全部',
						value:1
					},
					{
						label:'第三实训楼',
						value:2
					},
					{
						label:'第四实训楼',
						value:3
					}
				],
				
				value2:2,
				options2:[
					{
						label:'全部',
						value:1
					},
					{
						label:'A栋',
						value:2
					},
					{
						label:'B栋',
						value:3
					},
					{
						label:'C栋',
						value:4
					},
					{
						label:'D栋',
						value:5
					}
				],
				
				value3:3,
				options3:[
					{
						label:'全部',
						value:1
					},
					{
						label:'1层',
						value:2
					},
					{
						label:'2层',
						value:3
					},
					{
						label:'3层',
						value:4
					},
					{
						label:'4层',
						value:5
					},
					{
						label:'5层',
						value:6
					}
				]
			}
		}
	}
</script>

<style>
</style>
