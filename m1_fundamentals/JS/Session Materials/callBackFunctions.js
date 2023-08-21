let numArray = ["one","two","three","four","five","six"];

console.log(numArray);

let filterArray = numArray.filter(function(value, index){
    if(value.length == 3){
        return value;
    }
})
                               
console.log("filterArray",filterArray);


// forEach;

numArray.forEach(function(value, index){
    console.log(value += 3);
})

console.log("numArray", numArray)


// map

let newArray = numArray.map(function(value, index){
    return value += 3;
})

console.log("newArray", newArray);




let fishArray = ["tuna","trout","red snapper","shark"];

// for(let i = 0; i < fishArray.length; i++){
//     console.log(fishArray[i])
// }

for(let i in fishArray){
    console.log(i)
    console.log(fishArray[i])
}