/*Scenario 1 
Try to prepare a simple system to store information about students and teachers and combine them for tutoring.
Create a User class to create objects for both teachers and students. The constructor should take the user data (name, surname, email, role), but be sure to create the appropriate properties.

Additionally, create the following methods:
addCourse(course, level) - which will allow you to add course (e.g. math) and level (e.g. 2 - the higher the number, the higher the level) in the case of a student, it will mean that they are looking for help on this level, and in case of a teacher, it will mean that they can help up to this level
removeCourse(course) - which will allow you to remove the course (e.g. if the student is no longer interested in learning math)
editCourse(course, level) - which will allow you to change the level associated with the course
sendMessage(from, message) - which will allow you to send a 'message' message from user 'from' to the user described in the object complete information about the sent message should be stored in the local cache (hint: use an array for this) the sending of the message itself will only be simulated, declare the function sendEmail(from, to, message) {} beforehand and use it in the appropriate place
showMessagesHistory() - which will display the history of all messages sent to the user in the console.*/ 

class User
{
    constructor(name,surName,eMail,role)
    {
        this.name=name
        this.surName=surName
        this.role=role
        this.eMail=eMail
        
    }
    addCourse({course,level})
    {
        this.course=course
        this.level=level
    }
    removeCourse(course)
    {
        delete this.course
    }
    editCourse(level)
    {
        this.level=level
    }
    sentMessage(from, message)
    {
        this.email={
            from:from,
            to:this.name,
            message:message
        }
    }
    showAllmessage()
    {
        console.log(this.email.message)
    }
}

let user1=new User("Nirbhay","Kumar","nir@gmail.com","student")
user1.addCourse({course:"math",level:45})
console.log(user1)
user1.editCourse(50)
console.log(user1)
user1.sentMessage("Raghav",["hello bro the work is very good keep it up!"])
console.log(user1)
user1.showAllmessage()

/*
Scenario 2
Create a new class, ExtendedUser, that will inherit from the User class.
Put a setter and getter named fullName in it. The getter should return the first name and last name concatenated into one string. The setter takes the concatenated first and last name *e.g. 'Rafael Fifer') and splits it into first and last name (the split method), changing the appropriate properties of the object.

Based on the ExtendedUser class, create two more classes, Teacher and Student (inheritance). They should not have any new methods or properties, but only the default roles in their constructors to 'teacher' or 'student' respectively (i.e. their constructors will take three parameters instead of four: name, surname, and email)
*/
class ExtendedUser extends User
{
    constructor(firstName,lastName)
    {
        super()
        this.firstName=firstName
        this.lastName=lastName
    }
    set Name(fullName)
    {
        let indentity=fullName.split(" ")
        console.log(indentity)
    }
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
}
let extendUser=new ExtendedUser("Nirbhay","kumar")
let fullName=extendUser.fullName
extendUser.Name=fullName

class Student extends ExtendedUser
{
    constructor(name,surname,email)
    {
        this.name=name
        this.surname=surname
        this.email=email
    }
}

class Teacher extends ExtendedUser
{
    constructor(name,surname,email)
    {
        this.name=name
        this.surname=surname
        this.email=email
    }
}

