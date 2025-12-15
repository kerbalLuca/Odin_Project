/*
const max = 57;
const actual = max - 13;
const percentage = actual/max;
console.log(percentage);
*/

//Strings
/*
let a= "Hello, I am a kerbal";
let a_length = a.length;
console.log(a_length);
console.log(a.at(0));
//Conditionals

let b = 2;
if (b == 2) {
        console.log("b is equal to 2");
} else {
        console.log("Nope");
}

switch(b) {
        case 2:
                console.log("Switch got it");
		break
}*/

//Function tests 

function add7 (num) {
	return num + 7;
}
console.log("I have input 10 to the add 7 function and have gotten back:" + add7(10));

function multiply (a,b) {
	return a*b;
}
console.log("I have multiplied the numbers 2 and 3 my resasult is:"+multiply(2,3));

let capitalize = (string) => {
	return string.toProperCase;
}
console.log(capitalize("baBuKOHy"));

function lastLetter (string) {
	return string.at(string.length-1)
}
console.log(lastLetter("abcd"))
