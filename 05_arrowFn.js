//syntax

const sayHello = () => {
    console.log("Hello")
}

sayHello()

//arguments

const args = (...val) => {  //spreadOperator  
    console.log(val)
}

args(1,2,3,4,5)