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
		for (var i = 0; i < str.length; i++){
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

//-----------------------------------------------------

// 3. Bonus: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.

	// create function letterCount that takes a string
	// change string to an array of strings using the space as the delimiter
	// loop over the array to analyze each string
	// look for dupelicate values in each string and create an object with the string as the key and the # of dupes as the value, if no dupes, don't push anything
	// loop (using for in loop) over the new obj to look for the greatest value and then return the key of the highest value
	
	

	var myStr = "Today, is the greatest day ever!"
	var getFrequency = function(string) {
	    var freq = {};
	    for (var i=0; i<string.length;i++) {
	        var character = string.charAt(i);
	        if (freq[character]) {
	           freq[character]++;
	        } else {
	           freq[character] = 1;
	        }
	    }
	    console.log(freq)
	    return freq;
	};
// console.log(getFrequency(myStr));
	// look for dupes in each object in the array and assign the value to the string
	var findVal = function(obj){
		for (var key in obj){
			if (obj[key] === 2){
				var num = 1;
			}
		}
	};

	var myStr = "Today, is the greatest day ever!"
	var letterCount = function(str){
		//split string into an array of strings
		var strArray = str.split(' ');
		var dupeObjs = []
		//loop over the array of strings
		for (var i = 0; i < strArray.length; i++){
			var index = strArray[i];

			dupeObjs.push( getFrequency(index) );	
		}
		for ( var i=0; i<dupeObjs.length; i++){
			var myObj = dupeObjs[i];
			if (findVal(myObj) > 0)
				var result = str;



			console.log(dupeObjs);

		}
	console.log(result)






	};
	console.log( letterCount(myStr) );











