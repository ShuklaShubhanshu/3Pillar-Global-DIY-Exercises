												// Day 2: Exercises
												// Exercise: Level 1
// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Solution:
	let challenge="3o Days Of JavaScript";

// 2.Print the string on the browser console using console.log()
// Solution:
	console.log(challenge);

// 3.Print the length of the string on the browser console using console.log()
// Solution:
	console.log(challenge.length);

// 4.Change all the string characters to capital letters using toUpperCase() method
// Solutiuon:
	console.log(challenge.toUpperCase());

// 5.Change all the string characters to lowercase letters using toLowerCase() method
// Solution:
	console.log(challenge.toLowerCase());

// 6.Cut (slice) out the first word of the string using substr() or substring() method
// Solution:
	console.log(challenge.substring(0,2));

// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Solution:
	console.log(challenge.substring(3));

// 8.Check if the string contains a word Script using includes() method
// Solution:
	console.log(challenge.includes("Script"));

// 9.Split the string into an array using split() method
// Solution:	
	console.log(challenge.split());
	
// 10.Split the string 30 Days Of JavaScript at the space using split() method
// Solution:
	console.log(challenge.split(" "));

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Solution:
	let str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
	console.log(str.split(","));
	
// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// Solution:
	console.log(challenge.replace("JavaScript","Python"));

// 13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// Solution:
	console.log(challenge.charAt(15));

// 14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Solution:
	console.log(challenge.charCodeAt(11));

// 15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Solution:
	console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Solution:
	console.log(challenge.lastIndexOf('a'));

// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Solution:
	console.log(string.indexOf('because'));

// 18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Solution:
	console.log(string.lastIndexOf('because'));

// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Solution:
	console.log(string.search('because'));

// 20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Solution:
	console.log(string.trim());

// 21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Solution:
	console.log(challenge.startsWith('30'));

// 22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Solution:
	console.log(challenge.endsWith('Script'));

// 23.Use match() method to find all the a’s in 30 Days Of JavaScript
// Solution:
	console.log(challenge.match('a'));

// 24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Solution:
	let str1="30 Days Of ";
	let str2="JavaScript";
	console.log(str1.concat(str2));

// 25.Use repeat() method to print 30 Days Of JavaScript 2 times
// Solution:
	console.log(challenge.repeat(2));
								
																												// EXERCISE LEVEL 2

// 1.Using console.log() print out the following statement:
// 	The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Solution:
	console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


// 2.Using console.log() print out the following quote by Mother Teresa:
// 	"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// Solution:
	console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// Solution:
	Not equal.
	console.log(typeof 10==typeof 10);

// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// Solution:
	Not equal.
	console.log(Math.ceil(parseFloat('9.8'))==10);

// 5.Check if 'on' is found in both python and jargon
// Solution:
	console.log(string1.includes("on")&& string2.includes("on"));

// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.
// Solution:
	let givenString="I hope this course is not full of jargon.";
	console.log(givenString.includes("jargon"));

// 7.Generate a random number between 0 and 100 inclusively.
// Solution:
	console.log(Math.random()*101);

// 8.Generate a random number between 50 and 100 inclusively.
// Solution:
	let num=Math.random()
	while(num<0.5)
	{
	  num=Math.random();
	}
	console.log(num*101);

// 9.Generate a random number between 0 and 255 inclusively.
// Solution:
	let num=Math.random();
	console.log(num*256);	

// 10.Access the 'JavaScript' string characters using a random number.
// Solution:
	let index=Math.floor(Math.random()*10);
	let string='JavaScript';
	console.log(string.charAt(index));
// 11.Use console.log() and escape characters to print the following pattern.

//   1 1 1 1 1
//   2 1 2 4 8
//   3 1 3 9 27
//   4 1 4 16 64
//   5 1 5 25 125

// Solution:
	console.log("1\t1\t1\t1\t1");
	console.log("2\t1\t2\t4\t8");
	console.log("3\t1\t3\t9\t27");
	console.log("4\t1\t4\t16\t64");
	console.log("5\t1\t5\t25\t125");
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Solution:
	console.log(str.substr(str.indexOf("because"),str.lastIndexOf('because')));
					
// 											EXERCISE LEVEL 3
// 1.'Love is the best thing in this world. Some found their love and some are still looking for their love .' Count the number of word love in this sentence.
// Solution:
	let str='Love is the best thing in this world. Some found their love and some are still looking for their love .';
	let arr=str.split(" ");
	let len=arr.length;
	let count=0;
	for(let i=0;i<len;i++)
	{
	  if(arr[i].toLowerCase()=='love')
	  {
	    count++;
	  }
	}
	console.log(count);





	










