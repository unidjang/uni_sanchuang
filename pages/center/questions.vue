<template>
	<view class="">
		<view class="paper">
			1、怎么知道自己认领的农作物是否成熟？
			<view class="u-p-l-45">
				在“我的”--->“我的认领”中查看
			</view>
		</view>
		<view class="paper">
			2、在哪里查看自己认领的农作物的生产情况？
			<view class="u-p-l-45">
				在“我的”--->“我的认领”--->“查看长势”中查看实时监控
			</view>
		</view>
		<view class="paper">
			3、如何选择获取成熟农作物方式？（亲自采摘或者快递运输）
			<view class="u-p-l-45">
				在“我的”--->“我的认领”--->“已成熟”--->“选择采摘方式”
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
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
</style>
