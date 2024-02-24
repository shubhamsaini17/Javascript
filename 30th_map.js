const myNums = [1,2,3,4,5,6,7,8,9,10]

// map 
const myNewNum = myNums.map( (num)=> num+10)
// console.log(myNewNum);

// same with foreach

const myNewArr = [] 

myNums.forEach( (num) => {
    myNewArr.push(num+10)
} )
// console.log(myNewArr);



// chaining  -- methods ki chaining -- ak se jayada method apply karna

// const myArr = myNums.map( (num)=> num+10).map((num)=> num +1).filter( (num)=> num>=15)

// same as above 

/* const myArr = myNums
                    .map( (num)=> num+10)
                    .map((num)=> num +1)
                    .filter( (num)=> num>=15)

console.log(myArr);
*/