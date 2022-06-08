console.log("Hello World");

// we create a variable that creates a random number between 0.0-1
let randomNumber = Math.random(); //0.0 - 1

// the if statement only let's the block of code run if the conditions are met
// the condition here the randomNumber generated has to be less than 0.5
if (randomNumber < 0.5){

// once the condition passes, the console prints "condition was met and lists the number"
    console.log("Condition was Met");
    console.log(randomNumber);
    
}

// Here we create a different condition where the number has to be greater or equal to 0.5
if (randomNumber >= 0.5){
    console.log("Condition was Met for greater or equal to 0.5");
    console.log(randomNumber);

}

// Here we are adding an else if statement where if the first condition isn't met, then it'll go to the else if condition
// to see if it passes that, if it doesn't then it'll move onto the next else if condition. 
const dayOfWeek = 'Saturday';
if (dayOfWeek === 'Monday'){
    console.log("yay it's monday");

} else if (dayOfWeek === 'Friday'){
    console.log("yay it's friday!");

} else if(dayOfWeek === 'Saturday'){
    console.log("you have the correct day from the variable");
}

const age = prompt("Enter An Age");
// run several if statements with different conditions
if (age < 5){
    console.log("Hey, you're a baby!");
} else if(age < 10) {
    console.log("Hey, you're just a kid!");
} else if(age < 35){
    console.log("You're getting older.");
}
// If all other conditions fail, it'll run this block of code
else {
    console.log("you're over the age of 35");
}


const fruit = 'Papayas';

// switches allow for direct changes to the variable to be ran through the case statement
switch (fruit) {
    case 'Oranges':
        console.log("Oranges are $0.58 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.58 a pound");
        break;
    case 'Avocados':
        console.log("Avocados are $1.00 a pound");
        break;
    case 'Papayas':
        console.log("Papayas are $0.70 a pound");
        break;
    // if all else fails, then default is the statement that will be ran
    default:
        console.log("Last Resort if all conditions fail");
}

const password = prompt("Enter in a new password");
// Here we are creating nested if statements where if one condition is met, it'll move onto the following condition.
if (password.length >= 6) {

    if (password.indexOf(' ') === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password can't have spaces");
    }

} else {
    console.log("Password is too short");
}

// Functions have a declaration statement, a name, and arguement parameters
// In order for the function to run, you have to call it
function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("ME");
}

singSong()

function greet(firstName, lastName) {
    // `` is called a template literal where you can add in an arguement/parameter
    console.log(`Hey There, ${firstName} ${lastName}`)
}

// You can also add in two arguements to pass through
greet("Boomer", "Sooner");