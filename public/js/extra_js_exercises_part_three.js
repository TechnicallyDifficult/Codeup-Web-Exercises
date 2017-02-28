'use strict';

(function exerciseFour() {

	function convertNameToObject(nameString) {
		var nameArray = nameString.split(' '),
			nameObject = {
				'firstName': nameArray[0],
				'lastName': nameArray[1]
			}
			return nameObject;
	}

	console.log(convertNameToObject('Gordon Freeman'));

})();


(function exerciseFive() {

	var myArray = [1, 2, 3, 4, 5];

	// 1. 1
	// 2. 2
	// 3. 5
	// 4. 4; it's one less than the length

	for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}

	myArray.forEach(function (element, index, array) {
		console.log(element);
	});

	// 5. Functionally, they're the same.

})();


(function exerciseSix() {

	var myArray = [2, 3, 4];
	myArray.pop();
	myArray.unshift(1);
	console.log(myArray);

	// 1. [1, 2, 3]
	// 2. 3
	// 3. 1
	// 4. -1
})();


(function exerciseSeven() {

	var myPhoneNumber = '210.867.5309';

	console.log(myPhoneNumber);
	myPhoneNumber = myPhoneNumber.split('.');
	console.log(myPhoneNumber);
	myPhoneNumber = myPhoneNumber.join('-');
	console.log(myPhoneNumber);

})();

(function exerciseEight() {

	var codeupClassroom = {

	    classroom: 'big',
	    temp:      'too cold',

	    changeClassroom: function(){
	        this.classroom = 'small';
	        this.temp      = 'too hot';
	    },

	    consoleLogThis: function(){
	        console.log(this);
	    },

	    describeClassroom: function(beVerbose){
	        var msg = '';

	        if (beVerbose) {
	            msg += 'The classroom is the ' + this.classroom + ' classroom.\n';
	            msg += 'The temperature in here is ' + this.temp + '.';
	        } else {
	            msg += 'classroom: ' + this.classroom + '\n';
	            msg += 'temp: ' + this.temp;
	        }

	        console.log(msg);
	    }
	}

	codeupClassroom.consoleLogThis();
	// The entire object.

	codeupClassroom.describeClassroom(true);
	// "The classroom is the big classroom.
	//  The temperature in here is too cold."

	codeupClassroom.changeClassroom();
	codeupClassroom.describeClassroom(false);
	// "classroom: small
	//  temp: too hot"

})();


(function exerciseNine() {

	function sayHello(name) {
		console.log('Hello, ' + name + '!');
	}

	sayHello("Zach");


	function multiply(firstNumber, secondNumber) {
		var result = firstNumber * secondNumber;
		return result;
	}

	var answer = multiply(4, 6);

	console.log(answer);

})();