// Print sum of multiples of 4 between 1 and 100.
// let sum=0
// for(let i=1;i<=100;i++)
// {
//     if(i%4==0)
//     {
//         sum+=i
//     }
// }
// console.log(sum)

// Write a program to print Fibonacci series up to 10 terms.
// let first=0
// let second=1
// let sum=0
// console.log(1)
// for(let i=1;i<=10;i++)
// {
//     sum=first+second
//     console.log(sum)
//     first=second
//     second=sum
// }

// Write a program to print reverse of a number (e.g. 123 → 321).
let number=123
let digit=0
let newNumber=0
while(number!=0)
{
    digit=(number%10)
    newNumber=(newNumber+digit)*10
    number=Math.floor(number/10)
}
console.log(newNumber)

// Write a program to print first 5 even numbers using do...while.
// let i=1
// do{
//     if(i%2==0)
//     {
//         console.log(i)
//     }
//     i++
// }while(i<=10)

// Write a program to print first 10 natural numbers and their sum.
let initializer=1
let sum=0
while(initializer!=11)
{
    sum=sum+initializer
    initializer++
}
console.log(sum)

// Print cube of numbers 1 to 5.
for(let i=1;i<=5;i++)
{
    console.log(i**3)
}

// Write a program to print all Armstrong numbers between 1 and 500.

for(let i=1;i<=500;i++)
{
    let sum=0
    let digit=0
    if(i<10)
    {
        console.log(`${i} is not a armstrong number`)
    }
    else
    {
        while(i!=0)
        {
            digit=i%10
            sum=sum+(digit**3)
            i=Math.floor(i/10)
        }
        if(sum==i)
        {
            console.log(`${i} is a armstrong number`)
        }
    }
}

// Print the multiplication table from 1 to 10.
for(let num=1;num<=10;num++)
{
    for(let factor=1;factor<=10;factor++)
    {
        console.log(num*factor)
    }
}

// Write a program to print a number triangle.
for(let row=1;row<=5;row++)
{
    for(let coloumn=1;coloumn<=row;coloumn++)
    {
        process.stdout.write(`${coloumn}`)
    }
    console.log()
}

// Write a program to print reverse triangle.
for(let row=1;row<=5;row++)
{
    for(let coloumn=5;coloumn>=row;coloumn--)
    {
        process.stdout.write("*")
    }
    console.log()
}