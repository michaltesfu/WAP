// PART II JavaScript HomeWork Solutions
//question 1


//a Add a new book to the libraryBooks array?
let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257}
 ];
function addBook(title,author,libraryID){
    const newBook = {title: title,
        author: author,
        libraryID: libraryID
    };

    libraryBooks.push(newBook);
    return newBook;
}
const myAddedBook = addBook("rosemary beach","Abbi ", 2124);
console.log("Array of books: ",libraryBooks);



//b Get title and order the books in alphabetically order?


function getTitles(){

   const title= libraryBooks.map(book => book.title)
   const result=title.sort();
   return result;
}


const result = getTitles();
console.log("Here are the titles alphabetically ordered: ",result);

//c Find Book by its given keyword and alphabetically ordered by the author?
function findBooks(keyword){
    const booksWithRoadInTitle = libraryBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase())); 
    return booksWithRoadInTitle.sort((a,b) => a.author.localeCompare(b.author));
}
const selectedListByKeyWord = findBooks("road");
console.log('Here are the books that contains "ROAD" keyword ordered by author: ',selectedListByKeyWord);

// question 2
//This code does map every element of the array and by applying the function, it will return squared numbers in a new array 

function myMap(arr, fun){
    return arr.reduce((acc, current, i, array) => {
        acc.push(fun(current, i, array));
        return acc;
    }, []);
}
let myArr = [11,22,33,44,50];
let squaredNums = myMap(myArr, x => x ** 2);
console.log("Here are the the square of the numbers from the array: ",squaredNums);