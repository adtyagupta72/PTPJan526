// let fruits = ["apple","banana","orange"]
// let index = 0 
// while(index < fruits.length)
// {
//     console.log(fruits[index])
//     index ++
// }


// let num = 2
// while(num<=20)
// {
//     console.log(num)
//     num +=2
// }

// let num = 10 
// while(num>=1)
// {
//     console.log(num)
//     numm--
// }


// let isOver = false
// let counter = 1
// do{
//     isOver = !confirm(`[$(counter++)]ccontinue the loop`)
// }
// while(!isOver)

// let condition = false 
// while(condition)
// {
//     console.log("while loop")
// }
// do{
//     console.log("do while")
// }
// while(condition)

// let name = "zeeshan"
// let i = 0
// do
// {
//     console.log(name{i})
//     i++
// }
// while( i < name.length)

// for(let i = 0 ; i<10; i ++)
// {
//     console.log(i)
// }

// i = 0 
// while(i < 10)
// {
//     console.log(i)
//     i ++ 
// }


// let values = [ 10 , 30 , 50 , 100 ]
// let sum =  0 
//  for( let index = 0 ; index < 4 ; index++)
//  {
//     sum += values[index]
//  }
//  console.log(sum)

// let numbers = [2 , 4 , 9 , 10 , 11]
// let evencount = 0 
// for(let index = 0 ; index < numbers.length ; index++)
// {
//     if(numbers[index] % 2 === 0)
//     {
//         evencount++
//     }

// }
//     console.log(evencount)

// let fruits = ["apple ", "mango" , "banana" , "grapes"]
// for(let index = fruits.length-1; index >= 0 ; index--)
// {
//     console.log(fruits[index])
// }

// let values = [ 10 , 50 , 80 , 100]
// for (let index = 0 ; index < values.length ; index ++)
// {
//     console.log(values[index])
// }
// console.log("-----------")

// for (let index = values.length - 1 ; index>=0  ; index --)
// {
//     console.log(values[index])
// }
// console.log("-----------")
// for (let index = 0 ; index < values.length ; index +=2)
// {
//     console.log(values[index])
// }


// let values = [10, 30 , 40 , 50]
// for ( let  element of values  )
// {
//     console.log(element)

// }
// let sum = 0 
// for(let  index = 0 ;  index < values.length ; index++)
// {
//     sum += values[index]

// }
// console.log(sum)


// sum = 0 
// for( let number of values )
// {
//     sum += number
// }
// console.log(sum)


// let cities = [
//     {name : "Newyork" , Populatiuon : 2254},
//     {name : "delhi" , Populatiuon : 1833},
//     {name : "shangai" , Populatiuon : 1633},
//     {name : "london" , Populatiuon : 233},
//     {name : "russia" , Populatiuon : 2}
// ]
// for(let city of cities)
// {
//     if(city.Populatiuon > 202)
//     {
//         console.log(`${city.name} ${city.Populatiuon}`)
//     }
// }


// let fruits = ["apple " , "mango" , "banana"]
// for(let fruit of fruits)
// {
//     console.log(fruit)
// }

// let user =
// {
//     name: "Zeeshan",
//     age: 20,
//     email: "Zeeshangmail.com"

// }
// for (let key in user)
// {
//     console.log(key)
// }
// for (let key in user)
// {
//     console.log(`${key}--${user[key]}`)
// }
// let user =
// {
//     name: "Swati",
//     age: 20
// }
// for(let key in user)
// {
//     console.log(`${key}---${user[key]}`)
// }
// console.log("-----------")

// let names = ["a","b","c"]
// for(let name of names)
// {
//     console.log(name)
// }

// let i = 0
// while(true)
// {
//     console.log(i)
//     i++
//     if(i>=5)
//     {
//         break
//     }
// }
// console.log("------")

// for(let i=0 ; i<10 ; i++)
// {
//     if(i==3 || i == 7)
//     {
//         continue
//     }
//     console.log(i)
// }

// let fruits = ["apple","banana","mango","grapes"]
// for(let i =0; i< fruits.length; i++)
// {
//     if(fruits[i] === "mango")
//     {
//         console.log("mango found at index:" + i)
//         break
//     }
//     console.log("the fruit iterated :" + fruits[i])
// }
  

// for(let i = 1 ; i<=10 ; i++)
// {
//     if(i % 2 !== 0)
//     {
//         continue
//     }
//     console.log(i)
// }

