<template>
  <view class="container">
    <view class="wrap">
      <view class="top">
        <image class="w-100 h-100" src="@/static/activeDepart/top.png"/>
      </view>
      <view class="selection-process">
          <view class="process-text">
            积极支部评选流程
          </view>
          <view class="process-chart">
            <view class="process-part">
              <view class="part-img">
                <image class="w-100 h-100" src="@/static/activeDepart/certification.png"/>
              </view>
              <view class="part-text-t">活动认证</view>
              <view class="part-text-b">认证为有效活动</view>
            </view>
              <view class="process-arr"><view class="arr-inner"><image class="w-100 h-100" src="@/static/activeDepart/arr.png"/></view></view>
            <view class="process-part">
              <view class="part-img">
                <image class="w-100 h-100" src="@/static/activeDepart/discuss.png"/>
              </view>
              <view class="part-text-t">活动认证</view>
              <view class="part-text-b">活动讨论人数排名</view>
            </view>
              <view class="process-arr"><view class="arr-inner"><image class="w-100 h-100" src="@/static/activeDepart/arr.png"/></view></view>
            <view class="process-part">
              <view class="part-img">
                <image class="w-100 h-100" src="@/static/activeDepart/prevailing.png"/>
              </view>
              <view class="part-text-t">活动热度</view>
              <view class="part-text-b">活动热度影响排名</view>
            </view>
          </view>
      </view>

      <view class="countdown-outer">
          <view class="countdown-inner">
              <view class="countdown-text">
                距离评选时间结束
              </view>
              <view class="countdown-time">
                <view class="seperating">
                      <image class="w-100 h-100" src="@/static/activeDepart/seperating.png"/>        
                </view>
                <view class="time">
                    07
                </view>
                <view class="text">
                  天
                </view>
                <view class="time">
                    07
                </view>
                <view class="text">
                  时
                </view>
                <view class="time">
                    07
                </view>
                <view class="text">
                  分
                </view>
              </view>
          </view>
      </view>

      <view class="selection-b">
          <view class="selection-text">
            积极支部评选
          </view>
          <view class="rank-box rank-box1" :style="{background:'url('+require('../../../static/activeDepart/frame1.png')+')',backgroundSize:'100% 100%'}">
            
          <view class="rank-outer"><view class="rank"><image class="h-100 w-100" src="@/static/activeDepart/rank1.png"/></view></view>
          <view class="rank-text"><view class="text-t">轻化工学院教师第一党支部</view><view class="text-b">支部评选第一&nbsp&nbsp 影响力999</view></view>
          <view class="rank-outer"><view class="medal"><image class="h-100 w-100" src="@/static/activeDepart/medal1.png"/></view></view>
          </view>

          <view class="rank-box" :style="{background:'url('+require('../../../static/activeDepart/frame2.png')+')',backgroundSize:'100% 100%'}">
            
          <view class="rank-outer"><view class="rank"><image class="h-100 w-100" src="@/static/activeDepart/rank2.png"/></view></view>
          <view class="rank-text"><view class="text-t">艺术设计学院学生第一党支部</view><view class="text-b">支部评选第二&nbsp&nbsp 影响力712</view></view>
          <view class="rank-outer"><view class="medal"><image class="h-100 w-100" src="@/static/activeDepart/medal2.png"/></view></view>

          </view>

          <view class="rank-box" :style="{background:'url('+require('../../../static/activeDepart/frame3.png')+')',backgroundSize:'100% 100%'}">
            
          <view class="rank-outer"><view class="rank"><image class="h-100 w-100" src="@/static/activeDepart/rank3.png"/></view></view>
          <view class="rank-text"><view class="text-t">外语学院学生第一党支部</view><view class="text-b">支部评选第三&nbsp&nbsp 影响力524</view></view>
          <view class="rank-outer"><view class="medal"><image class="h-100 w-100" src="@/static/activeDepart/medal3.png"/></view></view>

          </view>

          <view class="rank-box" :style="{background:'url('+require('../../../static/activeDepart/frame4.png')+')',backgroundSize:'100% 100%'}">
            
          <view class="rank-outer"><view class="rank"><image class="h-100 w-100" src="@/static/activeDepart/rank4.png"/></view></view>
          <view class="rank-text"><view class="text-t">信息技术学院学生第一党支部</view><view class="text-b">支部评选第四&nbsp&nbsp 影响力470</view></view>
          <view class="rank-outer"></view>

          </view>


          <view class="rank-box" :style="{background:'url('+require('../../../static/activeDepart/frame4.png')+')',backgroundSize:'100% 100%'}">
            
          <view class="rank-outer"><view class="rank"><image class="h-100 w-100" src="@/static/activeDepart/rank5.png"/></view></view>
          <view class="rank-text"><view class="text-t">管理学院学生第一党支部</view><view class="text-b">支部评选第五&nbsp&nbsp 影响力398</view></view>
          <view class="rank-outer"></view>

          </view>





          
      </view>
    </view>
    
    
  </view>
