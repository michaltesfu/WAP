
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

