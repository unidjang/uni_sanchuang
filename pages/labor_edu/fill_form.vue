<template>
	<view class="paper" >
		<image src="../../static/labor.jpg" mode="aspectFit" class="u-p-l-30"></image>
		<u-form :model="form" ref="uForm" class="u-p-r-40 u-p-l-40">
			<u-form-item label="选择学校" label-width="150rpx">
				<u-input v-model="form.name" type="select" />
			</u-form-item>
			<u-form-item label="学生人数" label-width="150rpx">
				<u-input v-model="form.name" type="select" />
			</u-form-item>
			<u-form-item label="蔬菜种类" label-width="150rpx">
				<u-input v-model="form.sex" type="select" />
			</u-form-item>
			<u-form-item label="选择田地" label-width="150rpx">
				<u-input v-model="form.sex" type="select" />
			</u-form-item>
			
		</u-form>

		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="server-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">客服</view>
				</view>
				<view class="item car">
					<u-badge class="car-num" :count="9" type="error" :offset="[-3, -6]"></u-badge>
					<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">我的收藏</view>
				</view>
			</view>
			<view class="right u-p-l-40">
				<view class="cart btn u-line-1 ">加入收藏</view>
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
				radioList: [{
						name: '甜玉米',
						disabled: false
					},
					{
						name: '黑玉米',
						disabled: false
					},
					{
						name: '高油玉米',
						disabled: false
					}
				],
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
	
	    &::before, &::after {
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
		margin-top: 70rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

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
