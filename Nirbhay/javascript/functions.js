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
    for(let i=0;i<n;i++)
    {

    }
}
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
        arr[i][0].toUpperCase()
    }
    str=arr.join(" ")
    console.log(str)
}
capitalize("nirbhay kumar")