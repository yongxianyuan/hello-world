// function makeAddr(a) {
// 	return function(b) {
// 		return a + b;
// 	}
// }

// var x = makeAddr(5);
// var y = makeAddr(20);

// console.log(x(6));
// console.log(y(7));


// function box() {
// 	return 'Lee';
// }

var box = function() {
	return 'Lee';
};

console.log(box());


// var age = 100;
// function box() {
// 	age++;
// }

// box();
// console.log(age);
// box();
// console.log(age);
// box();
// console.log(age);



// var name = "The Window";

// function foo(x) {
// 	var tmp = 3;
// 	return function bar(y) {
// 		console.log(x + y + (++tmp));
// 	};
	
// }

// var t=foo(2);
// t(3);
// t(3);
// t(3);


// function f1() {
// 	console.log("function f1 is running!");
// 	 return function f2() {
// 		console.log("function f2 is running");
// 	}
// }

// f1();
// console.log('----------------');

// var s=f1();
// s();

//闭包
// function init() {
// 	var name = "Mozilla";
// 	function displayName() {
// 		console.log(name);
// 	}
// 	displayName();
// }

// init();


// function makeFunc() {
// 	var name = "Mozilla";
// 	function displayName() {
// 		console.log(name);
// 	}
// 	return displayName;
// }

//
// var myFunc = makeFunc();
//  myFunc 获得了makeFunc函数的执行结果（这个
//  运行后返回了displayName这个函数对象）
// myFunc();
// 这里相当于在函数对象(dispalyName)后面加上了(), 表示执行这个函数

// function makeAddr(x) {
// 	return function(y) {
// 		return x + y;
// 	};
// }

// var add5 = makeAddr(5);
// var add10 = makeAddr(10);

// console.log(add5(2));
// console.log(add10(2));

// var Counter = (function() {
// 		var privateCounter = 0;
// 		function changeBy(val) {
// 			privateCounter += val;
// 		}
// 		return {
// 			increment: function() {
// 				changeBy(1);
// 			},
// 			decrement: function() {
// 				changeBy(-1);
// 			},
// 			value: function() {
// 				return privateCounter;
// 			}
// 		}
// 	}
// 	)();
// console.log(Counter.value());
// Counter.increment();
// Counter.increment();
// console.log(Counter.value());
// Counter.decrement();
// console.log(Counter.value());

// var makeCounter = function() {
// 		var privateCounter = 0;
// 		function changeBy(val) {
// 			privateCounter += val;
// 		}
// 		return {
// 			increment: function() {
// 				changeBy(1);
// 			},
// 			decrement: function() {
// 				changeBy(-1);
// 			},
// 			value: function() {
// 				return privateCounter;
// 			}
// 		}
// 	};

// var Counter1 = makeCounter();
// var Counter2 = makeCounter();

// console.log(Counter1.value());
// Counter1.increment();
// Counter1.increment();
// console.log(Counter1.value());
// console.log(Counter2.value());

// function MyObject(name, message) {
// 	this.name = name.toString();
// 	this.message = message.toString();
// 	this.getName = function() {
// 		return this.name;
// 	};
// 	this.getMessage = function() {
// 		return this.message;
// 	};
// }


// MyObject('shangsan','helloworld');





























