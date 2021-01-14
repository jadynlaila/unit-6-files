let student = {
    name: "jadyn",
    ID: 450471,
    height: `5'9"`,
    cash: 25
}

student.cash = 0;
student.cash = undefined;
delete student.cash;

student.hairColor = "purple";

console.log("cash" in student);



// let person = {}

// let name = prompt("what is your name?", "last, first");
// person["name"] = name;
// let favColor = prompt("what is your favorite color?");
// person["favColor"] = favColor;
// let randomNum = prompt("come up with a random number");
// person["randomNum"] = randomNum;

function createStudent(name, hairColor) {
    return {
        name: name,
        hairColor: hairColor
    }
}

let jadyn = createStudent("Jadyn C.", "purple");
console.log(jadyn.hairColor);