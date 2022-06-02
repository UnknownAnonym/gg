<template>
	<view>
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="位置" :options="options1"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				value1:1,
				options1:[{
						label:'全部',
						value:1,
					},
					{
						label:'一饭堂',
						value:2,
					},
					{
						label:'二饭堂',
						value:3,
					},
					{
						label:'其他',
						value:4,
					}
				]
			}
		}
	}
</script>

<style>
</style>
