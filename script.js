let greet = (personName) =>{
    console.log(`hello, ${personName}! `);
    
}

let square = number =>{
    // return number * number;
    let total = number * number
    console.log(total);
    
 
}

let isEven = (number) =>{
    if (number % 2 === 0) {
        console.log("Number is even");
        
    } else{
        console.log("Number is not even");
        
    }
}


greet("Emily")
// console.log(square(5));
square(5)

isEven(2)
isEven(5)

// console.log(square(2));


// Task 1
// const squareTwo = (x) => { return x * x; };
let squareTwo = (x) => x * x

// Task 2
// const multiply = (a, b) => { return a * b; };
let multiply = (a,b) => a * b

// Task 3
// const getMessage = () => { return "Welcome to JavaScript!"; };
let getMessage =() => "Welcome to JS"


console.log(getMessage());
console.log(multiply(4,2));
console.log(squareTwo(4));



//PREP Step Class Work
/*
Parameters:
prices in array = float

Results:
reduce the prices in the by 20% (*.8)
final result: total of all the prices once discounted, float

Examples:
const prices = [10.99, 5.49, 12.99, 8.75, 15.20]
let priceReduced = [(10.99 *8), (5.49 * .8),....]
total = (10.99 * .8) + (5.49 * .8)+....

pricesTwo = [0, 5.49, 12.99, 8.75, 15.20]
priceReduced = [(0 * .8), ...]
total = 0 + ....

priceThree = [-5.99, 12.55, -3.56,...]
Set an error message if there is a negative number = "Check entry, negative detected"

Pseudo:

1. start with the given array
2. create a new array (discountArray) that will hold the discounted prices
    multiply each array element by 0.80 to get the 20% discount
    get into the array by using map
3. create a total variable to keep track of the items being added
4. console log the total variable


*/

//Exercise 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your higher-order function
const evenNumbers = numbers.filter(num => num % 2 ==0)
// Use filter and/or map
let evenNumbersSquared = evenNumbers.map(num => num *num)

console.log(evenNumbers);
console.log(evenNumbersSquared);



//Exercise 2
let prices = [10.99, 5.49, 12.99, 8.75, 15.20];
let discountPrice = prices.map(price => price * .80)
console.log(discountPrice);

let totalPrice = discountPrice.reduce((a,b) => {
    return a + b
}, 0);

let roundTotal = Math.round(totalPrice*100)/100

console.log(roundTotal);



//Exercise 3
let words = ["apple", "banana", "cherry", "date", "elderberry"];
let findLetter = words.find(letter => letter.includes("a"))
console.log(findLetter);




//Exercise 4: Recursion

const sumOfArray = (arrayOfNumbers) => {
    if (arrayOfNumbers.length === 0){
        return "Stop right there"
    } else {
        return  arrayOfNumbers.reduce((a,b) =>{
            return a+b 
        },0)
    }
    //Your code here
 }
 let numArray = [1,2,3,4,5,6]
 console.log(sumOfArray(numArray));
 
 
 // Input: [1, 2, 3, 4, 5, 6]
 // Output: 21
 