function add(a, b, cb){ //function accepting function as an argument is HOF
    let result = a + b

    cb(result)   //function called inside function is callBack function
}

add(10, 20, function(res){
    console.log(res)
})