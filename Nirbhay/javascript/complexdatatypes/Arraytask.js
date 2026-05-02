let books = [
    {
        title: "Speaking javascript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "programming javascript application",
        author: "Eric Ellicott",
        pages: 254
    },
    {
        title: "understanding ECMAScript 6",
        author: "Nicholas c zakas",
        pages: 352
    }
]
books.push({
    title: "Learning javascript design pattern",
    author: "addy Osmani",
    pages: 254
})

console.log(books.length)
console.log(books[0].title, books[1].title, books[2].title, books[3].title)

//for last two books from an array  --- (starting,ending-1)
let newArr = books.slice(2)
console.log(newArr)

// first book is lost so i removed it from original array
books.shift(0)
console.log(books)
console.log(books.length)
console.log(books[0].title, books[1].title, books[2].title)

//sum of pages
console.log(books[0].pages + books[1].pages + books[2].pages)