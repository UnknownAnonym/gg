<template>
	<view class="n">
		<!-- <u-section title="今日热门" :right="false"></u-section> -->
		<u-notice-bar  :list="list" type="none" ></u-notice-bar><br>
		<text class="u">不聚众-不聚众-不聚众-不聚众-不聚众</text><br>
		<text class="u">戴口罩，勤洗手</text><br>
		<text class="u">不聚众-不聚众-不聚众-不聚众-不聚众</text><br>
		<text class="u">戴口罩，勤洗手</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'健康你我他，防疫靠大家！'
				]
			}
		}
	}
</script>

<style>
	.n{
		width: 85%;
		height: 10%;
		margin: auto;
		padding-bottom: 10px;
	}
	.u{
		font-size: 12px;
		margin-top: 5px;
	}
</style>
