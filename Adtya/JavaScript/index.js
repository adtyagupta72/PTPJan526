// "use strict"
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

// let path = "C:\\Windows" - "Windows"
// console.log(path) // -> NaN
// let test = "100" - "10"
// console.log(test) // -> 90
// console.log(typeof test) // -> number

// console.time()
// console.log("test console") // -> test console
// for(let count = 0; count< 999999999; count++)
// {
//     let a = 10
//     let b = 20
//     let c = a + b
// }
// console.timeEnd() // -> default: 0.108154296875 ms

// console.log("adtya".toUpperCase())
// console.log(typeof "adtya".toUpperCase())
// console.log(typeof "adtya")

// let river = "Mekong"
// let character = river.charAt(4)
// console.log(character) // -> n

// console.log("100" + 10)
// let a = "100" + 10
// console.log(a)

// console.log(a.length)

// let str = "java script language"
// console.log(str.length) // -> 20
// console.log('test'.length) // -> 4
// console.log(str.charAt(0)) // -> 'j'
// console.log('abc'.charAt(1)) // -> 'b'
// console.log(str.slice(0, 4)) // -> 'java'
// console.log(str.slice(0, 6)) // -> 'java'
// console.log(str.slice(8)) // -> 'java'
// console.log('test'.slice(1, 3)) // -> 'es'
// console.log(str.split(' ')) // -> ['java', 'script', 'language']
// console.log('192.168.1.1'.split('.'))  // -> ['192', '168', '1', '1']


//String("adtya").toUpperCase()
//string name = "adtya"
//name.xyz()
//name => primitive
//name.xyz() => treats name as a object and applies method

// var declaredVar
// console.log(typeof declaredVar) // -> undefined
// declaredVar = 5
// console.log(typeof declaredVar) // -> number
// declaredVar = undefined
// console.log(typeof declaredVar) // -> undefined
// //The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.
// console.log(typeof notDeclaredVar) // -> undefined
// console.log(notDeclaredVar) // -> Uncaught ReferenceError:

// let someResource
// console.log(someResource) // -> undefined
// console.log(typeof someResource) // -> undefined
// someResource = null
// console.log(someResource) // -> null
// console.log(typeof someResource) // -> object

// const str = String()
// const num = Number()
// const bool = Boolean()
// console.log("str: ", str) // ->
// console.log("typeof str: ", typeof str) // ->
// console.log("num: ", num) // -> 0
// console.log("typeof num: ", typeof num) // -> 0
// console.log("ool: ", bool)
// console.log("typeof bool: ", typeof bool) // -> false
// const big1 = BigInt(42)
// console.log("big1: ", big1) // -> 42n
// console.log("typeof big1: ", typeof big1) // -> 42n
// //const big2 = BigInt()   // -> Uncaught TypeError: Cannot convert undefined to a BigInt


// let str1 = new String()
// console.log(str1)
// console.log(typeof str1)

// const num = 42
// const strFromNum1 = String(num)
// const strFromNum2 = String(8)
// const strFromBool = String(true)
// const numFromStr = Number("312")
// const numFromStr1 = Number("Hi")
// const boolFromNumber = Boolean(1)

// console.log("strFromNum1: ", strFromNum1)
// console.log("strFromNum2: ", strFromNum2)
// console.log("strFromBool: ", strFromBool)
// console.log("numFromStr: ", numFromStr)
// console.log("boolFromNumber: ", boolFromNumber)
// console.log("numFromStr1: ", numFromStr1)
// console.log("typeof NaN: ", typeof NaN)

// let str = "text"
// let strStr = String(str)
// console.log(`${typeof str} : ${str}`) // -> string : text
// console.log(`${typeof strStr} : ${strStr}`) // -> string : text
// let nr = 42
// let strNr = String(nr)
// console.log(`${typeof nr} : ${nr}`) // -> number : 42
// console.log(`${typeof strNr} : ${strNr}`) // -> string : 42
// let bl = true
// let strBl = String(bl)
// console.log(`${typeof bl} : ${bl}`) // -> boolean : true
// console.log(`${typeof strBl} : ${strBl}`) // -> string : true

// let bnr = 123n
// let strBnr = String(bnr)
// console.log(`${typeof bnr} : ${bnr}`) // -> bigint : 123
// console.log(`${typeof strBnr} : ${strBnr}`) // -> string : 123
// let un = undefined
// let strUn = String(un)
// console.log(`${typeof un} : ${un}`) // -> undefined : undefined
// console.log(`${typeof strUn} : ${strUn}`) // -> string : undefined
// let n = null
// let strN = String(n)
// console.log(`${typeof n} : ${n}`) // -> object : null
// console.log(`${typeof strN} : ${strN}`) // -> string : null

// console.log(Number(42)) // -> 42
// console.log(Number("11")) // -> 11
// console.log(Number("0x11")) // -> 17
// console.log(Number("0o11")) // -> 9
// console.log(Number("0b11")) // -> 3
// console.log(Number("12e3")) //  -> 12000
// console.log(Number("Infinity"))// -> Infinity
// console.log(Number("text")) // -> NaN
// console.log(Number(14n)) // -> 14
// console.log(Number(123456789123456789123n)) // - >  123456789123
// console.log(Number(true)) // -> 1
// console.log(Number(false)) // -> 0
// console.log(Number(undefined)) //  -> NaN
// console.log(Number(null))// -> 0

//console.log("" == true)
/*
Truthy -> " ", "a", 1, 99, true, [1], ["a"], {a: "a"}
Falsy -> "", 0, false, [], {}, undefined, NaN, null
*/
// console.log(Boolean(true)) // -> true
// console.log(Boolean(42)) // -> true
// console.log(Boolean(0)) // -> false
// console.log(Boolean(NaN)) // -> false
// console.log(Boolean("text")) // -> true
// console.log(Boolean("")) // -> false
// console.log(Boolean(undefined)) // -> false
// console.log(Boolean(null)) // -> false

// console.log(BigInt(11)) // -> 11n
// console.log(BigInt(0x11)) // -> 17n
// console.log(BigInt(11e2)) // -> 1100n
// console.log(BigInt(true)) // -> 1n
// console.log(BigInt("11")) // -> 11n
// console.log(BigInt("0x11")) // -> 17n
// console.log(BigInt(null)) // -> Uncaught TypeError: Cannot convert null to a BigInt
// console.log(BigInt(undefined)) // -> Uncaught TypeError: Cannot convert undefined to a BigInt
// console.log(BigInt(NaN)) // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

// const str1 = 42 + "1"
// console.log(str1)        // -> 421
// console.log(typeof str1) // -> string
// const str2 = 42 - "1"
// console.log(str2)        // -> 41
// console.log(typeof str2) // -> number

// let testObj = {
//     nr: 600,
//    str: "text"
// }
// console.log(typeof testObj) // -> object
// console.log(testObj)

// console.log(testObj.nr) // -> 600
// console.log(testObj.str) // -> text

// testObj.nr = 200
// testObj.str = "Adtya"
// testObj.age = 20

