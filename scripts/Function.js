function print(str) {
	console.log(str);
}

// function square(number) {
// 	return number*number;
// }

// print(square(5));

// function myFunc(theObject) {
// 	theObject.make = "Toyota";
// }

// var mycar = {
// 	make: "Honda",
// 	model: "Accord",
// 	year: 1998
// },
//  x, y;

// x = mycar.make;

// myFunc(mycar);
// y = mycar.make;

// print(x);
// print(y);

// var factorial = function fac(n) {
// 	return n<2 ? 1 : n*fac(n-1)
// };


// print(factorial(3));


// function addSquares(a, b) {
// 	function square(x) {
// 		return x * x;
// 	}
// 	return square(a) + square(b);
// } 

// a = addSquares(2,3);
// b = addSquares(3,4);
// c = addSquares(4,5);


function f1() {
	var n = 999;
	nAdd = function() {
		n += 1;
	}
	function f2() {
		print(n);
	}
	return f2;
}

var result = f1();
result();

nAdd();
result();










