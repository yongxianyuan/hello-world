var myMap = new Map();

var keyObj = {},
	keyFunc = function() {},
	keyString = "a string";

//添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

function print(str) {
	console.log(str);
}


print(myMap.size);	// 3

//读取值
print(myMap.get(keyString)); 
print(myMap.get(keyObj));
print(myMap.get(keyFunc));

print(myMap.get("a string"));

print(myMap.get({}));
print(myMap.get(function() {}))


var myMap1 = new Map();
myMap.set(NaN, "not a number");
myMap.get(NaN);

for(var [key,value] of myMap) {
	print(key + " = " + value);
}

for(var key of myMap.keys()) {
	print(key);
}

for(var value of myMap.values()) {
	print(value);
}

