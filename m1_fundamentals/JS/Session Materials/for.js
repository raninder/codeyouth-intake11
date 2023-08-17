// for(let i = 0; i <= 5; i++){
//     console.log("hello world")
//     console.log(i)
// }

// for(let i = 0; i <= 1000; i++){
//     console.log(i)
// }

// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

for(let i = 0; i < 10; i++){
    // if(i == 4){
    //     console.log("This is the fourth loop")
    // }else{
    //     console.log("This is not the fourth loop")
    // }
    // console.log(i)
}

// for(let i = 0; i < 5; i++){
//     let randomNumber = Math.floor(Math.random()*11);

//     console.log(randomNumber)
// }


// for(let i = 0; i < 10; i++){
//     if(i <= 5){
//         let myMessage = "less than 5"
//         console.log(myMessage)
//     }
// }


// for(let i = 0; i <= 5; i++){
//     console.log("i equals", i);

//     for(let k = 0; k <= 10; k++){
//         console.log("k equals", k)
//     }
// }


let stopper = 23;

for(let i = 0; i <= 100; i++){
    console.log(i)
    if(i == stopper){
        console.log("I equals", stopper)
        break;
    }
}

for(let i = 0; i <= 10; i++){

}


//Finding the next 4 leap years

let year = 2023;
let result = "The next four leap years are: ";

let counter = 0;

for(let i = year; i < year + 100; i++){
    if(i%4 == 0){
        counter++
        result += `${i}, `
        if(counter == 4){
            console.log(result);
            break;
        }
    }
}


// console.log("JavaScript"[0]);

// for(let i = 0; i < 5; i++){
//     console.log("JavaScript"[i]);
// }

let word = "abcdef";

for(let i = 0; i < word.length; i++){
    console.log(word[i])
}
