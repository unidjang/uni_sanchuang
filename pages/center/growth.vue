<template>
	<view>
		<view class="titlee">
			实时监控
		</view>
		<image src="../../static/jk.jpg" mode="aspectFix" style="width: 800rpx; margin-top: 20rpx;" class="bk"></image>
		<!-- <image src="../../static/situ.png" mode="widthFix" class="u-p-l-40 " ></image> -->
		<view class="title2">
			作物生长指标
		</view>
		<view class="charts-box">
			<qiun-data-charts type="radar" :chartData="chartData" background="none" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {
					categories: [
						"温室光照",
						"空气温度",
						"空气湿度",
						"土壤含水",
						"土壤温度",
						"土壤EC"
					],
					series: [{
							"name": "今日",
							"data": [
								155,
								110,
								165,
								150,
								187,
								172
							]
						},
						{
							"name": "昨日",
							"data": [
								190,
								150,
								105,
								188,
								182,
								179
							]
						}
					]
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
	.bk {
		/* width: 209px; */
		/* margin: 29px auto; */
		/* padding: 8px 16px; */
		border-radius: 8px;
		background: #f4f0ea;
		outline: 6px solid #b4a078;
	}

	.titlee {
		color: transparent;
		font-size: 40px;
		font-weight: bold;
		background: linear-gradient(45deg, rgba(0, 173, 181, 1) 0%, rgba(0, 173, 181, .4) 100%);
		-webkit-background-clip: text;
		margin-left: 280rpx;
		margin-top: 20rpx;
		font-size: 50rpx;
	}

	.title2 {
		color: transparent;
		font-size: 40px;
		font-weight: bold;
		background: linear-gradient(45deg, rgba(0, 173, 181, 1) 0%, rgba(0, 173, 181, .4) 100%);
		-webkit-background-clip: text;
		margin-left: 230rpx;
		margin-top: 20rpx;
		font-size: 50rpx;
	}
</style>
