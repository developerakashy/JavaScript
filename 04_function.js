function hello(a,b,...args){
    console.log(arguments)
}


function add(a, b){
    return a + b
}

let a = add(10, 20)
console.log(a)

hello(1,2,3,4,5,6,7,8)

