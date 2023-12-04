
// function max(num1,num2){
//     if(num1>num2){
//        return num1
//     }
// else{
// return num2
// }
// }
// let result = max(2,3)
// console.log(result);



// function maxthree(num1,num2,num3){
//     if (num1 > num2 &&  num1 > num3){
//     return num1;
//     }
//     else if(num2 > num1 && num2 > num3) {
//         return num2;
//     }
//    else
//         return num3;
// }
// let result1 = maxthree(5,67,89);
// console.log(result1)

// let x =5;
// console.log(x);
// if(x==5){
//     let y =2*x;
//     console.log(y);
//     console.log(x);
// }
// console.log(x);
// console.log(y)
// const x=5;
// console.log(!x);
// console.log(x);
// console.log(!!x);


// let a ="michal tesfu";
// let firstname= a.substring(0, a.indexOf(" "));
// console.log(firstname);
// console.log(a.length)

// let str="Widget with id";
// console.log(str.indexOf('Widget'))
// console.log(str.indexOf('widget'))
// console.log(str.indexOf("id"))

// let sum =0;
// for(let i=0; i<100;i++){
//     sum+=i;
// }
// console.log(sum)

// let na="michal";
// for(let i=0;i< na.length; i++){
// na1=na[i]+na[i]
// }
// console.log(na1)


// function sum (num1=9,num2=3){
//     return num1+num2;
// }

// console.log(sum);
// function addeven(num){
//     if(!num) return "not valid number";
//     if (nub%2==0) return "even";
//      else return "odd";
    
   
// }
// console.log(addeven(5))


// function oddEven(num = 0) {
//     if (!num) return "Not a valid number";
//     if (num % 2 == 0) return "Even";
//     else return "Odd";
//   }
  
//   // Example calls
//   console.log(oddEven(5)); // Output: Odd
//   console.log(oddEven(10)); // Output: Even
//   console.log(oddEven()); // Output: Not a valid number
// let na="tesfu" 
// function showoff(){
//     let message ="michal hi "+ na;
//    return message
//  }
//  console.log(showoff())
// let a= " jossi"
// function na(){
//     let a ="michal";
//     let message = "hi " + a;
//     console.log(message)
// }
// console.log(na())


// let x = 10;
// function main() {
// let x;
// console.log("x1: " + x);

// if (x > 0) {
// let x = 30;
// console.log("x2: " + x);
// }
// x= 40;
// let f = function(x) { console.log("x3: " + x); }
// f(50);
// }
// main();
// const factorial1= function fac (n){
//     return n < 2 ? 1 : n * fac(n-1)
// };
// console.log(factorial1(3));

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1)
//     };
//     console.log(factorial(3));
// function f(x) {
//     console.log("x: " + x);
//     }
//     f();
//     f(1);
//     f(2, 3);
// function findMax() {
//     let i;
//     let max = -Infinity
//     for (i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//     max = arguments[i];
//     }
//     }
//     return max;
//     }
//     let max1 = findMax(1, 123, 500, 115, 66, 88);
//     console.log(findMax(max1));
    
//     let max2 = findMax(3, 6, 8);
//   console.log(findMax(max2))
   

//   function findmax(){
//     let max = -Infinity;
//     for(let i=0; i <arguments.length;i++){
//         if(arguments[i]>max){
//             max=arguments[i];
//         }
//     }
//     return max;
// }
//     let max3= findmax(3,4,5);
//     console.log(findMax(max3))

// const fruitname=['banana','apple','orange'];
// fruitname[2]="michal";
// fruitname[3]='jossey';
// fruitname[8]='helen'

// // console.log(fruitname.shift('banana'));
// // console.log(fruitname);
// fruitname.pop("apple")
// // console.log(fruitname.pop('apple'));
// console.log(fruitname);
// let na=["michal" ,"is" ,"the", "perefect" ,"girl"];
// na.splice(1,1);

// na.splice(0,3,"jossi","is","perfect");
// console.log(na);
// let num =[1,2,3];
// console.log(num);
// console.log(num.toString ==='1,2,3');
// 
// let strArr=["hello","world","all"]
// let conc= strArr.reduce(function(acc,elem,i,strArr){
//     return acc + elem + " "}," ")
// console.log(conc);
// let arr1=[10,90,80,1000]
// let find =arr1.find (function(elem,i,arr)){
//     return find >100;
// }
// console.log(find)
// let matric=[
//     [5,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// // for(let i=o;i<matric.length;i++)
// let user ={
//     full nam:"michal",
//     "shipping addres":[
//         {street:"100 n with", city:"dallas",state:"texas"}
//     ]
   
// }
// console.log(user["shipping addres"][0].state);
// let user ={
//     fname:"michal",
//     lname:"tesfu",
//     "birds names":"canary"
// }
// user.fname="aida"
// user.family="tesfu"
// user.get=function(){
//     return true;
// }
// delete user .fname,
// delete user["birds names"]
// console.log(user)
// let user={
//     fname:"michal",
//     lasname:"tesfu",
//    "birds name": "canary"
   
// }
// delete user["birds name"]
// console.log(user["birds name"])
// user.mname="ghe"
// delete user.mname
// console.log(user)

// let user={}

// let key="birds name";

// //user [key]= true 
//  user.key=true
//  user['key']=true

// console.log(user)
// let user={
//     name:"michal",
//     age:40,
// }
// let result="name";
// console.log(user.result)
// console.log(user[result])
// let numbers=[1,2,3,4,5,5,6,6,67,87,80]
// let maximam = Math.max(...numbers)
// console.log(maximam)

