<template>
	<view class="upload-img">

		<view class="upload-image">
			<image v-if="tempImg" :src="tempImg" mode="scaleToFill"></image>
			<text v-if="!tempImg">暂无图片</text>
		</view>
		<view class="upload-notice">
			<view class="upload-words">
				请从相册中选择等比宽高德图
			</view>
		</view>
		<view class="upload-image-but">
			<text @click="uploadImg()">图片上传</text>
			<text @click="chooseImg()">重新选择</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image: '',
				tempImg: ''
			}
		},
		//获取传递的图片路径
		onLoad(params) {
			var filePath = params.tempFilePath;
			this.tempImg = filePath;
			console.log('赘婿',this.tempImg)
		},
		methods: {
			
			//上传图片
			uploadImg() {
				//等待时长
				uni.showLoading({
					mask:true,
					title:'上传中，请稍后'
				})
				//上传图片
				uni.uploadFile({
					url:'http://192.168.35.55:8080/upload/',//开发者服务器 url
					filePath:this.tempImg,
					name:"file",
					header:{
						"token":'aaa'
					},
					success:(res)=>{
						console.log(res);
						var resData= res.data;
						if(resData.status==200){
							var userInfo =resData.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							})
						}else{
							uni.showToast({
								title:'上传失败'
							})
						}
					},
					fail:(err)=>{
						console.log('上传失败',err)
					}
				})
			},
			//重选头像
			chooseImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					sourceType: ["album"],
					success: (res) => {
						var filePath = res.tempFilePaths[0];
						this.tempImg = filePath;
					}
				})

			}
		}
	}
</script>

<style scoped>
	.page {
		width: 100%;
		height: 100% !important;
	}

	.upload-img {
		background: #000000;
		color: #FFFFFF;
	}
</style>