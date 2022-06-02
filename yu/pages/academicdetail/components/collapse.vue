<template>
		<!-- 选择场景 -->
		<view class="u-page__item">
			<block v-for="detail in academicDetail" :key="detail.academic_id">
				<!-- <text class="u-page__item__title">{{detail.academic_id}}</text> -->
			</block>
		        <u-collapse accordion="true">
		            <u-collapse-item title="简介">
						<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
		            </u-collapse-item>
		            <u-collapse-item title="其他">
		                <res-academic></res-academic>
		            </u-collapse-item>
		        </u-collapse>
		</view>
</template>

<script>
	import resAcademic from './resacademic.vue';
	import Academic from '../../../components/academicList/academicList.vue';
	
	export default{
		components:{
			resAcademic,Academic
		},
		props:{
			academicDetail:Array
		},
		data(){
			return{
				value:2
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.u-page__item{
		margin: 50rpx;
	}
</style>
