class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set password(value){
        this._password = value;
    }
    get password(){
        return `${this._password}hitesh`
    }

    set email(value){
        this._email = value;
    }
    get email(){
        return this._email.toUpperCase()
    }
}

const shubham = new User("shubham@gmail.com","abc")

shubham.email(12342);
// console.log(shubham._email);