// let temperature
// let sum
// let meanTemp
// temperature = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// sum = 0 
// for(let i = 0 ; i<temperature.length; i++)
// {
//     sum += temperature[i]
// }
// meanTemp = sum / temperature.length
// console.log(`mean: ${meanTemp}`)
// temperature= [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// sum = 0
// for(let i = 0 ; i< temperature.length;i++)
// {
//     sum += temperature[i]
// }
// meanTemp = sum / temperature.length
// console.log(`mean: ${meanTemp}`)



// function getMeanTemp()
// {
//     sum = 0
//     for(let i=0 ; i<temperature.length;i++)
//     {
//         sum += temperature[i]
//     }
//     meanTemp = sum/temperature.length
// }
// temperature = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// getMeanTemp()
// console.log(`mean: ${meanTemp}`)


// let name = "Zeeshan"
// showName()
// function showName()
// {
//     console.log(name)
// }

// function getMeanTemp(temperature)
// {
//     sum = 0
//     for(let i=0 ; i<temperature.length;i++)
//     {
//         sum += temperature[i]
//     }
//     return sum / temperature.length
// }
// let result = getMeanTemp([12,13,14])
// console.log(`mean: ${result}`)


// function showMSg()
// {
//     console.log("message 1")
//     return
//     console.log("msg2")
// }
// showMSg()


// function add(first , second)
// {
//     return first + second
// }
// let result = add(5,7)
// console.log(result)
// let names = ["alice" , "mehak" , "Zeeshan"]
// let name = getElement(names , 2)
// console.log(name)

// function getElement(name , index)
// {
//     return name[index]
// }

// function getMeanTemp(temperature)
// {
//     let sum = 0
//     let result
//     for(let i=0 ; i<temperature.length;i++)
//     {
//         sum += temperature[i]
//     }
//     return sum / temperature.length
//     return result
// }
// let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// console.log(`mean : ${getMeanTemp{day1}}`)

// function add(first , second)
// {
//     return first + second
// }
// let first = 10 , second = 20 , third = 30 , fourth = 40
// console.log(add(first, second))
// console.log(add( second , third))
// console.log(add(third , fourth))

// let a = 100 , b= 200 , c= 300
// function test(a)
// {
//     let b = 10
//     console.log(a)
//      console.log(b)
//       console.log(c)
// }
// test(1)
// console.log(a)
// console.log(b)
//  console.log(c)

// function showMessage(message)
// {
//     console.log(`message${message}`)
// }
// let sm = showMessage
// sm("this Works")
// console.log(typeof sm)

// let a = doNothing()
// {
//     return undefined
// }

//  a = doNothing()
// let b = doNothing
// console.log(a)
// console.log(typeof a )
// console.log(b)
// console.log(typeof b )

// function add(a,b)
// {
//     return a+b
// }
// function multiply(a,b)
// {
//     return a*b
// }
// function operation(func,first,second)
// {
//     return func(first , second)
// }
// console.log(operation(add,10,20))
// console.log(operation(multiply,10,20))

// let myAdd = function(a,b)
// {
//     return a+b
// }
// console.log(myAdd)
// console.log(typeof myAdd)
// console.log(myAdd(20,40))

// let myAdd = function add(a,b)
// {
//     return a+b
// }
// console.log(myAdd)
// console.log(typeof myAdd)
// console.log(myAdd(30,40))

// function add(a,b)  //func expression
// {
//    return a + b
// }
// myAdd = add
// console.log(myAdd(18,20))
// console.log(add(10,20))


// let myAdd = function(a,b)
// {
//     return a+b
// }
// console.log(myAdd(10,20))

// function operation(func,first,second)
// {
//     return func(first,second)
// }
// myAdd = function(a,b)
// {
//     return a+b
// }
// console.log(operation(myAdd,10,20))
// console.log(operation(function(a,b)
// {
//     return a+b
// },10,20))

//  function getMeanTemp(temperatures)
// {
//     if(!(temperatures instanceof Array))
//     {
//         return "INVALID INPUT"
//     }
//     let sum = 0
//     for(let i = 0; i<temperatures.length; i++)
//     {
//         sum+=temperatures[i]
//     }
//     return sum / temperatures.length
// }
// console.log(getMeanTemp([10,20,30]))
// console.log(getMeanTemp("not an array"))


// function add(a,b)
// {
//     if(typeof a !== "number" || typeof b !== "number")
//     {
//         return "INVALID INPUT"
//     }
//     return a+b
// }
// console.log(add(5,8))
// console.log(add("5",8))

