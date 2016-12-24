//块级作用域--let
//let申明的变量只在此命令的代码块内生效
'use strict'
{
	let a = 'gbb';
	var b = 'xiaomai';
}

console.log(a); //a is not defined
console.log(b); // 'xiaomai'

//循环中使用let非常合适
for (let i = 0; i < Things.length; i++) {
	Things[i];
};
//直观的例子
(function getVariable(){
	var a = 10;
	if(true){
		var a = 5;
	}
	console.log(a);  // 5
}());

(function getLetVariable(){
	let a = 10;
	if(true){
		let a = 5;
	}
	console.log(a);  // 10
}())


//const 常量定义（const作用域和let一毛一样）
//对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址
const foo = {}
foo.prop = 1212;
foo.prop // 1212
foo = {};

//使用Object.freeze({})
//此时foo.prop不会生效
//对象完全冻结
var constFreeze = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach( (key, value)=>{
		if(typeof obj[key] === 'object'){
			constFreeze( obj[key] );
		}
	})
}

let aaa = {}
