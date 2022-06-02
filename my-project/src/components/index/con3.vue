<!-- <template>
	<view class="body">
		<view class="header">
		<u-grid :col="5">
			
				<u-grid-item>
					<u-icon name="shopping-cart-fill" :size="46"></u-icon>
					<view class="grid-text" @click="btnclick">美团</view>
				</u-grid-item>
				
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<navigator url="../food/new1"><view class="grid-text">锁头</view></navigator>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
			</u-grid>
			<u-grid :col="5">
					<u-grid-item>
						<u-icon name="photo" :size="46"></u-icon>
						<view class="grid-text">图片</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="lock" :size="46"></u-icon>
						<view class="grid-text">锁头</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
				</u-grid>
		</view>
	</view>
</template>

<script>
	import new1 from "./new1.vue"
	
	
	export default{
		data(){
			return{
				
			}
		},
		components:{
		
			new1
		},
		methods:{
			btnclick(){
				console.log("我被click");
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		height: 10%;
		width: 95%;
		background-color: #fefefe;
		margin: 0px auto;
		border-radius: 10px;
	}
	.header{
		padding: 5px;
		
	}
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
</style>
 -->