const myNums = [1,2,3];

const initialValue =0;

// const myTotal = myNums.reduce( function (accumlator,currentValue) {
//      console.log(`acc: ${accumlator} and CurrValue: ${currentValue}`);
//      return accumlator + currentValue;
//     },initialValue)

const myTotal = myNums.reduce( function (accumlator,currentValue) {
    //  console.log(`acc: ${accumlator} and CurrValue: ${currentValue}`);
     return accumlator + currentValue;
    },0) // initalValue =0

// console.log(myTotal);



// REDUCE use in shopping cart total items bill calculation

//example -2 

const  mySum = myNums.reduce( (acc,CurrValue)=> (acc + CurrValue),0)

console.log(mySum);



// example 3 REDUCE use in shopping cart total items bill calculation
 
const shoppingCart = [
    {
        itemName: "javascript course",
        price: 3000
    },
    {
        itemName: "python course",
        price: 13000
    },
    {
        itemName: "java course",
        price: 5000
    }
]

// const shoppingTotal = shoppingCart.reduce( (accumlator,items)=> accumlator+items.price,0)

// const shoppingTotal = shoppingCart.reduce( (accumlator,items)=> { return accumlator+items.price},0)

console.log(shoppingTotal);
