'use strict';
//数组的扩展
//++++++++++++++++++++++++++++++++++++++++++++++++++Array.from()通用方法+++++++++++++++++++++++++++++++++++++++++++++++++++
const toArray = ( () =>
	Array.from ? Array.from : [].slice.call(obj);
)()

//使用Array.from的第二个参数
Array.from([1, 2, 3], x => x * x);  //[1, 4, 9]
//相同于
Array.from([1, 2, 3]).map(x => x * x);

//Array.from()取DOM节点文本内容
let spans = document.querySelectorAll("span.name");
//map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);
//Array.from()
let names2 = Array.from(spans, s => s.textContent);

//返回各种数据类型
function typesOf(){
	return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN)
// ['object', 'object', 'number']
//Array.from()第三个参数可以绑定this



//++++++++++++++++++++++++++++++++++++++++++++++++Array.of()通用方法++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Array.of(1, 3, 8) //[1, 3, 8]



//++++++++++++++++++++++++++++++++++++++++++++++++数组实例的find()和findIndex()+++++++++++++++++++++++++++++++++++++++++++++
//find(),找出第一个符合条件的数组成员并返回，找不到返回undefined
[1, 4, -5, 10].find( (n) => n < 0)  //-5

//findIndex()找出位置和find()类似

[1, 3, 5, 8 , 10].findIndex( (value, index) => value > 9 )  //4 





//++++++++++++++++++++++++++++++++++++++++++++++++数组实例的entries()，keys()和values()+++++++++++++++++++++++++++++++++++++++++++++
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"


//使用includes代替indexOf() ,特别方便
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
//简易替代方法
const contains = ( () => 
	Array.prototype.includes
		? (arr, value) => arr.includes(value)
		: (arr, value) => arr.some(el => el === value)
)()



//++++++++++++++++++++++++++++++++++++++++++++++++...扩展运算符+++++++++++++++++++++++++++++++++++++++++++++
console.log(...[1, 2, 3]); // 1 2 3
[...document.querySelectorAll('div')]

//替代apply用法
Math.max.apply(null, [4, 3, 77]); //77

Math.max(...[4, 3, 77]); //77 

//合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
//es5
arr1.concat(arr2, arr3);
//es6
[...arr1, ...arr2, ...arr3];

//解构赋值结合
// es5
a = list[0], rest = list.slice(1)
// es6
[a, ...rest] = list

//Map和Set结构，Generator函数（具有Iterator接口的对象，才能被扩展成运算符）
let map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three']
]);
[...map.keys[]] // [1, 2, 3]


var go = function*(){
	yield 1;
	yield 2;
	yield 3;
}
[...go()] //[1, 2, 3]











//对象的简写 commonjs写法
var ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

//Object.assignd实现对象合并，浅拷贝


