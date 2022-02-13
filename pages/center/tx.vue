<template>
	<view>
		<view class="avartar" @click="uploadImag()">
			<text>头像</text>
			<image :src="imgsrc" style="width: 80px;height: 50px;border-radius: 50%;" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgsrc:'https://scpic.chinaz.net/files/pic/pic9/202102/apic31106.jpg'
			}
		},
		methods: {
			uploadImag(){
				uni.showActionSheet({
					itemList:['查看头像','从相册选择'],
					success: (res) => {
						let index=res.tapIndex;
						if(index==0){
							//查看头像
							var avatarArr=[];
							avatarArr.push(this.imgsrc)
							uni.previewImage({
								urls:avatarArr,
								current:avatarArr[0]
							})
						}else if(index==1){
							//选择头像上传
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success:(res)=>{
									var filePath=res.tempFilePaths[0];
									//跳转相册选择组件
									uni.navigateTo({
										url:"pages/center/upload?tempFilePath="+filePath
									})
								}
							})
						}
					}
				})
			}
			
		}
	}
</script>

<style scoped>

.avartar{
	display: flex;
	align-items: center;
	margin: 30rpx;
}
.avartar text{
	font-size: 30rpx;
	margin: 0 20rpx;
}
</style>

