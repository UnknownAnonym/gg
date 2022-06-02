<template>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="leftBackText">
				<view style="display: flex;justify-content: space-around;width: 150rpx">
					<picker mode="selector" @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<text>{{array[index].name}}</text>
						<!-- <text class="cuIcon-unfold" style="display: flex;align-items: center;"></text> -->
					</picker>					
				</view>
			</block>
			<block slot="backText">
				<u-search placeholder="请输入关键字" :show-action="false" slot="" height="60" margin="0 10rpx" @search="searchMessage"></u-search>	
			
			</block>
		</cu-custom>
		
		
		<!-- <add-tip :tip="tip" :duration="duration"/> -->
</template>

<script>
	// import addTip from "../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue";
	export default {
		components:{
			// addTip
		},
		data(){
			return {
				tip:"点击「添加小程序」，下次访问更便捷",
				duration:1,
				array:[{name:'南海北校区'},{name:'南海南校区'},{name:'广州校区'},{name:'琶洲校区'}],
				index:0
			}
		},
		methods:{
			//切换校区
			bindPickerChange(e){
				this.index=e.detail.value;
			},
			//搜索框搜索内容（当用户按下enter键时提交信息进行筛选）
			searchMessage(e){
				console.log(e+' '+'Enter is click!');
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