</template>
<script>
import { getBannerApi } from '@/api/home'
export default {
  data() {
    return {
    }
  },
  onShow() {

  },
  onLoad() {},
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>
.container {
  background: #f3f3f3;
  min-height: 100vh;
  .wrap {
    .top{
      height: 208rpx;
    }
    .selection-process{
      width: 718rpx;
      height: 344rpx;
      overflow: hidden;
      margin: 16rpx;
      background-color:white;

        .process-text {
        font-weight: 600;
        font-size: 34rpx;
        letter-spacing: 2rpx;
        margin-top: 50rpx;
        margin: 20rpx 215rpx;
        
      }
      .process-chart{
        display: flex;
      }
      .process-part{
        text-align: center;
        width: 170rpx;
        height: 200rpx;
        margin-top: 30rpx;
      }
      .part-img{
        width: 104rpx;
        height: 104rpx;
        margin: 0 auto;
      }
      .part-text-t{
        font-weight:600;
        margin-top: 10rpx;
      }
      .part-text-b{
        font-size: 20rpx;
        margin-top: 5rpx;
      }
      .process-arr{
        width: 90rpx;
        height: 50rpx;
        margin-top: 70rpx;
      }
      .arr-inner{
        width: 70%;
        height: 65%;
        margin: 0 auto;
      }
    }
    .countdown-outer{
        width: 718rpx;
        height: 124rpx;
        margin: 16rpx;
        overflow: hidden;
        background-color: white;
      }
    .countdown-inner{
        width: 580rpx;
        height: 90rpx;
        margin: 0 auto;
        margin-top: 20rpx;
        display: flex;
      }
    .countdown-text{
        line-height: 40rpx;
        letter-spacing: 4rpx;
        width: 150rpx;
        color:gray;

    }
    .countdown-time{
        display: flex;
        width: 430rpx;
      .seperating{
      width: 12rpx;
      height: 40rpx;
      margin-top: 20rpx;
      
    }
      .time{
        text-align: center;
        height: 70rpx;
        line-height: 70rpx;
        width: 90rpx;
        margin: 0 20rpx;
        color: aliceblue;
        font-size: 40rpx;
        font-weight: 600;
        background-color: rgb(233, 53, 53);
        border-radius: 10%;
        box-shadow: 0 8rpx 3rpx rgb(204, 35, 35);
      }
      .text{
       height: 70rpx;
       line-height: 70rpx;
      }
      
    }
    .selection-b{
      height: 900rpx;
      width: 718rpx;
      overflow: hidden;
      background-color: white;
      margin: 16rpx;
      .selection-text {
        font-weight: 600;
        font-size: 34rpx;
        letter-spacing: 2rpx;
        margin: 40rpx 250rpx;
        
      }
     .rank-box{
        height: 142rpx;
        width: 622rpx;
        margin: 15rpx auto;
        display: flex;
        .rank-outer{
       flex: 3;
       display: flex;
       align-items: center;
       justify-content: center;
       .rank{
       height: 70rpx;
       width: 64rpx;  
       }
      }
      .rank-text{
        flex: 8;
        margin-top: 36rpx;
      }
      .medal{
        height: 100rpx;
       width: 90rpx;  
      }
      .text-t{
        font-weight: 600;
        font-size: 24rpx;
        letter-spacing: 1rpx;
      }
      .text-b{
        margin-top: 4rpx;
        font-size: 18rpx;
        color: #7c7c7c;
      }
     }
     
    }

    
   

      }
      
    
  
}
</style>
