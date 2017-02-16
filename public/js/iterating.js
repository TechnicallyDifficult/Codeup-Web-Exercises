(function(){
    "use strict";

    var names = ["Jacob", "Joshua", "Daniel", "David"];

    console.log(names.length);

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    names.forEach(function (element, index, array) {
        console.log(element);
    })
})();
