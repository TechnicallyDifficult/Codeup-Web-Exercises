(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    var brPlanetsString = planetsArray.join("<br>");
    console.log(brPlanetsString);
    //       Why might this be useful?
    //       Answer: For using JavaScript with HTML. This way, if displayed on the page, there will be line breaks between each planet name.

    var ulPlanetsString = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(ulPlanetsString);
})();
