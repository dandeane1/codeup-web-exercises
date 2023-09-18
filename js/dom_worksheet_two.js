//TODO: When the h1#double-click is double clicked, change the inner text of the H1 from "Prepare for trouble. . ." to ". . . and make it double!"
let h1 = document.getElementById("double-click");
// // Add an event listener for the double click event
h1.addEventListener("dblclick", fun);
function fun() {
    h1.innerText = ". . . and make it double!";
}

//
// //TODO: As the user types into the input#input,  the div#printHere should display each individual character typed as it was typed into the input.

// // Get the input and div elements by their IDs
// let input = document.getElementById("input");
// let printHere = document.getElementById("printHere");
//
// // Define a function that updates the div content with the input value
// function displayInput() {
//     printHere.innerHTML = input.value;
// }
//
// // Assign the function to the oninput event of the input element
// input.oninput = displayInput;


// //TODO: When a paragraph.loremPara is clicked, that particular paragraph element's background color and font color should change to colors of your choice - note that only the ONE paragraph that was clicked should have that happen, not all paragraphs in the class.
let paragraphs = document.getElementsByClassName("loremPara");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
        paragraphs.style['background-color'] = "#fefefe";

    });
}
// (function() {
//     // Get the body element (notice we need to use index 0 of the array!)
//     var bodyElement = document.getElementsByTagName('body')[0];
//
//     // Change the body font color
//     bodyElement.style.color = '#444'; // Dark grey
//
//     bodyElement.style['background-color'] = "#fefefe"; // Very light grey
//     // We had to use [] syntax since the property name has a dash
//
//     bodyElement.style.fontFamily = "Helvetica, Verdana, Sans-Serif";
// Replace dashes with camelCase to use standard . syntax
// //TODO: When the div#carSales is clicked, change the location of the user from the worksheet to https://www.lingscars.com/
document.getElementById(‘carSales’).addEventListener(‘click’,function(e) {
    window.location.href = "https://www.lingscars.com/";
});

//
// //TODO: When the paragraph#question-request is hovered over, write a question in a string to appear in the paragraph#question-delivered - this question should disappear when the mouse leaves the area of paragraph#question-request
// // TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".
document.getElementById("deep-in-the-heart").addEventListener("click", function() {
    alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~");
});
//
// $("#deep-in-the-heart").on("click", (e) => {
//     alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~");
// })
//
// //TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.
//
// $("#what-color").on("click", (e) => {
//     let color = $("#what-color").attr("style");
//     color = color.split(" ")[1];
//
//    $("#answer-color").text(`Looks like that's the color: ${color}`)
//
// })
//
// // TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.
// $("#tacoButton").on("click", (e) => {
//     e.preventDefault();
//     $("#favorite-taco").text($("#tacoBoutIt").val());
// })
//
// // TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.
//
//     $(".state-list-item").on("mouseenter", (e) => {
//         $("#insert-state").text(e.target.innerText);
//
//     })
//
//    $(".state-list-item").on("mouseleave", (e) => {
//        $("#insert-state").text("");
//
// //TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.
//
//        setTimeout(() => {
//            $("#five-seconds").text("Oh, hey, didn't see you there")
//        }, 5000)
//    }