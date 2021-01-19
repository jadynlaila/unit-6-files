// function Student(fullName, ID, gradeLevel, grade) {
//     this.fullName = fullName;
//     this.ID = ID;
//     this.gradeLevel = gradeLevel;
//     this.grade = grade;
//     this.permissions = "Student";
//     this.graduate = function() {
//         this.gradeLevel++;
//     }
//     this.whiteList = function() {
//         this.permissions = "Admin";
//     }
//     this.setGrade = function(value) {
//         this.grade = value;
//     }
// }

// let jacob = new Student("Jacob Forrester", 13928, "11", 84)

// console.log(jacob)

// jacob.whiteList();
// jacob.setGrade(98);

// console.log(jacob);

class Student {
    constructor(name, id, gradeLevel) {
        this.name = name;
        this.id = id;
        this.gradeLevel = gradeLevel;
        this.permissions = "Student";
    }

    graduate() {
        this.gradeLevel++;
    }
    whiteList() {
        this.permissions = "Admin";
    }
    setGrade(grade) {
        this.grade = grade;
    }
}

let jacob = new Student("Jacob Malcolm", 23876, 10);
console.log(jacob);
jacob.whiteList();
jacob.setGrade(34);
jacob.graduate();


// class User {
//     constructor() {
//         this.firstName = "Jimmy";
//         this.lastName = "Smitty";
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// }

// let user = new User();
// user.fullName = "jadyn calhoun"
// console.log(user.fullName);

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//class user = 
//set userName =  > 4 letters
//set passWord = > 5 letters and 1 number
//login(userName, password) if correct, should log ("Welcome in, (username)")
//login (get username, get this.password

class User {
    constructor(){
        this.username = "";
        this.password = "";
    }
    set userName(username){
        if(username.length > 4){
            this.username = username
        }
    }

    set passWord(password1){
        let password = password1.split("");
        let num = 0;
        for(let i = 0 ; i < password.length; i++){
            if(password[i] == 1 || password[i] == 2 || password[i] == 3 || password[i] == 4 || password[i] == 5 ||password[i] == 6 || password[i] == 7 || password[i] == 8 || password[i] == 9){
                num++;
            }
            if(num > 0 && password.length > 5){
                this.password = password1;
            }
        }
    }
}

let hello = new User();
hello.userName = "hellooo";
hello.passWord ="1234jjfj";
console.log(hello);


class Login (inputusername, inputpassword) {
    constructor()
    get(hello.userName);
    get(hello.passWord);
    if((hello.userName = inputusername) && (hello.password = inputpassword)){
        console.log("you have logged in")
    }
}

