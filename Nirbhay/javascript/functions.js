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