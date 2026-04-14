"use strict"
// console.log("Program Starts here------")
// console.log("Hello There....")

// //int a = 10
// // var a = 10
// // var b = 20
// // var c = a + b
// // console.log(c)

// // a = "Adtya"
// // console.log(a)

// // let num = 40
// // let num2 = 60
// // let result = num + num2
// // console.log(result)

// // const PI = 3.14
// // const PI_VALUE = 3.14

// // let number1 = 10
// // let numberSumResult = number1 + PI_VALUE
// // console.log(numberSumResult)

// // //PI = 20
// // console.log(PI)

// // console.log(a)//undefined
// // console.log(b)

// // var a = 10
// // console.log(a)//10
// // console.log(b)

// // console.log(a)

// // let a = 10
// // console.log(a)

// var globalScopeOut = "I am a Global Scoped Var - OUT"
// let localScopeOut = "I am a Local Scoped Let - OUT"
// //GLOBAL SCOPE
// {
//     //LOCAL SCOPE
//     console.log(globalScopeOut)
//     console.log(localScopeOut)
//     var globalScope = "I am a Global Scoped Var"
//     let localScope = "I am a Local Scoped Let"
//     console.log(globalScope)
//     console.log(localScope)
//     //LOCAL SCOPE
// }
// //GLOBAL SCOPE
// // console.log(globalScope)
// // console.log(localScope)
// console.log(globalScopeOut)
// console.log(localScopeOut)

// var height
// console.log(height)
// var height
// console.log(height)

// let weight
// console.log(weight)
// // let weight
// // console.log(weight)

// console.log("Program Ends here------")

// height = 180
// let height = 180
// console.log(height)

// let greeting = "Hello!"
// let counter = 100

// console.log(greeting) // -> Hello!
// greeting = 1
// console.log(greeting) // -> 1

// greeting = "Hello!"
// greeting = greeting + counter
// console.log(greeting) // -> Hello!100

// greeting = greeting - counter
// console.log(greeting)

// //const HELLO_VARIABLE
// const HELLO_VARIABLE = "Hello!"
//HELLO_VARIABLE = "wkejbf"

// let counter
// console.log(counter) // -> undefined
// {
//    counter = 1
//    //console.log(counter) // -> 1
//    {
//       console.log(counter) // -> 1
//    }

// }
// counter = counter + 1
// console.log(counter) // -> 2

// var height = 180
// {
//    var weight = 70
//    console.log(height) // -> 180
//    console.log(weight) // -> 70   
// }
// console.log(height) // -> 180
// console.log(weight) // -> 70


// console.log("let's begin:") // -> let's begin:
// testFunction() 
// console.log("and again:") // -> and again:
// testFunction() 
// console.log("and once more:") // -> and once more:
// testFunction() 

// function testFunction() 
// {
//    console.log("Hello")
//    console.log("World")
// }

// let counter = 100
// console.log(counter) // -> 100
// {
//    counter = 200
//    console.log(counter) // -> 200
// }
// console.log(counter) // -> 200

// let counter = 100
// console.log(counter) // -> 100
// {
//   let counter = 200
//   console.log(counter) // -> 200
// }
// console.log(counter) // -> 200

// var counter = 100
// function testFunction() {
//    var counter = 200
//    console.log(counter)
// }
// console.log(counter) // -> 100
// testFunction() // -> 200
// console.log(counter) // -> 100

// var height = 180
// console.log(height)  // -> 180
// console.log(weight)

// var height = 180
// console.log(height)
// console.log(weight)
// var weight = 70
// console.log(weight) 


// myPlace = 'Bengaluru'  // var is hoisted
// console.log(myPlace)
// var myPlace
// let myName = "Subhajit"
// sayHi() // valid
// function sayHi()
// {
//     let greet = "hi"
//     console.log(greet, myName) 
// }

// //sayHello()
// var sayHello = function()
// {
//    console. log(myName)
// }

// console.log(thisIsConst)
// const thisIsConst = "HELLO"


// let year = 1990
// console.log(year) // -> 1990
// console.log(1991) // -> 1991
// console.log("Alice") // -> Alice

// console.log(typeof 1)
// console.log(typeof "1")
// console.log(typeof true)
// console.log(typeof month)

// let isDataValid = true
// let isStringTooLong = false
// let isGameOver = false
// let continueLoop = true
// console.log(false) // -> false
// console.log(typeof false) // -> boolean
// console.log(isDataValid) // -> true
// console.log(typeof isDataValid) // -> boolean

// const YEAR = 1991
// let delayInSeconds = 0.00016
// let area = (16 * 3.14)
// let halfArea = area / 2
// console.log(YEAR) // -> 1991
// console.log(typeof YEAR) // -> number

// console.log(9e3)
// console.log(0x123)
// console.log(0o123)
// console.log(0b1010101)

// let a = 10 // decimal - default 
// let b = 0x10 // hexadecimal 
// let c = 0o10 // octal 
// let d = 0b10 // binary 
// console.log(a) // -> 10 
// console.log(b) // -> 16 
// console.log(c) // -> 8 
// console.log(d) // -> 2 
// let x = 9e3
// let y = 123e-5
// console.log(x) // -> 9000
// console.log(y) // -> 0.00123

// console.log(Infinity)
// console.log(-Infinity)

// console.log(2/0)
// console.log(typeof Infinity)
// let s = "it's definitely not a number"
// let n = s * 10
// console.log(n) // -> NaN
// console.log(typeof n) // -> number

// let big = 1234567890000000000000n
// let big2 = 1n
// console.log(big) // -> 1234567890000000000000n
// console.log(typeof big) // -> bigint
// console.log(big2) // -> 1n
// console.log(7n / 4n) // -> 1n
// //console.log(7n / 4) // -> 1n

// //console.log(1000n/0n)

// let str = "Hello there, how are you?"
// let str1 = 'Hello there, how are you?'
// console.log(str)
// console.log(typeof str)
// console.log(str1)
// console.log(typeof str1)
// let name = "Hello 'Adtya'"
// let name1 = 'Hello "Adtya"'
// console.log(name)
// console.log(typeof name)
// console.log(name1)
// console.log(typeof name1)

// let name2 = `Hello "Adtya"`
// console.log(name2)

// let age = 20

// let name3 = `Hello "Adtya" ${age} is my Age` //string interpolation
// let name4 = "Hello 'Adtya' "+age+" is my Age"
// let name5 = "Hello 'Adtya' ${age} is my Age"
// console.log(name3)
// console.log(name4)
// console.log(name5)

// let message1 = 'The vessel \'Mars\' called at the port.'
// let message2 = "Cyclone \"Cilida\" to pass close to Mauritius."
// //let message3 = "Cyclone \"Cilida\" to pass close to Mauritius."
// console.log(message1) // -> The vessel 'Mars' called at the port.
// console.log(message2) // -> Cyclone "Cilida" to pass close to Mauritius.
// let path = "C:\\Windows"
// console.log(path) // -> C:\Windows

let path = "C:\\Windows" - "Windows"
console.log(path) // -> NaN
let test = "100" - "10"
console.log(test) // -> 90
console.log(typeof test) // -> number
