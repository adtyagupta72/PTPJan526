//Write a piece of code that will create variables and initialize them with values of Boolean, Number, BigInt, String and undefined types using (whenever possible) literals and constructor functions.
// let bool=true
// let age=21
// let BigNumber=123447n
// let Name="Nirbhay"
// let user=undefined

//Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, for example, in the following form: 1000 [number].
// console.log(`${bool} : ${typeof bool}`)
// console.log(`${age} : ${typeof age}`)
// console.log(`${BigNumber} : ${typeof BigNumber}`)
// console.log(`${Name} : ${typeof Name}`)
// console.log(`${user} : ${typeof user}`)

//Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

// let str="1234"
// let num=Number(str)
// let bigint=BigInt(num)
// let bool=Boolean(bigint)
// console.log(bool)

//  Try adding two values of the same type and check the result type. Try it for all primitive types.
// let a=1
// let b=2
// let sum=a+b
// console.log(`${sum} : ${typeof sum}`)

// let s1="nirbhay"
// let s2="kumar"
// let strsum=s1+s2
// console.log(`${strsum} : ${typeof strsum}`)

// let bg1=123447n
// let bg2=5678n
// let bgsum=bg1+bg2
// console.log(`${bgsum} : ${typeof bgsum}`)

// let bool1=true
// let bool2=true
// let bool3=true
// let boolsum=bool1+bool2+bool3
// console.log(`${boolsum} : ${typeof boolsum}`)

// let undef1=undefined
// let undef2=undefined
// let sumundef=undef1+undef2
// console.log(`${sumundef} : ${typeof sumundef}`)

// let nul1=null
// let nul2=null
// let sumnul=nul1+nul2
// console.log(`${sumnul} : ${typeof sumnul}`)

//Try adding two values of different types and check the results.

// let a = 1
// let b = "nirbhay"
// let sum = a + b
// console.log(`${sum} : ${typeof sum}`)

// let bool1=true
// let num=1
// let add=bool1+num
// console.log(`${add} : ${typeof add}`)

// let undef1=undefined
// let bool2=false
// let add=undef1+bool2
// console.log(`${add} : ${typeof add}`)

//try to modify the line const str1 = 42 + "1" to get the result 43 (without removing the quotes around 1)
// const str1 = 42 + Number("1")
// console.log(str1)