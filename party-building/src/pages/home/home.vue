<template>
  <view class="container">
    <view class="wrap">
      <!-- 轮播图 -->
      <swiper class="swiper" indicator-color="#fff" indicator-active-color="#D20017" indicator-dots circular autoplay :current="current" @change="changeDot">
        <swiper-item v-for="(item, index) in carouselList" :key="index">
          <image class="w-100 h-100" :src="item.image" mode="scaleToFill" />
        </swiper-item>
      </swiper>
      <!-- 导航栏搜索 -->
      <view class="search" :style="'top:' + searchIconHeight + 'px'">
        <image class="index-logo" src="@/static/index/logo.png" mode="" />
        <input v-model="keyword" class="search-text" placeholder="猜你想搜" />
        <image class="search-img" src="@/static/index/search.png" mode="" />
      </view>
      <!-- 轮播图信息 -->
      <view class="activity-title flex-between-center">
        <view class="info-left">
          <view class="info-left-title">{{ carouselList[current].title }}</view>
          <view class="info-left-content">{{ carouselList[current].content }}</view>
        </view>
        <view class="info-right">0{{ current + 1 }}</view>
        <image src="@/static/index/rectangle.png" />
      </view>
    </view>
    <view class="index-list-btn" @tap="handleToList()">
      <view v-for="(item, index) in topList" :key="index" class="index-list-img">
        <image :src="item.ImgUrl" mode="" />
        <text>{{ item.btnText }}</text>
      </view>
    </view>
    <view class="active-plate">
      <view class="active-plate-top">
        <view class="active-plate-top-title">党建活动</view>
        <image src="@/static/index/exchange.png" class="img-activity" />
      </view>
      <view class="active-plate-content">
        <view class="content-left">
          <!-- 摄影活动 -->
          <view class="photography">
            <view class="photography-img"><image class="w-100 h-100" src="@/static/index/photography.png" /></view>
            <view class="flex-between-center photography-info">
              <text class="info-title">党建摄影活动</text>
              <image class="right-img" src="@/static/notice/notice3.png" />
            </view>
          </view>
          <view v-for="(item, index) in activeList" :key="index" class="active-list">
            <view v-if="index % 2 === 0">
              <view><image class="w-100 img-active" :src="item.activeImg" /></view>
              <view class="active-info">
                <view class="category flex-center-center">
                  <image src="@/static/index/location.png" />
                  <text class="category-text">{{ item.college }}党支部举办</text>
                </view>
                <view class="theme flex-start-center">
                  <image src="@/static/index/bell.png" />
                  <text class="theme-text">{{ item.title }}</text>
                </view>
                <view class="date-time">
                  <text class="start-time">开始时间</text>
                  <text class="span-text"></text>
                  <text class="date">{{ item.date }}</text>
                  <text class="span-text"></text>
                  <text class="time">{{ item.time }}</text>
                </view>
                <view class="branch-num">
                  <text>{{ item.partyBranch }}</text>
                  <text class="active-num">{{ item.activeNum }}人已参与</text>
                </view>
                <view class="active-user flex-between-center">
                  <view>
                    <image v-for="(img, imgIndex) in item.userList" :key="imgIndex" class="user-img" :src="img.imgUrl"></image>
                  </view>
                  <view>
                    <button class="join-btn">我要报名</button>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="content-right">
          <view v-for="(item, index1) in activeList" :key="index1" class="active-list">
            <view v-if="index1 % 2 === 1">
              <view><image class="w-100 img-active" :src="item.activeImg" /></view>
              <view class="active-info">
                <view class="category flex-center-center">
                  <image src="@/static/index/location.png" />
                  <text class="category-text">{{ item.college }}党支部举办</text>
                </view>
                <view class="theme flex-start-center">
                  <image src="@/static/index/bell.png" />
                  <text class="theme-text">{{ item.title }}</text>
                </view>
                <view class="date-time">
                  <text class="start-time">开始时间</text>
                  <text class="span-text"></text>
                  <text class="date">{{ item.date }}</text>
                  <text class="span-text"></text>
                  <text class="time">{{ item.time }}</text>
                </view>
                <view class="branch-num">
                  <text>{{ item.partyBranch }}</text>
                  <text class="active-num">{{ item.activeNum }}人已参与</text>
                </view>
                <view class="active-user flex-between-center">
                  <view>
                    <image v-for="(img, imgIndex) in item.userList" :key="imgIndex" class="user-img" :src="img.imgUrl"></image>
                  </view>
                  <view>
                    <button class="join-btn">我要报名</button>
                  </view>
                </view>
              </view>
            </view>
          </view>
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
      current: 0,
      keyword: '',
      carouselList: [],
      title: '',
      searchIconHeight: 0,
      topList: [
        {
          ImgUrl: require('@/static/index/group.png'),
          btnText: '积极支部',
        },
        {
          ImgUrl: require('@/static/index/group2.png'),
          btnText: '活动签到',
        },
        {
          ImgUrl: require('@/static/index/group3.png'),
          btnText: '活动任务',
        },
        {
          ImgUrl: require('@/static/index/group4.png'),
          btnText: '学校新闻',
        },
      ],
      activeList: [
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },  
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
        {
          college: '艺术设计学院',
          title: '预备党员转正大会',
          activeNum: 6,
          date: '10月7日',
          time: '13:00',
          partyBranch: '学生第一党支部',
          activeImg: require('@/static/index/activity.png'),
          userList: [
            {
              imgUrl: require('@/static/index/stu1.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
            {
              imgUrl: require('@/static/index/stu2.png'),
            },
          ],
        },
      ],
    }
  },
  onShow() {
    this.getBanner()
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    this.searchIconHeight = menuButtonInfo.top
  },
  onLoad() {},
  methods: {
    // 获取首页轮播图
    async getBanner() {
      // getBannerApi()赋值给data
      let result = await getBannerApi()
      //console.log('data', result)
      // 打印出来是promise,异步函数,所以用async await/then
      this.carouselList = result.data.data.map(item => {
       // console.log(item)
        return {
          image: item.img_url,
          title: item.title,
          content: item.content,
        }
      })
    },
    handleToList() {},
    // 改变指示点
    changeDot(e) {
      this.current = e.detail.current
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  background: #f3f3f3;
  min-height: 100vh;
  .wrap {
    position: relative;
    .swiper {
      height: 626rpx;
    }
    .search {
      display: flex;
      position: absolute;
      left: 32rpx;

      .index-logo {
        display: block;
        width: 216rpx;
        height: 52rpx;
      }

      .search-text {
        width: 168rpx;
        height: 64rpx;
        margin-left: 28rpx;
        padding-left: 26rpx;
        background: #bababb;
        border-radius: 8rpx 0 0 8rpx;
      }

      .search-img {
        width: 64rpx;
        height: 64rpx;
      }
    }
    .activity-title {
      position: relative;
      height: 124rpx;
      .info-left,
      .info-right {
        z-index: 2;
      }
      .info-left {
        margin-left: 32rpx;
        width: 502rpx;

        .info-left-title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin-bottom: 8rpx;
          font-size: 34rpx;
          font-weight: 500;
          color: #232323;
        }
        .info-left-content {
          color: rgba(35, 35, 35, 0.8);
          font-size: 22rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
      .info-right {
        font-size: 72rpx;
        color: #f3f3f3;
        margin-right: 42rpx;
      }
      image {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
  .index-list-btn {
    display: flex;
    align-items: center;
    height: 280rpx;
    .index-list-img {
      flex: 1;
      text-align: center;
      image {
        width: 104rpx;
        height: 120rpx;
      }

      text {
        display: inline-block;
        font-weight: bold;
      }
    }
  }
  .active-plate {
    .active-plate-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rpx 32rpx 32rpx;
      font-size: 40rpx;
      // font-weight: bold;
      .active-plate-top-title {
        font-weight: 500;
        font-size: 34rpx;
        line-height: 40rpx;
        color: #232323;
      }
      .img-activity {
        width: 48rpx;
        height: 34rpx;
      }
    }
    .active-plate-content {
      display: flex;
      padding: 32rpx;
      flex-wrap: wrap;
      .content-left,
      .content-right {
        flex: 1;
      }
      .content-left {
        margin-right: 32rpx;
        .photography {
          background: #fff;
          border-radius: 8rpx;
          .photography-img {
            height: 208rpx;
          }
          .photography-info {
            height: 80rpx;
            padding: 24rpx;
            .info-title {
              font-weight: 500;
              font-size: 28rpx;
              color: #232323;
            }
            .right-img {
              width: 48rpx;
              height: 48rpx;
            }
          }
        }
      }
      .active-list {
        margin-top: 24rpx;
        .img-active {
          height: 244rpx;
        }
        .active-info {
          background: #fff;
          border-radius: 8rpx;
          padding: 0 16rpx 24rpx;
          .category {
            position: relative;
            width: calc(100% - 28rpx);
            height: 36rpx;
            margin: -25rpx auto 0;
            border-radius: 4rpx;
            z-index: 10;
            background: linear-gradient(180deg, #d20017 0%, #f04b40 100%);
            image {
              width: 24rpx;
              height: 24rpx;
              margin-right: 4rpx;
            }
            .category-text {
              font-weight: 500;
              font-size: 18rpx;
              line-height: 11px;
              color: #ffffff;
            }
          }
          .theme {
            margin-top: 12rpx;
            image {
              width: 36rpx;
              height: 36rpx;
              margin-right: 4rpx;
            }
            .theme-text {
              font-weight: 500;
              font-size: 28rpx;
              color: #232323;
            }
          }
          .date-time {
            margin: 16rpx 0 8rpx;
            font-size: 20rpx;
            color: #484848;
            .span-text {
              display: inline-block;
              width: 1rpx;
              height: 18rpx;
              margin: 0 8rpx;
              background: rgba(87, 86, 86, 0.5);
            }
          }
          .branch-num {
            font-size: 18rpx;
            color: rgba(69, 73, 84, 0.6);
            .active-num {
              margin-left: 12rpx;
            }
          }
          .active-user {
            margin-top: 12rpx;
            .user-img:first-child {
              width: 56rpx;
              height: 56rpx;
            }
            .user-img:not(:first-child) {
              width: 40rpx;
              height: 40rpx;
              margin-left: -12rpx;
            }
            .join-btn {
              width: 120rpx;
              height: 48rpx;
              padding: 0;
              background: linear-gradient(180deg, #d20017 0%, #f3504c 100%);
              border-radius: 4rpx;
              font-weight: 500;
              font-size: 22rpx;
              color: #fff;
            }
          }
        }
      }
      .content-right {
        margin-top: -24rpx;
      }
    }
  }
}
</style>