// console.log(testObj.nr)
// console.log("typeof testObj.nr", typeof testObj.nr)
// console.log(testObj.str)
// console.log("typeof testObj.str", typeof testObj.str)
// console.log(testObj.age)
// console.log("typeof testObj.age", typeof testObj.age)

// let user1 = {
//    name: "Calvin",
//    surname: "Hart",
//    age: 66,
//    email: "CalvinMHart@teleworm.us"
// }
// let user2 = {
//    name: "Mateus",
//    surname: "Pinto",
//    age: 21,
//    email: "MateusPinto@dayrep.com"
// }
// console.log(user1)
// console.log("typeof user1:", typeof user1)
// console.log("user1.name: ", user1.name)
// console.log("user1.surname: ", user1.surname)
// console.log("user1.age: ", user1.age)
// console.log("user1.email: ", user1.email)
// console.log("user1.abc: ", user1.abc)

// console.log(user2)
// console.log("typeof user2:", typeof user2)
// console.log("user2.name: ", user2.name)
// console.log("user2.surname: ", user2.surname)
// console.log("user2.age: ", user2.age)
// console.log("user2.email: ", user2.email)
// console.log("user2.abc: ", user2.abc)

// user2.name = "Nirbhay"
// console.log("user2.name: ", user2.name)
// delete user2.name
// console.log("user2.name: ", user2.name)

// delete user2
// console.log("user2: ", user2)

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(days[0]) // -> Sun
// console.log(days[2]) // -> Tue
// console.log(days[5]) // -> Fri
// days[0] = "Sunday"
// console.log(days[0]) // -> Sunday
// let emptyArray = []
// console.log(emptyArray[0]) // -> undefined

// console.log(days)

// let myArray
// myArray = [1,2,3,5]
// console.log(myArray)

// let myArray2
// console.log(myArray2)
// //myArray2 = []
// //myArray2[0] = "One"
// console.log(myArray2)

// console.log(typeof myArray2)

// let animals 
// animals = []
// //console.log(animals[0]) // -> undefined
// animals[0] = "dog"
// animals[2] = "cat"
// console.log(animals[0]) // -> dog
// console.log(animals[1]) // -> undefined
// console.log(animals[2]) // -> cat

// console.log(typeof animals)
// console.log("animals instanceof Array: ", animals instanceof Array)
// let newAnimal = new String("Cat")
// console.log("newAnimal instanceof Array: ", newAnimal instanceof Array)
// console.log("newAnimal instanceof String: ", newAnimal instanceof String)

// let values = ["Test", 7, 12.3, false, Infinity, undefined, null]
// console.log("values:", values)
// console.log("values[0]:", values[0])
// console.log("values[1]:", values[1])
// console.log("values[2]:", values[2])
// console.log("values[3]:", values[3])
// console.log("values[4]:", values[4])
// console.log("values[5]:", values[5])
// console.log("values[6]:", values[6])
// console.log("values[7]:", values[7])

// let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]]
// console.log(names[0]) // -> ["Olivia", "Emma", "Mia", "Sofia"]
// console.log(names[0][1]) // -> Emma
// console.log(names[1][1]) // -> James
// let femaleNames = names[0]
// console.log(femaleNames[0]) // -> Olivia
// console.log(femaleNames[2]) // -> Mia

// let user1 = {
//    name: "Calvin",
//    surname: "Hart",
//    age: 66,
//    email: "CalvinMHart@teleworm.us"
// }
// let user2 = {
//    name: "Mateus",
//    surname: "Pinto",
//    age: 21,
//    email: "MateusPinto@dayrep.com"
// }
// console.log("user1: ", user1)
// console.log("user1 name: ", user1.name)
// console.log("user1 surname: ", user1.surname)
// console.log("user2: ", user2)

// let users =[ 
//    {
//       name: "Calvin",
//       surname: "Hart",
//       age: 66,
//       email: "CalvinMHart@teleworm.us"
//    },
//    {
//       name: "Mateus",
//       surname: "Pinto",
//       age: 21,
//       email: "MateusPinto@dayrep.com"
//    }
// ]
// console.log(users[0].name) // -> Calvin
// console.log(users[1].age) // -> 21
// users[2] = {
//    name: "Irene",
//    surname: "Purnell",
//    age: 32,
//    email: "IreneHPurnell@rhyta.com"
// }
// console.log(users[0].name) // -> Calvin
// console.log(users[1].name) // -> Mateus
// console.log(users[2].name) // -> Irene

// let names  = ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names.length)
// names[5] = "Amelia"
// console.log(names.length)
// console.log(names)
// console.log(names[3])
// console.log(names[4])
// console.log(names[5])

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names.indexOf("Mateo")) // -> 2
// console.log(names.indexOf("Victor")) // -> -1

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names.length) // -> 4
// names.push("Amelia")
// console.log(names.length) // -> 5
// console.log(names) // - > ["Olivia", "Emma", "Mateo", "Samuel", "Amelia"]

// names.unshift("Adtya")
// console.log(names)
// console.log(names.indexOf("Adtya"))

// let poped = names.pop()
// console.log("Poped: ", poped)
// console.log("Length of names: ", names.length)
// console.log("names: ", names)

// let shifted = names.shift()
// console.log("shifted: ", shifted)
// console.log("Length of names: ", names.length)
// console.log("names: ", names)

// names.reverse()
// console.log("names: ", names)

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// let n1 = names.slice(2)
// console.log(n1)
// console.log(names)

// let n2 = names.slice(1,3)
// console.log(n2)
// console.log(names)

// let n3 = names.slice(0, -1)
// console.log(n3)
// console.log(names)

// let n4 = names.slice(-1)
// console.log(n4) // -> ["Samuel"]
// console.log(names)

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// let otherNames = ["William", "Jane"]
// let allNames = names.concat( otherNames)
// console.log("names: ", names) // -> ["Olivia", "Emma", "Mateo","Samuel"]
// console.log("otherNames: ", otherNames) // -> ["William", "Jane"]
// console.log("allNames: ", allNames)

// let names = otherNames.concat(names)
// console.log("names: ", names) // -> ["Olivia", "Emma", "Mateo","Samuel"]
// console.log("otherNames: ", otherNames) // -> ["William", "Jane"]
// console.log("allNames1: ", allNames1)

// var number1 = 10
// let number2 = 20
// {
//     console.log(number1)
//     console.log(number2)
//     var number3 = 30
//     let number4 = 40
//     console.log(number3)
//     console.log(number4)
//     {
//         console.log(number3)
//         console.log(number4)
//     }
// }
// console.log(number1)
// console.log(number2)
// console.log(number3)
// console.log(number4)

// const name = "Alice"
// console.log(name) // -> Alice

// let year = 2050
// let newYear = year = 2051
// console.log(year)
// console.log(newYear)

// let year = 2050
// year = 2051
// let newYear = year
// console.log(year)
// console.log(newYear)

// console.log(2 + 2 * 2)
// console.log(2 + (2 * 2))
// console.log((2 + 2) * 2)

