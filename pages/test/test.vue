<template>
	<view class="wrap">
		<u-slider v-model="value" :use-slot="true">
			<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
			<view class="">
				<view class="badge-button">
					{{value}}
				</view>
			</view>
		</u-slider>
	</view>
</template>
	
<script>
	export default {
		data() {	
			return {
				value: 30
			}
		}
	}
</script>

<style scoped lang="scss">
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
</style>