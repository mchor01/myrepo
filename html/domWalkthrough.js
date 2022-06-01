// prints the document tree, listing all properties
console.dir(document);

// prints the domain of the document using the DOM
console.log(document.domain);

// Gives the URL of the webpage
console.log(document.URL);

// The Document Attribute can access different elements
// Gives the title of the webpage
console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);

// deprecation - all is older code, making it not useful
console.log(document.all);

// index lister
console.log(document.all[10]);

// changed header by selecting document object index number 10 
document.all[10].textContent = "Header Changed";

// lists all the forms in the document
console.log(document.forms);

// lists all the links in the document
console.log(document.links);

// lists all the images in the document
console.log(document.images);

// ///////////////////////////////////////
// Get Element by ID
// obtains the element in the document by specifying the element's ID
console.log(document.getElementById('header-title'));

// you can create an object based on the document function
// creating an object variable based on the document function
let headerTitle = document.getElementById('header-title');

// now that we have a declared variable, we can use it to pass through the arguement parameter. 
console.log(headerTitle);
headerTitle.textContent = "Changed the Title again";

// subfunction called intertext. Exact same thing as textContent
headerTitle.innerText - "hello changed you again";

// use variable to change the color
headerTitle.style.color = 'blue';

// //////////////////////////////////
// getElementsByClassName
// obtains the element by the name of it's class
// returns an array like s
var items = document.getElementsByClassName('list-group-item');
console.log(items);


// by using the array that was returned, you can reference that particular index to manipulate it
items[1].style.fontWeight ='bold';
items[1].textContent = 'Bap';
items[1].style.color = 'purple';
items[1].style.backgroundColor = 'pink';

items[2].style.fontWeight ='bold';
items[2].textContent = 'sushi';
items[2].style.color = 'red';
items[2].style.backgroundColor = 'blue'; 

items[0].style.fontWeight ='bold';
items[0].textContent = 'sashimi';
items[0].style.color = 'pink';
items[0].style.backgroundColor = 'yellow';

// create a for loop where we count up to 10 
for(let i = 1; i<=10; i ++){
    console.log(i);
}

// create a for loop where we count up by 2 starting from 1, up until 20
for (let i = 1; i<=20; i +=2){
    console.log(i);
}

// create a for loop starting from 100, count down by 2 until we reach 0 
for (let i =100; i>=0; i -=2){
    console.log(i);
}

// create an array: a list of items
const myJewels = ['Red', 'Orange', 'Yellow', 'Green','Blue']

// use a for loop to run through each array item and print it
for (let i=0; i<myJewels.length; i ++){
    console.log(i, myJewels[i]);

}

// using the variable we already created, we use the for loop to change all the array items.
for (var i=0; i<items.length; i ++){
    items[i].style.backgroundColor = 'grey';
    items[i].textContent = "changing the list items";
    items[i].style.color = 'white';
}

////////////////////////////////////////////////////
// getElementsByTagName

// Using getElementsByTagName allows you to obtain a tag from the DOM
var li = document.getElementsByTagName('li');
console.log(li); 
console.log(li[1]);

li[1].textContent = "Hello 2 Now";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green';