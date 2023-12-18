
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('its time to party');
        resolve()
    },1000)
    
})

promiseOne.then( function(){
        console.log('lets study now')
    }
)

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "shubham", email:"shubham@kajal.com"})

  },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
   
    setTimeout(function(){
        let error = true
        if(error){
        resolve({username: "shubham", email:"shubham@kajal.com"})
        }
        else{
            reject("error: some thong went wrong")
        }
  },1000)

})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(()=>console.log("task complete")
)




const promiseFive = new Promise ((resolve,reject)=>{

    setTimeout(function(){
        let error = true
        if(!error){
        resolve({username: "javascript", password: "12345"})
        }
        else{
            reject("error: js went wrong")
        }
  },1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error); 
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

 