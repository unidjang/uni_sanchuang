<template>
	<view>
		<view class="top-img">
			<u-swiper indicator-pos="topRight" :list="swiperlist" border-radius="0" height="380"></u-swiper>
		</view>
		<div style="clear:both;"></div>
		<view class="subject">
			<view class="subject-view">
			<view class="subject-tab">
				<view class="subject-tabs">搜索景点</view>
				<view>主题旅行</view>
				<view>私家团</view>
			</view>
			<view class="horse">
				<u-notice-bar bg-color="#fff" color="#d2bb9b" mode="vertical" :list="list"></u-notice-bar>
			</view>
			 
			 <view class="hotel-text">
				 <view class="text-title">目的地</view>
				 <view class="text-data">
					 <text class="text-data-one">六安</text>
					 <text class="text-data-two">
						 我的位置
					 </text>
				 </view>
			 </view>
			 
			 <view class="hotel-text">
			 	<view class="text-title">选择日期</view>
			 	<view class="text-data">
			 		<text class="text-data-one" @click="show = true">{{startDate}} — {{endDate}}</text>
			 		<text class="text-data-two">共{{nights}}晚</text>
			 		</view>
			 </view>
			 <view class="hotel-text">
			 	<view class="text-title">搜索</view>
			 	 <view class="hotel-inp">
					 <input placeholder="关键字/位置/品牌/酒店名"/>
				 </view>
			 </view>
			 <view class="hotel-text">
			 	<view class="text-title">景区等级</view>
			 	 <view class="hotel-inp">
			 		<input placeholder="可选择价格星级"/>
			 	</view>
			 </view>
			 <view class="hotel-btn">
				 <button class="hotel-btns" @click="lists">搜索</button>
			 </view>
			</view>
		</view>
		<u-calendar active-bg-color="#d2bb9b" range-color="#d2bb9b" v-model="show" :mode="mode" @change="change">
			<view slot="tooltip">
				<view class="title">请选择住店/离店时间</view>
			</view>
		</u-calendar>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'7天酒店钟点房打特价啦',
					'奔跑吧暑假'
				],
				swiperlist:[
				  {
					image:'../../static/tourism/t1.jpg',
					title:'暑假开始啦'
				  },
				  {
					image:'../../static/tourism/t2.png',
					title:'暑假开始啦'  
				  },
				  {
					image:'../../static/tourism/t3.jpg',
					title:'暑假开始啦'  
				  }
				],
				countrylist:[
					{name:'国内',type:0},
					{name:'国外',type:1},
					{name:'名宿',type:2}
				],
				countrytyle:0,
				show: false,
				mode: 'range',
				startDate:"7月21日",
				endDate:"7月23日",
				nights:1
			}
		},
		onLoad() {
			
		},
		methods: {
			onTab(type){
				if(type!==this.countrytyle){
					this.countrytyle = type
				}
			},
			lists(){
				uni.navigateTo({
					url:'list'
				})
			},
			change(e) {
				//获取时间值
				if(e.startMonth==e.endMonth){
					this.nights = e.endDay - e.startDay
				}
				this.startDate = e.startMonth+'月'+e.startDay+'日'
				this.endDate = e.endMonth+'月'+e.endDay+'日'
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #f5f5f5;
	}
	.title{
		color: #d2bb9b;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
	.top-img{
		position: relative;
		image{
			width: 100%;
			height: 180px;
		}
	}
	.subject-view{
		border-radius: 5px;
		overflow: auto;
		zoom: 1;
		// background-color: #fff;
	}
	.subject{
		position: absolute;
		top: 110px;
		width: 95%;
		margin: 0px 10px;
		.subject-tab{
			overflow: auto;
			zoom: 1;
			view{
				height: 45px;
				width: 33.3%;
				float: left;
				text-align: center;
				line-height: 45px;
				font-size: 15px;
				background-color: #f1f1f1;
				font-weight: bold;
			}
			.subject-tabs{
				background-color: #fff;
				color: #d2bb9b;
			}
		}
	}
	.horse{
		padding: 5px 10px;
		background-color: #fff;
	}
	.type-tab{
		overflow: auto;
		zoom: 1;
		background-color: #fff;
		padding: 5px 20px;
		view{
			float: left;
			height: 25px;
			margin-right: 50px;
			font-size: 15px;
			font-weight: 700;
		}
		.type-tabs{
			border-bottom: 1.5px solid #d2bb9b;
			color: #d2bb9b;
		}
	}
	.hotel-text{
		padding: 10px 20px 5px 20px;
		background-color: #fff;
		.text-title{
			color: #929292;
			font-size: 14px;
		}
		.text-data{
			padding: 7px 0px;
			overflow: auto;
			zoom: 1;
			border-bottom: 1px solid #f1f1f1;
			.text-data-one{
				font-size: 17px;
				font-weight: bold;
				float: left;
			}
			.text-data-two{
				color: #929292;
				font-size: 14px;
				float: right
			}
		}
		.hotel-inp{
			padding: 7px 0px;	
			border-bottom: 1px solid #f1f1f1;
		}
	}
	.hotel-btn{
		padding: 10px 20px;
		background-color: #fff;
		.hotel-btns{
			background-color: #d2bb9b;
			height: 40px;
			line-height: 40px;
			color: #fff;
			border-radius: 30px;
			font-size: 15px;
		}
	}
	.u-btn--primary{
		background-color: #d2bb9b!important;
	}
</style>
