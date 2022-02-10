<template>
	<view>
		认领+采摘
		<view class="">
			{{message}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:""
			}
		},
		async onLoad() {
			const dep = await this.$u.api.depart()
			console.log(dep);
			this.message=dep.message
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
