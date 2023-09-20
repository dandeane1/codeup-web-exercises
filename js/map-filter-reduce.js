const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let userLanguagesOfThree = users.filter ((user) => {

    return user.languages.length >= 3;
})
console.log( userLanguagesOfThree);

// // Use .map to create an array of strings where each element is a user's email address
let userEmailAddress = users.map(function(e){
    return e.email
})
console.log(userEmailAddress);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let averageYearsOfExperience = users.reduce((accum, currentUserObj) => {
    return accum+= currentUserObj.yearsOfExperience;

} ,0)

console.log(averageYearsOfExperience);

// // Use .reduce to get the longest email from the list of users.

    let longestEmail = users.reduce((accum, currentUserObj) => {
        if (currentUserObj.email.length > accum.length) {
            accum = currentUserObj.email;

        }
        return accum;
    }, "")
    console.log(longestEmail);

// let usernameSingleString = .reduce
// // Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


    let listOfNames = users.reduce((accum, currentUserObj, index) => {


        if ((users.length - 1) === index) {
            return accum += currentUserObj.name + "."
        }

        return accum += currentUserObj.name + ", ";

    }, "Your instructors are: ");

    console.log(listOfNames);

    let usersLanguages = users.reduce((accumulator, current) => {

        current.languages.forEach((language) => {
            if(!accumulator.includes(language)){
                accumulator.push(language);
            }
        })


        return accumulator;
    }, [])

    console.log(usersLanguages);