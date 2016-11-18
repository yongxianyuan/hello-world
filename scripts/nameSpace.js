// 全局命名空间
var MYAPP = MYAPP || {};

// 子命名空间
MYAPP.event = {};

//给普通方法和属性创建一个叫做MYAPP.commonMethod的容器
MYAPP.commonMethod = {
	regExForName: "", // 定义名字的正则验证
	regExForPhone: "", // 定义电话的正则验证
	validteName: function(name) {
		// 对名字name做些操作，你可以通过使用“this.regExforname"
		// 访问regExForName变量
	},

	validtePhoneNo: function(phonNo) {
		// 对电话号码做操作
	}
}

// 对象和方法一起声明
MYAPP.event = {
	addListener: function(e1, type, fn) {
		// 代码
	},
	removeListener: function(e1, type, fn) {
		// 代码
	},
	getEvent: function(e) {
		// 代码
	}

	// 还可以添加其他的属性和方法
}

// 使用addListerner方法的写法：
MYAPP.event.addListener("yourel", "type", callback);








