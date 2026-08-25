// You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512). Display all the images in the list in the console (full information: title, artist and date of creation)
let artistCreation=
[
    {title:"Mona lisa",artist:"Leonardo da Vinci", date:1503},
    {title:"The Last Supper",artist:"Leonardo da Vinci", date:1495},
    {title:"Starry Night",artist:"Vincent van Gogh", date:1889},
    {title:"Girl With a Pearl Earring",artist:"Johannes Vermeer", date:1665},
    {title:"The Birth of Venus ",artist:"Sandro Botticelli", date:1485},
    {title:"Las Meninas ",artist:"Diego Velázquez", date:1656},
    {title:"The Creation of Adam",artist:"Michelangelo", date:1512}
]
console.log(artistCreation)

/*Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.
The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, create a new array, images1, using the Image constructor (don't copy the objects, but just create new ones based on the properties read).
Similarly, from images1 create a new array, images2, using getImage. Display the contents of images2
*/

let Image=function(title,artist,date)
{
    this.title=title
    this.artist=artist
    this.date=date
}
let getImage=function(title,artist,date)
{
    return{
        title:title,
        artist:artist,
        date:date
    }
}
let image1=new Image(...artistCreation)
image1=new Array(image1)
let image2=getImage(...image1)
console.log("image1",image1)
console.log("image2",image2)

// let Image=function(obj)
// {
//     this.title=obj.title
//     this.artist=obj.artist
//     this.date=obj.date
// }
// let getImage=function(obj2)
// {
//     return{
//         title:obj2.title,
//         artist:obj2.artist,
//         date:obj2.date
//     }
// }
// let image1=new Image(artistCreation[0])
// console.log(image1)
// let image2=getImage(artistCreation[1])
// console.log(image2)

/* scenerio 3-
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:
contains - which takes as its argument the title of the image and returns true if the image is already placed in the 

list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list
clear – which removes all objects from the list.

While creating an object, use the Image constructor prepared in the earlier task.

*/
let images= new Image(...artistCreation)
console.log("images",images)

/*Scenario 4

Complement the images object from the previous task with two new methods (without rewriting the whole object):
edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties
delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)

Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.
*/



/*Practice Questions:

1.Add a method greet to the object person from above that returns "Hello, " + name.
6.Create deeply nested prototype objects.
*/

//2.Create an object with name and age properties.
let makeObj=
{
    name:"Nirbhay",
    age:20
}
//3.Add a nested address object.
makeObj.address={
    state:"UP",
    city:"sitapur"
}
console.log(makeObj)

//4.Create object with null prototype.
let newObj={
    name:"harshit",
    age:20,
    school:"DAV public school"
}
newObj.__proto__=null
console.log("Object.getPrototypeOf(newObj) ",Object.getPrototypeOf(newObj))

//5.Create an object with a prototype.
let withProto=Object.create(newObj)
console.log(Object.getPrototypeOf(withProto))

//7.Create a constructor and instantiate object.
let createObj=function(name,age,gender)
{
    this.name=name
    this.age=age
    this.gender=gender
}
let objectCrt=new createObj("nirbhay",20,"M")
console.log(objectCrt)

//8.Add method using prototype.
createObj.prototype.sayHello=function()
{
    return `hello my name is ${this.name}`
}

console.log(objectCrt.sayHello())

//9.Create multiple instances using constructor.
let objectCrt2=new createObj("jatin",20,"M")
let objectCrt3=new createObj("lalit",30,"M")

//10. Add computed method in constructor.
let createObjcomputed=function(name,age,gender)
{
    this.name=name
    this.age=age
    this.gender=gender
    this[name]=function()
    {
        return this.name;
    }
}
let objectCrtComp=new createObjcomputed("nirbhay",20,"M")
console.log("objectCrtComp.nirbhay()",objectCrtComp.nirbhay())

//Assignment Questions:
//1. Create objects dynamically in a loop.
let createObjects=function(empId,empName,empSalary)
{
    this.empId=empId
    this.empName=empName
    this.empSalary=empSalary
}
let newObjArr=[]
for(let i=1;i<=5;i++)
{
    let name= "Nirbhay" //prompt("Enter the name of the Employee")
    let salary=300000 //prompt("Enter the salary of the employee")
    newObjArr.push(new createObjects(i,name,salary))
}
console.log(newObjArr)

//2. Manually set prototype using Object.setPrototypeOf().
Object.setPrototypeOf(newObjArr[0],newObj)
console.log(Object.getPrototypeOf(newObjArr[0]))

//3. Create a chain: animal → dog → puppy.
let animal=
{
    legs:4,
    sound:"differ",
    eyes:2,
    smellAbility:"Differ"
}
let dog=
{
    sound:"barks",
    smellAbility:"strong"
}
Object.setPrototypeOf(dog,animal)
console.log("Object.getPrototypeOf(dog) ",Object.getPrototypeOf(dog))
console.log("dog.legs ",dog.legs)
let puppy=
{
    sound:"pitched bark",
    smellAbility:"strong"
}
Object.setPrototypeOf(puppy,dog)
console.log("Object.getPrototypeOf(puppy)",Object.getPrototypeOf(puppy))

//4. Compare two objects with same content.
let student1=
{
    name:"Rahul",
    age:20
}
let student2=
{
    name:"Rahul",
    age:20
}

console.log(student1==student2)

// 5. Use factory function to return new objects.
let developObj=function(title,desc,tag)
{
    return{
        title:title,
        desc:desc,
        tag:tag
    }
}
console.log(developObj("rohan ki gadi","gadi kharab ho gayi","funny"))
console.log(developObj("khooni raat","shabnam ki Khooni raat","horror"))

//6. Create a plain object using literal syntax and add two properties to it.
let literalObj=
{
    id:1,
    age:30,
    condition:"good"
}
literalObj.version='2.o'
literalObj.parentalControl=false
console.log(literalObj)

// 7. Add a property using bracket notation. 
literalObj["cruiseControl"]=false

//8. Delete a property from an object.
delete literalObj.cruiseControl
console.log(literalObj)

//9. Loop through object keys using for…in
for(let keys in literalObj)
{
    console.log(keys)
}
//10. Copy properties from one object to another using Object.assign()
let literalObj2={}
Object.assign(literalObj2,literalObj)
console.log(literalObj2)
console.log(literalObj==literalObj2)