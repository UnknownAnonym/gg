<template>
	<view></view>
</template>

<script>
	export default{
		data(){
			return{
				username2:[],
				password2:[]
			}
		},
		onLoad: (options) => {
			uni.request({
				url:"http://127.0.0.1/20211019/user_info.php",
				data: {
					text: 'uni.request'
				},
				success: (res) => {
					console.log(res.data)
				}
			})
		}
	}
</script>

<style>
</style>
