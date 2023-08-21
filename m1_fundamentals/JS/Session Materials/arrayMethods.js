let arr = ["string",1,true];

console.log(arr[2]);

function checkArray(){
    console.log(arr)
}

checkArray();

Math.round(2.15);

// Push

let arr1 = ["Hello"];

console.log(arr1)

arr1.push("World",5,"hello",true);

console.log(arr1);


// pop

let popArray = ["one","two","three"]

console.log(popArray)

popArray.pop();

console.log(popArray);

//shift

let shiftArray = ["one","two","three"];

console.log("shift array:", shiftArray);

let firstElement = shiftArray.shift();

console.log("firstElement equals:", firstElement);

console.log("shiftArray equals:", shiftArray);

// unshift

let unshiftArray = ["one", "two", "three"];

unshiftArray.unshift("zero", "zero point five", true);

console.log(unshiftArray);


// includes

let includesArray = ["tuna", "salmon", "sword", "shark"];

console.log(includesArray.includes("tuna"));

console.log("includesArray includes salmon", includesArray.includes("salmon"))

console.log(includesArray.includes("bear"));

let numArray = [1,2,3];

console.log(numArray.includes(2));


// join

let joinArray = ["Hello", "world"];

console.log(joinArray)

console.log(joinArray.join(" "));

// splice

let spliceArray = ["pine","willow","yew","oak"];

spliceArray.splice(1, 0, "christmas", "spruce")

spliceArray.splice(2, 3);

console.log(spliceArray);

// slice

let originalArray = ["one","two","three","four","five","six"]

console.log(originalArray)

console.log(originalArray.slice(1, 4))

let newArray = originalArray.slice(1, 4)

console.log("newArray", newArray)

console.log("originalArray", originalArray)