// let x=["m","n","x"]
// let y=["z","6","9"]
// let zis=x.push( y)

// console.log(x)

// let users=[
//     {id:8,names:"mikalliks"},
//     {id:87,names:"sizianaaa"},
//     { id:54,names:"kibromm"}
// ]
// let someusers=users.filter(f=>f<2)
// console.log(someusers.length)
// let users=["michal","nahom","mengis","semere"]
// let use=users.map(m =>m.length)
// console.log(use)



// function x(a,b){
//     if( a>b)return 1;
//     if(a==b)return 0;
//     if(a<b)return -1
// }

// num.sort(x)
// console.log(num)
// let num=[6,7,21,1,2]
// let x= num.filter(f=>)f%2!==0)
// const a = ["Hydrogen", "Helium", "Lithi", "Beryllium"];
// const x= a.filter(f=>f.length>5)
// const y=a.find(f=> f.length>5)
// const z = a.findIndex(f=>f.charAt)
// console.log(x)

// var a, b, c, d, e;
// a = [1, 2, 3];
// b = "dog";
// c = [42, "cat"];
// let x=a.concat(b,c)
// console.log(x)
// console.log(...a,b,...c)
// const numbers = [10, 20]; let
// [a, b] = numbers;
// console.log(a);
// console.log(b);

// let fruit="banana"
// let fun={
//     [fruit]:5
// }
// console.log(fun.banana)
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
//     for(let elem of user){
//         return elem
//     }

//     console.log(elem)

// function max(x){


// }
// console.log(max())
// var x = 5;
// console.log(x);
// if(x==5){
//     let y = 2*x;
// console.log(y);
// console.log(x); 
// }
// console.log(x);
// console.log(y); 
// let le="empty"
// console.log(Boolean(le))

// let libraryBooks = [
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
//     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
//     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
//   ];
  
//   function addBook(title, author, libraryID) {
//     // Create a new book object
//     const newBook = { title, author, libraryID };
  
//     // Add the new book to the library
//     libraryBooks.push(newBook);
  
//     // Return the newly created book
//     return newBook;
//   }
  
//   // Example usage:
//   const newBook = addBook("The Great Gatsby", "F. Scott Fitzgerald", 7890);
//   console.log(newBook);
//   console.log(libraryBooks);
// function max(a,b){
//   if(a>b)return a
//   else if( b>a)return b
//   else "they are eqyal"
// }
// console.log(max(989,7))

// function maxOfThree(a,b,c){
//   if(a>b && a>c)return a;
//   if(b>a && b> c)return b;
//   else return c
// }
// console.log( maxOfThree(9,44,2))
//  function isVowel(a) {
//  let vowel= "AEIOUaeiou"
//   let check=vowel.includes(a)
//   return check;
//  }
//  console.log( isVowel("a") )


//  function isVowel(c){
//   let Vowels = "aeiouAEIOU";
//   let check = Vowels.includes(c);
//   return check;   
// }


// function sum(zis) {
//   let total=0;
//   for(i=0; i<zis.length;i++){
// total+=zis[i]
// }
// return total
// }

// console.log(sum(x) )


// function multiply(zis) {
//   let total=1;
//   for(let elet of zis){
//     total*=elet
//   }
//   return total;
// }
// let x=[1,2,3,4]
// console.log(multiply(x))
// f

// function printOddNumbersOnly(x){
// return x.find(f=>f % 2 !==0);
// }
// let xy=[23,1,24,2,6]
// console.log(printOddNumbersOnly(xy))

// function printOddNumbersOnly(o){
//   return o.filter(f => f % 2 !== 0);
// }
// let odds = [1,2,3,4,5,6,7];
// console.log("Odd numbers: ", printOddNumbersOnly(odds));
// function computeSumOfSquaresOfEvensOnly(xy){
//   return xy.find(f=> f % 2 == 0).map(m => m * m).reduce((x,y)=>x+y,0)

// }
// let num=[1,2,2,2]
// console.log(computeSumOfSquaresOfEvensOnly(num))
// 
// const x=[1,2,3,4,5];
// const y = x.splice(2)
// const z= x.slice(2)
// console.log(y)

 // Assuming you have a library object to store books










// const library = [];

// function addBook(title, author, libraryID) {
//     // Create a new book object
//     const newBook = {
//         title: title,
//         author: author,
//         libraryID: libraryID
//     };

//     // Add the new book to the library
//     library.push(newBook);

//     // Return the newly created book
//     return newBook;
// }

// // Example usage:
// const book1 = addBook("The Great Gatsby", "F. Scott Fitzgerald", 123);
// console.log(book1);

// const book2 = addBook("To Kill a Mockingbird", "Harper Lee", 456);
// console.log(book2);

// let libraryBooks = [
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
//     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
//     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
//    ];


// //    function zis(xy){
// //     let y= libraryBooks.map(map=>map.title)
// //     let result=y.sort();
// //     return result
// //    }
// //    const ha=zis()
// // console .log(zis())

// function zis(xy){
//     const result=libraryBooks.find(find=>find.title).sort()

// return result}
// console .log(zis())
function myMap(arr, fun) {
    const mappedArray = [];

    for (let i = 0; i < arr.length; i++) {
        // Apply the function to each element and save the result in the new array
        mappedArray.push(fun(arr[i], i, arr));
    }

    return mappedArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Define a function to square each number
const squareFunction = (num) => num * num;

// Use myMap to create a new array of squared numbers
const squaredNumbers = myMap(numbers, squareFunction);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
