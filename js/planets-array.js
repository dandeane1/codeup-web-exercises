
    "use strict";

    var planets = [
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

    console.log(planets.unshift("Sun"));
    console.log(planets);

    console.log(planets.push("Pluto"));
    console.log(planets);

    console.log(planets.shift("Sun"));
    console.log(planets);

    console.log(planets.pop("Pluto"));
    console.log(planets);

    var index = planets.indexOf('Earth');

    console.log(index);

    console.log(planets.reverse());
    console.log(planets);

    console.log(planets.sort());
    console.log(planets);
