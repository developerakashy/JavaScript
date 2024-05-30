function add(a, b){
    return a + b
}

function square(val){
    return val * val
}

function multiply(args){
    return args[0] * args[1]
}

function compositionOfTwoFunction(fn1, fn2){
   
    return function(a, b){
        return fn2(fn1(a, b))
    }
}

let modernCompositionFunction = (fn1, fn2) => (a, b) => fn2(fn1(a, b))
let modernTask = modernCompositionFunction(add, square)
console.log(modernTask(4, 5))

let task1 = compositionOfTwoFunction(add, square)

console.log(task1(2, 3))




function compose(...fns){
    return function(...values){
        return fns.reduce((a, b) => b(a), values)
    }
}

let task2 = compose(multiply, square)

console.log(task2(1, 2))