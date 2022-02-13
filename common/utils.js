//跟api一样，把自定义的工具挂载到vue实例上
const install = (Vue, vm) => {
	vm.$u.utils = {}
	// 工具1：检验是否登录，没有就跳转
	vm.$u.utils.isLogin = async () => {
		// 检查token，不合格就跳转到登录，并返回FALSE，用于onload接下来的判断
		// const token = vm.vuex_token
		const res = await vm.$u.api.jwt_confirm() //模拟点击收藏时，没登录的效果(登录后20分钟，token就失效)
		if (res.code==507) {
			// 获取来源页面 
			const currentPage = getCurrentPages().pop() //页面栈的栈顶
			
			// ==========================拼接url中的查询字符串部分
			const {options, route} = currentPage        //把currentPage中的这两个变量解析出来。
								//其中options就是字典，route就是页面路径（不包含查询字符串的部分）
			
			// 获取所有变量的key
			const optionsKeys = Object.keys(options) //比如 ['id','name']
			
			// 得到查询字符串params     eg.  ?id=3&name='tom'
			let params = ''
			if (optionsKeys.length !== 0) {
				params = optionsKeys.reduce((pre, current) => {
					return pre + current + '=' + options[current] + '&'
				}, '?').slice(0, -1)
			}
			
			// ==========================缓存来源页面的路由（临时缓存没必要用vuex）
			uni.setStorageSync("back_url", route + params) //sync同步的方式，传入键值对

			vm.$u.toast('请登录')
			setTimeout(() => {
				vm.$u.route({
					type: 'redirect',
					url: 'pages/auth/login',
				})
			}, 1500)
			return false
		}
		return true
	}
	
	// 工具2：更新用户信息（因为经常用，所以封装成全局函数）
	vm.$u.utils.updateUser =async () => {
		// 更新用户信息到前端的vuex（只要vuex_user的值一变，所有用到这玩意的值，也会跟着变，动态绑定）
		const userInfo = await vm.$u.api.userInfo()
		vm.$u.vuex("vuex_user", userInfo)
	}
}


export default {
	install
}
