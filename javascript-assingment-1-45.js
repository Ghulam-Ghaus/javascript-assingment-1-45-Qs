// 1 Installation Done

// 2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Ghulam Ghaus";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name1 = "Ghulam Ghaus";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
let str = "hello ghulam ghaus would you like to learn some Python today?";
const capitaliseTitle = (str) => {
  const string = str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1, word.length);
    })
    .join(" ");
  return string;
};
console.log(capitaliseTitle(str));

// 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(
  `Qaid e Azam once said, “Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.”`
);

// 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_person = "Muhammad Ali Jinah ";
const message =
  "“Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.”";
console.log(famous_person + ", " + message);

// 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name2 = " Ghaus    !";
console.log(name2);
const result = name2.split(" ").join("");
console.log(result);

// 7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(4 + 4);
console.log(2 * 4);
console.log(16 / 2);
console.log(16 - 8);

// 8 You should create four lines that look like this: console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(2 * 4);
console.log(16 / 2);
console.log(16 - 8);

// 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const favNumber = 99;
console.log(`My favorate Number is ${favNumber}`);

// 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
const favNumber1 = 99;
// This Log will print my Favorate Number
console.log(`My favorate Number is ${favNumber1}`);

// 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const names = [
  "Ali",
  "Waqas",
  "Chaman",
  "Zebi",
  "Shakeel",
  "Kashif",
  "Aftab",
  "Ghaus",
];
for (const key in names) {
  {
    console.log(names[key]);
  }
}
// 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

for (const key in names) {
  {
    console.log(`${names[key]} is my friend from faisalabad.`);
  }
}

// 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const transportation = [
  "Honda",
  "Toyota",
  "Audi",
  "BMW",
  "KIA",
  "Nissan",
  "Mersidies",
  "Vigo",
];
for (let i = 0; i < names.length; i++) {
  {
    console.log(
      `${names[i]} is my friend from faisalabad! Who would like to own a ${transportation[i]}`
    );
  }
}

// 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guest = ["Ali", "waqas", "Ahmad", "nasir", "qasim", "waheed", "anjam"];
const invitationList = [];
for (const key in guest) {
  if (guest[key].length > 4) {
    invitationList.push(guest[key]);
  }
}
for (const key in invitationList) {
  console.log(`${invitationList[key]}! I would like to ivite you for Diner! `);
}
// 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const outOfCity = "qasim";
const newIn = "Ghaus";
// const newInviList = []
for (const key in invitationList) {
  if (invitationList[key] === outOfCity) {
    invitationList[key] = newIn;
  }
}
for (const key in invitationList) {
  console.log(
    `${invitationList[key]}! I would like to ivite you for Diner! I hope we have a Great Diner togather!`
  );
}

// 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
invitationList.unshift("Kashif");
const addMidle = invitationList.length / 2;
// invitationList[addMidle].append('Zebi')
invitationList.splice(addMidle, 0, "zebi");
invitationList.push("shakeel");
for (const key in invitationList) {
  console.log(
    `${invitationList[key]}! I would like to ivite you for Diner! I hope we have a Great Diner togather!`
  );
}

// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
const lengthOfArray = invitationList.length;
for (let i = 0; i < lengthOfArray; i++) {
  if (invitationList.length > 2) {
    console.log(
      `${invitationList.pop()} : Sorry! this time we just have two seats for Diner!`
    );
  }
  if (invitationList.length <= 2) {
    console.log(`${invitationList.pop()} : You are still Invited for Diner!`);
  }
}
console.log(invitationList);

// 18 Seeing the World: Think of at least five places in the world you’d like to visit.

const favPlaces = [
  "Khana Kaba",
  "Al-Masjid an-Nabawi",
  "Al-Aqsa Mosque",
  "Giza Governorate",
  "Shareef House London",
];
console.log(favPlaces);
const sortArray = [...favPlaces];
console.log(sortArray.sort());
console.log(favPlaces);
console.log(sortArray.reverse());
console.log(favPlaces);
console.log(favPlaces.sort());
console.log(favPlaces.reverse());

// 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Our list now empty but we invite last two members for the dinner!

