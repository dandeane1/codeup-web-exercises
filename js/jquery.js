$(".highlight-me").css("background-color", "yellow");

// Exercise 3
$("h1").click(function() {
    $(this).css("background-color", "blue");
});

// Exercise 4
$("p").dblclick(function() {
    $(this).css("font-size", "18px");
});

// Exercise 5
$("li").hover(
    function() {
        $(this).css("color", "red");
    },
    function() {
        $(this).css("color", "black");
    }
);