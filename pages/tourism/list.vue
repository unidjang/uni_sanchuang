<template>
	<view>
		<view class="topes">
		<sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter>
		</view>
		<view class="list-data" v-for="(value,index) in datalist" @click="derails">
			<view class="list-img">
				<image :src="value.img"></image>
			</view>
			<view class="list-title">{{value.name}}</view>
			<view class="list-tips">豪华-双人床-2.0米大床-双早
			<text style="margin-left: 10px;"><u-icon name="map-fill" style="margin-right: 3px;"></u-icon>距我直线998m</text>
			</view>
			<view class="price">
				<text class="present">￥244</text>
				<text class="original">￥350</text>
			</view>
		</view>
	</view>
</template>

<script>
	 import slFilter from '@/components/songlazy-sl-filter/sl-filter/sl-filter.vue';
	export default {
		data() {
			return {
				datalist:[
					{img:'../../static/tourism/ttz.jpg',name:'天堂寨'},
					{img:'../../static/tourism/dlg.jpg',name:'皖西大裂谷'},
					{img:'../../static/tourism/wfh.jpg',name:'万佛湖风景区'}
				],
				themeColor: '#d2bb9b',
				menuList:[{
					'title': '位置',
					'key': 'sort',
					'isSort': true,
					'detailList':[{
						'title': '不限',
						'value': ''
					},{
						'title': '不限',
						'value': ''
					},{
						'title': '不限',
						'value': ''
					}]
				},{
					title: '价格/星级',
					'key': 'salary1',
					'isMutiple': false,
					'detailTitle': '',
					'detailList':[{
						'title': '经济型',
						'value': ''
					},{
						'title': '舒适/三星',
						'value': ''
					},{
						'title': '高档/三星',
						'value': ''
					},{
						'title': '豪华/五星',
						'value': ''
					},{
						'title': '￥100以下',
						'value': ''
					},{
						'title': '￥100-200',
						'value': ''
					},{
						'title': '￥200-300',
						'value': ''
					},{
						'title': '￥300-400',
						'value': ''
					},{
						'title': '￥400-500',
						'value': ''
					}]
				},{
					title: '筛选',
					'key': 'salary',
					'isMutiple': false,
					'detailTitle': '分类',
					'detailList':[{
						'title': '情侣约会',
						'value': ''
					},{
						'title': '大床',
						'value': ''
					},{
						'title': '双床',
						'value': ''
					},{
						'title': '麻将房',
						'value': ''
					},{
						'title': '电竞酒店',
						'value': ''
					},{
						'title': '民宿',
						'value': ''
					},{
						'title': '主题酒店',
						'value': ''
					}]
				}]
			}
		},
		components: {
		    slFilter
		},
		methods: {
			result(e){
				console.log(e)
			},
			derails(){
				uni.navigateTo({
					url:'../details/details'
				})
			},
		}
	}
</script>

<style>
.list-data{
	padding: 10px;
}
.list-img image{
	width: 100%;
	height: 180px;
	border-radius: 5px;
}
.list-title{
	padding: 5px 0px;
	font-size: 16px;
	font-weight: 700;
}
.list-tips{
	font-size: 14px;
	color: #989898;
}
.present{
	font-size: 20px;
	font-weight: 700;
	color: #d2bb9b;
}
.price{
	padding: 5px 0px;
}
.original{
	margin-left: 10px;
	text-decoration: line-through;
	color: #B0B0B0;
}
</style>
