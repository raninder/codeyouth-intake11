// console.log(true == false)

// console.log(5 < 10)

// console.log(5 > 10)

// console.log(5 <= 5)

// console.log(5 >= 5)

console.log("Is true true", true == true)
if(true == true){
    console.log("True is true")
}

console.log("Is true false", true == false)
if(true == false){
    console.log("True is false")
}




let num = 60;

if(num < 50){
    console.log("num is less than 50");
}else if(num > 50){
    console.log("num is greater than 50");
}else if(num == 50){
    console.log("num is equal to 50")
}



let words = "how are you";

if(words == "hello"){
    console.log("good day")
}else if(words == "goodbye"){
    console.log("farewell")
}else{
    console.log("I don't recognise those words")
}



let num2 = 50;

if(num2 > 50){
    console.log("num2 is greater than 50")
}else if(num2 < 50){
    console.log("num2 is less than 50")
}else{
    console.log("num2 is equal to 50")
}


let input1 = false;

let input2 = true;

let output;

if(input1 == true){
    if(input2 == true){
        output = true;
    }else{
        output = false;
    }
}else{
    output = false;
}

console.log("output is", output);


let words2 = "hello"

if(words2 == "hello"){
    greeting();
}else if(words2 == "goodbye"){
    goodbye();
}



function greeting(){
    console.log("greetings")
}

function goodbye(){
    console.log("farewell")
}


let numA = 5

let numB = 10

let opp = "/"; 

calculator(numA, numB, opp);


function calculator(numA, numB, opperator){
    if(opperator == "+"){
        console.log(numA, '+', numB, '=', numA + numB)
    }else if(opperator == "-"){
        console.log(numA, '-', numB, '=', numA - numB)
    }else{
        console.error("Error bad opperator")
    }
}





function isLeapYear(year){
    if(year%4 == 0){
        return year + " is a leap year";
    }else{
        return year + " is not a leap year"
    }
}

console.log(isLeapYear(2000));