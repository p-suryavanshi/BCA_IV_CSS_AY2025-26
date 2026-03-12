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

//
const transctions = [
    {type: "deposit", amount: 1000},
    {type: "Withdraw", amount: 300},
    {type: "deposit", amount: 700},
    {type: "Withdraw", amount: 100},
    {type: "deposit", amount: 2000},
    {type: "Withdraw", amount: 500},
];

const deposits = transctions.filter( (transction) => transction.type === "deposit" )
const total = deposits.reduce( (acc , d ) => acc + d.amount , 0 );
console.log("Total deposits: " + total);

const withdrawls = transctions.filter( (t) => t.type === "Withdraw" )
                        .reduce( (sum , t) => sum + t.amount, 0 );
console.log("Total Withdrawls: ",withdrawls);

const net = total - withdrawls;
console.log("Net Balance: " , net);

const transactionCount = transctions.reduce( (acc, t) => {
    acc[t.type] = (acc[t.type] || 0 ) + 1;
    return acc;
}, {} );

console.log("Transction Counts: ", transactionCount);