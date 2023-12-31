(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     //      */
    let person = {};
    person.firstName = "Rick";
    person.lastName = "Sanchez"


    console.log(person.firstName)
    console.log(person.lastName)

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";

    }
    //     * TODO:
    //     * Add a sayHello method to the person object that returns a greeting using
    //     * the firstName and lastName properties.
    //     * console.log the returned message to check your work
    //     *
    //     * Example
    //     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //     */

    console.log(person.sayHello())
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
// function tp called in forEach so function ingoiong to work with elements of that array

        // function (element){
        // My array has three objects elements : name prop & amount
        //return ${element.name} is shopping with us
        //purchased ${elment.name}
        // if qualiied discount offer %{element.name}
        // has to pay ${element.amount-(elment.amount * .12).tofixed(2){
        // else
        // return ${element.name} is here to purchased ${element.amount
        // does noy qualify for discount}

    let shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];
    shoppers.forEach(function (shopper) {
        let discount = 0;
        if (shopper.amount > 200) {
            discount = shopper.amount * 0.12;
        }
        let finalAmount = shopper.amount - discount;

        console.log(`${shopper.name} bought $${shopper.amount.toFixed(2)}, got a discount of $${discount.toFixed(2)},
and needs to pay $${finalAmount.toFixed(2)}.`);
    })
    // }
    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *
    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //  */ my code without the bonus
    let books =
        [{title: "The Salmon of Doubt", author: {firstName: "Douglas", lastName: "Adams"}},
            {title: "Walkaway", author: {firstName: "Cory", lastName: "Doctorow"}},
            {title: "A Brief History of Time", author: {firstName: "Stephen", lastName: "Hawking"}},
            {title: "The Poet", author: {firstName: "Michael", lastName: "Connelly"}},
            {title: "Art of War", author: {firstName: "Sun", lastName: "Tzo"}},
            {title: "The 7 Habits of High Effective People ", author: {firstName: "Stephen", lastName: "Covay"}},
            {title: "The Interpretation of Dreams", author: {firstName: "Sigmund", lastName: "Freud"}},
            {title: "Memories, Dreams, Reflections", author: {firstName: "Carl", lastName: "Jung"}},];

    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"

    books.forEach(function (book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log('---');
    });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     * Example Console Output:
     /**  TODO:
     [] create function "createBook()
     accepts title and author name
     [] returns book object

     [] refactor code to use array instead of function

     [] create function "showBookInfo"
     accepts book object
     [] returns outputs from above

     [] refactor loop to use "showBookInfo"
     */
    // function createBook(bookTitle, authorFirstName, authorLastName) {
    //     return {title: bookTitle, author: {firstName: authorFirstName, lastName: authorLastName}};

    // function showBookInfo(book, index) {
    //     books.forEach(function (book, index){
    //         showBookInfo(book.author);
    //     });



    /* Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // class answer with bonus
    // let book1 = {
    //     title: "Fahrenheit 451",
    //     author:{
    //         firstName: "Ray",
    //         lastName: "Bradbury"
    //     }
    // }
    //
    // let book2 = {
    //     title: "Cat's Cradle",
    //     author: {
    //         firstName: "Kurt",
    //         lastName: "Vonnegut"
    //     }
    //
    // }
    // let book3 = {
    //     title: "Nine Stories",
    //     author: {
    //         firstName: "J.D.",
    //         lastName: "Salinger"
    //     }
    //
    // }
    // let book4 = {
    //     title: "Foundation",
    //     author: {
    //         firstName: "Isaac",
    //         lastName: "Asimov"
    //     }
    //
    // }
    // let book5 = {
    //     title: "Test Driven Development by Example",
    //     author: {
    //         firstName: "Kent",
    //         lastName: "Beck"
    //     }
    //
    // }

    // let books = [book1, book2, book3, book4, book5];


    console.log(books[0].title);
    console.log(books[0].author.firstName + " " + books[0].author.lastName);

    console.log(books[3].title);
    console.log(books[3].author.firstName + " " + books[3].author.lastName);



    for (let i = 0; i < books.length; i++) {
        console.log(`Books # ${i + 1}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
    }

    function createBook(bookTitle, authorFirstName, authorLastName){

        let bookObject = {};
        bookObject.title = bookTitle;
        bookObject.author = {
            firstName: authorFirstName,
            lastName: authorLastName
        };

        return bookObject;
    }

    let booksArray = [];

    booksArray.push(createBook("Title1", "Dude", "McDude"));
    booksArray.push(createBook("Title2", "Dude", "McDude"));
    booksArray.push(createBook("Title3", "Dude", "McDude"));
    booksArray.push(createBook("Title4", "Dude", "McDude"));
    booksArray.push(createBook("Title5", "Dude", "McDude"));

    function showBookInfo(array){

        for (let i = 0; i < array.length; i++) {
            console.log(`Books # ${i + 1}`);
            console.log(`Title: ${array[i].title}`);
            console.log(`Author: ${array[i].author.firstName} ${array[i].author.lastName}`);
        }
    }

    showBookInfo(booksArray);

    })();



