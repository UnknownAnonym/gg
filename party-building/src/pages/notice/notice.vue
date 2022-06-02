<template>
  <view>
    <!-- 选项卡头部组件 -->
    <selecthead :title="title" @changepage="changepage()"></selecthead>
    <view v-if="tab == 0" class="active-container">
      <!-- 活动通知板块 -->
      <view class="active-notice">
        <view class="active-btn">
          <image src="@/static/notice/notice.png" mode="" />
          <image src="@/static/notice/notice3.png" mode="" />
        </view>
        <view class="active-notice-head">
          <view class="active-notice-title">
            活动通知助手
            <image src="@/static/notice/notice2.png" mode="" />
          </view>
          <view class="active-notice-content">您报名的《{{ activeCont }}》开始了</view>
        </view>
      </view>
      <!-- 参与活动板块 -->
      <view class="active-participate">
        我参与的活动
      </view>
      <view class="active-notice">
        <view class="active-img">
          <image src="@/static/notice/notice4.png" mode="" />
          <image src="@/static/notice/notice3.png" mode="" />
        </view>
        <view class="active-notice-head">
          <view class="active-notice-title">
            正在进行的活动
          </view>
          <view class="active-notice-content">您报名的《{{ activeConting }}》正在进行</view>
        </view>
      </view>
      <!-- 结束活动板块 -->
      <view class="active-end">
        已结束的活动
      </view>
      <view v-for="(item, index) in activeList" :key="index" class="active-end-item">
        <view class="active-endimg">
          <image :src="item.image" mode="" />
        </view>
        <view class="active-end-cont">
          <view class="active-end-desc">
            <view class="active-end-title">
              {{ item.activeName }}
            </view>
            <view class="active-end-time">
              <text>开始时间</text>
              <text>|{{ item.activeTime }}</text>
            </view>
          </view>
          <view class="active-end-edit" @click="handleEdit()">
            <image src="@/static/notice/notice5.png" mode="" />
          </view>
        </view>
      </view>
    </view>
    <view v-else class="campuscontainer">
      <view class="inv-h-w">
        <block v-for="(item, index) in campus" :key="index">
          <view :class="['inv-h', campusindex == index ? 'inv-h-se' : '']" @click="changecampus(index)">
            {{ item }}
          </view>
        </block>
      </view>
      <view class="campus-active">
        {{ campus[campusindex] }}党支部
        <image src="@/static/notice/notice14.png" mode="" />
      </view>
      <view v-for="(item, index) in campusArray" :key="index" class="campus-item">
        <view class="campus-item-left">
          <image :src="item.image" mode="" />
          <text>{{ item.text }}</text>
        </view>
        <view class="campus-item-right">
          <view v-if="item.status === 1" class="activestyle active-branch">
            积极支部
          </view>
          <view class="activestyle active-count">{{ item.branchCount }}个支部</view>
        </view>
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
  components: {
    selecthead,
  },
  data() {
    return {
      tab: 0,
      campusindex: 0,
      title: ['活动信息', '党支部'],
      activeCont: '党建活动',
      activeConting: '推文活动',
      activeList: [
        {
          id: 0,
          image: require('@/static/notice/notice13.png'),
          activeName: '读书活动',
          activeTime: '11月22日',
        },
        {
          id: 1,
          image: require('@/static/notice/notice13.png'),
          activeName: '读书活动',
          activeTime: '11月22日',
        },
      ],
      campus: ['南海北区', '南海南区', '新港校区', '琶州校区'],
      campusArray: [
        {
          identification: 0,
          image: require('@/static/notice/notice6.png'),
          text: '轻化工学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 1,
          image: require('@/static/notice/notice7.png'),
          text: '汽车学院党支部',
          status: 0,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 2,
          image: require('@/static/notice/notice8.png'),
          text: '食品学院党支部',
          status: 0,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 3,
          image: require('@/static/notice/notice9.png'),
          text: '机电学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 4,
          image: require('@/static/notice/notice10.png'),
          text: '信息学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 4,
        },
        {
          identification: 5,
          image: require('@/static/notice/notice11.png'),
          text: '生态学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 6,
          image: require('@/static/notice/notice11.png'),
          text: '轻化工学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 2,
        },
        {
          identification: 7,
          image: require('@/static/notice/notice8.png'),
          text: '轻化工学院党支部',
          status: 1,
          branchType: '积极支部',
          branchCount: 3,
        },
      ],
    }
  },
  methods: {
    changepage(Inv) {
      console.log(Inv)
      this.tab = Inv
    },
    handleEdit() {},
    changecampus(index) {
      this.campusindex = index
      console.log(this.campusindex)
    },
  },
}
</script>

<style lang="scss" scoped>
.active-container {
  margin: 40rpx;
}

.active-notice {
  display: flex;
  align-items: center;
  margin: 40rpx 0;
}

.active-btn {
  display: flex;
  align-items: center;
}

image:nth-child(1) {
  height: 88rpx;
  width: 88rpx;
}

image:nth-child(2) {
  height: 48rpx;
  width: 48rpx;
  position: absolute;
  right: 40rpx;
}

.active-notice-head {
  margin-left: 20rpx;
}

.active-notice-title {
  display: flex;
  align-items: center;
  color: #232323;
  font-size: 32rpx;
  margin-bottom: 8rpx;
}

.active-notice-title image {
  width: 56rpx;
  height: 24rpx;
  margin-left: 20rpx;
}

.active-notice-content {
  color: #484848;
  font-size: 22rpx;
}

.active-participate,
.active-end {
  font-size: 38rpx;
  margin: 40rpx 0px;
  color: #232323;
}

.active-end-item {
  border-radius: 8rpx;
  margin-bottom: 20rpx;
}

.active-endimg image {
  height: 246rpx;
  width: 662rpx;
}

.active-end-cont {
  height: 110rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
}

.active-end-title {
  font-size: 32rpx;
  color: #232323;
  margin-bottom: 10rpx;
}

.active-end-time {
  color: #484848;
  font-size: 22rpx;
}

.active-end-edit image {
  display: flex;
  width: 120rpx;
  height: 48rpx;
}

.campuscontainer {
  margin: 20rpx 44rpx 60rpx;
}

.inv-h-w {
  background-color: #dfdfdf;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inv-h {
  font-size: 30rpx;
  flex: 1;
  /*等比例缩小*/
  text-align: center;
  color: #484848;
  height: 70rpx;
  line-height: 100rpx;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inv-h-se {
  /* font-size: 40rpx; */
  /* font-family: PingFang SC; */
  font-weight: bold;
  color: #ffffff;
  background-color: #d20017;
}

.campus-active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50rpx;
  font-size: 40rpx;
  font-weight: bold;

  image {
    width: 36rpx;
    height: 18rpx;
  }
}

.campus-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46rpx;
  text {
    margin-left: 36rpx;
    color: #232323;
  }
}
.campus-item-left {
  display: flex;
  align-items: center;
  // justify-content: space-between;
}
.campus-item-right {
  display: flex;
  align-items: center;
  // justify-content: space-between;
}
.activestyle {
  width: 104rpx;
  height: 40rpx;
  line-height: 40rpx;
  font-size: 24rpx;
  border-radius: 8rpx;
  align-items: center;
  text-align: center;
  background-color: #dfdfdf;
  color: #484848;
}
.active-branch {
  margin-right: 14rpx;
}
</style>