// const x = 5
// const y = 2
// console.log("addition: ", x + y) // -> 7
// console.log("subtraction: ", x - y) // -> 3
// console.log("multiplication: ", x * y) // -> 10
// console.log("division: ", x / y) // -> 2.5
// console.log("division remainder :", x % y) // -> 1
// console.log("exponent: ", x ** y) // -> 25

// let str = "123"
// let n1 = +str
// let n2 = -str
// let n3 = -n2
// let n4 = +"abcd"

// console.log(`${str} : ${typeof str}`) // -> 123 : string
// console.log(`${n1} : ${typeof n1}`) // -> 123 : number
// console.log(`${n2} : ${typeof n2}`) // -> -123 : number
// console.log(`${n3} : ${typeof n3}`) // -> 123 : number
// console.log(`${n4} : ${typeof n4}`) // -> NaN : number

// let n1 = 10
// console.log(n1++)
// console.log(n1)

// console.log(++n1)
// console.log(n1)

// console.log(0.2 + 0.1)
// console.log(0.2 * 0.1)
// console.log(0.3 / 0.1)


// let x = 10
// x += 2
// console.log(x) // -> 12
// x -= 4
// console.log(x) // -> 8
// x *= 3
// console.log(x) // -> 24
// x /= 6
// console.log(x) // -> 4
// x **= 3
// console.log(x) // -> 64
// x %= 10
// console.log(x) // -> 4

// console.log("true && true: ", true && true)
// console.log("true && false: ", true && false)
// console.log("false && true: ", false && true)
// console.log("false && false: ", false && false)

// console.log(true || true) // -> true
// console.log(true || false) // -> true
// console.log(false || true) // -> true
// console.log(false || false) // -> false


// console.log(!true) // -> false
// console.log(!false) // -> true
// const a = false
// const b = true
// const c = false
// const d = true
// console.log(a && b && c || d)
// console.log(a && b && (c || d))

// let nr = 0
// let year = 1970
// let name = "Alice"
// let empty = ""
// console.log(!nr) // -> true
// console.log(!year) // -> false
// console.log(!name) // -> false
// console.log(!empty) // -> true
// console.log(!!nr) // -> false
// console.log(!!name) // -> true


//Truthy - 1,2 ,3 4, 5, " ", "a", [0], {a:1}
//Falsy - 0, "", undefined , null, [], {}
//&& => second if True, First if False
//|| => First if True, second is False
// console.log(true && 1991) // -> 1991
// console.log(false && 1991) // -> false
// console.log(2 && 5) // -> 5
// console.log(0 && 5) // -> 0
// console.log("Alice" && "Bob") // -> Bob
// console.log("" && "Bob") // -> empty string
// console.log(true || 1991) // -> true
// console.log(false || 1991) // -> 1991
// console.log(2 || 5) // -> 2
// console.log(0 || 5) // -> 5
// console.log("Alice" || "Bob") // -> Alice
// console.log("" || "Bob") // -> Bob

// let x = 0
// let y = 0
// x++ // x = x + 1// 1
// console.log("x=>", x)
// ++x     // 2
// console.log("x=>", x)

// console.log("(with x++) x=>", (x++))//1
// console.log("x=>", x)
// //x=> 3
// console.log("(With ++x) x=>", ++x)//2
// console.log("x=>", x)


// let x = 1
// let y = 0
// console.log(x++ && y++)
// console.log("x=>", x)
// console.log("x=>", y)
// console.log(x++ || y++)
// console.log("x=>", x)
// console.log("y=>", y)

/*
x   y   x||y
------------
0   0   0
1   0   1  
1   1   1
0   1   1   
*/

// let a = true
// console.log(a) // -> true
// a &&= false// -> a = a && false
// console.log(a) // -> false

// let b = false
// console.log(b) // -> false
// b ||= true
// console.log(b) // -> true

// console.log(6*5 == "30")
// console.log("10" - 100)

// let greetings = "Hi"
// console.log(greetings + " " + "Alice") 
// let sentence = "Happy New Year "
// let newSentence = sentence + 10191
// console.log(newSentence)
// console.log(typeof newSentence)

// sentence = "Happy New "
// sentence += "Year "
// sentence += 10191
// console.log(sentence)

// console.log("10 === 10: ", 10 === 10) // -> true
// console.log("10 === 10n:", 10 === 10n) // -> false
// console.log("10 == 10n:", 10 == 10n) // -> false
// console.log("10 === \"10\":", 10 === "10") // -> false
// console.log("10 == \"10\":", 10 == "10")
// console.log('"10" === "10":', "10" === "10") // -> true
// console.log('"Alice" === "Bob": ', "Alice" === "Bob") // -> false
// console.log('"Alice" == "Bob": ', "Alice" == "Bob") // -> false
// console.log("0 === false: ",0 === false) // -> false
// console.log("0 == false: ",0 == false) // -> false
// console.log("undefined === false:", undefined === false) // -> false
// console.log("undefined == false:", undefined == false) // -> false

// console.log("NaN == NaN: ",NaN == NaN)
// console.log("NaN === NaN: ",NaN === NaN)

// console.log(10 !== 5) // -> true
// console.log(10 !== 10) // -> false
// console.log(10 !== 10n) // -> true
// console.log(10 !== "10") // -> true
// console.log("10" !== "10") // -> false
// console.log("Alice" !== "Bob") // -> true
// console.log(0 !== false) // -> true
// console.log(undefined !== false) // -> true
// console.log(10 != 5) // -> true
// console.log(10 != 10) // -> false
// console.log(10 != 10n) // -> false
// console.log(10 != "10") // -> false
// console.log("10" != "10") // -> false
// console.log("Alice" != "Bob") // -> true
// console.log(0 !=  false) // -> false
// console.log(undefined != false) // -> true
// console.log(NaN != NaN) // -> true

// console.log("10 > 100:", 10 > 100) // -> false
// console.log("101 > 100:", 101 > 100) // -> true
// console.log('101 > "100": ', 101 > "100") // -> true
// console.log("101 < 100: ", 101 < 100) // -> false
// console.log("100n < 102: ", 100n < 102) // -> true
// console.log('"10" < 20n: ',"10" < 20n) // -> true
// console.log("101 <= 100: ", 101 <= 100) // -> false
// console.log("10 >= 10n: ", 10 >= 10n) // -> true
// console.log('"10" <=  20: ',"10" <=  20) // -> true


// console.log("b" > "a") // -> true
// console.log("a" > "B") // -> true
// console.log("B" > "A") // -> true
// console.log("A" > "4") // -> true
// console.log("4" > "1") // -> true
// console.log("ab1" < "ab4") // -> true
// console.log("ab4" < "abA") // -> true
// console.log("abB" < "aba") // -> true
// console.log("aba" < "abb") // -> true
// console.log("ab" < "ab4") // -> true

// let names = ["Patti", "Bob"]
// let name1 = names[0]
// name1 = new String(name1)
// console.log(names instanceof Array)
// console.log(name1 instanceof Array)
// console.log(name1 instanceof String)

// let user = {
//  name: "Alice",
//  age: 38
// }
// console.log(user.age)
// delete user.age
// console.log(user.age)

