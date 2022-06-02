<template>
	<view>
		<tn-custom bgColor="bg-white" :isBack="true">
			<block slot="content">评论</block>
		</tn-custom>
		
		<!-- 填写店铺评论 -->
		<u-card>
			<!-- 顶部卡片内容 -->
			<view class="" slot="head">
				<view class="top">
					<u-button type="error" shape="circle" size="mini" :ripple="true" ripple-bg-color="#909399" form-type="submit" style="float: right;margin-bottom: 30rpx;" @click="submitContent">发布</u-button>
					<text class="headText">{{targetStore}}</text>
				</view>
				<view class="rateLine">
					<text class="rateTxt">总体</text>
					<u-rate class="rateStyle" :current="4.2" :disabled="true"></u-rate>
				</view>
			</view>
			<!-- 中间卡片内容 -->
			<view class="" slot="body">
				<!-- 留言评论 -->
				<view class="u-body-item" style="height: 400rpx;width: 600rpx;">										
					<textarea class="commentLine" placeholder="亲,菜品的口味如何,环境怎么样,服务还满意吗？" v-model="contentTxt"></textarea>
				</view>
				<!-- 上传图片 -->
				<view class="uploadImg">
					<u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="9" width="190"  v-model="contentImg"></u-upload>
				</view>
			</view>
			<!-- 底部卡片内容 -->
			<view class="" slot="foot">
				<u-icon v-if="!isLike" id="footerContent" name="thumb-up" size="50" :label="num" @click="changeImg"></u-icon>
				<u-icon v-if="isLike" id="footerContentFill" name="thumb-up-fill" size="50" :label="num" @click="changeImg" style="color: #FBBD08;"></u-icon>
			</view>
		</u-card>
		
		<!-- 填写推荐菜 -->
		<u-card title="推荐菜">
			<!-- 中间卡片内容 -->
			<view class="" slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<!-- 标签 -->
					<view class="comment-tabs">
						<block v-for="(item,index) in commentTabsList" :key="index">
							<view class="tab" :class="{'active': isChange.indexOf(index)!=-1}" @click="selectItem(index)">
								<text>{{item}}<text>(45)</text></text>
							</view>
						</block>
					</view>
					
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				price:25,
				title:"云吞面",
				subTitle:"￥8",
				thumb:"https://z3.ax1x.com/2021/09/26/46cJdH.jpg",
				thumbWidth:30,
				
				num:5,
				isLike:false,
				
				title_selling:'在售商户',
				value: 4,
				colors: ['#ffc454', '#ff9500', '#d93a49'],
				icons: ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill'],
				
				commentTabsList:["肉类好","菜品康","回客"],
				
				isChange:[],//多选
				targetStore:'粉面世家',
				
				content:''
			}
		},
		methods:{
			changeImg(){
				this.isLike = !this.isLike;
				if(this.isLike == true){
					this.num++;
				}else{
					this.num--;
				}
				console.log(this.num);
			},
			
			selectItem(index){
				if(this.isChange.indexOf(index)==-1){
					this.isChange.push(index);//选中添加到数组里
					console.log('isChange'+' :'+this.isChange)
				}else{
					// this.isChange.splice(this.isChange[index],1)
					this.isChange.splice(this.isChange.indexOf(index),1)
				}
				
			},
			
			submit() {
				this.$refs.uUpload.upload();
			},
			
			submitContent(){
				console.log(this.contentTxt);
				console.log(this.contentImg);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.headText{
		font-size: 32rpx;
		margin: 0rpx 0rpx 5rpx 18rpx;
	}
	.rateLine{
		margin: 15rpx 0rpx 2rpx 15rpx;
		.rateTxt{
			font-size: 32rpx;
		}
		.rateStyle{
			margin-left: 50rpx;
		}
	}
	.commentLine{
		width: 100%;
		height: 100%;
		font-size: 32rpx;
		margin-left: 15rpx;
		// background-color: #00F5D4;
	}
	
	.comment-tabs{
		width: 100%;
		// background-color: pink;
		.tab{
			display: inline-block;
			padding: 15rpx;
			border-radius: 42rpx;
			margin:10rpx 10rpx 10rpx 0;
			background-color: #f4f4f4;
		}
		// padding: 20rpx 0rpx;		
		.active{
			border: .2rpx solid red;
			color: red;
		}
	}	
</style>
