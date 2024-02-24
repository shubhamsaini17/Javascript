class User{
    constructor(username){
        this.username = username;
    }
   
    // changeUsername(username){
    //     return `${this.username.toUpperCase()}`
    // }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email= email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user = new Teacher('hanuman','demo@gmail.com','124')

user.addCourse()
user.logMe()

const aman= new User("aman")
aman.logMe()

console.log(user instanceof User);