// //Syntax -> condition ? value1 : value2
// console.log(true ? "Alice" : "Bob")
// console.log(false ? "Alice" : "Bob")

// let name = 1 > 2 ? "Alice" : "Bob"
// console.log(name)


// let a = 10
// let b = a + 2 * 3
// let c = a + 2  < 20 - 15
// console.log(a)
// console.log(b)  //
// console.log(c)  //

// let myArray = [1, 2, 3, 4, 5, 6]
// console.log(...myArray)

function openConfirmationDialog()
{
    let decision = window.confirm("Is it OK?")
    console.log("This is confirmation dialog response: ", decision)   
}

function openPromptDialog()
{
    let name = window.prompt("What is your name?")
    name = name ? name : "anonymous"
    let age = prompt("Hello " + name + ", how old are you?")
    alert(name + " is " + age + " years old")
}

// let remove = window.confirm("Remove all data?")
// let message = remove ? "Deleting Data" : "Cancelled"
// console.log(message)

// let price = 50
// let shippingCost = price > 50 ? 0 : 5
// console.log(`price = ${price}, shipping = ${shippingCost}`) 

// console.log(0) 
// console.log(10) 
// console.log(20) 
// console.log(30)
// console.log(40) 
// console.log(50) 
// console.log(60) 
// console.log(70) 
// console.log(80) 
// console.log(90)

// let n = 0
// console.log(n) 
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n) 
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10

// let n = 0
// while(n < 91) 
// {
//     console.log(n) 
//     n += 10
// }
/*
n   0   10  20  30  40  50  60....  90    100
op  0   10  20  30  40  50  60      90    
*/


// let fruits = ["apple", "banana", "mango"]
// let index = 0
// while (index < fruits.length) 
// {
//     console.log(fruits[index])
//     index++
// }

// let num = 2
// while (num <= 20) 
// {
//     console.log(num)
//     num += 2
// }

// let n = 10
// while (n >= 1) 
// {
//   console.log(n)
//   n--
// }

// let condition = false

// while(condition)
// {
//     console.log("A while loop iteration.") // never executed
// }
// do 
// {
//     console.log("A do ... while loop iteration.") // executed once
// } 
// while (condition)

// let text = "Divya"
// let i = 0
// do 
// {
//     console.log(text[i])
//     i++
// } 
// while (i < text.length)

// let index = 0
// for(; index < 10;)
// { 
//     console.log(index) 
//     index++
// }

// let i = 0
// while(i < 10) 
// {
//     console.log(i)
//     i++
// }

// let values = [10, 30, 50, 100]
// let sum = 0				
// for(let index = 0; index < 4; index++) 
// {
//     sum += values[index]		
// }					
// console.log(sum) // 190				


// let numbers = [2, 5, 8, 11, 14]
// let evenCount = 0
// for(let index = 0; index < numbers.length; index++) 
// {
//    	if(numbers[index] % 2 === 0) 
//     {
//         evenCount++
//     }
// }
// console.log("Even numbers count:", evenCount)

// let fruits = ["apple", "banana", "mango", "grape"]
// for(let index = fruits.length - 1; index >= 0; index--) 
// {
//     console.log(fruits[index])
// }


// let values = [10, 30, 50, 100]
// for(let index = 0; index < values.length; index++) 
// {
//     console.log(values[index]) // -> 10, 30, 50, 100
// }
// console.log("-------")
// for(let index = values.length - 1; index >= 0; index--) 
// {
//    	console.log(values[index]) // -> 100, 50, 30, 10
// }
// console.log("-------")
// for(let index = 0; index < values.length; index += 2) 
// {
//     console.log(values[index]) // -> 10, 50
// }
// let values = [10, 30, 50, 100]

// for(let element of values)
// {
//     console.log(element)
// }

// let sum = 0
// for(let index = 0; index < values.length; index++) 
// {
//     sum += values[index]
// }
// console.log(sum) 

// sum = 0
// for(let number of values) 
// {
//     sum += number
// }
// console.log(sum)


// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ]
// for(let city of cities) 
// {
//     if (city.population > 20e6) 
//     {
//         console.log(`${city.name} (${city.population})`)
//     }
// }

// let names = ["Alice", "Bob", "Charlie"]
// for(let name of names) 
// {
//     console.log(name)
// }

// let fruits = ["apple", "banana", "mango"]
// for(let fruit of fruits) 
// {
//     console.log(fruit)
// }

// let user = 
// {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// }

// for(let key in user) 
// {
//   	//console.log(key) // -> name, surname, age, email
//     console.log(`${key} -> ${user[key]}`)
// }

// let user = { name: "Swati", age: 25 } 
// for(let key in user) 
// { 
//     console.log(`${key}: ${user[key]}`) 
// }

// const array1 = ["a", "b", "c"]
// for(const element of array1) 
// {
//   	console.log(element)
// }

// let i = 0
// while (true) 
// {
//     console.log(i)
//     i++
//     if (i >= 5) 
//     {
//         break
//     }
// }
// console.log('Exited the loop with break')

// for(let i = 0; i < 10; i++) 
// {
//     if(i == 3 || i == 6) 
//     {
//         continue
//     }
//     console.log(i)
// }

// let fruits = ["apple", "banana", "mango", "orange", "grapes"]
// for(let i = 0; i < fruits.length; i++) 
// {
//     if(fruits[i] === "mango") 
//     {
//        	console.log("Mango found at index " + i)
//         break
//     }
//     console.log("The fruit iterated: ", fruits[i])
// }

// for(let i = 1; i <= 10; i++) 
// {
//     if (i % 2 == 0) 
//     {
//         continue
//     }
//     console.log(i)
// }

// let temperatures
// let sum
// let meanTemp
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// sum = 0
// for(let i = 0; i < temperatures.length; i++) 
// {
//     sum += temperatures[i]
// }
// meanTemp = sum / temperatures.length
// console.log(`mean: ${meanTemp}`) 
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// sum = 0
// for(let i = 0; i < temperatures.length; i++) 
// {
//     sum += temperatures[i]
// }
// meanTemp = sum / temperatures.length
// console.log(`mean: ${meanTemp}`)

// function getMeanTemp() 
// {
//     sum = 0
//     for(let i = 0; i < temperatures.length; i++) 
//     {
//         sum += temperatures[i]
//     }
//     meanTemp = sum / temperatures.length    
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// getMeanTemp()
// console.log(`mean: ${meanTemp}`) 

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// getMeanTemp()
// console.log(`mean: ${meanTemp}`) 

// let name = "Alice"
// showName()
// function showName() 
// {
//     console.log(name)
// }


// function sayHello()
// {
//   	console.log("Hello, world!")
// }
// console.log("About to call the function...")
// sayHello() 
// console.log("Function call finished.")
// function showMessage() 
// {
//     alert( 'Hello everyone!' )
// }
// showMessage()

// function getMeanTemp(temperatures) //parameters
// {
//     let sum = 0
//     for(let i = 0; i < temperatures.length; i++) 
//     {
//      	sum += temperatures[i]
//    	}
//     return sum / temperatures.length
// }
// let result = getMeanTemp([12, 13, 14])//Arguments
// console.log(`mean: ${result}`)

