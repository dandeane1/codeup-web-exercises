


let random = Math.floor((Math.random() * 50) + 2)

console.log("Number to skip is: " + random);


for (let i = 1; i < 50; i++) {

    if (i % 2 === 0) {
        continue;
    }
    if (random === i){;
            console.log("Yikes! Your are skipping " + i);
    } else  {
        console.log("Here is an odd number: " + i )
    }
    if (i >= 49) {
        break;
    }
}

let userNum;
do {
    userNum = parseInt(prompt("Please enter number 1-50"));
if (!isFinite(userNum))  {
    alert("Please enter a valid number.");
        continue;
}
    if (userNum < 1 || userNum > 49) {
        alert("That number is out side of range")
        continue;
    }
    if (userNum % 2=== 0){
        alert("That is not an odd number.")
        continue
    }
            break;


    }
    while (true) ;
    console.log(`User's odd number: ${userNum}`);
    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (userNum === i) {
            console.log("here is a wild number");
        }
    }
