// class staff{
//     constructor(name, ID, age ){
//         this.name = name;
//         this.ID = ID;
//         this.age = age;
//     }
// }

// class admin extends staff{
//     set privilege(access){
//         this.access = access;
//     }
// }

// class intern extends staff{
//     set leaveDate(leaveDate){
//         this.leaveDate = leaveDate;
//     }
// }

// let jimmy = new admin("jimmy", 1234543, 24);
// jimmy.privilege = true;
// console.log(jimmy);



//////////// active engagement super class
class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with a speed of ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} is standing still`);
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} is hiding`);
    }
    stop(){
    //child will overwrite 
    //this will be used for rabbit.stop()
    //to fix this
    super.stop(); //calls the parent stop
    this.hide(); // use super in a similar way to this but its calling on the class that it extends from instead of itself
    }    
}

let rabbit = new Rabbit("peter")
rabbit.run(10);
rabbit.stop();