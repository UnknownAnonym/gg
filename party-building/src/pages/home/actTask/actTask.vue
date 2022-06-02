<template>
  <view class="container">
    <view class="wrap">

      <view class="task-outer" :style="{background:'url('+require('../../../static/actTask/b1.png')+')'}">
            <view class="task-inner">
              <view class="inner-text">
              <view class="text-title">十九届六中全会学习会议</view>
              <view class="text-date">活动日期 12月32日~12月33日</view>
              <button class="task-button">上传汇报</button>
              </view>
              <view class="calendar"><image class="w-100 h-100" src="@/static/actTask/calendar.png"></image></view>
            </view>

      </view>

      <view class="task-outer" :style="{background:'url('+require('../../../static/actTask/b2.png')+')'}">
            <view class="task-inner">
              <view class="inner-text">
              <view class="text-title">十九届六中全会学习会议</view>
              <view class="text-date">活动日期 12月32日~12月33日</view>
              <button class="task-button">上传汇报</button>
              </view>
              <view class="calendar"><image class="w-100 h-100" src="@/static/actTask/calendar.png"></image></view>
            </view>

      </view>

      <view class="task-outer" :style="{background:'url('+require('../../../static/actTask/b3.png')+')'}">
            <view class="task-inner">
              <view class="inner-text">
              <view class="text-title">十九届六中全会学习会议</view>
              <view class="text-date">活动日期 12月32日~12月33日</view>
              <button class="task-button">上传汇报</button>
              </view>
              <view class="calendar"><image class="w-100 h-100" src="@/static/actTask/calendar.png"></image></view>
            </view>

      </view>

      <view class="task-outer" :style="{background:'url('+require('../../../static/actTask/b4.png')+')'}">
            <view class="task-inner">
              <view class="inner-text">
              <view class="text-title">十九届六中全会学习会议</view>
              <view class="text-date">活动日期 12月32日~12月33日</view>
              <button class="task-button">上传汇报</button>
              </view>
              <view class="calendar"><image class="w-100 h-100" src="@/static/actTask/calendar.png"></image></view>
            </view>

      </view>

      <view class="tips">————— &nbsp&nbsp&nbsp  暂无更多 &nbsp&nbsp&nbsp  ————</view>

    </view>
  </view>
</template>

<script>

//import { getBannerApi } from '@/api/home'
export default {
  data() {
    return {
      
    }
  },
  onShow() {
   
  },
  onLoad() {},
  methods: {
    // 获取首页轮播图
    
  },
}

</script>
<style lang="scss" scoped>
.container {
  background: #f3f3f3;
  min-height: 100vh;
  .wrap {
    position: relative;
    padding-top: 30rpx;
    .task-outer{
      width:686rpx ;
      height: 250rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10rpx;
      margin: 10rpx auto;
      .task-inner{
        height: 70%;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text-title{
          color: #f3f3f3;
          font-size: 36rpx;
        }
        .text-date{
          color: #f3f3f3;
          font-size: 20rpx;
          margin-top: 10rpx;
        }
      }
      .calendar{
        height: 192rpx;
        width: 192rpx;
      }
    }
      .tips{
        width: 700rpx;
        height: 30rpx;
        margin-top: 40rpx;
        color: grey;
        text-align: center;
      }

    .task-button{
      width: 180rpx;
      height: 60rpx;
      font-size: 20rpx;
      color: white;
      margin: 20rpx 0rpx;
      background: transparent;
      border:4rpx solid white;
    }
  }

}
</style>
