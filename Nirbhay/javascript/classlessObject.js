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
let Image=function(obj)
{
    this.title=obj.title
    this.artist=obj.artist
    this.date=obj.date
}
let getImage=function(obj2)
{
    return{
        title:obj2.title,
        artist:obj2.artist,
        date:obj2.date
    }
}
let image1=new Image(artistCreation[0])
console.log(image1)
let image2=getImage(artistCreation[1])
console.log(image2)

/*Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:
contains - which takes as its argument the title of the image and returns true if the image is already placed in the 

list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list
clear – which removes all objects from the list.

While creating an object, use the Image constructor prepared in the earlier task.*/