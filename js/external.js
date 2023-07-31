"use strict";
//alert("Welcome to my website!")
//console.log('Hello from JavaScript!');
//var userInput = prompt('What is your favorite color?:');
//console.log('The user entered: ' + userInput);
//alert("Great " + userInput + " is my favorite color too!")

// The little mermaid (for 3 days), Brother Bear (for 5 days, and Hercules. If price  per day is $3, how much will you have to pay?
const amountPerDay= 3;

let theLittleMermaid = 3 * amountPerDay;
console.log("$" + theLittleMermaid);
//parseInt(prompt("The Little Mermaid", + "$" + amountPerDay, + "anything"));
alert("You rented The Little Mermaid for 3 days.");

// need to figure out how to add value to a number in order to make the prompt work

let brotherBear= 5 * amountPerDay;
console.log("$" + brotherBear)
//parseInt(prompt("Enter the number of days for Brother Bear",""));
alert("You rented Brother Bear for 5 days.");



let theHercules= 1 * amountPerDay;
//parseInt(prompt("Enter the number of days for The Little Mermaid",""));
alert("You rented Hercules for 1 day.");

console.log("$" + theHercules)

let totalAmount = brotherBear + theLittleMermaid + theHercules;
console.log("Your total amount due " + "$" + totalAmount)
// * why is it returning 33 instead of 27? figured out

alert("Amount owned for movies is " +"$" + totalAmount)
// alert returns correct will need to go back and add more data to get desired results need to figure out how to add more info to prompt line.//
// prompt is not right but does produce pop up box.SOLVED//



const googlePay = 400
let googleHour =  6
let googleOwed = googlePay * googleHour;
console.log ("Google payment due " + "$" + googlePay * googleHour)
parseInt(prompt("You should receive " + "$" + googleOwed + " from Google."));


const amazonPay = 380
let amazonHour = 4
let amazonOwed = amazonPay * amazonHour;
console.log("Amazon payemnt due " + "$" + amazonPay * amazonHour)
parseInt(prompt("You should receive " + "$" + amazonOwed + " from Amazon."))


const faceBookPay = 350
let faceBookHour = 10
let faceBookOwed = faceBookPay * faceBookHour;
console.log("Facebook payemnt due " + "$" + faceBookPay * faceBookHour)
parseInt(prompt("You should receive " + "$" + faceBookOwed + " from Facebook."))

let totalAmountDue = googleOwed + amazonOwed + faceBookOwed;
console.log("Weekly pay will be " + "$" + totalAmountDue);
alert("You should receive " + "$"+ totalAmountDue)






//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.//
//1. class?
//2.Is the class full?// assume yes for now
//3. does the class have a scheduling conflict?


let whichClass  = (prompt("Hello, please enter the class you wish to be enrolled:"));
console.log(whichClass)

// class availability
let isClassFull  = prompt("Is the class full? (yes/no)") .toLowerCase();
if (isClassFull === "yes") {
        alert("I'm sorry,you can not enroll at this time");
    } else {alert ("Great, click ok to continue")
}

//Prompt  does schedule conflict schedule
    let doesScheduleConflict = prompt("Does the class schedule conflict with your current schedule? (yes/no)").toLowerCase();
    if ("no") {
        alert("Great, click ok to continue");
    } else { alert("I'm sorry,you can not enroll at this time")
}
    if (isClassFull === "no" && doesScheduleConflict === "no")
        console.log("You can enroll in the class!");
    else
        console.log("You can not enroll in this class.");


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let moreThenTwoItems = prompt("Do you have more then 2 items.")
let offerBeValid
let isPremiumMember