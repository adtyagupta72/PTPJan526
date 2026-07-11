// Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout. 
// Example of use and expected results:1,2,3,4,5,6,7,8,9,10.

let i=1
let interval=setInterval(()=>{
    if(i==10)
    {
        clearInterval(interval)
    }
    console.log(i)
    i++
},2000)


// Write an iterative version of the function from Task 1 (use the for loop). Declare the function using a function statement.

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log("setTimeout:", i);
  }, i * 2000); 
}

// Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

// showContact: the function should take two arguments the first is the list of contacts, and the second is the index number of the contact to display inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this)

// showAllContacts: the function should take one argument, the list of contacts inside the function, check if the given argument is an array

// addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number before adding a new contact, check if the passed argument is an array and if the new contact data have any value.

let ContactList = []
let NoofContact = Number(prompt("Enter the number of contact you want to enter:"))
for (let i = 1; i <= NoofContact; i++) 
{
    let name = prompt("Enter the name: ")
    let phone = prompt("Enter the phone no: ")
    let email = prompt("Enter the Email: ")
    ContactList.push({ name, phone, email })
}

function showContact(list,value)
{
    if(list[value] instanceof Object)
    {
        return list[value]
    }
}

function showAllcontact(list)
{
    if(list instanceof Array)
    {
        for(let i=0;i<list.length;i++)
        {
            console.log(list[i])
        }
    }
}

function addNewcontact(list,v1,v2,v3)
{
    return list.push({v1,v2,v3})
}

while(true)
{
    let userChoise=prompt("1. Showcontact--\n2.ShowallContact--\n3.addnewcontact--\n4.Quit")
    if(userChoise=="First")
    {
        let index=Number(prompt("Enter the index of the contact"))
        console.log(showContact(ContactList,index))
    }
    else if(userChoise=="Second")
    {
        showAllcontact(ContactList)
    }
    else if(userChoise=="Third")
    {
        let name=prompt("Enter the name")
        let contact=prompt("Enter the contact")
        let email=prompt("Enter the email")
        console.log(addNewcontact(ContactList,name,contact,email))
    }
    else if(userChoise=="Quit")
    {
        break
    }
}

// Write a JavaScript function that takes an array of numbers and returns a new array with all duplicate elements removed.

function uniqueElement(arr)
{
    let array=arr.sort(function(a,b){
        return a-b
    })
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                array.splice(i,2)
            }
        }
    }
    return array
}
console.log(uniqueElement([5,4,3,2,5,6,5]))

// Create a function that returns the maximum of two numbers.
function maxNumber(num1 , num2)
{
    if(num1==num2)
    {
        return `both numbers are same`
    }
    else if(num1>num2)
    {
        return `${num1} is maximum`
    }
    else{
        return `${num2} is maximum`
    }
}
console.log(maxNumber(70,70))

// Write a function to count down from a given number to 1 using recursion.
function countdown(number)
{
    console.log(number)
    if(number==1)
    {
        return
    }
    number--
    countdown(number)
}
countdown(100)

// Write an arrow function that adds 3 numbers.
let addnumbers=(num1,num2,num3)=>{
    return num1+num2+num3
}
console.log(addnumbers(10,20,30))

// Write a function to return the sum of all numbers in an array.
function sumArray(arr)
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    return sum
}
console.log(sumArray([5,4,5,6,3,4]))

// Write a function that returns the largest number in an array.
function findLargest(arr)
{
    let largest
    for(let i=0;i<arr.length;i++)
    {
        largest=arr[i]
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]>largest)
            {
                largest=arr[j]
            }
        }
    }
    return largest
}

console.log(findLargest([45,23,54,76,32,65,87,43,21,43,65,87,23,32,43,456,345]))

// Write a function to check if a number is prime.
function checkprime(number)
{
    let isPrime=false
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            isPrime=true
            break
        }
    }
    if(isPrime)
    {
        return `No.is not prime`
    }
    else{
        return `No. is  prime`
    }
}
console.log(checkprime(19))

// Write a function that returns the Fibonacci sequence up to n terms.
function Fibonacci(n)
{
    a=0
    b=1
    sum=0
    console.log(b)
    for(let i=0;i<n-1;i++)
    {
        sum=a+b
        console.log(sum)
        a=b
        b=sum
    }
}
Fibonacci(7)

// Write a function that returns the length of a string.

function length(str)
{
    return str.length
}
console.log(length("nirbhay"))

// Create a function that capitalizes the first letter of a string.
function capitalize(str)
{
    let arr=str.split(" ")
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].toUpperCase()
    }
    str=arr.join(" ")
    console.log(str)
}
capitalize("nirbhay kumar")

//Next set of Questions

