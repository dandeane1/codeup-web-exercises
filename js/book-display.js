/// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.

let book1 = {
    title: "The Poet",
    author: "Michael Connelly",
    genre:  "Thriller",
}
let book2 = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
}
let book3 = {
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    genre: "Philosophical",
};

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.
//
function generateCard(book) {
    return `
        <div class="card">
            <div>Book Title: ${book.title}.</div>
            <div>Book Author: ${book.author}.</div>
            <div>Book Genre: ${book.genre}.</div>
        </div>`;
}


//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.



//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).
let books = [book1,book2,book3];
//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = "";
books.forEach(book => {
    let card = generateCard(book);
    allCards += card;
});

let container = document.getElementById("container");
container.innerHTML = allCards