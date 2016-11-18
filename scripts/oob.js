// 定义Person构造器
//或 var Person = function() {}
function Person(firstName) {
	this.firstName = firstName;
	// console.log('Person instantiated');
} 

//// 在Person.prototype中加入方法
Person.prototype.walk = function() {
	console.log("I am walking!");
};

Person.prototype.sayHello = function() {
	console.log("Hello, I'm " + this.firstName);
};

// var person1 = new Person('Alice');
// var person2 = new Person('Bob');

// var person1 = Object.create(Person.prototype);
// console.log('person1 is '+person1.firstName);
// console.log('person2 is '+person2.firstName);

// var helloFunction = person1.sayHello;
// person1.sayHello();
// person2.sayHello();
// helloFunction();

// console.log(helloFunction === person1.sayHello());
// console.log(helloFunction === Person.prototype.sayHello);
// helloFunction.call(person1);

// 定义Student构造器
function Student(firstName, subject) {
	// 调用父类构造器, 确保(使用Function#call)"this" 在调用过程中设置正确
	Person.call(this, firstName);
	// 初始化Student类特有属性
	this.subject = subject;
};

// 建立一个由Person.prototype继承而来的Student.prototype对象.
// 注意: 常见的错误是使用 "new Person()"来建立Student.prototype.
// 这样做的错误之处有很多, 最重要的一点是我们在实例化时
// 不能赋予Person类任何的FirstName参数
// 调用Person的正确位置如下，我们从Student中来调用它
Student.prototype = Object.create(Person.prototype);

// 更换[覆盖]"sayHello" 方法
Student.prototype.sayHello = function() {
	console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

// 加入"sayGoodBye" 方法
Student.prototype.sayGoodBye = function() {
	console.log("Goodbye!");
};

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);



