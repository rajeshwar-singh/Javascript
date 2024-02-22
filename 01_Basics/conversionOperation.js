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

