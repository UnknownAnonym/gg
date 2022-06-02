<template>
  <view>
    <view class="inv-h-w">
      <block v-for="(item, index) in title" :key="index">
        <view :class="['inv-h', Inv == index ? 'inv-h-se' : '']" @click="changetab(index)">{{ item }}</view>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: () => ['', ''],
    },
  },
  data() {
    return {
      Inv: 0,
    }
  },
  methods: {
    changetab(Inv) {
      this.Inv = Inv
      this.$emit('changepage', this.Inv)
    },
  },
}
</script>

<style>
.inv-h-w {
  background-color: #ffffff;
  height: 80rpx;
  display: flex;
}

.inv-h {
  font-size: 32rpx;
  flex: 1;
  /*等比例缩小*/
  text-align: center;
  color: #484848;
  height: 100rpx;
  line-height: 100rpx;
  position: relative;
}

.inv-h-se {
  /* font-size: 40rpx; */
  /* font-family: PingFang SC; */
  font-weight: bold;
  color: #d20017;
}

.inv-h-se:after {
  content: '';
  position: absolute;
  bottom: 15rpx;
  top: auto;
  left: 36%;
  height: 4rpx;
  width: 108rpx;
  background-color: #d20017;
}

page {
  background-color: #f2f2f2;
}
</style>
