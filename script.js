'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 543;
// const if = 35;

function logger() {
  console.log('My name is Martins');
}
//calling / running / invoking the function.
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const juiceMaker = fruitProcessor(10, 8);
console.log(juiceMaker);

const num = Number('25');
console.log(num);

// Function Declaration Vs Expressions

//function Declaration.
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1992);
console.log(age1);

// Function Expression. Note that expression will always produce value, therefore we assign a 
// variable to the function.
const calcAge2 = function(birthYear) {
  return 2023 - birthYear;
}
const age2 = calcAge2(1980);
console.log(age1, age2);

//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

//example 2.
const yearUntilRetirement = birthYear => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
}
const retired = yearUntilRetirement(1989);
console.log(retired);

//example 3.
const yearUntilRetirement2 = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire in ${retirement} years.`
}
const retiredMartins = yearUntilRetirement2(1993, 'Martins');
const retiredJonas = yearUntilRetirement2(1988, 'Jonas');

console.log(retiredMartins);
console.log(retiredJonas);

// Functions calling other function.

//Example.
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
const outputJuice = fruitProcessor(4, 5);
console.log(outputJuice);

const outputJuice2 = fruitProcessor(6, 4);
console.log(outputJuice2);

//Reviewing what we have learnt about functions.
const  calculateAge = function(birthYear) {
  return 2027 - birthYear;
}

const yearTillRestirement = function(birthYear, firstName) {
  const currenAge = calculateAge(birthYear);
  const retiredAge = 65 - currenAge;

  if (retiredAge > 0) {
    console.log(`${firstName} will retires in ${retiredAge} years.`);
    return retiredAge;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}
const martins = yearTillRestirement(1987, 'Martins');
console.log(martins);

const jonas = yearTillRestirement(1992, 'Jonas');
console.log(jonas);

//JavaScript Fundamentals – Part 2 Challenge 1

//challenge.
const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin);
console.log(scoreKoalas);

const checkWinner = function(averageDolphin, averageKoalas) {
    if (averageDolphin >= 2 * averageKoalas) {
        console.log(`Dolpin win (${averageDolphin} Vs. ${averageKoalas})`);
    } else if (averageKoalas >= 2 * averageDolphin) {
        console.log(`Koalas win (${averageKoalas} Vs. ${averageDolphin})`);
    } else {
        console.log("No team win...");
    }
}
checkWinner(scoreDolphin, scoreKoalas);
checkWinner(565, 111);

//Test 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin);
console.log(scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);

//An Array. Ways of creating array
//1.
const friends = ['Martins', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[1]);
console.log(friends[0 + 2]);
console.log(friends[friends.length-3]);
console.log(friends.length);

//2.
const years = new Array(1991, 'Laptop', 1983, 2020, 'Apples', 2023);
console.log(years);
console.log(years[2]);
console.log(years.length);
console.log(years[years.length-1]);

//Mutating an array.
friends[0] = 'Abiola';
console.log(friends[0]);

years[3] = 'Banana';
console.log(years[3]);

const martinsFirstName = 'Martins';
const martinsLastName= 'Abiola';
const martins2 = [martinsFirstName, martinsLastName, 'Web Developer', 2023-1980, friends];
console.log(martins2)

const  calculateAges = function(birthYear) {
  return 2027 - birthYear;
}

const yearsOld = [1990, 1983, 1978, 1998, 1985];

const ages1 = calculateAges(yearsOld[1]);
const ages2 = calculateAges(yearsOld[2]);
const ages3 = calculateAges(yearsOld[yearsOld.length-1]);

console.log(ages1, ages2, ages3);

const allAges = [ages1, ages2, ages3];

console.log(allAges);

//Array Operations (Methods).
//Adding Elements
//1. Push: add an element to the end of array that it was called upon.
const friends2 = ['Martins', 'Steven', 'Peter'];
friends2.push('Ade');
console.log(friends2);

const newLength = friends2.push('Tayo');
console.log(newLength);

//2. unshift: add element to the beginning of an array.
const newLength3 = friends2.unshift('Sade');
console.log(friends2);
console.log(newLength3);

//Removing Elements.
//3. pop: remove the last element of the array.
const friends3 = ['Martins', 'Steven', 'Peter', 'Ade', 'Sade'];
friends3.pop();
console.log(friends3);
const popped = friends3.pop();
console.log(popped);

//4. shift: this will remove the first element of an array.
const friends4 = ['Martins', 'Steven', 'Peter', 'Ade', 'Sade'];
friends4.shift();
console.log(friends4);
const shifted = friends4.shift();
console.log(shifted);

//5. indexOf(): this will tells us the position of an element within an array.
const friends5 = ['Martins', 'Steven', 'Peter', 'Ade', 'Sade'];

console.log(friends5.indexOf('Peter'));

//6. include: This will return true if the lelement check is within the array and 
// return false is the lement check is not within the Array.
// This is also good for is else statement.
const friends6 = ['Martins', 'Steven', 'Peter', 'Ade', 'Sade', 'Tolani'];
console.log(friends6.includes('Peter'));
console.log(friends6.includes('Ayo'));
console.log(friends6.includes('Sade'));
console.log(friends6.includes('Ojo'));

if (friends6.includes('Sade')) {
  console.log("You have a friend called the bearer");
} else {
  console.log("None of your friends called the bearer");
}

if (friends6.includes('Steven')) {
  console.log(`The bearer is included`);
} else {
  console.log(`The bearer is not included`);
}

//coding challenge 2.
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀

// Solution.
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);


// Introduction to Objects.

const martins3 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  age: 2023-1980,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu']
};

console.log(martins3);

//Ways of getting properties from object.
//1. Dot Notation

const martins4 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  age: 2023-1980,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu']
};

const gettingFirstName = martins4.firstName;
console.log(gettingFirstName);

const gettingLastName = martins4.lastName;
console.log(gettingLastName);

const gettinfJob = martins4.job;
console.log(gettinfJob);

// Bracket Notation.
const martins5 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  age: 2023-1980,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu']
};

const gettingAge = martins5['age'];
console.log(gettingAge);

const gettingFriends = martins5['frinds'];
console.log(gettingFriends);

const nameKey = 'Name';
const getFName = martins5['first' + nameKey];
console.log(getFName);

const getLName = martins5['last' + nameKey];
console.log(getLName);

// const interestedIn = prompt('What do you want to know about Martins? Choose between irstName, lastName, age, job, and friends');
// const answer = martins5[interestedIn]


// if (martins5[interestedIn]) {
//   console.log(answer);
// } else {
//   console.log('Wrong request! Choose between irstName, lastName, age, job, and friends');
// }


//adding properties to the objact with dot notation and bracket notation.

martins5.location = 'Qatar';
martins5.twitter = '@Abmartmartins';
console.log(martins5);


//Small Challenge
//write martin has 3 friends, and his best friend is Micheal. 

//Solution.
const martin = {
  firstName: 'Martins',
  lastName: 'Abiola',
  age: 2023-1980,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu']
};

const challenge = `${martin.firstName} has ${martin.friends.length} friends, and his best friend is ${martin.friends[0]}`;

console.log(challenge);

//Object Methods.
const martin2 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  birthYear: 1980,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu'],
  hasDriverLicense: true,
  calAge: function() {
    return 2023 - this.birthYear;
  }
};

const ageMart = martin2.calAge();

console.log(ageMart);

const martin3 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  birthYear: 1975,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu'],
  hasDriverLicense: true,
  calAge: function() {
    this.age = 2023 - this.birthYear;
    return this.age;
  }
};

const ageMart2 = martin3.calAge();
console.log(ageMart2);

//Small Challenge
//write martin is 46 years old web developer, and has a /no drivers licence.. 

//Solution.
const martin4 = {
  firstName: 'Martins',
  lastName: 'Abiola',
  birthYear: 1975,
  job: 'Web Developer',
  friends: ['Michael', 'Steven', 'Sade', 'Tolu'],
  hasDriverLicense: true,
  calAge: function() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
  }
};
const challenge2 = martin4.getSummary();
console.log(challenge2);

//challenge 3.
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀


//Solution.
const markMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.getBMI = this.mass / (this.height * this.height);
    return this.getBMI;
    
  }
}
markMiller.calcBMI();
console.log(markMiller.getBMI)

const johnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.getBMI = this.mass / (this.height * this.height);
    return this.getBMI;
    
  }
}
johnSmith.calcBMI();
console.log(johnSmith.getBMI);

if (markMiller.getBMI > johnSmith.getBMI) {
  console.log(`${markMiller.fullName}'s BMI (${markMiller.getBMI}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.getBMI})`)
} else if (johnSmith.getBMI > markMiller.getBMI) {
  console.log(`${johnSmith.fullName}'s BMI (${johnSmith.getBMI}) is higher than ${markMiller.fullName}'s BMI (${markMiller.getBMI})`)  
}
