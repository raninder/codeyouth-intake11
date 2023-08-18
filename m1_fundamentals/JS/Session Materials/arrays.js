// let arr = ["Hello", "World"]

// console.log(arr)

// let numArr = [1, 2, 3, 4, 5]

// console.log(numArr)

// let boolArr = [true, false, false];

// console.log(boolArr);

let mixArr = [true, 45, "hello"]

console.log(mixArr)

console.log(mixArr[1])

let numArr2 = [45, 25, 65, 10]

console.log(numArr2[1] + numArr2[3]);
console.log(numArr2);

// numArr2[3] = 15;


numArr2[3] = numArr2[1] + numArr2[3];

console.log(numArr2);

numArr2[4] = 5

console.log(numArr2)

let num = 5

let num2 = num;

num += 5

console.log("num is", num)

console.log("num2 is", num2)

let originalArr = ["five","six","seven"];

let copyArr = originalArr;

originalArr[0] = "one";

copyArr[2] = "three";

console.log("originalArr equal", originalArr);

console.log("copyArr equals", copyArr);



let loopArray = ["one","two","three","four","five"]
console.log(loopArray)
for(let i = 0; i < 5; i++){
    console.log(loopArray[i])
    if(loopArray[i] == "three"){
        console.log("I FOUND THREE AT INDEX", i)
        break;
    }
}


let anotherArr = [5, 45, 10, 74, 100];

let sum = 0;

for(let i = 0; i < 5; i++){
    sum += anotherArr[i];
}
console.log(sum)



let firstArray = ["keyboard","monitor","mouse","camera"];

let secondArray = ["keyboard","computer","mouse",'monitor','camera',"mouse pad",'desk','chair']

let doOwn = "I do own these: ";

for(let i = 0; i < 4; i++){
    let checking = firstArray[i];
    for(let g = 0; g < 8; g++){
        if(secondArray[g] == checking){
            doOwn += secondArray[g]
            doOwn += " ";
            break;
        }
    }
}



let lengthArray = [5, 4, 10, 12];

console.log(lengthArray.length)

lengthArray[4] = 55


for(let i = 0; i < lengthArray.length; i++){
    console.log(lengthArray[i])
}