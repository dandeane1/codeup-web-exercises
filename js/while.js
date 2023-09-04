// declare a variable with initial value of 2
// use a while loop with the condition num <= 65536
// print the value of num to the console
// multiply num by 2 and assign it back to num


let num = 2;
while (num <= 65536) {
    console.log(num);

    num = num * 2;
}



var allCones = Math.floor(Math.random() * 50) + 50;
var conesLeft = allCones;
var conesBought;
var message;

do {
    conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought <= conesLeft) {
        conesLeft = conesLeft - conesBought;
        message = `${conesBought} cone(s) sold...`;
        if (conesLeft === 0) {
             message += " Yay! I sold them all!";
        }
    } else {
         message = `Cannot sell you ${conesBought} cone(s). I only have ${conesLeft}...`;
    }
    console.log(message);
} while (conesLeft > 0); 