
(function(){
    "use strict";

    let  planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray =  planetsString.split("|")
    console.log(planetsArray);

let planetsHTML = planetsArray . join('<br');
console.log(planetsHTML)
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
for (let i= 0; i < planetsArray.length; i++){
    planetsHTML +=
        '<li>${planetsArray[i]}</li>';
    planetsHTML += "</ul>";
    console.log(planetsHTML)

}

})();

