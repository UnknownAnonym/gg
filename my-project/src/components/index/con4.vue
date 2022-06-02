<template>
	<view class="body">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" class="t"></u-tabs>
		<view v-if="current==0">
			<new1></new1>
		</view>
		<view v-else-if="current==1">
			<new2></new2>
		</view>
		<view v-else-if="current==2">
			<new3></new3>
		</view>
		<view v-else-if="current==3">
			<new4></new4>
		</view>
		
	</view>
</template>

<script>
	import new1 from "./new1.vue";
	import new2 from "./new2.vue";
	import new4 from "./new4.vue";
	import new3 from "./new3.vue";
	export default {
			data() {
				return {
					list: [{
						name: '学校',
						id:'1'
					}, {
						name: '原创',
						id:'2'
					}, {
						name: '头条',
						count: 5,
						id:'3'
					},
					{
						name: '热帖',
						id:'4'
					}],
					current: 0,
					title: '素胚勾勒出青花，笔锋浓转淡',
					subTitle: '2020-05-15',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				}
			},
			methods: {
				change(index) {
					this.current = index;
					// console.log(this.current);
				}
			},
			components:{
				new1,
				new2,
				new3,
				new4
				
			}
		}
	
</script>

<style>
	.body{
		width: 100%;
		height: 100%;
		background-color: white;
		margin: auto;
		border-radius: 10px;
	}
	.t{
		
	}
	
</style>
