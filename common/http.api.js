// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let indexUrl = '/api/index'; // API数量多的话就直接把地址写到下面了

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数。
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下

	vm.$u.api = {} // 定义api属性为空，后面直接添加
	// 首页。函数index自命名，访问indexUrl
	vm.$u.api.index = (params = {}) => vm.$u.get('/api/index', params); //直接返回的话，就不用写{ return xxx }。返回的是promise
	
	// 测试前后端分离的接口，可以用
	vm.$u.api.depart = (params = {}) => vm.$u.get('/depart', params);
	
	// 认证相关的url
	vm.$u.api.authLogin = (params) => vm.$u.post('/user/jwtlog', params); //登录的表单一定得有参数，所以不给初始值。括号可省略
	vm.$u.api.authRegister = (params) => vm.$u.post('/user/reg', params) //注册
	vm.$u.api.jwt_confirm = ()=> vm.$u.get('/user/jwt_confirm')  //随时可调用，来检验jwt（比如点击收藏）
	
	// 用户相关的API
	vm.$u.api.userInfo = () => vm.$u.get('/user/auth_info'); //获取用户信息。不需要参数
	vm.$u.api.userInfoUpdate = (params) => vm.$u.put('/user/auth_update', params) //把修改后的用户信息传给后端
}

export default {
	install
}
