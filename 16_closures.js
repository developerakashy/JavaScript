function adder(a){

    return function add(b){
        console.log(a + b)
    }

}

const addTo5 = adder(5)

addTo5(12)