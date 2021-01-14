// //creating an array
// //name, age, hair color, home city, hobby
// let myself = ["jadyn", 16, "purple", "phoenix", "bass guitar"];

// //home city
// console.log(myself[3]);
// //
// console.log(myself[1]);

// let newSelf = {
//     name: "jadyn",
//     age: 16,
//     hColor: purple,
//     homeTown: Phoenix,
//     hobby: "bass guitar"
// }

// console.log(newSelf["homeTown"]);
// console.log(newSelf["age"]);

// // a type of bear

// let redBear = {
//     furColor: "brown",
//     avgWeight: 740,
//     country: "Europe, Asia, Africa, and North America",
//     lifeSpan: 20,
//     population: 200000,
//     diet: "Berries, flowers, grasses, herbs, roots, and small mammals"
// }

////////////////////////////////////////////////////////////////////////////////

// let names = `Kiki Montgomery
// Camilla Cortes
// Siyana Hancock
// Tevin Daugherty
// Mylie Donnelly
// Alexandru Mcdonald
// Affan Cash
// Jayde Caldwell
// Pawel Dixon
// Hasnain Morgan
// Ray Christie
// Martine Sharpe
// Chante Cotton
// Zidan Grainger
// Virgil Hackett
// Reema Mcbride
// Kourtney Mac
// Izaac Barber
// Gilbert Hodgson
// Rayhaan Johns
// Aleena Mohammed
// Coral Stein
// Oakley Mckenzie
// Cleo Hooper
// Rhiana Ferrell
// Jaye Currie
// Jacqueline Byrd
// Nahla Beech
// Jan Holden
// Haniya Maxwell
// Elis Shea
// Imani Frey
// Daniele Flynn
// Sheikh Alexander
// Rebekah Patterson
// Dominick Salinas
// Tymoteusz Philip
// Domas Blackburn
// Calvin Whittaker
// Emilia Barrow
// Arjan Duran
// Sabina Snyder
// Jaiden Stanley
// Shelley Ellison
// Ailsa Melendez
// Ivy Rush
// Clarence Dunlap
// Ariella Potter
// Ezra Mccarthy
// Jarod Marquez`

// let namesArray = names.split("\n");

// let typingSpeed = {};

// function createList(array) {
//     for (let i = 0; i < array.length; i++) {
//         let name = array[i];
//         let speed = Math.floor(Math.random() * 20 + 80); //80 - 100

//         typingSpeed[name] = speed;
//     }
// }
// createList(namesArray);
// console.log(typingSpeed);

// let tvStatus = {}

// function createTvObject(arrayObject) {
//     for (let i = 0; i < array.Object.length; i++) {
//         let key = arrayObject[i];
//         let randy = Math.ceil(Math.random() * 3);

//         let value = ""

//         if (randy == 1) {
//             value = "off";
//         } else {
//             value = Math.ceil(Math.random() * 99);
//         }
//         tvStatus[key] = value;
//     }
// }

// createTvObject(namesArray);
// console.log(tvStatus);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//create an object that will say the income of people you employ
//50 names
//: "intern" 10%
//:'10000-20000' 30%
//'30000 - 50000' 50%
//'80000-120000' 10%
//: 1 persono CEO: 250000

let names = `Kelise Hills
Anton Fenton
Erika Brewer
Juan Bloom
Shayna Macleod
Neve Rosario
Faye Tyson
Jeremiah Jones
Harun Meadows
Alexa Whitehouse
Sharmin Leech
Davina Vang
Etienne Guthrie
Khadeejah Matthams
Hamza Halliday
Roger O'Doherty
Roksana Whitehead
Dennis Becker
Cinar Hulme
Kit Winter
Rhonda Mosley
Nathalie Weber
Michael Grey
Yousef Pennington
Peggy Simon
Raees Kemp
Dane Graves
Alayah Mckeown
Katie-Louise Robles
Ameen Black
Brendon Powell
Tyriq Sumner
Aleksander Greig
Sapphire Coleman
Lewys Powers
Noa Pickett
Piper Hendrix
Siana Dorsey
Subhan Shepard
Yisroel Strong
Harvey-Lee Hudson
Celia Dickens
Vera Worthington
Aamina Healy
Keiron Molina
Lilly-Mae Shaw
Kenzo Walter
Silas Chapman
Gurdeep Woodward
Aria Ashton
Penny Short
Abdullah Chase
Ridwan Almond
Dawood Dougherty
Kierran Dickson
Pooja Griffin
Franklyn Broughton
Tevin Hicks
Jo Holt
Matylda Rhodes
Jill Lucas
Bjorn Burke
Kester House
Kobe Stafford
Aida Britton
Abbie Noble
Usaamah Kearney
Elowen Mcbride
Elara Johnston
Romana Plummer
Saffron Rahman
Naomi Parrish
Luciana Mcnally
Paloma Hays
Armaan Barrera
Zishan Barry
Yara Duke
Mihai Fitzgerald
Aniyah Rasmussen
Camilla Jackson
Stanislaw Bradley
Khalil Gross
Jon Cornish
Saima Petty
Bruce Ayers
Reanna Frazier
Meredith Vazquez
Ifan Penn
Sheldon Whitworth
Seren Frost
Lennie Hewitt
Suman Tanner
Alexie Clifford
Connah Lawrence
Tomi Perry
Olivier England
Lilli Millington
Daniella Muir
Amelia-Mae Neal`

let namesArray = names.split('\n');

let salaries = {};

function createIncomeObject(arrayObject) {
    for (let i = 0; i < arrayObject.length; i++) {
        let key = arrayObject[i];
        let randy = Math.ceil(Math.random() * 10);

        let value = "";
        if (randy == 1) {
            value = "intern";
        } else if (randy == 2 || randy == 3 || randy == 4) {
            value = Math.floor(Math.random() * 10000 + 10000);
        } else if (randy == 5 || randy == 6 || randy == 7 || randy == 8 || randy == 9) {
            value = Math.floor(Math.random() * 20000 + 300000);
        } else if (randy == 10) {
            value = Math.floor(Math.random() * 40000 + 80000);
        }
        salaries[key] = value;
        salaries["Iman Hogan"] = "250000";
    }
}

createIncomeObject(namesArray);
// console.log(salaries);

// //////////////////////////////////////////////
// //////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// let ceo = '';
// let employees = 0;
// for (let key in salaries) {
//     if (salaries[key] != 'intern' && salaries[key] != 250000) {
//         salaries[key] == salaries[key] - 5000;
//         employees++;
//     }
//     if (salaries[key] == 250000) {
//         ceo = key;
//     }
// }
// salaries[ceo] += 5000 * employees;
// console.log(`${ceo} is making ${salaries[ceo]}`);
// console.log(salaries);


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//take 1/2 of everyones money but the CEO and give it to equally to all of the interns
let moneyPool = 0;
let internCount = 0;
for (let key in salaries) {
    if (salaries[key] == 'intern' || salaries[key] == 250000) {

    }
    if (salaries[key] == 'intern') {
        internCount++;
    } else {

        salaries[key] = Math.round(salaries[key] / 2);
        moneyPool += salaries[key];
    }

}
console.log(salaries);
console.log(internCount);
console.log(moneyPool);
console.log(internCount);

for (let key in salaries) {
    if (salaries[key] == 'intern') {
        salaries[key] = Math.round(moneyPool / internCount);
    }
}
console.log(salaries);