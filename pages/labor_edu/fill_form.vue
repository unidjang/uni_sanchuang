<template>
	<view class="u-p-l-30 u-p-r-30">
		<u-form :model="form" :error-type="errorType" ref="uForm">
			<u-form-item label="申请人" label-width="100rpx" prop="name" required>
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="昵称" prop="name" required>
				<u-input v-model="form.name" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType: ['message'], // 设置错误提示方式，更详细的请看https://v1.uviewui.com/components/form.html#校验错误提示方式
				form: {
					name: '',
				},
				// 表单验证的规则(没输入昵称时，下面显示红色的提示)
				rules: {
					name: [{
						required: true,
						message: '请输入昵称',
						// 可以单个或者同时写两个触发验证方式 (改变的时候触发、失去焦点时触发)
						trigger: ['change', 'blur'],
					}],

				}
			};
		},

		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules); // 把data里面定义的规则设置到上面定义的uForm这个表单上面
			this.form.name = this.vuex_user.name
		},

		methods: {
			// onReady只是表单的填写规则，点击提交后才是用这个规则进行【内容的校验】
			submit() {
				this.$refs.uForm.validate(async (valid) => {
					if (valid) {
						// 如果有效，就更新后端的用户信息
						// 更新用户信息到前端的vuex
						this.$u.toast("更新成功！")
					} else {
						this.$u.toast("更新失败！") // 只要填写的内容触发了上面的规则，就会在这里显示验证失败
					}
				});
			}
		}
	}
</script>

<style>

</style>
