<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30">
			<view class="u-m-r-10">
				<u-avatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F0b%2Fcc%2Fde%2F0bccde7ed09b1226274ca3c08117d667.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647618127&t=fc2cebc58519500cd3dd5d8aebf98746" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{vuex_user.name}}</view>
				<view class="u-font-14 u-tips-color">邮箱:aaa@qq.com</view>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="个人信息" @click="toBaseInfo"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="我的认领" @click="order"></u-cell-item>
				<u-cell-item icon="star" title="我的收藏"></u-cell-item>
				<u-cell-item icon="map" title="收货地址"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="question-circle" title="常见问题" @click="ask"></u-cell-item>
			</u-cell-group>
			<u-cell-group>
				<u-cell-item icon="reload" title="退出登录" @click="quit"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://uviewui.com/common/logo.png',
				show:true
			}
		},
		onLoad() {1
			// if(!this.$u.utils.isLogin()) return
		},
		methods: {
			toBaseInfo(){
				this.$u.route({
					url:'pages/center/baseinfo',  				// 左上角可返回
				})
			},
			quit(){
				uni.clearStorageSync()       // 清除浏览器里缓存的token，不知道在小程序里面能不能正常工作
				uni.showLoading({
					title:"重新登陆"
				})
				setTimeout(() => {
					uni.hideLoading()
					this.$u.route({
						type: 'redirect',
						url: 'pages/auth/login',
					})
				}, 1000)
			},
			ask(){
				setTimeout(() => {
					this.$u.route({
						type: 'navigateTo', 
						url: 'pages/center/questions',
					})
				}, 500)
			},
			order(){
				setTimeout(() => {
					this.$u.route({
						type: 'navigateTo', 
						url: 'pages/center/order',
					})
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
