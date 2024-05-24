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


//hoisting
sayHi() //possible in normal function

function sayHi(){
    console.log("Hi")
}

//hello() //hoisting not possible in arrow function
const hello = () => {
    console.log('hello')
}

hello()


//this

const person = {
    firstName:"Akash",
    lastName:"Yadav",
    sayMyName:function(){
        console.log(this)
    },
    sayHi: ()=>{
        console.log(this)
    }
}


person.sayMyName()
person.sayHi()