// let inner = function()
// {
//     console.log("inner 1")
// }
// let outer = function(callback)
// {
//     console.log("outer 1")
//     callback()
//     console.log("outer 2")
// }
// console.log("test 1")
// outer(inner)
// console.log("test2")

// let fruits=["apple","banana","kiwi"]
// const animateAll = (animate)
// {
//     setTimeout ((){
//         animate(fruits[0])
//         setTimeout(( ){
//             animate(fruits[1])
//             setInterval((){
//                 animate(fruits[2])

//             },1000)
//         },1000)
//     },1000)
   
// }
//  const animate=(fruit)
// {
//     console.log("animating", fruit)
// }
// animateAll(animate)

// console.log("start")
// setTimeout(function()
// {
//   console.log("this runs 1 sec")
// },1000)
// console.log("STOPPeD")


// let counter = 0
// let intervalId = setInterval(function()
// {
//     console.log("repeat", ++counter)
// },1000)
// setTimeout(function()
// {
//     clearInterval(intervalId)
//     console.log("STOPPED")
// },5500)

// let inner = function()
// {
//     console.log("inner 1")
// }
// let outer = function(callback)
// {
//     console.log("outer 1")
//     let timerId = setInterval(callback , 1000)
//     console.log("outer2")
//     setTimeout(function()
// {
//     clearInterval(timerId)
// },5500)
// }
// console.log("test 1")
// outer(inner)
// console.log("test 2")

// let add = function(a,b)
// {
//     return a + b
// }
// let add = (a,b) => a+b // arrow function
// console.log(add(18,20))


// function factorial(n)
// {
//     return n > 1? n * factorial(n-1):1
// }
// let factorial = n => n > 1? n * factorial(n-1):1  //arrow function

// console.log(factorial(5))


//foreach

// let names = ["alice " ,"bob","john"]
// function showName(element)
// {
//     console.log("name:",element)
// }
// names.forEach(showName)

//arrow function

// let greet = () => console.log("hello")
// greet()

// let square = x => x*x
// console.log(square(5))

// let multiply = (a,b) => a*b
// console.log(multiply(4,3))

 // iteration 
// function factorial (n)
// {
//     let result = 1
//     while(n> 1)
//     {
//         result *= n
//         n--
//     }
//     return result
// }
// console.log(factorial(6))

// function factorial (n)
// {
//     let result = 1
//     for(let i = 2 ; i<= n ; i++)
//     {
//         result += i
//     }
//     return result
// }
// console.log(factorial(6))

//curring

//  function Sum(a)
// {
//     return function(b)
//     {
//         return function(c)
//         {
//             return a + b + c 
//         }
//     }
// }
// console.log(Sum(3)(4)(5))

//note
// console.log(sum(30))   => // [function(anonymous)]
// console.log(sum(30) (20))  =>  // [function(anonymous)]


// class Mixer
// {
//     constructor (name)
//     {
//         this.name = name
//     }
//     async start()
//     {
//         console.log("Start:",this.name)
//         setTimeout (()=>
//         {
//             console.log("inside Timeout:", this.name)
//         },1000)
//         await new Promise((resolve) => setTimeout(resolve,500))
//         console.log("after Await:", this.name)
//     }
// }
// const mixer = new Mixer("MixerTest")
// mixer.start()


// class DataHandler 
// {
//     constructor(data)
//     {

//     this.data = data
//     console.log("Property from Constructor:", this.data)
//     }
//     async processData()
//     {
//         console.log("processing:", this.data)
//         await Promise.resolve()
//         console.log("procesed", this.data.toUpperCase())
//     }

// }
// const handler = new DataHandler("async")
// const boundProcess = handler.processData.bind({data : "boundData"})
// boundProcess()


// try
// {
//     console.log("abc")
//      conole.log("abc")
// }
// catch(error){

//     console.log(error.message)
// }


// try 
// {
//     console.log("start")
//     conole.log("OOPs")
//     console.log("This wont rum")
// }
// catch(error)
// {
//     console.log("error catched")
//     console.log(error.message)

// }
// console.log("Continue")


// let X = prompt("Enter 1st No:")
// let Y = prompt("Enter 2nd No:")
// let x = number(X)
// let y = number(y)
// if(numbeer.isFinite(x) && number.isFinite(y) && y !==0)
// {
//     console.log(x/y)
// }
// else{
//     console.log("incorrect arguments")
// }

// let a = b

// const SomeCOnst = 5
// SomeCOnst = 7

// let someNum = 10 
// sumNum.length()

