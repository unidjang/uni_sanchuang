<template>
	<view>
		<view>
			<u-swiper :list="imglist" :effect3d="true"></u-swiper>
			<!-- <u-tabs class="u-m-t-20" :list="sortlist" :is-scroll="false" :current="currentSort" @change="changeSort"
				bar-width="80" item-width="160"> </u-tabs> -->
			<u-grid :col="3" class="shadow">
				<u-grid-item @click="pick">
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">采摘水果</view>
				</u-grid-item>
				<u-grid-item @click="edu">
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">劳动教育</view>
				</u-grid-item>
				<u-grid-item @click="travel">
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">特色旅游</view>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="title">
			企业项目介绍
		</view>
		<view class="pp">
			本企业特提出一项集绿色农田认领模式和特色旅游产业建设为一体的农业发展模式，以助力乡村振兴战略、发展三农电子商务为目的，提出一种农田认领绿色发展方向，其主要包括“认领+采摘”、“认领+劳动教育”、“认领+特色旅游”等模式。
		</view>
		<view class="pp">
			通过与种植户签订协议与网络平台实时管理的方式，使农田认领方自主选择所种植农产品以及进行采摘体验，打造消费者参与性强、种植户利润率高，农产品更加绿色健康的现代农业发展模式。本模式集生态农业、观光农业、数字农业为一体，力求达到丰富消费者体验，提升农产品质量，促进农业三产融合的目标。起到助力我国实现乡村振兴与发展三农电子商务的积极作用。
		</view>
		<view class="pp">
			“认领+”模式主体为农田分割认领以及特色采摘体验，用户可依据个人意愿选择想要采摘的蔬果种类，并且在蔬果成熟时参与特色采摘体验。面向集体与个人打造“认领+采摘”“认领+劳动教育”“认领+特色旅游”三位一体的商业模式。新型农田认领模式致力于以有机种植方式实现果蔬的安全，健康，原味，坚持“无农药残留，无化肥，无激素添加”
		</view>
		<u-divider border-color="#00aa00">到底了</u-divider>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imglist: [
					'https://img1.baidu.com/it/u=2014398211,2188726193&fm=253&fmt=auto&app=138&f=JPEG?w=1594&h=500',
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhnyncny.com%2Fstorage%2Fimages%2Fa7e0856f6c41370f6890ffaadfd6ec7b.jpg&refer=http%3A%2F%2Fhnyncny.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647306712&t=4a2eb504448da394c2f64b86fba4a0f1',
					'https://cbu01.alicdn.com/img/ibank/2018/212/300/8866003212_1345015114.jpg',
					'https://cbu01.alicdn.com/img/ibank/2018/832/783/8591387238_1345015114.jpg',
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2017%2F447%2F823%2F4326328744_1858277236.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647306867&t=2f80d0169526c5a059262ad97d35cff7',
					'http://cbu01.alicdn.com/img/ibank/2017/967/214/4325412769_2118004152.jpg',
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi05.c.aliimg.com%2Fimg%2Fibank%2F2014%2F634%2F821%2F1403128436_116407300.jpg&refer=http%3A%2F%2Fi05.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647306770&t=8de7686fa1b73ac8ddeb9b2a92b50ca9'
				],
				show: false,
				src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a8775a97703da801219586651e50.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647306430&t=934e42e14df9cde5a18d4c416ee1f866'
				// sortlist: [{
				// 		name: '默认'
				// 	},
				// 	{
				// 		name: '销量'
				// 	},
				// 	{
				// 		name: '推荐'
				// 	},
				// 	{
				// 		name: '最新'
				// 	},
				// ],
				// currentSort: 0, // 设置tabs一开始选中第0个
			}
		},

		onLoad() {

		},
		methods: {
			changeSort(index) { //index是当前的索引
				console.log(index);
				this.currentSort = index;
				//在切换数据之前，要把原来页面上的内容清空，page设为初始值。因为getData的goods是采用累加的方式来更新的。
				this.goods = []
				this.page = 1
				// //判断筛选条件
				// this.getData()
			},
			pick() {
				uni.showLoading({
					title: '',
					mask: false
				});

				setTimeout(() => {
					uni.hideLoading()
					this.$u.route({
						type: "switchTab",
						url: 'pages/pick/pick'
					})
				}, 200)
			},
			edu() {
				uni.showLoading({
					title: '',
					mask: false
				});

				setTimeout(() => {
					uni.hideLoading()
					this.$u.route({
						type: "switchTab",
						url: 'pages/labor_edu/labor_edu'
					})
				}, 200)
			},
			travel() {
				uni.showLoading({
					title: '',
					mask: false
				});

				setTimeout(() => {
					uni.hideLoading()
					this.$u.route({
						type: "switchTab",
						url: 'pages/tourism/tourism'
					})
				}, 200)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shadow {
		padding: 20rpx;
		margin-top: 30rpx;
		color: green;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, .1); //给栅格的格子写样式
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.title {
		margin-top: 20rpx;
		font-size: 50rpx;
		text-align: center;
	}

	.pp {
		text-indent: 50rpx ;
		width: 660rpx;
		margin: 25px auto;
		padding: 8px 16px;
		border: 10px solid hsla(0, 0%, 100%, .5);
		border-radius: 8px;
		background: #f4f0ea;
		outline: 6px solid #b4a078;
	}
</style>
