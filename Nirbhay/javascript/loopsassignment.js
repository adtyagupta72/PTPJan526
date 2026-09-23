// Create a for loop that prints the first 10 even numbers.
// for(let i=1;i<=20;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i)
//     }
// }

// Find the sum of all quotients when dividing numbers 1 to 9 by 3
// let sumOfQuotients=0
// for(let i=1;i<=9;i++)
// {
//     sumOfQuotients+=i/3
// }
// console.log(sumOfQuotients)
// Using do...while, print numbers from 1 to 5 with their quotient by 2

// Write a program using do-while that asks the user for a password until the correct one is entered.
// let password=123456
// let userInput
// while(userInput!=password)
// {
//     userInput=Number(prompt("Enter the password: "))
// }    
// alert("success")

// Write a program that calculates the sum of the first N natural numbers, where N is provided by the user.
// let input=Number(prompt("Enter the number:"))
// let sum=0
// while(input!=0)
// {
//     sum+=input
//     input--
// }
// console.log(sum)

// Write a program to display all the odd numbers in an array using a loop.
// let numbers=[12,34,56,44,32,44,65,21]
// for(let i=1;i<numbers.length;i++)
// {
//     if(i%2!=0)
//     {
//         console.log(numbers[i])
//     }
// }

// Write a program to find the factorial of a number using loop?
let number=5
let fact=1
if(number==0)
{
    console.log("The factorial is 1")
}
else
{
    while(number!=0)
    {
        fact=fact*number
        number--
    }
}
console.log(fact)

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
// let count=0
// for(let i=1;i<=100;i++)
// {
//     if(i%3==0||i%5==0)
//     {
//         count++
//     }
// }
// console.log(count)

// Find and print all perfect squares between 1 and 100.
// for(let i=1;i<=100;i++)
// {
//     let initializer=1
//     while(initializer<i)
//     {
//         if(initializer*initializer==i)
//         {
//             console.log(i)
//         }
//         initializer++
//     }
// }

// Print all prime numbers between 1 and 50.
for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    let divisor = 2;        

    while (divisor < i) {
        if (i % divisor === 0) {   
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        console.log(i);    
    }
}