// function showMsg()
// {
//     console.log("message 1")
//     return
//     console.log("message 2")
// }
// showMsg() 

// temperatures
// meanTemp
// function getMeanTemp(temperatures)
// {
//     let sum = 0
//     let result
//     for(let i = 0; i < temperatures.length; i++) 
//     {
//         sum += temperatures[i]
//    	}
//     result = sum / temperatures.length
//     return result  
// }

// let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// console.log(`mean: ${getMeanTemp(day1)}`)
// let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// console.log(`mean: ${getMeanTemp(day2)}`) 

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// meanTemp = getMeanTemp()
// console.log(`mean: ${meanTemp}`)

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// meanTemp = getMeanTemp()
// console.log(`mean: ${meanTemp}`)

// function add(first, second) 
// {
//   	return first + second
// }
// let result = add(5, 7)
// console.log(result)


// let names = ["Alice", "Bob", "Eve", "John"]
// let name = getElement(names, 2)
// console.log(name)

// function getElement(name, index)
// {
//     return name[index]
// }

// function add(first, second) 
// {
//     return first + second
// }
// let first = 10, second = 20, third = 40, fourth = 80
// console.log(add(first, second))  
// console.log(add(second, third)) 
// console.log(add(third, fourth))

// let a = 100, b = 200, c = 300
// function test(a) 
// {
//   let b = 10
//   console.log(a)
//   console.log(b)
//   console.log(c) 
// }
// test(1)
// console.log(a)
// console.log(b) 
// console.log(c) 

// function showMessage(message) 
// {
//     console.log(`Message: ${message}`)
// }
// let sm = showMessage

// sm("This works!") // -> Message: This works!
// console.log(typeof sm)

// function doNothing() 
// {
//   	return undefined
// }

// let a = doNothing() // assign result of function call
// let b = doNothing   // assign a function
// console.log(a)
// console.log(typeof a) // -> undefined
// console.log(b)
// console.log(typeof b) // -> function

// function add(a, b) 
// {
// 	return a + b
// }
// function multiply(a, b) 
// {
//  	return a * b
// }
// function operation(func, first, second) 
// {
//  	return func(first, second)
// }
// console.log(operation(add, 10, 20))      
// console.log(operation(multiply, 10, 20))

// let myAdd = function(a, b) 
// {
//     return a + b
// }
// console.log(myAdd)
// console.log(typeof myAdd)
// console.log(myAdd(10, 20))

// let myAdd = function add(a, b) 
// {
//     return a + b
// }
// myAdd = add
// console.log(myAdd)
// console.log(typeof myAdd)
// console.log(myAdd(10, 30))

// console.log(add)
// console.log(typeof add)
// console.log(add(10, 20))
// function add(a, b) 
// {
//    	return a + b
// }
// myAdd = add
// console.log(myAdd(10, 20))
// console.log(add(10, 20))

// let myAdd = function(a, b) 
// {
//     return a + b
// }
// console.log(myAdd(10, 20)) 

// function operation(func, first, second) 
// {
//     return func(first, second)
// }
// myAdd = function(a, b) 
// {
//     return a + b
// }
// console.log(operation(myAdd, 10, 20))
// console.log(operation( function(a, b) 
// {
//     return a + b
// }, 10, 20))

// function getMeanTemp(temperatures) 
// {
//     if (!(temperatures instanceof Array)) 
//     {
//     	return "Invalid Input, please check and try again!"
//     }
//     let sum = 0
//     for(let i = 0; i < temperatures.length; i++) 
//     {
//     	sum += temperatures[i]
//     }
//    	return sum / temperatures.length
// }
// console.log(getMeanTemp([10, 20, 30])) 
// console.log(getMeanTemp("not an array")) 

// function addNumbers(a, b) 
// {
//    	if (typeof a !== "number" || typeof b !== "number") 
//     {
//         // if(typeof a === "string")
//         // {
//         //     let conv = int(a)
//         //     if(typeof conv === "number")
//         //         a = conv
//         // }
//         return "Invalid input: numbers expected"
//    	}
//     return a + b
// }
// console.log(addNumbers(5, 7))        
// console.log(addNumbers("5", 7))   

// let inner = function() 
// {
//   	console.log('inner 1')
// }
// let outer = function(callback) 
// {
//  	console.log('outer 1')
//   	callback()
//    	console.log('outer 2')
// }
// console.log('test 1')
// outer(inner)
// console.log('test 2')

// let fruits = ["apple", "banana", "kiwi"]
// let intervalID = 0
// const animateAll = (animate) =>
// {
//     setTimeout (()=> {
//         animate(fruits[0])
//         setTimeout(()=>{
//             animate(fruits[1])
//             intervalID = setInterval(()=> {
//                 animate(fruits[2])
//                 clearInterval(intervalID)
//             },1000)
//         },1000)
//     },1000)
// }
// const animate = (fruit)=> {
//     console.log("animating", fruit)
// }
// animateAll(animate)

// console.log("Start")
// setTimeout(function() 
// {
//   	console.log("This runs after 1 second")
// }, 1000)
// console.log("End")

// let counter = 0
// let intervalId = setInterval(function() 
// {
//    	console.log("Repeating:", ++counter)
// }, 1000)
// setTimeout(function() 
// {
//    	clearInterval(intervalId)
//    	console.log("Stopped")
// }, 5500)


// let inner = function() 
// {
//     console.log('inner 1')
// }
// let outer = function(callback)
// {
//     console.log('outer 1')
//     let timerId = setInterval(callback, 1000) 
//     console.log('outer 2')
//     setTimeout(function()
//     {
//         clearInterval(timerId)
//     }, 5500)
// }
// console.log('test 1')
// outer(inner)
// console.log('test 2')	

// window.addEventListener("click", function() 
// {
//     console.log("clicked!")
// })

// let add = function(a, b)
// {
//     return a + b
// }

// let add = (a, b) =>
// {
//    	return a + b
// }
// let add = (a, b) => a + b
// console.log(add(10, 20))

// function factorial(n)
// {
//     return n > 1 ? n * factorial(n - 1) : 1
// }

// let factorial = n => n > 1 ? n * factorial(n - 1) : 1
// console.log(factorial(5))


// let names = ['Alice', 'Eve', 'John']
// function showName(element) 
// {
//     console.log("Name: ",element)
// }
// names.forEach(showName)

// let greet = () => console.log("Hello!")
// greet()

// let square = x => x * x
// console.log(square(5))

// let multiply = (a, b) => a * b
// console.log(multiply(4, 3)) 


// function factorial(n) 
// {
//     let result = 1
//     // while (n > 1) 
//     // {
//     //     result *= n
//     //     n--
//     // }

//     for(let i = 2; i <= n; i++) 
//     {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(6))
// console.log(factorial(5))

