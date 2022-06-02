<template>
	<!-- 宫格 导航栏-->
	<view class="cu-list grid solids-bottom col-5 no-border">
			<view 
			class="cu-item" v-for="(item,index) in categories" 
			:key="index" 
			:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
			 @click="goCategorieslist" :data-mid="item.mid"
			 >
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<!-- <view class="cu-tag badge" v-if="item.count!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view> -->
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
</template>

<script>
	export default {
		data (){
			return {
				// 导航栏
				categories: [
					{
						cuIcon: 'camera',
						color: 'red',
						mid: '1',
						name: '美食'
					}, 
					{
						cuIcon: 'calendar',
						color: 'orange',
						mid: '2',
						name: '快递'
					}, 
					{
						cuIcon: 'calendar',
						color: 'yellow',
						mid: '3',
						name: '看病'
					}, 
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '4',
						name: '心理咨询'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '5',
						name: '失物招领'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '6',
						name: '饭堂'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '7',
						name: '宿舍'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '8',
						name: '教学楼'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '9',
						name: '实训楼'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '10',
						name: '行政楼'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '11',
						name: '超市/便利店'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '12',
						name: '体育设施'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						mid: '13',
						name: '校园景点'
					},
				]
			}
		},
		methods:{
			goCategorieslist: function(e) {
				console.log(e.currentTarget.dataset.mid)
				if(e.currentTarget.dataset.mid == 1 ){
					uni.navigateTo({
						url:'/pages/index/delicious/index'
						// url: '../timeline?mid=' + e.currentTarget.dataset.mid
					})
				   }else if(e.currentTarget.dataset.mid == 2){
					   uni.navigateTo({
					   	url:'/pages/index/delivery/index'
					   })
				   }else if(e.currentTarget.dataset.mid == 6){
					   uni.navigateTo({
					   	url:'/pages/index/canteen/index'
					   })
				   }else if(e.currentTarget.dataset.mid == 8){
					   uni.navigateTo({
					   	url:'/pages/index/academic/index'
					   })
				   }else if(e.currentTarget.dataset.mid == 9){
					   uni.navigateTo({
					   	url:'/pages/index/training/index'
					   })
				   }
				// }else if(e.currentTarget.dataset.mid == 3){
				// 	uni.navigateTo({
				// 		// url: '../project/list'
				// 	})
				// }
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
