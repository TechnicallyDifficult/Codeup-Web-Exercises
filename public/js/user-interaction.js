"use strict";

var name = "";

while (name == "" || name == "null") {
	name = prompt("What's your name?");
	if (name == "" || name == "null") {
		alert("Please enter your name.");
	}
}

alert("Welcome, " + name + ".");

alert((confirm("Do you like pizza?")) ? "That's good. You are a normal human being." : "...what planet are you from?");