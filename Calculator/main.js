let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let division = document.querySelector("#division")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let multiplication = document.querySelector("#multiplication")
let  one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let subtraction = document.querySelector("#subtraction")
let zero = document.querySelector("#zero")
let dot = document.querySelector("#dot")
let sum = document.querySelector("#sum")
let equal = document.querySelector("#equal")
let input = document.querySelector("#inp")
let del = document.querySelector("#delete")
let ac = document.querySelector("#ac")

let clear = false

nine.addEventListener("click", e=> {
    document.querySelector("#inp").value += 9
    
})

eight.addEventListener("click", e=> {
    document.querySelector("#inp").value += 8
})

seven.addEventListener("click", e=> {
    document.querySelector("#inp").value += 7
})

six.addEventListener("click", e=> {
    document.querySelector("#inp").value += 6
})

five.addEventListener("click", e=> {
    document.querySelector("#inp").value += 5
})

four.addEventListener("click", e=> {
    document.querySelector("#inp").value += 4
})

three.addEventListener("click", e=> {
    document.querySelector("#inp").value += 3
})

two.addEventListener("click", e=> {
    document.querySelector("#inp").value += 2
})

one.addEventListener("click", e=> {
    document.querySelector("#inp").value += 1
})

zero.addEventListener("click", e=> {
    document.querySelector("#inp").value += 0   


})

dot.addEventListener("click", e=> {
    document.querySelector("#inp").value += "."
})


division.addEventListener("click", e=> {
    document.querySelector("#inp").value += "÷"
})


subtraction.addEventListener("click", e=> {
    document.querySelector("#inp").value += "-"
})

sum.addEventListener("click", e=> {
    document.querySelector("#inp").value += "+"
})


multiplication.addEventListener("click", e=> {
    document.querySelector("#inp").value += "x"
})

del.addEventListener("click",e=>  {
    input.value = input.value.slice(0, -1)
    
})
ac.addEventListener("click" , e => {
input.value  = ""
})

equal.addEventListener("click", e => {
    try {

      input.value = eval(input.value.replace(/x/g, '*').replace(/÷/g, '/'))

                
    } 
    catch {
        input.value = "Error"
    }

    

}

)