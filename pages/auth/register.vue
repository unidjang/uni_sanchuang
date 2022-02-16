<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册认领＋惠农</view>
			<!--  -->
			<view class="section-2">
				<navigator class="item" open-type="switchTab" url="/pages/mart/mart" hover-class="none">
					<view class="title2">
						<image src="/static/plants/corn.png"></image>
						<view>个人</view>
					</view>
				</navigator>
				<navigator class="item" open-type="navigate" url="/pages/home/group-dinner" hover-class="none">
					<view class="title2">
						<image src="/static/plants/strawberry.png"></image>
						<view>农民</view>
					</view>
				</navigator>
				<navigator class="item" open-type="navigate" url="/pages/home/group-dinner" hover-class="none">
					<view class="title2">
						<image src="/static/plants/strawberry.png"></image>
						<view>企业</view>
					</view>
				</navigator>
			</view>
			<!--  -->
			<input class="u-border-bottom" v-model="name" placeholder="请输入昵称" />
			<input class="u-border-bottom" v-model="email" placeholder="请输入邮箱" />

			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入密码" />
			<input class="u-border-bottom" type="password" v-model="password_confirmation" placeholder="请再次输入密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">注册</button>
			<view class="alternative">
				<view class="password">密码设置规则</view>
				<view class="issue">帮助</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.$u.test.email(this.email) && this.password && this.name && this.password_confirmation) {
					//当都输入之后，按钮才会变色可点击
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			// ========================进行注册
			async submit() {
				// 1. 表单验证（邮箱格式、两次密码是否一致……）   我已经注册了一个7640907599@qq.com
				if (this.password !== this.password_confirmation) {
					this.$u.toast('两次密码不一致')
					return;
				}
				// 2. 准备提交参数
				const params = {
					name: this.name,
					email: this.email,
					password: this.password,
					password_confirmation: this.password_confirmation
				}
				// 3. 传到后端去注册
				const res = await this.$u.api.authRegister(params)
				// 4. 注册完之后跳转到登录页面
				this.$u.route({
					type: "redirectTo", //这个是uniapp原生的
					url: 'pages/auth/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-border-bottom {
		margin-bottom: 40rpx !important; //还要写个！important提高优先级。不太懂
	}

	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			// ===========================
			.section-2 {
				display: flex;
				justify-content: space-between;
				margin-bottom: 30rpx;

				.item {
					width: 150rpx;
					height: 50rpx;
					background-color: #EAEBEC;
					padding: $spacing-row-lg 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					border-radius: $border-radius-lg;

					.title2 {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: $font-size-lg;

						image {
							width: 50rpx;
							height: 50rpx;
							margin-right: 10rpx;
						}
					}

					.tips {
						color: $text-color-assist;
						font-size: $font-size-base;
					}
				}
			}

			// 
			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 40rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				color: $u-type-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>
