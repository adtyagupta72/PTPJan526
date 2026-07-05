// remove duplicates from array :
function removeDuplicates(arr)
{
  return  new Set(arr);
}
console.log(removeDuplicates([1,3,2,2,1,3,2,4]));


// MAx of two

function Max(a,b)
{
  
   let result = a>b? a:b
   return result
}
let max = Max(5,10)

console.log(`The maximum no is : ${max}`)

//arrow function
let addThree = (a,b,c) => a+ b + c;
console.log(addThree(20,30,10))


// sum of all numbers

function sumArray(arr)
{
    sum = 0 
    for(let i = 0; i < arr.length ; i++)
    {
        sum += arr[i]
        
    }
    return sum
}
let shon= [2,3,4]
console.log(sumArray( shon))

// largest in array

function largest(a)
{
   return Math.max(...a)
}
let array=[2,3,10,2]
console.log(largest(array))

// prime number

function isPrime(num)
{
   if (num <= 1) 
      {
         return false;
      
      }
   for(let i = 2; i<= Math.sqrt(num);i++)
   {
      if(num % i === 0)
      {
         return false;
      }
   }
   return true;
}

console.log(isPrime(32))


function capital(str)
{
   if(!str)
   {
      return console.log("not a string")
   }
   return str.charAt(0).toUpperCase() + str.slice(1)
   
}

let str = "zeeshan"
console.log(capital(str))

function len(str)
{
   return str.length;
}
 str = "zeeshan"
console.log(len(str))

