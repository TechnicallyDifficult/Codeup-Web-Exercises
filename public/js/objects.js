(function(){
    "use strict";

    var person = {};
    person.firstName = "Jacob";
    person.lastName = "Monnikendam";
    person.sayHello = function() {
    	alert("Hello, " + person.firstName + " " + person.lastName + ".");
    }

    person.sayHello();
})();
