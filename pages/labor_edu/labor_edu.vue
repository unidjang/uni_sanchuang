<template>
	<view>
		认领+劳动教育
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		async onLoad() {
			const res = await this.$u.api.jwt_confirm() //模拟点击收藏时，没登录的效果(登录后20分钟，token就失效)
			console.log(res);      //能正确显示token的验证结果
			
			// 如果token验证失败，就跳转到登录，重新登陆
			if(res.code==507){
				this.$u.toast('验证失败，请重新登陆！')
				setTimeout(() => {
					this.$u.route({
						type: "reLaunch",
						url: 'pages/auth/login'
					})
				}, 1500)
			}
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
