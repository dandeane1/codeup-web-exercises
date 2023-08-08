

    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    planets.unshift("Sun");
    console.log(planets);

    planets.push("Pluto");
    console.log(planets);

    planets.shift("Sun");
    console.log(planets);

    planets.pop("Pluto");
    console.log(planets);

    let index = planets.indexOf('Earth');

    console.log(index);

    planets.reverse();
    console.log(planets);

    planets.sort();
    console.log(planets);
