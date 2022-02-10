// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.204.128:5000', // 请求的本域名
		// method: 'POST',            为什么把这个注释了？？？
		// 设置为json，返回后会对数据进行一次JSON.parse()
		dataType: 'json',
		showLoading: true, // 是否显示请求中的loading
		loadingText: '请求中...', // 请求loading中的文字提示
		loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 配置请求头信息
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
	});

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		config.header.Authorization = 'bearer '+ vm.vuex_token         //前面加个bearer应该是为了确保信息是从这里发出去的？？

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		// config.header.Token = 'xxxxxx';

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值。登录的url就不传token了（noToken）
		if (config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		// console.log(res);      //连这个都打印不出来，肯定是没尽到这里面来，有可能是请求拦截就拦截掉了
		// return res;          //直接返回服务端返回值
		const {
			statusCode,
			data
		} = res //响应状态码，拿到res中的statusCode和data。把status这个变量数据从res中解构出来
		// console.log(statusCode);
		if (statusCode < 400) {
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return data;
		} else if (statusCode == 400) { //这个项目中没有请求头Authorization就返回401
			// 假设401为token失效，这里跳转登录
			vm.$u.toast(data.message)
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/user/login')
			}, 1500)
			return false;
		} else if (statusCode == 401) { 
			//这个项目中没有请求头Authorization就返回401
			//401的情况有两种，一种是认证未通过;一种是没有token或者过期
			if(data.message=="Unauthorized"){
				vm.$u.toast('账号或密码错误');
			}else{
				// 假设401为token失效，这里跳转登录
				vm.$u.toast('验证失败，请重新登录');
				setTimeout(() => {
					// 此为uView的方法，详见路由相关文档
					vm.$u.route('/pages/user/login')
				}, 1500)
				return false;
			}
		} else if (statusCode == 422) { //没有给表单数据就返回422，表单验证未通过
			const {
				errors
			} = data //把errors这个变量数据从data中解构出来
			// console.log(errors);          //是一个对象，里面有错误信息，要挑出我们想要的信息进行toast
			console.log(Object.values(errors)); //用values方法拿到字典所有的values，组成一个数组
			vm.$u.toast(Object.values(errors)[0][0]);
			return false;
		} else if(statusCode==500) {
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			console.log("出现了500");
			return false;
		}
		else{
			return false
		}
	}


	// ====给vm增加patch请求，参数列表是请求的地址。然后一般都会有参数，所以再设置一个字典来接收，并设置没收到时的默认为空。
	// 然后还可以传入header，可以可不写
	vm.$u.patch = (url, params = {}, header = {}) => {
		//用POST模拟patch请求
		const _params = {
			...params, //展开运算符，把params里面的内容展开，变成跟下面_method一样的形式吧
			_method: 'PATCH'
		}
		return vm.$u.post(url, _params, header)
	}
}

export default {
	install
}
