<template>
	<view>
		<image class="aa" :src="src1" @click="handleClick"></image>
		<slot></slot>
	</view>
		
	
</template>

<script>
	export default{
		props:{
			src1:String
		},
		methods:{
			handleClick(){
				//子传父 传递数据 通过触发事件
				//this.$emit（“自定义事件名称”，“要传递的参数”）
				this.$emit("srcChange",this.src1);
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.aa{
		
		border-radius: 50%;
	}
</style>
