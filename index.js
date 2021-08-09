//varible to store my age 
const myAge = 27;
//create a varibale to store the first 2 dog years
let earlyYears = 2;
//since first 2 years for a dog is 10*5 years each, multiply earlyYears to get in dog years
earlyYears *= 10.5;
//get the remaining years
laterYears = myAge - 2;
//after 2 years a dogs years are now 4 human years, hence multiply laterYears by 4 to get remaining years in dog years
laterYears *= 4

console.log(earlyYears);
console.log(laterYears);
//get total age in dog years
let myAgeInDogYears = earlyYears + laterYears;
//creating my name and making it lowercase
let myName = 'samuel'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`);

