<template>
	<view class="paper">
		<image src="../../static/labor.jpg" mode="aspectFit" class="u-p-l-30"></image>
		<u-form :model="form" ref="uForm" class="u-p-r-40 u-p-l-40" >
			<u-form-item label="土地位置" label-width="190rpx"  >
				<u-input v-model="form.name" type="select" />
			</u-form-item>
			<u-form-item label="种植蔬菜类别" label-width="190rpx" >
				<u-input v-model="form.name" type="select" />
			</u-form-item>
			<u-form-item label="标定价格" label-width="190rpx" >
				<u-input v-model="form.sex" type="select" />
			</u-form-item>

		</u-form>

		<view class="navigation">
			<view class="left">
			</view>
			<view class="right u-p-l-40">
				<view class="cart btn u-line-1 u-p-l-50 u-p-r-50" >取消</view>
				<view class="buy btn u-line-1 u-p-l-50 u-p-r-50">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 5,
				show: false,
				form: {
					name: '',
					intro: '',
					sex: ''
				},
				radio: '',
				switchVal: false
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 30rpx;
	}

	.badge-button {
		padding: 4rpx 6rpx;
		background-color: $u-type-error;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}

	.paper {
		width: 350px;
		position: relative;
		margin: 30px auto;
		padding: 30px 0;
		border: 1px solid #efefef;
		background-color: #FFFFFD;
		background-image: url(../../static/paper.png);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;

		&::before,
		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			left: 10px;
			bottom: 10px;
			width: 45%;
			height: 55%;
			max-height: 100px;
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
			transform: skew(-15deg) rotate(-4deg);
		}

		&::after {
			left: auto;
			right: 10px;
			transform: skew(15deg) rotate(4deg);
		}

	}

	.navigation {
		display: flex;
		// justify-content:center;
		// margin :100 auto;
		margin-left: 140rpx;
		margin-top: 80rpx;
		border: solid 2rpx #f2f2f2;
		padding: 0rpx 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 20rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #ff7900;
			}
		}
	}
</style>
