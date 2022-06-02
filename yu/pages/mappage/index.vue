<template>
	<view class="">
		<map
		id="myMap"
		 :latitude="latitude"
		 :longitude="longitude"
		 :markers="markers"
		 show-location
		 >
		</map>
		<view class="navigation">
			<image src="../../static/position.png" class="img_position" mode="" @click="my_position"></image>
			<text class="name">教室号：{{name}}</text>
			<text class="address">地址：{{address}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'1101',
				address:'1栋教学楼',
				
				//这里的经纬度是自己定位所得到的
				latitude:0,
				longitude:0,
				markers:[
					//这里的经纬度是目标定位所得到的
					{
						id:1,
						width:50,
						height:50,
						iconPath:'../../static/mapposition.png	',
						latitude:0,
						longitude:0,
					}
				],
			}
		},
		//页面初次渲染完成
		onReady() {
			//获取地图实例，绑定到id叫myMap上
			this.mapCtx = wx.createMapContext('myMap');
		},
		onLoad(option) {
			// console.log(typeof option.lat);
			//这里是将上个页面传进来的参数进行转换(因为传进来的参数的类型是string而坐标是要数字，且坐标有小数点)
			this.markers[0].latitude = parseFloat(option.lat);
			this.markers[0].longitude = parseFloat(option.log);
			console.log(option);
			console.log(this.markers[0].longitude);
			//进入地图页面后获取自己的坐标(获取现在自己的坐标)
			uni.getLocation({
			    type: 'gcj02',
			    success: res=> {
					//获取到坐标后保存起来
					this.latitude = res.latitude;
					this.longitude = res.longitude;
					console.log('当前位置的经度：' + this.latitude);
					console.log('当前位置的纬度：' + this.longitude);
					
					//使用地图实例中的方法，让标记和我的位置都在可视区域里显示
					this.mapCtx.includePoints({
						padding:[140,50,140,50],
						points:[
							//第一个是我的位置数据
							{
								latitude:this.latitude,
								longitude:this.longitude
							},
							//第二个是店铺位置数据
							{
								latitude:this.markers[0].latitude,
								longitude:this.markers[0].longitude
							}
						]
					})
			    }
			});	
		},
		methods:{
			//点击跳转回到自己的位置
			my_position(){
				console.log("It's click.");
				this.mapCtx.moveToLocation();
			}
		}
	}
</script>

<style lang="scss" scoped>
	map{
		width: 100%;
		height: calc(106vh - 226rpx);
	}
	.navigation{
		padding: 0;
		margin: 0;
		position: relative;
		background-color: #C8C9CC;
		.img_position{
			position: absolute;
			transform: translateY(-100%);
			top: -30rpx;
			right: 20rpx;
			width:70rpx;
			height: 70rpx;
			bottom: 420rpx;
		}
		.name{
			font-size: 45rpx;
			font-weight: bold;
			position: absolute;
			top: 20rpx;
			left: 25rpx;
		}
		.address{
			font-size: 30rpx;
			position: absolute;
			top: 90rpx;
			left: 25rpx;
		}
	}
</style>
