let score = "44.5"

console.log(typeof score)
console.log(typeof(score))

let value = Number(score)
console.log(typeof value)
console.log(typeof(value))
console.log(value)

//NaN example : Not a number

let num = "85ds"
console.log(typeof(num))
let convertToNum = Number(num)
console.log(typeof(convertToNum))
console.log(convertToNum)


//conversion into boolean
//1-> true, 0->false, ""->false, "ygHDJKF"->ture
let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log("Value : ", booleanLoggedIn)
console.log(typeof booleanLoggedIn)

//checking for operation
console.log(undefined>=0)

//usage of symbol
const id = Symbol('e93')
const ids  = Symbol('e93')
console.log(id)
console.log(ids)
console.log(id===ids)

//Example how can we use bigInt
const bigNumber = 40938488439433489403285848084n
console.log("example of big int : ",bigNumber)


//Data types are of two types:
    /* 1) Primitive Type -> String, Number, Boolean, Undefined, Symbol, Null and BigInt
       2) Non-Primitive Type or refernce type-> Array, Object and function
    */ 

//reference types

//array
const heros = ['Hanuman ji', 'Angad']
heros.forEach(element => {
    console.log("Hero : ",element)
});

//object
let objects = {
    name: "Rajeshwar",
    age: 25,
    occupation: "Software Engineer"
}

console.log(objects.name,": ", objects.occupation)

//function
const myFunction = func()
{
    console.log("Function")
}