// 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const mountains = ["mountains1", "mountains2", "mountains3", "mountains4"];
const rivers = ["rievr1", "river2", "river4", "river4"];
const countries = ["Pakistan", "Turkye", "Iran", "Egpyt"];
const cities = ["faisalabad", "lahore", "islamabad", "karachi"];
const languages = ["urdu", "punjabi", "pashto", "farsi"];

const array = [mountains, rivers, countries, cities, languages];
const array1 = [...mountains, ...rivers, ...countries, ...cities, ...languages];
console.log(array);
console.log(array1);

// 21 They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
const object = { mountains, rivers, countries, cities, languages };
console.log(object);

// 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// invitationList.splice(addMidle,0,'zebi') // throw the error of index while condition not fit in logicaly

// 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this

let car = "subaru";
console.log(car == "subaru");
console.log(`Is car == 'subaru'? I predict True.`);
console.log(car != "subaru");
console.log(`Is car != 'subaru'? I predict false.`);
let carNumber = 5;
console.log(carNumber <= 5);
console.log(`Is carNumber <= 5? I predict True.`);
console.log(carNumber != 5);
console.log(`Is carNumber != 5? I predict false.`);
let carStatus = true;
console.log(carStatus == true);
console.log(`Is carStatus == true? I predict True.`);
console.log(carStatus != true);
console.log(`Is carStatus != true? I predict false.`);

// 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color = ["green", "yellow"];
for (const key in alien_color) {
  if (alien_color[key] == "green") {
    console.log(`The player just earnend the 5 point`);
  } else {
    console.log(`The version that fails will have no output.`);
  }
}

// 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
const alienColor = "green";
if (alienColor == "green") {
  console.log(`The player just earnend the 5 point`);
} else {
  console.log(`The player just earnend the 10 point`);
}

// 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
const alienColour = ["green", "yellow", "red"];
for (const key in alienColour) {
  if (alienColour[key] == "green") {
    console.log(`The player just earnend the 5 point`);
  } else if (alienColour[key] == "yellow") {
    console.log(`The player just earnend the 10 point`);
  } else if (alienColour[key] == "red") {
    console.log(`The player just earnend the 15 point`);
  } else {
    console.log(`The version that fails will have no output.`);
  }
}

// 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 24;
if (age < 2) {
  console.log("The person is Baby!");
}
if (age >= 2 && age < 4) {
  console.log("The person is toddler!");
}
if (age >= 4 && age < 13) {
  console.log("The person is kid!");
}
if (age >= 13 && age < 20) {
  console.log("The person is teenager!");
}
if (age >= 20 && age < 65) {
  console.log("The person is adult!");
}
if (age >= 65) {
  console.log("The person is elder!");
}

// 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
const favorite_fruits = ["Mango", "Apple", "Anar"];
for (const key in favorite_fruits) {
  if (favorite_fruits[key] == "Mango") {
    console.log(`My favorite Fuit is ${favorite_fruits[key]}`);
  }
  if (favorite_fruits[key] == "Apple") {
    console.log(`My favorite Fuit is ${favorite_fruits[key]}`);
  }
  if (favorite_fruits[key] == "Anar") {
    console.log(`My favorite Fuit is ${favorite_fruits[key]}`);
  }
}

// 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const usernames = ["admin", "HR", "IT", "SE", "DS"];
for (const key in usernames) {
  if (usernames[key] == "admin") {
    console.log(
      `Hello ${usernames[key]}, would you like to see a status report?`
    );
  }
  console.log(`Hello ${usernames[key]},  thank you for logging in again.`);
}

// 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
const users = ["user1", "user2", "user3"];
if (users != null) {
  for (const key of users) {
    console.log(`${users.pop()} : the user removed`);
  }
  console.log(`Users Array is Empty `);
}

// 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
const current_users = [
  "Ali",
  "Waqas",
  "Chaman",
  "Zebi",
  "Shakeel",
  "Kashif",
  "Aftab",
  "Ghaus",
];
const new_users = ["Ali", "Anjam", "ghaus", "kashi", "shabeer"];
for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      console.log(
        `${new_users[i]} UserName Already Registers! use Different userName!`
      );
    }
  }
  console.log(`${new_users[i]} UserName is availble!`);
}

