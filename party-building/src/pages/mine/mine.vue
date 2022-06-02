<template>
  <view>
    <view class="mine-container">
      <view class="mine-head">
        <image :src="userInfo.myHead" mode="" />
        <view class="">
          <view class="mine-content">
            <view class="mine-active">
              <view>{{ userInfo.activeCount }}</view>
              <view>我的活动</view>
            </view>
            <view class="mine-score">
              <view>{{ userInfo.scoreCount }}</view>
              <view>我的积分</view>
            </view>
            <view class="mine-notice">
              <view>{{ userInfo.noticeCount }}</view>
              <view>我的通知</view>
            </view>
          </view>
          <view class="mine-active-btn">
            <text>预备党员如何转正</text>
            <image src="@/static/mine/mine01.png" mode="" />
          </view>
        </view>
      </view>
      <view class="mine-name">
        <text>{{ userInfo.myName }}</text>
        <view class="mine-college">
          {{ userInfo.collegeType }}
        </view>
        <view class="mine-members">
          {{ userInfo.membersType }}
        </view>
      </view>
      <view v-for="(item, index) in activeList" :key="index">
        <view class="active-circle">
          <view>
            <text class="active-date">{{ item.date }}</text>
            <text class="active-month">{{ item.month }}月</text>
            <image v-for="(item1, index1) in item.browseName" :key="index1" class="brouse-name" :src="item1" />
          </view>
          <image src="@/static/mine/mine02.png" class="img-btn" />
        </view>
        <image src="@/static/mine/mine03.png" class="party-building" />
        <view class="text-title">{{ item.textTitle }}</view>
        <view v-if="item.partyPhoto.length <= 1">
          <image class="w-100" :src="item.partyPhoto[0]" mode="aspectFill" />
        </view>
        <view v-else-if="item.partyPhoto.length === 2" class="photo-two">
          <image class="photo-two-img" :src="item.partyPhoto[0]" mode="aspectFit" />
          <image class="photo-two-img" :src="item.partyPhoto[1]" mode="aspectFill" />
        </view>
        <view v-else class="photo-three-img">
          <view><image class="photo-three-left" :src="item.partyPhoto[0]" mode="aspectFill" /></view>
          <view>
            <image class="photo-three-right" :src="item.partyPhoto[1]" mode="aspectFit" />
            <view class="relative">
              <view v-if="item.partyPhoto.length > 3" class="more-img-tips">{{ item.partyPhoto.length - 2 }}+</view>
              <image class="photo-three-right" :src="item.partyPhoto[2]" mode="aspectFill" />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        myHead: require('@/static/mine/head_portrait.png'),
        activeCount: 999,
        scoreCount: 999,
        noticeCount: 999,
        myName: '易烊千玺',
        collegeType: '信息技术学院',
        membersType: '预备党员',
      },
      activeList: [
        {
          date: 13,
          month: 11,
          browseName: [require('@/static/mine/head01.png'), require('@/static/mine/head02.png'), require('@/static/mine/head03.png')],
          textTitle: '今天与轻化工学院党支部一起去了烈士园缅怀..',
          partyPhoto: [
            require('@/static/mine/mine04.png'),
            require('@/static/mine/mine05.png'),
            require('@/static/mine/mine05.png'),
            require('@/static/mine/mine05.png'),
          ],
        },
        {
          date: 13,
          month: 11,
          browseName: [require('@/static/mine/head01.png'), require('@/static/mine/head02.png'), require('@/static/mine/head03.png')],
          textTitle: '今天与轻化工学院党支部一起去了烈士园缅怀..',
          partyPhoto: [
            require('@/static/mine/mine04.png'),
            require('@/static/mine/mine05.png'),
            require('@/static/mine/mine05.png'),
            require('@/static/mine/mine05.png'),
          ],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
	@font-face{
	   	font-weight: 'itemfont'; // 给字体起个名字
	   	src:url('~@/static/font/HarmonyOS_Sans_SC_Regular.ttf');
	   }
.mine-container {
  margin: 12rpx 40rpx;
}

.mine-head {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  color: #232323;
  font-size: 46rpx;

  // font-family: "微软雅黑";
  image {
    height: 180rpx;
    width: 180rpx;
    border-radius: 50%;
  }
}

.mine-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mine-active,
.mine-score,
.mine-notice {
  text-align: center;
}

.mine-active view:nth-child(2),
.mine-score view:nth-child(2),
.mine-notice view:nth-child(2) {
  color: #8f9298;
  font-size: 26rpx;
}

.mine-active-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 406rpx;
  height: 48rpx;
  color: #fff;
  font-size: 26rpx;
  margin-top: 10rpx;
  background: linear-gradient(180deg, #d20017 0%, #f3504c 100%);
  border-radius: 4rpx;
}
.mine-active-btn image {
  margin-left: 16rpx;
  width: 40rpx;
  height: 40rpx;
}
.mine-name {
  display: flex;
  align-items: center;
  font-size: 34rpx;
  margin-top: 20rpx;
  font-weight: 500;
}
.mine-college {
  height: 40rpx;
  line-height: 40rpx;
  background: linear-gradient(180deg, #d20017 0%, #f3504c 100%);
  border-radius: 4px;
  font-size: 22rpx;
  color: #ffffff;
  padding: 0 10rpx;
  margin-left: 20rpx;
}
.mine-members {
  height: 40rpx;
  line-height: 40rpx;
  background: linear-gradient(180deg, #d20017 0%, #f3504c 100%);
  border-radius: 4px;
  font-size: 22rpx;
  color: #ffffff;
  padding: 0 10rpx;
  margin-left: 20rpx;
}
.active-circle {
  display: flex;
  margin-top: 44rpx;
  align-items: center;
  justify-content: space-between;
  .brouse-name {
    width: 48rpx;
    height: 48rpx;
    &:not(:first-child) {
      margin-left: -12rpx;
    }
  }
}
.active-date {
  font-weight: bold;
  font-size: 40rpx;
  color: #232323;
}
.active-month {
  font-size: 20rpx;
  color: #8f9298;
  margin-right: 20rpx;
}
.img-btn {
  width: 40rpx;
  height: 8rpx;
  justify-content: flex-end;
}
.party-building {
  width: 144rpx;
  height: 40rpx;
  margin: 20rpx 0;
}
.text-title {
  margin-bottom: 20rpx;
}
.photo-party {
  display: flex;
  margin-top: 44rpx;
}
.party-left {
  width: 372rpx;
  height: 388rpx;
}
.party-right {
  width: 284rpx;
  height: 190rpx;
}
.photo-two {
  display: flex;
  flex: 1;
  .photo-two-img {
    height: 348rpx;
  }
}
.photo-three-img {
  display: flex;
  flex: 1;
  .photo-three-left {
    height: 388rpx;
    width: 376rpx;
  }
  .photo-three-right {
    width: 284rpx;
    height: 190rpx;
  }
  .more-img-tips {
    position: absolute;
    top: 13%;
    right: 23%;
    color: #ffffff;
    font-size: 112rpx;
  }
}
</style>
