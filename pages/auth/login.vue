<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			我注册了764090759@qq.com   hwj750391684hwj
			<view class="title">欢迎登录认领＋惠农</view>
			<input class="u-border-bottom" v-model="email" placeholder="请输入邮箱" />
			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password">找回密码</view>
				<view class="issue" @click="regist">注册</view>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.$u.test.email(this.email) && this.password) { //当邮箱和密码都输入之后，按钮才会变色可点击
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			async submit() {
				//登录所需的账号密码
				const params = {
					email: this.email,
					password: this.password
				}
				//请求API，执行登录
				const loginRes = await this.$u.api.authLogin(params)

				//如果登陆成功，缓存token到vuex(在浏览器F12的Application里可以看到)
				if (loginRes.code == 1000) {         //登陆失败的话，不论什么原因，后端都返回1000
					this.$u.toast('邮箱或者密码错误！')
					return;
				}
				this.$u.vuex("vuex_token", loginRes.token)
				this.$u.toast('登录成功！')

				//缓存用户信息到vuex
				const userInfo = await this.$u.api.userInfo()
				this.$u.vuex("vuex_user", userInfo)

				//登陆之后，返回来源页，保证返回到对应id(为了防止报错，多个或者跳转到主页)
				const backUrl = uni.getStorageSync('back_url') || 'pages/index/index'
				setTimeout(() => {
					this.$u.route({
						type: "reLaunch",
						url: backUrl
					})
				}, 1500)
				
			},

			// 点击注册，进行注册页面跳转
			regist() {
				uni.showLoading({
					title: '',
					mask: false
				});

				setTimeout(() => {
					uni.hideLoading()
					this.$u.route({
						type: "redirectTo",
						url: 'pages/auth/register'
					})
				}, 700)
			}
		}
	};
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

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
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
