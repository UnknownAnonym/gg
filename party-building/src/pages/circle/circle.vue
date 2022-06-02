<template>
  <view class="mine-container">
    <view v-for="(item, index) in activeList" :key="index" class="plate">
      <view class="mine-head">
        <image :src="item.userInfo.myHead" mode="" />
        <view class="mine-right">
          <view>{{ item.userInfo.myName }}</view>
          <view class="my-desc">{{ item.userInfo.myDesc }}</view>
        </view>
      </view>
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
      <view class="img-circle">
        <view>
          <image src="@/static/mine/mine03.png" class="party-building" />
          <image src="@/static/circle/memorymarty.png" class="party-building-right" />
        </view>
        <view class="img-circle">
          <image src="@/static/circle/stars.png" class="stars-icon" />
          <image src="@/static/circle/notice.png" class="notice-icon" />
          <text class="comment-count">{{ item.commentCount }}</text>
        </view>
      </view>
      <view class="active-circle">
        <view class="img-circle">
          <image v-for="(item1, index1) in item.browseName" :key="index1" class="brouse-name" :src="item1" />
          <text class="active-month">{{ item.commentCount }}人发表了评论</text>
        </view>
        <image src="@/static/mine/mine02.png" class="img-btn" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      activeList: [
        {
          userInfo: {
            myHead: require('@/static/circle/myhead.png'),
            activeCount: 999,
            scoreCount: 999,
            noticeCount: 999,
            myName: '易烊千玺',
            myDesc: '艺术设计学院 党支部',
            collegeType: '信息技术学院',
            membersType: '预备党员',
          },
          date: 13,
          month: 11,
          commentCount: 999,
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
          userInfo: {
            myHead: require('@/static/circle/myhead.png'),
            activeCount: 999,
            scoreCount: 999,
            noticeCount: 999,
            myName: '易烊千玺',
            myDesc: '艺术设计学院 党支部',
            collegeType: '信息技术学院',
            membersType: '预备党员',
          },
          date: 13,
          month: 11,
          commentCount: 999,
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
.mine-container {
  padding: 12rpx 40rpx;
  background: #e5e5e5;
}
.plate {
  margin-top: 48rpx;
}

.mine-head {
  display: flex;
  flex: 1;
  align-items: center;
  color: #232323;
  font-size: 46rpx;
  font-weight: bold;
  image {
    height: 80rpx;
    width: 80rpx;
    border-radius: 50%;
  }

  .mine-right {
    font-size: 28rpx;
    margin-left: 16rpx;
    .my-desc {
      color: rgba(69, 73, 84, 0.6);
      font-size: 22rpx;
    }
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
  align-items: center;
  justify-content: space-between;
  .brouse-name {
    width: 48rpx;
    height: 48rpx;
    &:not(:first-child) {
      margin-left: -12rpx;
    }
  }
  .img-circle {
    display: flex;
    align-items: center;
    margin-left: 20rpx;
  }
}
.active-date {
  font-weight: bold;
  font-size: 40rpx;
  color: #232323;
}
.active-month,
.comment-count {
  font-size: 20rpx;
  color: #8f9298;
  margin-left: 10rpx;
}
.img-btn {
  width: 40rpx;
  height: 8rpx;
  justify-content: flex-end;
}
.img-circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.party-building,
.party-building-right {
  width: 144rpx;
  height: 40rpx;
  margin: 20rpx 0;
}
.party-building-right {
  margin-left: 20rpx;
}
.stars-icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 10rpx;
}
.notice-icon {
  width: 28rpx;
  height: 28rpx;
}

.text-title {
  margin-bottom: 20rpx;
  margin-top: 40rpx;
}
.photo-party {
  display: flex;
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
