function makePasscode() {return Math.random().toString(36).substr(2, 10)} 


function initialPrompt() {
	passcode = makePasscode()
	promptText = "Are you sure you actually want to be on twitter right now? If so, please type this passcode into the input box: \n\n" + passcode
	userInput = prompt(promptText, ""); 

	if (userInput == null) {
		window.location.href = "https://poets.org/poem-a-day"
	} else if (userInput == passcode) {
		return null;
	} else {
		errorPrompt();
	}
}


function errorPrompt() {
	passcode = makePasscode()
	promptText = "Looks like you entered the wrong passcode. Try again with this one: \n\n" + passcode
	userInput = prompt(promptText, ""); 

	if (userInput == null) {
		window.location.href = "https://poets.org/poem-a-day"
	} else if (userInput == passcode) {
		return null;
	} else {
		errorPrompt();
	}
}

initialPrompt();