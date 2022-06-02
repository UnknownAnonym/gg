<template>
	<view class="wrap">
		<u-swiper :list="list"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://ilightlife.info/imgs/il/lun1.jpg',
						title: '1'
					},
					{
						image: 'https://ilightlife.info/imgs/il/lun2.jpg',
						title: '2'
					},
					{
						image: 'https://ilightlife.info/imgs/il/lun3.jpg',
						title: '3'
					},
					{
						image: 'https://ilightlife.info/imgs/il/lun4.jpg',
						title: '4'
					},
					{
						image: 'https://ilightlife.info/imgs/il/lun5.jpg',
						title: '5'
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx;
		margin-top: 40rpx;
	}
</style>