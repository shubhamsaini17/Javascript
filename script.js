let text = "hello shubham are you intrested to give this interview"

// console.log(text.length);
// console.log(text.charAt(0));
// console.log(text[0]);
// console.log(text.charCodeAt(0));
// console.log(text.slice(0,15));
// console.log(text.slice(-17));
// console.log(text.slice(-20,-9));
// console.log(text.substr(-5));
// console.log(text.padStart(59,'0'));
// console.log(text.padStart(59,'0'));
// console.log(text.padEnd(59,'0'));
// console.log(text.replace('hello','shubham'));
// console.log(text.split(""));



const arr = [1,3,2,6,8,9,0];

arr.push(10);
arr.unshift(4);
arr.shift();
// console.log(arr.length);
// console.log(arr.indexOf(8));

// console.log(arr.includes(10));
// console.log(arr.indexOf(10));

const newArr = ['hey','how ', 'are ','you'];

// const arr3 = arr.concat(newArr);
// console.log(arr3);

// spread operation
// const finalArr = [...arr, ...newArr]
// console.log(finalArr);

// flat
const arr4 = [3,42,2,32,432,[343232,4,3],[2,324,3251,[342,532,23234]]];

// console.log(arr4.flat(2));


// console.log(newArr);
// console.log(typeof newArr);

//slice / splice

// console.log("a ",arr);

// const arr1 = arr.slice(0,4);
// console.log(arr1);
// console.log(arr);
// const arr2 = arr.splice(0,3);
// console.log(arr2);
// console.log(arr);


// console.log(Array.isArray("shubham"));
// console.log(Array.from("shubham"));

const mySym = Symbol("it's a symbol of love");
const myObj = {
    name: 'shubham',
    age: '15',
    location: 'chal nikal',
    [mySym]: "it's a Symbol"
}

// console.log(typeof myObj[mySym]);
// console.log(myObj[mySym]);
// console.log(myObj.age);
// console.log(myObj['location']);

// Object.freeze(myObj);
// myObj.name= "kajal";
// console.log(myObj);

// myObj.greeting = function(){
//     console.log(`ram ram ${this.name} bhai`);
// }

// console.log(myObj.greeting());

const user = new Object();
user.id='121';
user.name='janavi';
// console.log(user);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2};
// console.log(obj3);


const users = [
    {
        id:1,
        name:'kalu'
    },
    {
        id:1,
        name:'kalu'
    },
    {
        id:1,
        name:'kalu'
    }
]

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));
// console.log(myObj.hasOwnProperty('name'));



// object API 3


// object destructuring
const human = {
    id: '1',
    name: 'shubham'
}

const {name: naam, id: idd} = human;

// console.log(naam,idd);

// fubctions 

function myok(){
    console.log(nam,itt);
}
// console.log(myok);

// to many items in func

function AddToCart(var2,...num){
    return (num)
}

// console.log(AddToCart(200,300,400,500));

// pass object to function

const obj4 = {
    name: 'shubham',
    id:'3'
}

function user86 (anyobject){
    console.log(`my name is ${anyobject.name} and id is ${anyobject.id}`);
}

// user86(obj4);

const aerr = [1,2,3,4,5];

function user85 (anyarray){
    console.log(`my name is ${anyarray[1]} and id is ${anyarray[0]}`);
}

// user85(aerr);


// video 22  hosisting


// hoisting 
// function decleration


// type 1 simple function decleration not give error on hoisting
// console.log(AddOne(2))

function AddTwo(num){
    return num +1;
}

function AddOne(num){
    return num +1;
}

// type 2 varible ka andar declare fucntion give error on hoisting
// console.log(addThree(2));   //       ----------------error
const addThree = function (num) {
    return num +3;
}

// type3 Arrow function it also not follow hoisting

// console.log(addFour(1));     //----------// error
const addFour = (num) =>{
    return num +4;
}


// video 23 this / arrow function

// this -- refer to current context


const aObject = {
    name: 'NiTiN',
    message: function(){
        console.log(`${this.name}, welcome to my website`);
        console.log(this);  // this keyword --> context is valid inside these object and contain all context()/content of these object
    }
}
// aObject.message()
// aObject.name = 'badmash';
// aObject.message()


// this ---> global context in nodejs envirnment, vs code is   {} empty object
// console.log(this); // ---->  {}

// but this ----> context in case of browser return window object contain all type of properties, func,key,values used in the browser