///Write a function that checks if a number is divisible by 5.
function divisibleByFive(number)
{
    if(number%5==0)
    {
        return `${number} is divisible by 5`
    }
    else return "Not divisible by 5"
}
console.log(divisibleByFive(50))

// Function to convert minutes to seconds.
function minTosec(min)
{
    if(min)
    {
        return ` ${min}  min are equal to ${min *60} seconds`
    }
}
console.log(minTosec(5))

// Function to count even numbers in an array.
function countEven(arr)
{
    let count=0
    if(arr)
    {
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0)
            {
                count++
            }
        }
        return count
    }
}
console.log(countEven(["jdfh","54354ew","ty45re","4564erw"]))

//Function to convert string to lowercase.
function lowerCase(str)
{
    if(str)
    {
        let arr=str.split(" ")
        for(let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i].toLowerCase()
        }
        str=arr.join(" ")
        console.log(str)
    }
}
lowerCase("NirbhayKumar")

//Function to check if a number is positive, negative, or zero.
function checkNumber(number)
{
    if(number<0)
    {
        return `${number} is negative`
    }
    else if(number>0)
    {
        return `${number} is positive`
    }
    else{
        return `number is zero`
    }
}
console.log(checkNumber(0))

// Write a  function to swap two numbers.
function swap(num1,num2)
{
    let c=num1
    num1=num2
    num2=c
    return(num1,num2)
}
let a=1
let b=2
console.log(`no. are swaped ` +swap(a,b))
console.log(a)
console.log(b)

// Write a  function to convert days into years, weeks, and days.
function convertDays(totalDays) {
  const years = Math.floor(totalDays / 365)
  const weeks = Math.floor((totalDays % 365) / 7)
  const days = totalDays % 365 % 7

  return {
    years: years,
    weeks: weeks,
    days: days
  }
}

let result = convertDays(800)
console.log(`${result.years} years, ${result.weeks} weeks, and ${result.days} days`);

//Function to return all odd numbers in an array.
function oddNumber(arr)
{
    let newArr=[]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] %2!==0)
        {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(oddNumber([4,5,6,4,3,5,6]))

//Write a function that delays execution using setTimeout.
function func()
{
    console.log("func is called")
}
function delay(gagan)
{
    setTimeout(gagan,2000)
}
delay(func)

// Write a JavaScript function that prints the numbers from 1 to a given number. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
function printNumbers(num)
{
    for(let i=1;i<=num;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log("FizzBuzz")
        }
        else if(i%3==0)
        {
            console.log("Fizz")
        }
        else if(i%5==0)
        {
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}

printNumbers(20)

// //Tasks 1
/// //Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.
function div(num1,num2)
{
    try{
        if(num2==0)
        {
            throw RangeError("Sorry this cannot be evaluated")
        }
        else{
            return num1/num2
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
}

console.log(div(85,5))

// Tasks 2
// We have declared an array of numbers:
// let numbers = [10, 40, 0, 20, 50]
// Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try ... catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).

function div(arr)
{
    let res
    for(let i of arr)
    {
        try{
            if(i!==0)
            {
                res=1000/i
                console.log(res)
            }
            else{
                throw RangeError("Division by 0 is not possible")
            }
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
}

div([3, 4, 0, 5, 23, 0, 5345, 21, 0])

//Practice Questions:
// Write code to throw an error if a number is negative.
let number=0
try{
    if(number<0)
    {
        throw RangeError("No. is less than 0")
    }
    else{
        console.log(number)
    }
}
catch(error)
{
    console.log(error.message)
}
// Write a function that takes a number and throws an error if it is not even.
function onlyEven(number)
{
    try{
        if(number%2!==0)
        {
            throw Error("No. is not even")
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
}
onlyEven(7)

// Create a calculator function that throws error on division by 0.
function calculator(num1,num2,operator)
{
    switch (operator)
    {
        case "+":
            console.log(num1+num2)
            break
        case "-":
            console.log(num1-num2)
            break
        case "*":
            console.log(num1*num2)
            break
        case "/":
            try{
                if(num2!==0)
                {
                    console.log(num1/num2)
                }
                else
                {
                    throw RangeError("Division by 0 not possible")
                }
            }
            catch(error)
            {
                console.log(error.message)
            }
        break
        default:
    }
}
calculator(833672630,90000,"/")
// Write code to validate that input is a number using custom error.
let userId=prompt("Enter the ID")
try{
    if(userId instanceof Number)
    {
        throw Error("Input is a number pls enter the id")
    }
}
catch(error)
{
    console.log(error.message)
}
//// Write code to validate user age. Throw an error if not between 0–100.
let userAge=Number(prompt("Enter the age"))
try{
    if(userAge<0 || userAge>100)
    {
        throw RangeError("Pls enter the value between 0 and 100")
    }
}
catch(error)
{
    console.log(error.message)
}