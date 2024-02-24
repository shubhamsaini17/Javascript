// promise 1

const promiseOne = new Promise(function(resolve,rejected){
    // do an async task
    // db calls ,cryptography, network call

    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // connect to .then
    },1000);
})
// resolve ka connection ha .then ka sath
promiseOne.then(function(){
    console.log("promise consumed")
}) // .then ka andar a function milta ha / callback


// promise 2

new Promise(function(resolve,reject){
    setTimeout(function(){   // db call ho, file open karni ho , succesfully hona ka baad {resolve() method} .then ko bata da ga ki ye complete ho gya ha or .then chal jaya ga
        console.log("Async task 2");
        resolve()
    },1000);
}).then(function(){
    console.log('Async 2 resolved')
})


// promise 3

const promiseThree= new Promise(function(resolve,rejected){
    // agar network se data aya ho, ya database se aya ho to usa .then ma --> resolve() ka andar se pass kara ge .then ko jo ke ak object hoga ==> resolve({})
    setTimeout(function(){  
        console.log("Async task 2");
       resolve({username: "shubham",email: "shubham@google.com"})
    },1000);
})

promiseThree.then(function(user){ // .then ka function ma object ajaya ga pura ,jo resolve({}) ne baja ha --> object ko kisi bhe nam se recieve kar sakta ha, yaha USER nam se kara ha
    console.log(user);
})

// promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "shubham", password: "1234"} )
        }else{
            reject("ERROR: Somthing went wrong") // agar ERROR aya to reject vala execute hoga or .cath ka send kar ga error
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{ //// dao bar .then ko bolta ha CHAINING matlab uper vala .then se jo value return hoka aya ge wo he value incha vale .then ma aya ge
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('the promise either resolved or rejected'))  // ye vala hmasa chaala ga resolve or reject (like default)

// promise 5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1234"} )
        }else{
            reject("ERROR: JS went wrong") 
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ya uper vali same chij ha ==> .then , .catch, .finnally sa bhe kar sakta ha


// async , await problem they directly can not handle errors to ham unka andar try catch use karta ha

// promise 6 

// api ko handal => async await se

/*
async function getAllUsers(){
    try { // fetch ka aga Await lgaya kyo ki pata nhi kitna time laga ga ana ma data
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json(); // string ma data aya usko JSON ma convert and await use becuse it can take time to convert in JSON
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getAllUsers()

*/


// trying above same with .THEN .catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{  // jab tak uper vala .then ma api se data nhi aya ga tab tak nicha vala .then ma send nhi hoga result 
    // ise liya ham 2 .then use karta ha , agar ak .then() use kara ga to wo data recieve hona se phela he or ya fir json me hona ma time laga ge use phela he, print kar de ga jisma pending ya firr error aya ga { console.log(response.json)}
    console.log(data);
})
.catch((error)=>console.log(error))

