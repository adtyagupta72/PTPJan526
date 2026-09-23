// We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

// Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

// display the first contact (first)

// display the last contact (last)

// display all contacts (all)

// add a new contact (new)

// exit the program (quit)

// After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.

// execcution
let ContactList = []
let NoofContact = Number(prompt("Enter the number of contact you want to enter:"))
for (let i = 1; i <= NoofContact; i++) 
{
    let name = prompt("Enter the name: ")
    let phone = prompt("Enter the phone no: ")
    let email = prompt("Enter the Email: ")
    ContactList.push({ name, phone, email })
}

while(true)
{
    let userChoise=prompt("1.Display first contact-- First\n2.Display last contact-- Last\n3.Display all Contact--All\n4.Add a new contact-- Add\n5.Exit the program-- Quit")
    if(userChoise=="First")
    {
        console.log(ContactList[0])
    }
    else if(userChoise=="Last")
    {
        console.log(ContactList[-1])
    }
    else if(userChoise=="All")
    {
        for(let i=0;i<=ContactList.length;i++)
        {
            console.log(ContactList[i])
        }
    }
    else if(userChoise=="Add")
    {
        name=prompt("Enter the name: ")
        phone = prompt("Enter the phone no: ")
        email = prompt("Enter the Email: ")
        ContactList.push({ name, phone, email })
    }
    else if(userChoise=="Quit")
    {
        break
    }
}