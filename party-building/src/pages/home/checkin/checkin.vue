<template>
    <view class="container">
        <view class="wrap">
            
            <selecthead :title="title" @changepage="changepage()"></selecthead>
            <view class="act-time">2022年3月8日  &nbsp&nbsp女神节</view>
            <view class="map-box"><image class="h-100 w-100" src="@/static/checkin/map.png"/></view>
            

        </view>

        <view  v-if="tab == 0" >

      <view class="check-info">
          <view class="info-min"><view class="min-inner">{{checkinfo.location}}<view class="map-pin"><image class="w-100 h-100" src="@/static/checkin/map-pin.png"/></view></view></view>
          
          
          <view class="info-min"><view class="min-inner">
            <view>
            <view class="inner-l">
            <view class="check-type">*</view>
            {{checkinfo.type}}
            </view>
            <view class="type-choose">请选择</view>
            </view>
            <view class="map-pin">
              <image class="w-100 h-100" src="@/static/checkin/arrow-r.png"/></view>
            </view></view>



            <view class="info-min">
            <view class="min-inner">{{checkinfo.content}}<view class="map-pin"><image class="w-100 h-100" src="@/static/checkin/folder.png"/></view>
            </view></view>

            <view class="info-max"><view class="min-inner">
            <view>
            <view class="inner-l">
            {{checkinfo.tips}}
            </view>
            <textarea class="type-input" placeholder="请输入"></textarea>
            </view>
            
            
            </view>
            
            </view>

      </view>



      <view class="check">

        <image class="h-100 w-100"  src="@/static/checkin/check.png"/>
        
        
        </view>
      <view class="text-b">签到有效时间:06:00~23:59</view>
    </view>





    <view v-else >
      <view class="detail-info">
        <view class="info-data">
          <view class="data-text-check"><view class="hasCheck">{{checkinfo.hasCheck}}</view><view>人已签到</view></view>
          <view class="data-text"><view class="noCheck">{{checkinfo.noCheck}}</view><view>人未签</view></view>
        </view>


        <view class="remind">
        <image class="h-100 w-100"  src="@/static/checkin/remind.png"/>
        
        
        </view>
      <view class="remind-b">快点签到哦 不要让老师同学久等</view>
    </view>
      


    </view>

    </view>
</template>

<script>
import selecthead from '@/components/selecthead/selecthead.vue'
export default {
  components: {
    selecthead,
  },
  data() {
    return {
      tab: 0,
      title: ['签到', '统计'],
      checkinfo:{
        location:"第二实训楼(新港校区)",
        type:"签到类型",
        content:"签到图片",
        tips:"备注",
        hasCheck:"0",
        noCheck:"99"
      }
   
   
    }
  },
  methods: {
    changepage(Inv) {
      this.tab = Inv
    },
  },
}
</script>
<style lang="scss" scoped>
    .container{
    background: #f3f3f3;
    min-height: 100vh;
    .wrap{
        width: 686rpx;
        margin: 0 auto;
        background-color: #ffffff;

    .act-time{
        height: 50rpx;
        margin-top: 30rpx;
        font-size: 20rpx;
        text-align: center;
        letter-spacing: 3rpx;
        color: gray;
    }
    .map-box{
      width:686rpx;
      height: 416rpx;
    }
    

    }
    .check-info{
      width:686rpx;
      height: 476rpx;
      margin: 10rpx auto;
      background-color: #ffffff;
      .info-min{
        height: 110rpx;
        width: 686rpx;
        .min-inner{
          height: 110rpx;
          width: 620rpx;
          margin: 0 auto;
          display: flex;
          font-weight: 600;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2rpx solid gainsboro;
          .map-pin{
            width: 50rpx;
            height: 50rpx;
          }
          .inner-l{
            display: flex;
            .check-type{
            color: red;
          }
            
          }
          .type-choose{
              font-size: 20rpx;
              width: auto;
              height: auto;
              margin-left: 16rpx;
              margin-top: 10rpx;
              color: grey;
            }
        }
      }
      .info-max{
         height: 146rpx;
          width: 620rpx;
          margin: 0 auto;
          display: flex;
          font-weight: 600;
          justify-content: space-between;
          align-items: center;
          .type-input{
              font-size: 20rpx;
              width: 530rpx;
              height: 50rpx;
              color: grey;
              margin-top: 10rpx;
            }
      }
      
    }

      .check{
        height: 176rpx;
        width: 176rpx;
        margin: 30rpx auto;
      }
      .text-b{
        width: 360rpx;
        height: auto;
        color: gray;
        margin: 0 auto;
      }
      
      .detail-info{
      width:686rpx;
      height: 854rpx;
      margin: 10rpx auto;
      background-color: #ffffff;
      .info-data{
        display: flex;
        justify-content: space-between;
        .data-text-check{
          flex: 6;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30rpx;
          text-align: center;
          color: firebrick;
          .hasCheck{
            font-size: 60rpx;
          }
        }
        .data-text{
          flex: 6;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30rpx;
          text-align: center;
          color: gray;
          .noCheck{
            font-size: 60rpx;
          }
        }
      }
      .remind{
        height: 252rpx;
        width: 204rpx;
        margin: 30rpx auto;
        margin-top: 140rpx;
        
      }
      .remind-b{
          width: 440rpx;
        height: auto;
        color: gray;
        margin: 0 auto;
        }
      }
    }
</style>