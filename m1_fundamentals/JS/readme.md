<h3>Variables</h3>

// Finish the following code;

let a = 4;
let  = 2;

console.log(a - b);

// Create two variables and assign them Number values, add them together.



// Match the values to the datatypes
// 10 "Hello" false

let string

let number

let boolean



// Finish the code so that both sentences are complete

// console.log("My favorite fruit is " + favoriteFruit);

// console.log("And my least favorite fruit is ");






//Check to see if the two variables are not equal;

let rating1 = 5;
let rating2 = 4;



//Write some code to check if the following variable is 5;

let rng = Math.floor(Math.random()*10);


// Find the total cost of all the items, then find the cost of tax. Finally display the Total, Tax, and Total + tax as a dollar value;
//Tax formula (total * tax) / 100


let skateboard = 5.99;

let fryingPan = 11.99;

let piano = 12.99;

let table = 199.99;

let notebook = 4.59;



<h3>Functions</h3>

// Write a function that console.logs hello world and call it.



// Write a function with the parameter, howdy, console.log the value of howdy



// Write a function that takes two arguments. Add them together;


// Write a function that will calculate the tax of a number passed through.


// Write and call a function that will return the string howdy





// Write a function for addition, subtraction, multiplication, and division. Have all functions return the value.
// Bonus, try using default parameters to avoid returning NaN on any of the functions



// Write a function that will console.log a madlib. use prompt(); to get a noun, adverb, verb, and an adjective from the user.



// Write a function that will return a random number from 0 - 100;

<h3>For Loops</h3>

//1 Create a loop that console.logs from 1 to 10


//2 Create a loop that console.logs from 0 to 10


//3 Create a loop that console.logs from 10 to 1


//4 Create a loop that console.logs every even number from 0 to 50 


//5 Create a loop that will count from 0 to 100, using the loop try to find what the random number is. when you find it, stop the loop
let randomNum = Math.floor(Math.random()*101);




// Create a loop that will console.log every letter in the word "Howdy"



// Write some code that will count to 10, 10 times




// Write a loop that will run 50 times. Check each number to see if it is a multiple of 3



// Write a loop that will check each letter in a word and console.log if it is a vowel or not.


// Write a loop that will take any word and reverse it




//Using a loop, Ask a user for their 5 favorite things. console.log what there favorite things are
//Use prompt();



//Write some code that will continue prompting a user for a number until they enter a negative number. When they enter a negative number print the sum of all the numbers entered.

<h3>Arrays</h3>

        //1 Create an array of four numbers

        
        //2 Create an array of strings.


        //3 Console.log the 4th item in the array;
        let trees = ["pine", "spruce", "juniper", "larch", "yew"]

        
        //4 Using a for loop console.log every element in this array
        let sentenceArray = ["The","quick","brown","fox","jumps","over",'the',"lazy","dog"]


        
        //5 Loop through the array until you find the word language, when you find it console.log it's index in the array
        let words = ["A","sentence","is","the","basic","unit","of","language","which","expresses","a","complete","thought"]

        //6 Find the sum of all the numbers in the array
        let cart = [5.99, 11.59, 4.01, 25.78, 508.99, 12.00];


        //7 Check if any elements appear in both arrays. If they do, console.log that they are banned

        let inLine = ["Thomas", "Jurimo", "Wemby", "Grimold", "Fomsly"];
        let banned = ["Wemby", "Frombert", "Thirna", "Thomas", "Jurimo"];



        //8. Find the smallest number in the array 

        let findArr = [5,74,12,35,69,635,4,71,4,52,58,415,24];


        //9. Sort the array from smallest to largest 

        let sortMe = [5,74,12,35,69,635,4,71,4,52,58,415,24];

<h3>Array Methods</h3>

    // Using an array method, add the string "World" to this array
    let helloWorld = ["Hello"];


    // Using an array method, remove the last element from the array
    let oneTwoThree = [1,2,3,4];

    
    // Using an array method, add the word "Lorem" to the start of the following array
    let loremIpsum = [ "ipsum", "dolor", "sit", "amet."];


    // Create a sentence out of the following array
    let sentence = ["The","quick","brown","fox","jumps","over","the","lazy","dog"]



    // Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
    let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]

    // Fix this code so that there will never be a duplicate number added to the array
    let values = [];

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        values.push(randomNumber);
    }

    console.log(values);


    

    // Add everyone from the toBeAdded array to the banList;


    let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
    let banList = ["Budly","Gurtrood","dimsly"]




    // using the map method, Create a new array for the tax on each transaction

    let transactions = [599.99, 22.21, 10.18, 108.97, 45.52];

<h3>Objects</h3>

        //1 Create an object that contains a first name and a last name.


        //2 Create an object thet contains an array  
        

        //3 Use this object to console.log the first name, email, and phone number.

        let userObject = {
            first_name:"Jurimo",
            last_name:"Datatag",
            email:"jD@gmail.com",
            phone:"905-905-9055"
        }


        //4 do the same as the last question but for each person in this array

        let users = [
            {
                first_name:"Jurimo",
                last_name:"Datatag",
                email:"jD@gmail.com",
                phone:"905-905-9055"
            },
            {
                first_name:"Bingle",
                last_name:"Dorf",
                email:"bingD@gmail.com",
                phone:"995-558-4101"
            },
            {
                first_name:"Sarsha",
                last_name:"Warsha",
                email:"sarshwarsh@gmail.com",
                phone:"787-747-5754"
            }
        ]

<h3>DOM</h3>
    
    <p>Hello</p>
    <p>World</p>

    <div id="myDiv">
        <p class="nestedP">I don't want to be green</p>
        <p class="nestedP">I do want to be green</p>
    </div>

    <a id="google">google.com</a>

    <script>

        // Select all the p tags in the document and change their color to green


        // Give the myDiv div a border that is 1px width and solid style.

        
        // Change the color of the p tag that says it doesn't want to be green to black


        // Console.log the innerText of every p tag on this page.


        // go to this page and find all of the li tags on it, https://www.w3schools.com/. Console.log the innerHTML of each element.


        // Make the a tag in the document open google.com in a new tab when it is clicked.
    </script>

Javascript tutorial
    https://javascript.info/?mc_cid=f0a26b3342&mc_eid=3af43d521d
Scrum tutorial
    https://codeyouth.slack.com/files/U049L95TV6G/F05RUQX9RLN/2020-scrum-guide-us.pdf