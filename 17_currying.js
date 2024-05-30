function add(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(add(1)(2)(3))

const addModern = a => b => c => a + b + c

console.log(addModern(1)(2)(3))


function sendAutoEmail(to){
    return function(subject){
        return function(body){
            return `To: ${to} ,Subject: ${subject}, Body: ${body}`
        }
    }
}



console.log(sendAutoEmail('developerakashy@gmail.com')('Javascript Tutorial')('You are almost at end to complete this tutorial'))