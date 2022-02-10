<template>
	<view>
		<view>
			<u-swiper :list="imglist"></u-swiper>
			<u-tabs class="u-m-t-20" :list="sortlist" :is-scroll="false" :current="currentSort" @change="changeSort"
				bar-width="80" item-width="160"> </u-tabs>
			<view>
				<!-- gutter为内部两个组件的间距 -->
				<u-row gutter="16">
					<!-- 通过col组件的span设置需要分栏的比例，还可以循环牛批 -->
					<u-col span="6" v-for="i in 12">
						<!-- 写navigator里面是因为点击图片要能跳转 -->
						<navigator class="goods-item">
							<!-- 宽度设置为百分百，因为是栅格布局，所以宽度刚好 -->
							<u-image width="100%" height="300rpx"
								src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F1f178a82b9014a90c422a1baa9773912b31bee9d.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645164589&t=a99ce187b672e9c07ac9e066bd033f01">
							</u-image>
							<view class="title">农场</view>
							<view class="u-flex u-row-between">
								<view class="price">¥ 99999</view>
								<view class="sales">销量：76</view>
							</view>
						</navigator>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple-light">栅格</view>
					</u-col>
				</u-row>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: "2",
				result: 0,
				imglist: [
					'https://t10.baidu.com/it/u=2912690280,2792728341&fm=173&app=25&f=JPEG?w=640&h=394&s=7A902EC5400233575A35C12703007042',
					'https://t11.baidu.com/it/u=2429171512,2295101553&fm=173&app=25&f=JPEG?w=640&h=402&s=7B782AD7364B55490CF4727203007076'
				],
				sortlist: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					},
				],
				currentSort: 0, // 设置tabs一开始选中第0个
			}
		},
		
		async onLoad() {
			// const res = await this.$u.api.jwt_confirm() //模拟点击收藏时，没登录的效果(登录后20分钟，token就失效)
			// console.log(res);      //能正确显示token的验证结果
			
			// // 如果token验证失败，就跳转到登录，重新登陆
			// if(res.code==507){
			// 	this.$u.toast('验证失败，请重新登陆！')
			// 	setTimeout(() => {
			// 		this.$u.route({
			// 			type: "reLaunch",
			// 			url: 'pages/auth/login'
			// 		})
			// 	}, 1500)
			// }
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