// let value = -1 
// if(value < 0)
// {
//     throw new RangeError("Value must be negative")
// }
//   let test1 = Array(10)
//   console.log(test1.length)
//   let test2 = Array(-1)
//   console.log(test2.length)


// try 
// {
//     a = b
// }
// catch(error)
// {
//     console.log("caught REference error"+ error)
// }
// console.log("HAndled exception")

// try 
// {
//     let num = 42
//     num()
      
// }
// catch(error)
// {
//      let result = error instanceof ReferenceError
//        console.log(result)
//     console.log("Caught a type error"+ error.message)
// }


// let b = 30
// try 
// {
//     let a = b
//     let num = 42
//     num()
      
// }
// catch(error)
// {
//     console.log("caught" + error)
//      let result = error instanceof ReferenceError
//        console.log(result)
//     if(error instanceof ReferenecError)
//     {
//         console.log("This is first Line")
//     }
//     else(error instanceof TypeError)
//     {
// console.log("this is second lkine")
//     }
   
// }



// try 
// {
//     a = 5
// }
// finally{
//     console.log(a)
// }

// console.log(a)

// let a = 10 
// try{
//     a=b
// }

// catch(error)
// {
//     console.log("An error" + error)
// }
// finally 
// {
//     console.log("finally")
// }
// console.log(a)


// let a = 10
// try{
//     a = b
// }
// catch(error)
// {
//     try{
//         console.log(b)
//     }
//     catch
//     {
//         console.log("second catch")
//     }
// }
// finally{
//     console.log("finally")
// }


// console.log("start")
// throw 100
// console.log("end")

// console.log("start")
// try{
//     throw 100
// }
// catch(error)
// {
//     console.log(error)
// }
// console.log("end")


// function factorial(n)
// {
//     if(n>20)
//     {
//         throw new RangeError("Max value 20")

//     }
//     let result = 1
//     for(; n>1 ; n--)
//     {
//         result = result * n
//     }
//     return result
// }
// input = 0
// try
// {

//     input = 3
//     console.log(factorial(input))
//      input = 5
//     console.log(factorial(input))
//      input = 8
//     console.log(factorial(input))
//      input = 20
//     console.log(factorial(input))
//      input = 1000
//     console.log(factorial(input))
// }
// catch(error)
// {
//     console.log("Error dectected for:", input , "\n error is:", error)
// }

// function largest(a,b,c)
// {
//     if(a>b && a>c)
//     {
//         return a
//     }
//     else if (b>c && b> a)
//     {
//         return b
//     }
//     else
//     {
//         return c
//     }
// }
// console.log("before debugging")
// debuggerconsole.log("after debugging")
// console.log((1,1,2))
// console.log((1,2,3))
// console.log((3,2,1))
// console.log((2,2,3))

// console.time()
// console.log("test console")
// for(let count = 0 ; count <999999999; count++)
// {
//     let a = 10
//     let b = 20
//     let c = a+b
// }
// console.timeEnd()

// let part = 0
// console.log("lebinitz")
// for ( let k = 0 ; k < 10000000; k++)
// {
//     // part = part + ((-1) ** k) /( 2*k+1)
//     part = part + (k % 2? -1 : 1) / (2* k + 1)
// }
// console.timeEnd("lebinitz")
// let pi = part *4
// console.log(pi)

// let contact = {}
// contact.tel = "23415627"
// console.log(contact.tel)
// console.log(contact)

// let cont = 
//  {
//      "first name" : "zeeshan",
//         1 :"one",
//         lastname : "siddiqui"
//  }
//  console.log(cont)
//  console.log(cont["first name"])
// console.log(cont[1])
// console.log(cont.lastname)
// console.log(cont["lastname"])
// let name = "lastname"
// console.log(cont.name)
// console.log(cont[name])

// let contact =
// {
//     email_1 :"Ronald@gmail.com",
//      email_2 :"zeeshan@gmail.com"
// }
// for (let i = 1 ; i <= 5 ; i++)
// {
//     let key = "email_" + i
//     if(key in contact)
//     {
//         console.log(key + "=>" + contact[key])
//     }
//     else{
//           console.log(key+ "somthing")
//           contact[key] = "something"
//     }
// }
// console.log(contact)
 
// let test= {
//     nr : 10 ,
//     b: false ,
//     str : "hiii",
//     arr:[23,14,11],
//     obj:{
//         x:20,
//         y:30
//     },
//     fn: function(arg) {console.log(arg)}

// }

