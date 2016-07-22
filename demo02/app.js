//变量的解构赋值
//demo01中的let和const或多或少能在java，php或者python中找到类似的，但是解构赋值可以说是es6一大特性了
//基本的几种写法

let [a, b, c] = [1, 2, 3];
a // 1
b // 2
c // 3

//（记住let相同域里面不能重复定义，这边只是例子）
let [a, [[b], c]] = [1, [[2], 3]];
a // 1
b // 2
c // 3

let [head, ...tail] = [1, 2, 3, 4]; //这个形式在学习node的时候经常看到
head // 1
tail // [2, 3, 4]

//解构赋值适用于let,var,const
