// const promise1 = new Promise(function(resolve,reject){
//     const error = true;
//     setTimeout(function(){
//         console.log("i am full filled");
//         resolve();
//         reject(error);
//     },1000)

// })

// promise1.then(function(){
//     console.log("promise consumed")
// })

// const promise2 = new Promise(function(resolve,reject){
//     let error = true;
    
//     if(!error){
//         resolve({username: "shubham",password:"12345"})
//     }else{
//         reject("error: something went wrong")
//     }

// }).then(function(user){
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("promise completed or rejected");
// })


// const promise5 = new Promise(function(resolve,reject){
//     let error = true;
    
//     if(!error){
//         resolve({username: "shubham",password:"12345"})
//     }else{
//         reject("error: something went wrong")
//     }

// })

// async function consumePromise5(){
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromise5()



// async function getAllData(){
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllData()


fetch("https://api.github.com/users/hiteshchoudhary").then(function(response){ 
    // return response.json();
console.log(response.json());
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})