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



