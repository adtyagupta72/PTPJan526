
// function openConfirmationDialog(){


// let decision = window.confirm("is it OK")
// console.log("this is confirmation dialog box:", decision)
// }

// function openPROMPT(){
//     let name = window.prompt("what is your name ??")
//     name = name ? name : "anonymous"
//     let age = prompt("hello" + name + ",how old are you?")
//     alert(name + "is" + age + "years old")
// }
// function opencal(){
//     let length= window.prompt("Enter Length:")
//     let height= window.prompt("Enter Height:")
//     let width= window.prompt("Enter Width:")
//     let sum = length * width * height
//     alert ("volume=" + sum)

//  }





//debouncing
// window.addEventListener("click",function())
// {
//     console.log("clicked")
// }

// const inputElement = document.getElementById("fruits")
// function printInputText(text)
// {
//     console.log(text)
// }
// function debounce(fx, delay)
// {
//     let timeoutId = null
//     return function(text){
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout (()=>
//         {
//             fx(text)
//         },delay)
    
//     }
// }

// const debouncefn = debounce(printInputText, 2000)
// inputElement.addEventListener("input",(event))=>
// {
//     console.log("fruits")
//     debounce(event.target.value)
// }


//trottling

// let count = 0
// function printScroll()
// {
//     count += 1
//     console.log("scroll called", count)
// }
// function trottled(fx, delay)
// {
//     let timeoutId = null
//     return function()
//     {
//         if(!timeoutId)
//         {
//             timeoutId = getTimeout( () =>
//             {
//                 fx()
//                 clearTimeout(timeoutId)
//                 timeoutId = null
//             },delay)
//         }
//     }
// }
// const throttlefn = throttle(printScroll , 2000)
// document.addEventListener("scroll",(event) =>
// {
//     throttlefn()
// })