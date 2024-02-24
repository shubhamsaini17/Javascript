// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email= email;
//         this.password = password;
//     }
//     encryptPassword(password){
//         return `${this.password}abc`
//     }
//     changeUsername(username){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('shubham','demo@gmail.com','124')

// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// without class

function User(username,email,password){
    this.username = username;
        this.email= email;
        this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user2 = new User('hanuman','demo@gmail.com','124')

console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUsername());