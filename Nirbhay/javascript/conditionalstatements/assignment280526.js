// . Write a script that will ask the user to input a number. Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
// let number=prompt("Enter a number")
// if(number>90 && number<110)
// {
//     console.log("Bingo!")
// }else console.log("Miss")

// Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
// let num1 = prompt("Enter the first number:")
// let num2 = prompt(`okay first num is ${num1} now enter the second number: `)
// let operator = prompt(`now the numners are ${num1} and ${num2} give the operator to perform on these two number: `)
// let res
// if (!(Number.isNaN(num1)) && Number.isNaN(num2)) {
//     console.log("invalid operation")
// }
// else if(operator=="+")
// {
//     res=Number(num1)+Number(num2)
//     console.log(res)
// }
// else if(operator=="-")
// {
//     res=Number(num1)-Number(num2)
//     console.log(res)
// }
// else if(operator=="*")
// {
//     res=Number(num1)*Number(num2)
//     console.log(res)
// }
// else if(operator=="/")
// {
//     res=Number(num1)/Number(num2)
//     console.log(res)
// }

//Practise Questions
// Write a program that determines whether a given number is positive or not.
// let num=76
// if(num>=0)
// {
//     console.log("number is positive")
// }else if(num<0){
//     console.log("number is negative")
// }

// Write a program that checks if a number is even or odd.
// let numbr=76
// if(numbr%2==0)
// {
//     console.log("number is even")
// }else if(number%2!=0){
//     console.log("number is odd")
// }

// Write a program to determine the greater of two numbers.
// let numbr1=67
// let numbr2=90
// if(numbr1>numbr2)
// {
//     console.log(`${numbr1} is greater`)
// }else console.log(`${numbr2} is greater`)

// Write a program that assigns a letter grade based on a numerical grade.
// let numericalGrade=90
// if(numericalGrade>=90){
//     console.log("you got grade A")
// }
// else if(numericalGrade>=80 && numericalGrade<=89)
// {
//     console.log("you got grade B")
// }
// else if(numericalGrade>=70 && numericalGrade<=79)
// {
//     console.log("you got grade C")
// }
// else console.log("Fail")

// Write a program that calculates the ticket price based on age.
// let age=67
// if(age<10 || age>70){
//     console.log("Ticket price is 0")
// }
// else if(age>=11 && age<=30)
// {
//     console.log("Ticket price is 30")
// }else if(age>=31 && age<=69)
// {
//     console.log("Ticket price is 50")
// }

// Write a program that determines if a year is a leap year.
// let year=2028
// if(year%4==0)
// {
//     console.log(`${year} is a leap year`)
// }else console.log(`${year} is not a leap year`)

// Write a program that calculates a discount based on the purchase amount.
// let amount=500
// if(amount>=100 && amount<500)
// {
//     console.log(`you got a discount of 10% and your final amount is ${amount-(10*amount/100)}`)
// }
// else if(amount>=500 && amount<999)
// {
//     console.log(`you got a discount of 50% and your final amount is ${amount-(50*amount/100)}`)
// }

// Write a program that greets the user based on the time of day.


// Write a program that calculates the Body Mass Index (BMI) and categorizes it.
// let weight=63
// let height=1.7
// var BMI=weight/(height)**2
// if(BMI<18.5)
// {
//     console.log(` Your BMI score is ${BMI} and you are underweight`)
// }
// else if(BMI>=18.5 && BMI<25.0)
// {
//     console.log(` Your BMI score is ${BMI} and you are healthy`)
// }
// else if(BMI>25.0 && BMI<30.0)
// {
//     console.log(` Your BMI score is ${BMI} and you are overweight`)
// }
// else if(BMI>=30.0)
// {
//     console.log(` Your BMI score is ${BMI} and you are obese`)
// }


// Write a simple number guessing game
