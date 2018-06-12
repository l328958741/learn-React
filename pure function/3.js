const a = 1
const foo = (obj, b) => {
    return obj.x + b
}

const counter = { x: 1 }

foo(count, 2)     //3, foo是纯函数
counter.x         //1

/*-------------函数执行过程没有副作用是纯函数另一个重要的标准-------------------*/

const c = 1
const bar = (obj, n) => {
    obj.x = 2
    return obj.x + n
}

const amount = { x: 1 }

bar(amount, 2)     //4, bar不是纯函数
amount.x           //2, 因为bar改变了amount.x的值，带来了副作用


/*修改bar函数为：
const bar = (n) => {
    const obj = { x: 1 }
    obj.x = 2
    return obj.x + n
}
bar就编程纯函数了 虽然bar函数内部修改了 obj，但是 obj 是内部变量，
外部程序根本观察不到，修改 obj 并不会产生外部可观察的变化，这个
函数是没有副作用的，因此它是一个纯函数。*/
