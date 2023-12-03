
console.log("HOMEWORK SOLUTIONS INTRO TO JAVASCRIPT PART_1");

//Q_1 Largest of 
function max(x,y){
    if(x > y) return x;
    else if(y > x) return y;
    else return "Equal";
}
console.log("The largest number is:", max(3,3));

//Q_2 Largest of three numbers
function maxOfThree(x,y,z){
    if(x > y && x > z) return x;
    else if(y > x && y > z) return y;
    else return z; 
}
console.log("The max is:", maxOfThree(10,101,870));

//Q_3 Vowel checker
function isVowel(c){
    let Vowels = "aeiouAEIOU";
    let check = Vowels.includes(c);
    return check;   
}
console.log("Is there a Vowel: ", isVowel("e"));

//Q_4 The total sum of the numbers in a given array
// 4a Add
function sum(nums){
    let totalSum = 0;
    for(let e of nums){
        totalSum += e;
    }
    return totalSum;
}
let arr = [1,2,3,4];
console.log("The sum of the numbers:", sum(arr));
// 4b Multiply
function multiply(nums){
    let totalProduct = 1;
    for(let e of nums){
        totalProduct *= e;
    }
    return totalProduct;
}
let x = [1,2,3,4];
console.log("The sum of the numbers:", multiply(x));

//Q_5 Does reverse the word
function reverse(word){
    let reversedWord = "";
    for(let i = word.length-1; i >= 0; i--){
        reversedWord += word[i];
    }    
return reversedWord
}
console.log("The reversed of Michal =", reverse("Michal"));

//Q_6 Does the longest word count
function findLongestWordLength(n){
    let longest = n[0].length;
    for(let i = 1; i < n.length; i++){
        if(longest < n[i].length){
            longest = n[i].length;
        }
    }
    return longest;
}
let names = ["Michal", "Jossoyass", "Mango"]
console.log("This is the longest:", findLongestWordLength(names));

//Q_7 Display the words longer than a specific length
function filterLongWords(n, i){
    return n.filter(f => f.length > i);
}
let y = ["Michal", "Jossoyass", "Mango"]
console.log("The longest word ", filterLongWords(y,5));

//Q_8 The squared sum of the numbers with out imperative programming
function computeSumOfSquares(xy){
    return xy.map(m => m * m).reduce((x, y) => x+y , 0);
}
let myArr = [1,2,3];
console.log("The computed sum of the squered numbers: ",computeSumOfSquares(myArr));

//Q_9 Does print out only odd numbers
function printOddNumbersOnly(o){
    return o.filter(f => f % 2 !== 0);
}
let odds = [1,2,3,4,5,6,7];
console.log("Odd numbers: ", printOddNumbersOnly(odds));

//Q_10 Does workout the even square sum of numbers
function computeSumOfSquaresOfEvensOnly(e){
    return e.filter(f => f % 2 == 0).map(m => m * m).reduce((x,y) => x + y, 0)
}
let evens = [1,2,3,4,5,6,7];
console.log("Even sum when they squared: ",computeSumOfSquaresOfEvensOnly(evens));

//Q_11
// 11a Add using pure function
function sum(nums){
    return nums.reduce((x,y) => x + y, 0);
}
let arr1 = [1,2,3,4];
console.log("The sum of the numbers:", sum(arr1));
// 11b Multiply
function multiply(nums){
    return nums.reduce((x,y) => x * y, 1);
}
let x1 = [1,2,3,4];
console.log("The sum of the numbers:", multiply(x1));

//Q_12 The Fibo series of 9 consecutive numbers
function printFibo(n, a, b) {
    let result = "";
    let temp;
    while (n > 0) {
        result += a + ",";
        temp = a + b;
        a = b;
        b = temp;
        n--;
    }
    result = result.substring(0, result.length - 1);
    return result;
}

console.log("Here is the series: ", printFibo(12, 0, 1));
