// Problem Set #2

// 1. Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

	// create a function that takes a string
	// loop over the string in descending order and push the character at each index into a new string and then return the new string
	
	var firstReverse = function(str){
		newStr = '';
		for (var i = str.length - 1; i >= 0; i--) {
			newStr += str[i]
		};
		return newStr
	};
	console.log( firstReverse('refactorU'));

//-----------------------------------------------------

// 2. Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

	// create a function that takes a string
	// loop over each character in the string
	// at each character index check case and change case to opposite and then push the modified character to a new string
	// return new str and console.log the function call

	var swapCase = function(str){
		newString = '';
		for (i = 0; i < str.length; i++){
			if ( str[i] === str[i].toUpperCase() ){
				newString += str[i].toLowerCase();
			}
			else {
				newString += str[i].toUpperCase();
			}
		}
		return newString
	};
	console.log( swapCase('Hello World') );














