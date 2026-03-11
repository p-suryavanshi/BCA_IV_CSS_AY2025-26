//Examples of data aggregation using reduce()
const numbers = [23, 55, 12, 89, 45,22];
const mixed = [4, "Pavan", 4.5, "Pulav", 4,9];

//sum of all numbers
const sum = numbers.reduce( (acc,num) => acc + num , 0);
console.log("Summ of all numbers in array: " , sum);

//Product of all numbers
const mul = numbers.reduce( ( acc,n ) => n*acc ,1 );
console.log("Product of all numbers is: ", mul);

//Concatination with '~~||~~' 
const concat = mixed.reduce( ( acc , m) => acc + " ~~||~~ " + m );
console.log("Concatenated String is: " , concat);

//Find the maximum in the numbers arrayy..
const maximum = numbers.reduce( (acc, num) => acc > num ? acc : num);
console.log("Maximum numbers in Array is: " , maximum);
