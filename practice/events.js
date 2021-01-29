

// main.innerHTML = "<div>things here </div>";

// let first = function(){
//     alert("first has been clicked");

// }

// let second = function(){
//     this.removeEventListener("click", first);
// }




// div.addEventListener("click", first);
// div.addEventListener("click", second);
// // div.addEventListener("click", function(){
// //     alert(this);
// // });
// //////////its click not onclick inside of js
// main.appendChild(div);


let firstSound = function(){
    let songArr = []
    let sound1 = "boop";
    songArr.push(sound1);
    return songArr;
}

let secondSound = function(){
    let songArr = firstSound();
    let sound2 = "bop";
    songArr.push(sound2);
    return songArr;
}

let thirdSound = function(){
    let songArr = secondSound();
    let sound3 = "bop";
    songArr.push(sound3);
    return songArr;
}

let output = function(){
    let songArr = thirdSound();
    alert(songArr);
    songArr = [];
    console.log(songArr);
    return songArr;
}

sound1.addEventListener("click", firstSound);
sound2.addEventListener("click", secondSound);
sound3.addEventListener("click", thirdSound);
div.addEventListener("click", output)