// this inside function

/*
function hello(){
    let username = "shubham"
    console.log(this);  //will execute and contain many values
    console.log(this.username); // only work in case of object --> give UNDEFINED in function
}
hello()

const hello = function (){
    let username = "shubham"
    console.log(this);  //will execute and contain many values
    console.log(this.username); // only work in case of object --> give UNDEFINED in function
}

hello()
*/


// ----  arrow Function  --- this keyword give {} empty object

/*
const ola = () =>{
    let username = "shubham"
    console.log(this);   // ---> {}
    console.log(this.username);  //  undefined
    // this keyword--> not work inside arrow func 
}
ola()

*/

// arrow function
/*

const addTwo = (num1 , num2) =>{
    return num1+num2;
}

console.log(addTwo(2,5));

*/
// implicit return in arrow func. ( no need to write return keyword in case of one line return)  
/*
const add2 = (num1 , num2) => num1+num2; // implicite return
// or
const addTO = (num1 , num2) => (num1+num2); // implicite return
const addTwo2 = (num1 , num2) => {num1+num2}; // error(undefined) if use currly {} then use return

console.log(add2(2,5)); 
console.log(addTwo2(2,5)); // undefined
*/

// return object using implicite return

// const sumTwo = (num1 , num2) => {name: 'shubham'}; // error(undefined) if use currly {} 
const sumTwo = (num1 , num2) => ({name: 'shubham'}); // error(undefined) if use currly {} directly so wrap object in simple bracket ({})
// console.log(sumTwo());




// <============ 24 video ================>

// ( IIFE ) ==> Immediately Invoked Function Expressions

/* 
 why to use
eg:- 1. if a file contain database connection instruction
        ,so when user open/start application , file need to be immediatly start database connection
        
2. we don't need pollution form global scope in our fucntion So create a seperate scope of function and also immediately execute it

-- when we declare some varibLE in global scope and some inside function then (same varible name or something else) can disturb or change varibale inside function becuse  inside function we can use use global declared varible also
 so we  create a seperate scope of function and also immediately execute it

 */


// example 1   {named IIFE} 

 (function chai(){
    // named IIFE ( kyo ki iska nam ha --(like chai,sum))
    // console.log(`CONNECTED TO DATABASE`);
 })();  // --- ; semicolun required after exeuction () bracket  and after first IIFE
 // semicolun; required to end the context of IIFE 

 // example 2 unnamed IIFE / simple IIFE

  ( ()=>{
    //  console.log(`CONNECTED TO DATABASE 2`);
  })();

  // example 3

  ( (name)=>{
    // console.log(`CONNECTED TO DATABASE ${name}`);
 })('shubham');


 // video 25 callstack  and execution context


 // video 26 control flow

 // nullish coalescing operator
 val1 = null ?? null ?? 20;
 
//  console.log(val1);

 // video 27  loopss

 // FOR of loop
 let arrr = [1,2,3,4,5,6,7,8,9,10];
 for (const i of arrr) {
    // console.log(i);
 }

// { MAPs } - like object , remember key,values in order and duplicate not allowed

const map = new Map() // syntax
map.set('NAME','shubham') // syntax to set values and key in map
map.set('Roll','2820426')
map.set('Country','Bharat')

// console.log(map);

for (const [key,values] of map) {   // syntax to get key,values for map
    // console.log(key + ':- '+ values);
}


// { objects - forof loop}
/*
const MyDetails = {
    NAME:'shubham',
    Roll:'2820426',
    Country:'Bharat'
}
// ---------------> ForOf -- loop not work for objects <-----------------

for (const [key,value] of MyDetails) {
    console.log(key);
}

*/

//  ----------------- For In Loop (object)----------

const MyDetail = {
    NAME:'shubham',
    Roll:'2820426',
    Country:'Bharat'
}

// for in loop
for (const key in MyDetail) {
    // console.log(key); // to get keys form object 
    // console.log(MyDetail[key]); // to get values
    // console.log(key,': ',MyDetail[key]); 
}


// for in loop on arrays

const programming = ['js','cpp','py','c'];

for (const key in programming) {
    // console.log(key,':',programming[key]);
}


//  ----------------- For In Loop (on Map )----------

const map1 = new Map() // syntax
map.set('js','javascript') 
map.set('cpp','c++')
map.set('py','python')

for (const key in map1) {   // not work -- ittration not possible on maps
    // console.log(key);
}

 
