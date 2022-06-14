// let registrationList = {};

// class User{
//     constructor(username,number,email){
//         this.username = username
//         this.number = number
//         this.email = email
//     }
//     newUser = new User
// }

class RegistrationList {
    constructor(){
        this.list = [];
        this.length = 0;
    }
    constructor(username,email,number){
        this.username = username
        this.number = number
        this.email = email
    }
}

let newUser = new User