// console.log("number", test.nr)
// console.log("bool", test.b)
// console.log("string", test.str)
// console.log("array", test.arr)
// console.log("number", test.arr[0])
// console.log("number", testarr.[1])
// console.log("number", test.arr[2])
// console.log("number", test.obj)
// console.log("number", test.obj.x)
// console.log("number", test.obj.y)
// console.log("func", test.obj.fn)


// let point =
// {
//     x : 0,
//     y : 0,
//     horizontal : function(distance)
//     {
//         this.x = this.x + distance
//     },
//     vertical : function(distance)
//     {
//         this.y = this.y + distance
//     },
//     getCurrent : function()
//     {
//         console.log("X: ", this.x)
//         console.log("Y: ", this.y)
//     }

// }

// point.x = 10
// point.y = 20
// point.getCurrent()
// point.horizontal(30)
// point.getCurrent()
// point.vertical(20)
// point.getCurrent()

// point.distance = point.x - point.y
// console.log("point: ", point)
// checkproperty("distance")
// point.distance = "0"
// console.log("POint:" , point)

// function checkproperty(property)
// {
//     if(property in point)
//     {
//         console.log(property ,"is present")
//     }
//     else
//         {
//           console.log(property ,"is not present")
//     }
// }


// if(point && point.otherMatrics)
// {
//     console.log(point.otherMatrics.area)
// }
// else
//     console.log("mot possible to access other matricss")

// function temp(temperatures)
// {
//     let sum = 0 ;
//     for(let i = 0 ; i < temperatures.length; i++)
//     {
//         sum += temperatures[i]
//     }
//      console.log(sum/temperatures.length)

// }

// day1 = [5,5,10,20,10]
// temp(day1)

// function name(str)
// {
   
//     for(let i=0;i<str.length;i++)
//     {
//      console.log(str[i])
        
//     }
    
// }
// name("zeeshan")

// function name(str)
// {
   
//     for(let i=0;i<str.length;i++)
//     {
//      result+=(str[i])
        
//     }
    
// }
// name("zeeshan")


// const obj = 
// {
//     tel : 35267364784 ,
//     email : "ZEEshan@gmail.com"
// }
// for (key in obj)
// {
// console.log("contact"+ key + "=" + obj[key])
// }

// console.log(Object.keys(obj))

// obj.add = "Sitapur"
// obj.name = "zeeshan"
// console.log(obj)

// var point1 = {x:10 ,y : 20}
// var point2 = {x:10 ,y : 20}
// console.log(point1 === point2)
// console.log(point1 == point2)
// point1 = point2
// console.log(point1 === point2)
// console.log(point1 == point2)
// console.log(point1)
// console.log(point2)
// point1.z= 30
// console.log(point1)
// console.log(point2)

// let point0 = {x:10 , y:20}
// let point1 = point0
// let point2 = {}
// Object.assign(point2 , point0 , {z:300})
// console.log(point2.x)
// console.log(point2.y)
// console.log(point2.z)
// console.log(point1 === point2)
// console.log(point2 === point0)
// console.log(point1 === point0)
// console.log(point1)
// console.log(point2)
// console.log(point0)

// let array = [11,21,23,34,45]
// let obj = {
//     a : 1 ,
//     b : 2 ,
//     c : 3
// }
//  myFun(...array)
//  function myFun(a,b,c,d,e)
//  {
//     console.log(a)
//       console.log(b)
//         console.log(c)
//           console.log(d)
//             console.log(e)
// }
// let name = "zeeshan"
// function greet()
// {
//   console.log("hello, whatsup?")
// }
// greet()

// let point0 = {
//     x : 10,
//     y: 20
// }
//  let point2 =
//  {
//     ...point0
//  }

//  let point3 = 
//  {
//     ...point0 , z : 100
//  }

//  console.log("point0", point0)
//   console.log("point2", point2)
//   console.log(point0 === point2)
//   point2 = point0
//   console.log(point0 === point2)
//   console.log("point3", point3)
//   let point4 = {...point3, z:200 ,color:red}
//   console.log("point4" , point4)

// let circle1 = 
// {
//     radius : 100,
//     center=
//     {
//         x : 100 ,
//         y : 200
//     }


// }

// let circle2 = {...circle1}
// circle1.radius = 200
// circle1.center.x = 200
// console.log(circle2.radius)
// console.log(circle2.center.x )
// console.log(circle1 === circle2)
// console.log(circle1.center === circle2)

