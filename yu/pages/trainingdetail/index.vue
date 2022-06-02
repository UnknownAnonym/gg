<template>
	<view>
		<tn-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">课室(实训楼)</block>
			<block slot="content"></block>
		</tn-custom>
		<view class="container">
			<!-- 图片展示 -->
			<view class="top_img">
				<u-image :showLoading="true" :src="src" width="100%" height="400rpx"></u-image>
				<view>
					<button type="default" @click="tonext">查看地图</button>
				</view>
			</view>
			<collapse :academicDetail="academicDetail"></collapse>
		</view>
	</view>
</template>

<script>
	import collapse from './components/collapse.vue';
	import academicdetailList from '../../common/academicData.js';
	
	export default{
		components:{
			collapse
		},
		data(){
			return{
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				academicDetail:[],
				
				//地图key
				key:'DMOBZ-7XBLU-EFMVZ-2E4KV-GZDFZ-LNB4N',
				//任务的地址
				city:'广东省佛山市南海区狮山镇信息大道中18号',
				lat:0,
				lng:0,
			}
		},
		onLoad() {
			//页面渲染后给地址解析成坐标
			uni.request({
				url:'https://apis.map.qq.com/ws/geocoder/v1/?address='+this.city+'&key='+this.key,
				success:res=>{
					this.lat = res.data.result.location.lat;
					this.log = res.data.result.location.lng;
					console.log(this.lat);
					console.log(this.log);
					console.log(res);
				}
			})
		},
		methods:{
			tonext(){
				uni.navigateTo({
					//点击按钮跳转，携带坐标参数(将定义好的lat和log传入页面中)
					url:'/pages/mappage/index?lat=' + this.lat + '&log=' + this.log,
				})
			}
		},
		created() {
			this.academicDetail = academicdetailList;
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin: 0;
		padding: 0;
		.top_img{
			margin: 25rpx;
		}		
	}
</style>