// function sum(a) 
// {
//     return function(b) 
//         {
//             return function(c) 
//                 {
//                     return a+b+c
//                 }
//         }
// }
// console.log(sum(3)(4)(5))
// console.log(sum(30)) //=> function(function())
// console.log(sum(30)(20)) //=> function(function())
// const logger = (time) => (type) => (message) => `At time: ${time}, 
// an event of type: ${type}, occurred with full details as: ${message}` 
// const eventsNow = logger( '5am' )
// const errorEvent = eventsNow( 'error' )
// console. log(errorEvent('cannot set properties of null' ))
/*
function sum(a)
    r => f(b)
        r => f(c)
f1 = sum(10)
f1(20) => sum(10)(20)
f2 = f1(20)
f2(30) => f1(20)(30) => sum(10)(20)(30)
*/
// const inputElement = document.getElementById('fruits')
// function printInputText(text) 
// {
//     console.log(text)
//     //API Call
// }
// function debounce(fx, delay)
// {
//     let timeoutId = null
//     return function(text) {
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout (() => 
//         {
//             fx(text)
//         }, delay)
//     }
// }
// const debounceFn = debounce(printInputText, 2000)
// inputElement.addEventListener('input', (event) => 
// {
//     console.log("fruits")
//     debounceFn(event.target.value)//1234567
// })

// let count = 0
// function printScroll()
// {
//     count += 1
//     console. log("scroll called", count) 
// }
// function throttle(fx, delay)
// {
//     let timeoutId = null
//     return function () 
//     {
//         if(!timeoutId)
//         {
//             timeoutId = setTimeout (() => 
//             {
//                 fx() 
//                 clearTimeout(timeoutId) 
//                 timeoutId = null
//             }, delay)
//         }
//     }
// }
// const throttleFn = throttle(printScroll, 2000)
// document.addEventListener('scroll', (event) => 
// {
//     throttleFn()
// })

// const obj = {
//     value: 42,
//     getValue: async function getValue() 
//     {
//         console.log(this.value)
//         await new Promise((resolve) => setTimeout(resolve, 1000))
//         console.log(this.value * 2)
//     }
// }    
// const { value, getValue } = obj
// getValue()

// class Mixer 
// {
//     constructor (name) 
//     {
//         this.name = name
//     }
//     async start() 
//     {
//         console.log("Start: ", this.name) 
//         setTimeout ( () => 
//         {
//             console.log("Inside Timeout: ", this.name) 
//         }, 1000)
//         await new Promise((resolve) => setTimeout(resolve, 500))
//         console.log("After Await: ", this.name)
//     }
// }
// const mixer = new Mixer("MixerTest")
// mixer.start()

// class DataHandler 
// {
//     constructor (data) 
//     {
//         this.data = data
//         console.log("Property from constructor:", this.data)
//     }
//     async processData() 
//     {
//         console.log("Processing: ", this.data)
//     	await Promise.resolve()
//     	console.log( "Processed: ", this.data.toUpperCase())
//     }
// }
// const handler = new DataHandler("async")
// const boundProcess = handler.processData.bind( { data: "boundData" })
// boundProcess() 
// const handler2 = new DataHandler()


// function Handler(name) 
// {
//     this.name = name
// }
// Handler.prototype.asyncMethod = async function () 
// {
//     console.log(this.name) 
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     console.log(this.name.toUpperCase())
// }
// const handler = new Handler("Prototype Test")
// handler.asyncMethod() 
// const detachedMethod = handler.asyncMethod
// detachedMethod()

// console.log( 5 +"5")        //55
// console.log("5" + 5)        //55
// console.log("5" + "5")      //55
// console.log(95 - "5")       //90    NaN
// console.log("5" - 95)       //-90   NaN

// console.log(5 * "A")

// console.log('abc')
// conole.log('def') 
// console.log('ghi')

// let multiply = (a b) => a + b

// let multipl = (a, b) => a + b
// let result = multiply(10, 20)

// let multiply = (a, b) => a + b
// let result = multiply(5, 10)
// console.log(result)

// try
// {
//     console.log('abc')
//     conole.log('abc')
// }
// catch(error) 
// {  
//     console.log(error.message)
//     console.log(error)
// }

// try
// {
//     console.log("Start")
//     conole.log("Oops!")
//     console.log("This won't run")
//     weogb
// }
// catch (error) 
// {
//     console.log("Caught an error:")
//     console.log(error.message)  
// }
// console.log("Program continues...")
// if(isNaN("A"-10))
// {

// }
// else
// {

// }

// console.log(100 / 0) // -> Infinity
// console.log(100 * "2") // -> 200
// console.log(100 * "abc") // -> NaN

// let sX = prompt("Enter the first number")
// let sY = prompt("Enter the second number")
// let x = Number(sX)
// let y = Number(sY)
// if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) 
// {
//     console.log(x / y)
// } 
// else
// {
//     console.log("incorrect arguments")
// }


// iff(true)
// { //-> Uncaught SyntaxError: Unexpected token '{'
//    	 console.log("true")
// }

// let a = b
// fun()

// const someConstValue = 5
// someConstValue = 7

// let someNumber = 10
// someNumber.length()
// let value = -1
// if (value < 0)
// {
//   throw new RangeError("Value must be non-negative")
// }

// let testArray1 = Array(10)
// console.log(testArray1.length)
// let testArray2 = Array(-1) 
// console.log(testArray2.length)

// let b = 10
// try
// {
//     let a = b
//     let num = 42
//     num() 
// } 
// catch (error)
// {
//     console.log("Caught " + error)
//     let result = error instanceof ReferenceError
//     console.log(result)
//     if(error instanceof ReferenceError)
//     {
//         console.log("This is first line which is crashing!")
//     }
//     else if(error instanceof TypeError)
//     {
//         console.log("This is the third line crashed!")
//     }
// }
// console.log("We handled the exception!")

// try 
// {
    
// } 
// catch (error) 
// {
//     console.log("Caught a TypeError: " + error.message)
//     let result = error instanceof ReferenceError
//     console.log(result)
//     result = error instanceof TypeError
//     console.log(result)
// }


// let a = 10
// try 
// {
//     a = 5
// }
// finally 
// {
//     console.log("Finally executed!")
// }
// console.log(a) 

// let a = 10
// try 
// {
//     a = b 
// } 
// finally 
// {
//     console.log(a) 
// }
// console.log(a)

// let a = 10
// try 
// {
//     a = b  // ReferenceError
// } 
// catch (error) 
// {
//     console.log("An Error!") 
// } 
// finally 
// {
//     console.log("Finally!") 
// }
// console.log(a) 

// let a = 10
// try 
// {
//     a = b 
// } 
// catch (error) 
// {
//     try 
//     {
//    	    console.log(b)
//     } 
//     catch 
//     {
//      	console.log("Second catch!") 
//     }
// } 
// finally 
// {
//     console.log("Finally!") 
// }


// console.log("start")
// throw 100 
// console.log("end")


// console.log("start") 
// try 
// {
//     throw 100
// } 
// catch (error) 
// {
//     console.log(error) 
// }
// console.log("end") 

// function factorial(n) 
// {
//     if (n > 20) 
//     {
//         throw new RangeError("Max value 20")
//     }
//     let result = 1
//     for(; n > 1; n--) 
//     {
//         result = result * n
//    	}
//     return result
// }
// input = 0
// try
// {
//     input = 3
//     console.log(factorial(input)) 
//     input = 5
//     console.log(factorial(input)) 
//     input = 8
//     console.log(factorial(input)) 
//     input = 20
//     console.log(factorial(input)) 
//     input = 1000
//     console.log(factorial(input)) 
// }
// catch(error)
// {
//     console.log("Error thrown for: ", input,"\n Error:", error)
// }

// function average(a, b) 
// {
//     return a + b / 2
// }
// console.log(average(2, 10))//6
// console.log(average(5, 5)) //5


// function largest(a, b, c) 
// {
//     if (a > b && a > c) 
//     {
//         return a
//     } 
//     else if (b > a && b > c) 
//     {
//         return b
//     } 
//     else 
//     {
//         return c
//     }
// }

// console.log("Before debugger")
// debugger
// console.log("After debugger")
// console.log(largest(1, 1, 2)) 
// console.log(largest(1, 2, 3)) 
// console.log(largest(3, 2, 1)) 
// console.log(largest(2, 2, 1)) 

// let part = 0
// console.time('Leibniz')
// for(let k = 0; k < 10000000; k++) 
// {
//     // part = part + ((-1) ** k) / (2 * k + 1)
//     part = part + (k % 2 ? -1 : 1) / (2 * k + 1)
// }
// console.timeEnd('Leibniz')
// let pi = part * 4
// console.log(pi)

// console.log(typeof 2.5) 
// console.log(typeof "one two three") 
// console.log(typeof false)

// let nr = 2.5 
// nr = nr / 2
// console.log(nr)
// console.log(typeof nr)

// let a = [10, 20, "en to tre", true, 50]
// a[4] = a[4] * 2
// console.log(a[0])  
// console.log(a[2])  
// console.log(a[4])  
// console.log(a)
// console.log(typeof a)


// let sampleObject = 
// {
//     id: 10,
//     delay: 20,
//     name: "en to tre",
//     isPresent: true,
//     delay: 50
// }

// sampleObject.delay = sampleObject.delay * 2
// console.log(sampleObject.id)   
// console.log(sampleObject.name) 
// console.log(sampleObject.delay) 
// console.log(sampleObject)
// console.log(typeof sampleObject)

// function myFunction()
// {
//     console.log("myFunction")
// }

// console.log(myFunction)
// console.log(typeof myFunction)


// let contact = {}
// contact.tel = "207-662-5412"
// console.log(contact)
// console.log(contact.tel)

// let contact = 
// {
// 	"first name": "Ronald",
//     1:"one",
//     firstName: "Adtya"
// }
// console.log(contact)
// console.log(typeof contact)

// console.log(contact["first name"])
// console.log(contact[1])
// console.log(contact.firstName)
// console.log(contact["firstName"])
// let key = "firstName"
// console.log(contact[key])
// console.log(contact.key)

// let contact = 
// {
//     email_1: "RonaldSMurphy@freepost.org",
//     email_2: "rsmurphy@briazz.com"
// }
// for(i=1; i<=5; i++) 
// {
//     let key = "email_" + i
//     if(key in contact)
//         console.log(key+"=>"+contact[key])
//     else
//     {
//         console.log(key+", is not present in the object!")
//         contact[key] = "something@some.thing"
//     }
// }
// console.log(contact)


// let test = 
// {
//     nr: 10, 
//     b: false, 
//     str: "uno dos tres", 
//     arr: [10, 20, 30], 
//     obj: {
//         x: 10, 
//         y: 20
//         }, 
//     fn: function(arg) {console.log(arg)} 
// }
// test.fn(123)
// console.log("Number:", test.nr)
// console.log("Boolean:", test.b)
// console.log("String:", test.str)
// console.log("Array:", test.arr)
// console.log("Array:", test.arr[0])
// console.log("Array:", test.arr[1])
// console.log("Array:", test.arr[2])
// console.log("Object:", test.obj)
// console.log("Object:", test.obj.x)
// console.log("Object:", test.obj.y)
// console.log("Object:", test.fn)

// let point = 
// {
//     x: 0,
//     y: 0,
//     otherMatrics:{
//         distance: 0,
//         focus:0
//     },
//     moveHorizontally: function(distance) 
//     {
//         this.x = this.x + distance
//     },
//     moveVertically: function(distance) 
//     {
//         this.y = this.y + distance
//     },
//     getCurrentPosition: function()
//     {
//         console.log("X: ", this.x)
//         console.log("Y: ", this.y)
//     }
// }

// point.x = 10
// point.y = 20
// point.getCurrentPosition()
// point.moveHorizontally(30)
// point.getCurrentPosition()
// point.moveVertically(20)
// point.getCurrentPosition()

// point.distance = point.x - point.y
// console.log("Point: ", point)
// point.distance = "0"
// console.log("Point: ", point)
// checkProperty("distance")
// delete point.distance
// console.log("Point: ", point)
// point.x = undefined
// checkProperty("x")
// // checkProperty(x)
// checkProperty("distance")

// console.log("Hello".includes("ll"))
// // console.log(point.includes("x"))

// function checkProperty(property)
// {
//     if(property in point)
//     {
//         console.log(property+" is present")
//     }
//     else
//         console.log(property+" is not present here!")
// }

// console.log("point.z: ", point.z)
// // console.log("point.otherMatrics.area: ", point.otherMatrics1.area)
// // if(point && point.otherMatrics1) 
// // {
// //     console.log(point.otherMatrics1.area)
// // }
// // else
// //     console.log("Not possible to access otherMatrics1")

// point && point.otherMatrics && console.log(point.otherMatrics.area)

// let contact = 
// {
//     tel: "207-662-5412",
//     email: "RonaldSMurphy@freepost.org"
// }
// for(key in contact) 
// {
//     // print property name
// //    console.log(key)  
//     console.log("contact."+key+"="+contact[key])
// }
// console.log(Object.keys(contact))

// const contact = {}
// // contact = {
// //     tel: "207-662-5412",
// //     email: "RonaldSMurphy@freepost.org"
// // }

// contact.tel = "207-662-5412"
// contact.email = "RonaldSMurphy@freepost.org"
// console.log(contact)

// var point1 = {x: 10, y: 20}
// var point2 = {x: 10, y: 20}
// console.log(point1 === point2)
// console.log(point1 == point2)
// point1 = point2
// console.log(point1 === point2)
// console.log(point1 == point2)
// console.log("point1 = ", point1)
// console.log("point2 = ", point2)
// point1.z = 30
// console.log("point1 = ", point1)
// console.log("point2 = ", point2)

// var point = {
//     x: 10,
//     y: 20,
//     metrics: {
//         area: 0,
//         x:0,
//         y:0
//     }
// }

// let point0 = {x:10, y: 20 }
// let point1 = point0    // copy reference
// let point2 = {}
// Object.assign(point2, point0, {})  //  copy properties into the new object
// //, metrics: {area: 0,x:0,y:0}
// console.log(point2)
// // console.log(point2.y)
// console.log(point1 === point0) // true
// console.log(point1 === point2) // false
// console.log(point0 === point2)
// //  ... -> spreader operator used to spread the contet of a complex data type

// let array = [11, 21, 31, 41, 51]
// let object = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// myFun(...array, 22, 33)

// function myFun(a, b, c, d, e, f = 1, g = 2)
// {
//     console.log("a:", a)
//     console.log("b:", b)
//     console.log("c:", c)
//     console.log("d:", d)
//     console.log("e:", e)
//     console.log("f:", f)
//     console.log("g:", g)
// }


// let point0 = {
//     x:10, 
//     y:20 
// }
// let point2 = { ...point0}
// let point3 = { ...point0, z: 100}
// console.log("Point0: ", point0)
// console.log("Point2: ", point2)
// console.log(point0 === point2)
// point2 = point0
// console.log(point0 === point2)
// console.log("Point3: ", point3)
// let point4 = { ...point3, ...{z: 200, color: "red"}}
// console.log("point4:", point4)
// point4 = { ...point3, z: 200, color: "red"}
// console.log("point4:", point4)

// let circle1 = 
// {
//   radius: 100,
//   center: {
//     x: 100,
//     y: 100
//   }
// }

// let circle2 = { ...circle1 } // Shallow copy

// circle1.radius = 200
// circle1.center.x = 200
// console.log(circle2.radius)      // 100 – primitive value is copied
// console.log(circle2.center.x)   // 200 – because center is a reference
// console.log(circle1 === circle2)          // false – different top-level objects
// console.log(circle1.center === circle2.center) // true – same nested object reference	

// let deepClone = function(obj) 
// {
//     let newObj = {...obj}
//     for(property in newObj) 
//     {
//         if(typeof newObj[property] === "object") 
//         {
//             newObj[property] = deepClone(newObj[property])
//         }
//     }
//     return newObj
// }
// let circleCopy = deepClone(circle1)

// console.log("circleCopy === circle1: ", circleCopy === circle1)
// console.log("circleCopy.center === circle1.center: ", circleCopy.center === circle1.center)

// let circle = 
// {
//     radius: 100,
//     center: 
//     {
//         x:0,
//         y:0
//     },
//     // getType: function() 
//     // {
//     //    	return "circle"
//  	// }
//     getType()
//     {
//         // console.log(this.radius)
//         // return "circle"
//         return (typeof this.radius === "number") ? "circle" : "unknown"
// 	}
// }

// console.log("Method Calling: ", circle.getType())
// console.log("Method Calling: ", circle["getType"])
// console.log("Method Calling: ", circle["getType"]())
// console.log(circle.getType())
// let figure = {...circle}
// delete circle.radius
// console.log(figure.radius)
// console.log(figure.getType())

// let circle = 
// {
//     radius: 100,
//     x: 100,
//     y: 200,
//     center: 
//     {
//         x:0,
//         y:0,
//         show()
//         {
//             console.log(`${this.x}, ${this.y}`)
//         }
//     },
//     show()
//     {
//         console.log(`${this.x}, ${this.y}`)
//     }
// }

// circle.center.show()
// circle.show()

// let user = 
// {
//     name: "Divya",
//     city: "Bhopal",
//     address: 
//     {
//     	city: "Indore",
//     	showCity() 
//         {
//      	    console.log("City is:", this.city)
//    		}
//  	},
//     showCity() 
//     {
//         console.log("City is:", this.city)
//     }
// }

// user.address.showCity()
// user.showCity()

// let contact = 
// {
//   	_tel: "207-662-5412",
// 	get tel() 
//     {
//         console.log("Getter is called!")
//         return "+91 "+this._tel
//     },
//     set tel(t) 
//     { 
//         if(t !== "")
//         {
//             this._tel = t+"."
//         }
//         else
//         {
//             console.log("Blank not allowed")
//         }
//     }
// }

// console.log(contact.tel)
// contact.tel = "100-100-1000"
// console.log(contact.tel)
// contact.tel = ""
// contact.email = "RonaldSMurphy@freepost.org"
// console.log(contact.email)

// let contact = 
// {
//     _age: 36,
//     firstName : "David",
//     lastName : "Taylor",
//     get fullName() 
//     {
//         return `${this.firstName} ${this.lastName}`
//     },
//     get age() 
//     { 
//         return this._age
//     },
//     set age(a) 
//     { 
//         if(a > 0) 
//             this._age = a
//     }
// }
// console.log(contact.fullName)
// contact.age = -20
// console.log(contact.age)
// // contact.age = 20
// // console.log(contact.age)

// console.log(Object.getOwnPropertyDescriptor(contact, "firstName"))
// console.log("-------------")
// for(key in contact)
// {
//     console.log(key+"->"+contact[key])
// }
// console.log("-------------")
// Object.defineProperty(contact, "_age", {
//     value: 36,
//     writable: true,
//     enumerable: false,
//     configurable: true
// })
// Object.defineProperty(contact, "firstName", {
//     value: "David",
//     writable: true,
//     enumerable: false,
//     configurable: true
// })
// for(key in contact)
// {
//     console.log(key+"->"+contact[key])
// }
// console.log("-------------")
// console.log("Age: ", contact.age)

// Object.defineProperty(contact, "_age", 
// {
//     value: contact._age,
//     writable: false,
//     enumerable: false,
//     configurable: true
// })
// console.log(contact)
// console.log(contact._age)
// contact._age = 100
// contact.age = 100
// console.log(contact._age)
// console.log(contact)

// let enumKeys = Object.keys(contact)
// let allKeys = Object.getOwnPropertyNames(contact)
// console.log("enumKeys: ", enumKeys)
// console.log("allKeys: ", allKeys)

// // Object.preventExtensions(contact)
// contact.gender = "M"
// console.log(contact)

// // Object.seal(contact)
// delete contact.gender
// contact.contactNumber = 9876543210
// console.log(contact)

// // Object.freeze(contact)
// contact.contactNumber = 10000000
// console.log(contact)

// let createPoint  = function(x, y) 
// {
//     let obj = {}
//     obj.x = x
//     obj.y = y
//     return obj
// }
// let createPoint  = function(x, y) 
// {
//     return 
//     {
//         x,
//         y
//     }
// }

// let createPoint  = (x, y) => ({x, y})
// //Factory Function
// let point1 = createPoint(1,1)
// let point2 = createPoint(2,2)
// console.log(point1.x) // ->  1
// console.log(point2.x) // -> 2
// console.log("point1: ", point1)
// console.log("point2: ", point2)

let createColoredPoint  = function(x, y, color) 
{
    let _info = "... object under construction"
    let _color = color
    console.log(_info)
    return {
        x,
        y,
        getColor() 
        {
            return _color
        }
    }
}
let coloredPoint1 = createColoredPoint (1, 1, "red")
let coloredPoint2 = createColoredPoint (2, 2, "green")
console.log(coloredPoint1.getColor())
console.log(coloredPoint2.getColor())
console.log(coloredPoint1._color)
