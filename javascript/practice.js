// // remove duplicates from array :
// function removeDuplicates(arr)
// {
//   return  new Set(arr);
// }
// console.log(removeDuplicates([1,3,2,2,1,3,2,4]));


// // MAx of two

// function Max(a,b)
// {
  
//    let result = a>b? a:b
//    return result
// }
// let max = Max(5,10)

// console.log(`The maximum no is : ${max}`)

// //arrow function
// let addThree = (a,b,c) => a+ b + c;
// console.log(addThree(20,30,10))


// // sum of all numbers

// function sumArray(arr)
// {
//     sum = 0 
//     for(let i = 0; i < arr.length ; i++)
//     {
//         sum += arr[i]
        
//     }
//     return sum
// }
// let shon= [2,3,4]
// console.log(sumArray( shon))

// // largest in array

// function largest(a)
// {
//    return Math.max(...a)
// }
// let array=[2,3,10,2]
// console.log(largest(array))

// // prime number

// function isPrime(num)
// {
//    if (num <= 1) 
//       {
//          return false;
      
//       }
//    for(let i = 2; i<= Math.sqrt(num);i++)
//    {
//       if(num % i === 0)
//       {
//          return false;
//       }
//    }
//    return true;
// }

// console.log(isPrime(32))


// function capital(str)
// {
//    if(!str)
//    {
//       return console.log("not a string")
//    }
//    return str.charAt(0).toUpperCase() + str.slice(1)
   
// }

// let str = "zeeshan"
// console.log(capital(str))

// function len(str)
// {
//    return str.length;
// }
//  str = "zeeshan"
// console.log(len(str))

// let name1 = "John"
// let name2 = "Zeeshan"
// let name3 = "Samantha"


// let no1 = 3452617278
// let no2 = 3452617278
// let no3 = 3452617278

 
// let email1 = "johngmail.com"
// let email2 = "zeeshangmail.com"
// let email3 = "samanthagmail.com"





// console.log("NAME          PH.NUMBER       EMAIL")
// console.log(name1,            no1,           email1)
// console.log(name2,            no2,           email2)
// console.log(name3,            no3,           email3)
  

// let contacts =[
//     {name1 : "John", no1 : 3452617278 , email1 :"johngmail.com"},
//      {name2 : "Zeeshan", no2 : 3452617278 , email2 : "zeeshangmail.com"},
//       {name3 : "Samantha", no3 : 3452617278 , email3 : "samanthagmail.com"}
// ]

// contacts.push(
//     {
//     name: "Maisie Haley",
//     phone: "0913 531 3030",
//     email: "risus.Quisque@urna.ca"
//     }
// )

// console.log(` Name : ${contacts[0].name1}, Number:  ${contacts[0].no1}, email:  ${contacts[0].email1}`)
// console.log(` Name : ${contacts[3].name}, Number:  ${contacts[3].phone}, email:  ${contacts[3].email}`)


const paintings = [
    {title: "Mona Lisa" , artist:"Leonardo da Vinci ", year: 1503},
    {title: "The Last Supper", artist:"Leonardo da Vinci" , year: 1495},
    {title: "Starry Night", artist:"Vincent van Gogh", year:  1889},
    {title: "The Scream ", artist: " Edvard Munch ", year: 1893 },
    {title: " Guernica ", artist:"Pablo Picasso ", year: 1937},
    {title:  "The Kiss", artist:"Gustav Klimt" , year: 1907},
    {title:"With a Pearl Earring" , artist: "Johannes Vermeer" , year: 1665},
    {title:  " The Birth of Venus", artist:"Sandro Botticelli" , year:1485 },
    {title:"Las Meninas" , artist: "Diego Velázquez" , year: 1656}
]

console.log(paintings[3].year)