// let deepClone = function(obj)
// {
//     let newOBJ = {...obj}
//     for(property in newObj)
//     {
//         if(typeof newOBJ[property] === "object")
//         {
//             newOBJ[property] = deepClone(newOBJ[property])
//         }
//     }
//     return newOBJ
// }

// let circlecopy = deepClone(circle)
// console.log(circleCopy === circle1)

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
//     //     return "square"
//     // }
//     getType()
//     {
//         // console.log(this.radius)
//         // return "abc"
//         return ( typeof this.radius === "number" ) ?  "circle" : "unknown"
//     }
// }
// // console.log("Method Calling:" , circle.getType())
// // console.log("method Calling:"  , circle["getType"]())
// // console.log("method Calling:"  , circle["getType"])

// let figure = {...circle}
// delete circle.radius
// console.log(figure.radius)
// console.log(figure.getType())
   

// let circle = 
// {
//      radius: 100,
//      x:100,
//      y:20,
//     center:
//     {
//         x:0,
//         y:0,
//         show()
//         {
//             console.log(`${this.x},${this.y}`)
//         }
//     },
//     show()
//     {
//     console.log(`${this.x},${this.y}`)
//     }
   
// }
// circle.center.show()
// circle.show()


// let user = {
//     name:"divya",
//     city:"bhopal",
//     address:
//     {
//         city:"indore",
//         showCity()
//         {
//             console.log("City:",this.city)
//         }
//     },
//     showCity()
//     {
//         console.log("city :",this.city)
//     }
// }

// user.address.showCity()
// user.showCity()

// let contact = 
// {
//     _tel : 8090624224,
//     get tel()
//     {
//         console.log("Getter is called")
//         return this._tel
//     },
//     set tel(t)
//     {
//         if(t !== ""){
//         this._tel = t
//         }
//         else{
//             console.log("blank not allowed")
//         }
//     }
// }
// console.log(contact.tel)
// contact.tel = "90909374894"
// contact.tel = ""
// console.log(contact.tel)


let contact = 
{
    _age : 36, 
    firstName : "zeeshan",
    lastName : "Siddiqui",
    get fullName()
    {
        return `${this.firstName} ${this.lastName}` 
    },
    get age()
    {
        return this._age
    },
    set age(a)
    {
        if(a>0)
        {
            this._age = a
        }
    }
}
// console.log(contact.fullName)
// contact.age = -20
// console.log(contact.age)
// contact.age = 18
// console.log(contact.age)

// console.log(Object.getOwnPropertyDescriptor(contact,"firstName"))
// console.log("-------------")
// for(key in contact)
// {
//     console.log(key + "-->" + contact[key])
// }
// console.log("-->")
// Object.defineProperty(contact , "_age",
// {
//     value : 36,
//     Writable:true,
//     enumerable:false,
//     configurable:true
// })

// Object.defineProperty(contact , "firstName",
// {
//     value : "david",
//     Writable:true,
//     enumerable:false,
//     configurable:true
// })
// for(key in contact)
// {
//     console.log(contact[key])
// }



Object.defineProperty(contact , "_age",
{
    value : contact._age,
    Writable:false,
    enumerable:false,
    configurable:true
})
// console.log(contact)
// console.log(contact._age)
// contact._age = 100
// contact.age = 100
// console.log(contact._age)
// console.log(contact)

// let enuKeys = Object.keys(contact)
// let allKeys = Object.getOwnPropertyNames(contact)
// console.log("enukey:", enuKeys)
// console.log("allkeys:", allKeys)

// Object.preventExtensions(contact)
// contact.gender = "Male"
// console.log(contact)

// // Object.seal(contact)
// delete contact.gender
// console.log(contact)

// // Object.freeze(contact)
// contact.gender = "M"
// console.log(contact)


// let createPoint = function(x,y)
// {
//     let obj = {}
//     obj.x = x
//     obj.y = y 
//     return obj
// }


// let createPoint = (x,y) => ({x,y})
// let point1 = createPoint(1,1)
// let point2 = createPoint(2,2)

// console.log(point1.x)
// console.log(point2.x)
// console.log("poin1:", point1 )
// console.log("poin2:", point2 )


let createColoredPoint = function(x,y,color)
{
    let _info = "....objectUnderConst"
    let _color = color
    console.log(_info)
    return
    {
        x,
        y,
        getColor()
    {
        return _color
    }
    }
}

let colorpoint1 = createColoredPoint(1,1,"red")
let colorpoint2 = createColoredPoint(1,2,"green")
console.log(colorpoint1.getColor())
console.log(colorpoint2.getColor())
console.log(colorpoint1._Color)