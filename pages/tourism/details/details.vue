<template>
	<view>
		<view class="deta-img">
			<u-swiper indicator-pos="topRight" :list="swiperlist" border-radius="0" height="380"></u-swiper>
			<text class="deta-img-mun"><u-icon name="photo" class="img-icon"></u-icon>38</text>
		</view>
		<view class="main">
			<view class="details-title">皖西大裂谷 4A</view>
			<view class="details-position">六安市金安区张店镇太平桥村</view>
			<view class="central">
				<view class="evaluate">
					<image src="../../../static/images/user-pj.png"></image>
					<text>用户评价</text>
				</view>
				<view class="map">
					<image src="../../../static/images/dingwei.png"></image>
					<text>地图/导航</text>
				</view>
			</view>
			<view class="service">
				<view class="service-type">
					<view><image src="../../../static/images/wifi.png"></image></view>
					<view>Wi-Fi</view>
				</view>
				<view class="service-type">
					<view><image src="../../../static/images/food.png"></image></view>
					<view>中餐厅</view>
				</view>
				<view class="service-type">
					<view><image src="../../../static/images/clock.png"></image></view>
					<view>附近酒店</view>
				</view>
				<view class="service-type">
					<view><image src="../../../static/images/parking.png"></image></view>
					<view>免费停车</view>
				</view>
			</view>
			<view class="details-title">门票	</view>
			<view class="list-item flex-row" v-for="(value,index) in roomlist" @click="show=true">
				<view class="flex-grow-0 corver-pic corver-picxx">
					<image :src="value.image"></image>
				</view>
				<view class="flex-grow-1 flex-col flexs-bottoms">
					<view class="goods-title">{{value.title}}</view>
					<view class="goods-titles">{{value.request}}</view>
					<view class="goods-titles">已售1000+ | 购买须知</view>
					<view class="flex-grow-0 flex-row flex-y-bottom flexs-bottoms-text">
						<text class="goods-price">￥230</text>
						<text class="goods-prices">￥350</text>
						<text class="adopt-btn">预约</text>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom">
			<view style="position: relative;">
			<u-swiper mode="number" indicator-pos="bottomRight" :list="swiperlist" border-radius="0" height="380"></u-swiper>
			<view class="closes" @click="closes"><image src="../../../static/images/close.png"></image></view>
			</view>
			<view style="padding: 15px;">
			<view class="details-title">温馨大床房【有美甲刀套餐】</view>
			<view class="tips">
				<view class="tipss">
					<image src="../../../static/ticket.png"><text>18-25平米</text></image>
				</view>
				<view class="tipss">
					<image src="../../../static/ticket.png"><text>2-3层</text></image>
				</view>
				<view class="tipss">
					<image src="../../../static/ticket.png"><text>有窗</text></image>
				</view>
				<view class="tipss">
					<image src="../../../static/ticket.png"><text>2人</text></image>
				</view>
				<view class="tipss">
					<image src="../../../static/ticket.png"><text>1.8米大床</text></image>
				</view>
				<view class="tipss">
					<image src="../../../static/images/zaocan.png"><text>无早餐</text></image>
				</view>
			</view>
				
			</view>
		</u-popup>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				swiperlist:[
					{image:'../../../static/tourism/dlg.jpg',title:'暑假开始啦'},
					{image:'../../../static/tourism/dlg.jpg',title:'暑假开始啦'},
					{image:'../../../static/tourism/dlg.jpg',title:'暑假开始啦'}
				],
				roomlist:[
					{image:'../../../static/ticket.png',title:'成人票', request:'年龄60周岁(不含)以下'},
					{image:'../../../static/ticket.png',title:'儿童票(身高1.2米(不含)以下)', request:'免费'},
				],
				show: false
			}
		},
		methods: {
			closes(){
				this.show= false
			},
		}
	}
</script>

<style>
@import url("./details.css");
</style>
