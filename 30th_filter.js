const myNums = [1,2,3,4,5,6,7,8,9,10]

// return with filter method
// example 1

const newNums = myNums.filter( (num)=> num>4)
console.log(newNums)


// return using foreach

// example 2
/*
var newArr =[]

myNums.forEach( (nums)=> {
    if(nums>4){
        newArr.push(nums)
    }
})

console.log(newArr);
*/



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// filter example 3

let userBooks = books.filter( (book) => book.edition >=2000 )

userBooks = books.filter( (book)=>{
    return book.genre ==="Fiction" && book.edition >=2000
})
console.log(userBooks);
