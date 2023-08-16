
// Warmup for today:
// Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.
// console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”
// 	Bonus:
// I. Refactor your message to use template strings.
// Ii. Add validation to make sure the argument passed to the function is a string datatype only.


function logUser(stringArgument) {
    if (typeof stringArgument !== "string") {
        return "Argument must be a string data type.";
    }
    return `${stringArgument} has logged in for the day.`;
}
console.log(logUser("ken2cool"));