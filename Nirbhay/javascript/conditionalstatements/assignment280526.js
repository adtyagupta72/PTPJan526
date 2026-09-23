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
// let timeFormat=prompt("Enter the time format(AM Or PM): ")
// let time=prompt("Enter the actual time: ")
// if(timeFormat=="AM")
// {
//     if(parseInt(time)>=1 && parseInt(time)<12)
//     {
//         console.log("good morning")
//     }
// }
// else if(timeFormat=="PM")
// {
//     if((parseInt(time)>=1 && parseInt(time)<=5)|| parseInt(time)==12)
//     {
//         console.log("good afternon")
//     }
//     else if(parseInt(time)>6 && parseInt(time)<24)
//     {
//         console.log("goodNight")
//     }
// }

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
// let actualNumber = 55
// let userGuess = prompt("Guess the number...")

// if (parseInt(userGuess) == actualNumber) {
//     alert("Your guess is correct")
// }
// else if (parseInt(userGuess) < actualNumber) {
//     alert("Your guess is smaller then the actual number --Try again")
//     if (parseInt(userGuess) <= 10) {
//         alert("You have to Guess above 10")
//     }
// }
// else if (parseInt(userGuess) > actualNumber) {
//     alert("Your guess is larger then the actual numebr -- Try again")
// }


// PRACTICE QUESTIONS---

// Write a program that takes a number from 1 to 7 and prints the corresponding day of the week.
// let dayNumber=prompt("Enter the number of the day :")
// switch(parseInt(dayNumber))
// {
//     case 1:
//         console.log("monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         alert("Enter a valid number")
// }


// Write a program that takes three numbers as input and prints the largest one.

// let num1=prompt("Enter the first number")
// let num2=prompt("Enter the second number")
// let num3=prompt("Enter the third number")
// if(parseInt(num1)>parseInt(num2))
// {
//     if(parseInt(num1)>parseInt(num3))
//     {
//         console.log("num1 is the largest")
//     }
// }
// else if(parseInt(num1)<parseInt(num2))
// {
//     if(parseInt(num2)>parseInt(num3))
//     {
//         console.log("Num2 is greatest")
//     }
//     else console.log("num3 is greatest")
// }
// Write a program that simulates a basic login system. Ask for a username and password, and check if they match predefined correct values.
// const USERNAME="nirbhayy_1"
// const PASSWORD="NirbhayKumar@123"
// let username=prompt("Enter the username: ")
// let password=prompt("Ennter the password: ")
// if(username==USERNAME && password==PASSWORD)
// {
//     alert("Login successfully...")
// }else alert("Failed to login")

// Write a program that categorizes a person's stage in life based on age.
// let age=prompt("Enter the age: ")
// if(age>0 && age<=3)
// {
//     alert("You are infant")
// }
// else if(age>=4 && age<=12)
// {
//     alert("You are in childhood")
// }
// else if(age>=13 && age<=19)
// {
//     alert("You are in teenage")
// }
// else if(age>=20 && age<=64)
// {
//     alert('You are in middle adulthood')
// }else alert('You are in late adulthood')


// Write a switch program to print the name of the month based on month number (1 to 12).
// let monthNumber=prompt("Enter the month number: ")
// switch(parseInt(monthNumber))
// {
//     case 1:
//         alert("January")
//         break
//     case 2:
//         alert("February")
//         break
//     case 3:
//         alert("March")
//         break
//     case 4:
//         alert("April")
//         break
//     case 5:
//         alert("May")
//         break
//     case 6:
//         alert("June")
//         break
//     case 7:
//         alert("July")
//         break
//     case 8:
//         alert("August")
//         break
//     case 9:
//         alert("september")
//         break
//     case 10:
//         alert("October")
//         break
//     case 11:
//         alert("November")
//         break
//     case 12:
//         alert("December")
//         break
//     default:
//         alert("Invalid input")
// }

// "Write a program using a switch statement to simulate a basic menu selection system."
// let choice = parseInt(prompt("Enter the choice you want \n 1.Addititon \n 2.Substraction \n 3.multiplication \n 4.Divide"))
// let num1=10
// let num2=20
// switch(choice)
// {
//     case 1:
//         console.log("Addition",num1+num2)
//         break
//     case 2:
//         console.log("Substraction",num1-num2)
//         break
//     case 3:
//         console.log("multiply",num1*num2)
//         break
//     case 4:
//         console.log("Divide",num1/numm2)
//         break
//     default:
//         console.log("Enter a valid input")
// }

// "Write a program to implement a food ordering system."
let foodChoice=parseInt(prompt("Enter the choice number of food :\n 1.Pizza\n 2.Fried Rice\n 3.Pasta\n 4.Macroni\n 5.Maggi\n 6.CHilli potato"))
switch(foodChoice)
{
    case 1:
        console.log("You ordered Pizza please wait 2min the order is getting ready")
        break
    case 2:
        console.log("You have ordered Fried rice wait 3min order is getting ready")
        break
    case 3:
        console.log("You have ordered pasta wait 3min order is getting ready")
        break
    case 4:
        console.log("You have ordered macroni wait 3min order is getting ready")
        break
    case 5:
        console.log("You have ordered Maggi wait 3min order is getting ready")
        break
    case 6:
        console.log("You have ordered chilli potato wait 3min order is getting ready")
        break
    default:
        alert("please enter a valid input")
}
// Write a program that takes a color ("red", "yellow", "green") as input and prints the required action ("Stop", "Get Ready", "Go").
// let signal=prompt('Enter the signal Colour: ')
// if(signal=="red")
// {
//     alert('Stop')
// }
// else if(signal=="yellow")
// {
//     alert('Get Ready')
// }
// else if(signal=="green")
// {
//     alert('Go')
// }else alert("Invalid input Pls Enter a valid input")

// Write a program that takes the length and width of a four-sided shape and determines if it is a square or a rectangle.
// let length=prompt("Enter the length: ")
// let breadth=prompt("Enter the width: ")
// if(length==0 || breadth==0)
// {
//     console.log("Neither square nor rectangle ")
// }
// else if(length==breadth)
// {
//     console.log("Its a square")
// }
// else if(length!=breadth)
// {
//     console.log("Rectangle!")
// }

// Write a program that prompts the user to enter a single letter and determines whether it's a vowel or a consonant.
// let letter=prompt("Enter the letter: ")
// let vowels=["a","e","i","o","u"]
// let i=0
// while(i<vowels.length)   //while loop works more well
// {
//     if(letter==vowels[i])
//     {
//         console.log("Vowel !")
//         break
//     }
//     else{
//         console.log("consonant !")
//         break
//     }
//     i++
// }