console.log("Hello World");

let randomNumber = Math.random(); //0.0 - 1

if (randomNumber < 0.5){

    console.log("Condition was Met");
    console.log(randomNumber);
    
}

if (randomNumber >= 0.5){
    console.log("Condition was Met for greater or equal to 0.5");
    console.log(randomNumber);

}

const dayOfWeek = 'Saturday';


if (dayOfWeek === 'Monday'){
    console.log("yay it's monday");

} else if (dayOfWeek === 'Friday'){
    console.log("yay it's friday!");

} else if(dayOfWeek === 'Saturday'){
    console.log("you have the correct day from the variable");
}