// 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] == 1) {
    console.log(`${arrNumber[i]}st`);
  } else if (arrNumber[i] == 2) {
    console.log(`${arrNumber[i]}nd`);
  } else if (arrNumber[i] == 3) {
    console.log(`${arrNumber[i]}rd`);
  } else {
    console.log(`${arrNumber[i]}th`);
  }
}

// 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const pizzaList = ["pizza1", "pizza2", "pizza3"];
for (const key in pizzaList) {
  console.log(`${pizzaList[key]} this pizza was deleciouse`);
}
console.log(
  `The output should consist of three or more lines about \n the kinds of pizza you like and then an additional sentence, \n such as I really love pizza!`
);

// 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["cats", "dogs", "hours", "pariots", "pisons"];
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]} would make a great pet.`);
}
console.log(`${animals} Any of these animals would make a great pet!`);

// 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
  console.log(` ${size}, ${text}`);
}
make_shirt("medium", "is the size of my T-Shirt!");
make_shirt("large", "is the size of my T-Shirt!");
make_shirt("x-large", "is the size of my T-Shirt!");

// 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size, text) {
  if (size == "medium" || size == "large") {
    console.log(` ${size}, This size id default!`);
  }
  console.log(` ${size}, ${text}`);
}
make_shirts("medium", "is the size of my T-Shirt!");
make_shirts("large", "is the size of my T-Shirt!");
make_shirts("x-large", "is the size of my T-Shirt!");

// 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
  if (city == "" || country == "") {
    console.log("Karachi is in Pakistan.");
  }
  console.log(` ${city}, is in  ${country}`);
}
describe_city("Lahore", "Pakistan");
describe_city("Dubai", "UAE");
describe_city("London", "England");

// 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function describe_city(city, country) {
  if (city == "" || country == "") {
    console.log("Karachi is in Pakistan.");
  }
  console.log(` ${city}, is in  ${country}`);
}
describe_city("Lahore", "Pakistan");
describe_city("Dubai", "UAE");
describe_city("London", "England");

// 40 make-albumAlbum: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, title, track) {
  let album = { nameAl: artistName, titleAl: title, track: track };
  // album[artistName] = artistName;
  // album[title] = title;
  return album;
  // console.log(`${album}`);
}
console.log(make_album("rizwan", "Album", "Rock"));
console.log(make_album("Haider", "Album"));
console.log(make_album("kshi", "Album"));
console.log(make_album("zedo", "Album"));

// 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magician = [
  "Ali",
  "Waqas",
  "Chaman",
  "Zebi",
  "Shakeel",
  "Kashif",
  "Aftab",
  "Ghaus",
];
function show_magicians(arr) {
  for (const key in arr) {
    console.log(arr[key]);
  }
}
show_magicians(magician);

// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(arr) {
  for (const key in arr) {
    arr[key] = `Great ${arr[key]}`;
  }
}
make_great(magician);
show_magicians(magician);

// 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_change(arr) {
  for (const key in arr) {
    console.log((arr[key] = `Changed array valeu ${arr[key]}`));
  }
}
const copyMg = [...magician];
make_change(copyMg);
show_magicians(magician);

// 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(` we have ${arr[i]} for you !`);
  }
  console.log(`Enjoy your Sandwich with a serprise Deal for you!`);
}

make_sandwich(
  "bread",
  "roast",
  "mayoniees",
  "again roast",
  "salad",
  "and bread"
);
make_sandwich("bread", "roast", "mayoniees");
make_sandwich("again roast", "salad", "and bread");

// 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufac, model, ...options) {
  car_obj = {
    manufacturer: manufac,
    model: model,
  };
  for (const key in options) {
    car_obj[options[key]] = options[key];
  }
  return car_obj;
}
let car0 = make_car("honda", 15);
console.log(car);
let car1 = make_car("toyota", 15, "corola");
console.log(car1);
let myCar = make_car("Audi", 19, "Audi-2019", "White");
console.log(myCar);

// https://github.com/ghaus266/javascript-assingment-1-45-Qs.git
