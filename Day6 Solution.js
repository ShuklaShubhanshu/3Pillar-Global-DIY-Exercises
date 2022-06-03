											// Exercises: Level 1


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// Solution:
	for (let i = 0; i <= 10; i++) {
	  console.log(i);
	}

	//while-loop
	let i = 0;
	while (i < 10) {
	  i++;
	  console.log(i);
	}

	//do-while
	let i = 0;
	do {
	  i++;
	  console.log(i)
	}  
	while (i < 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// Solution:
	for (let i = 10; i <= 10; i--) {
	    console.log(i);
	}

	//while-loop
	let i = 10;
	while (i > 0) {
	    i--;
	    console.log(i)
	}

	//do-while loop
	let i = 10;
	do {
	    i--;
	    console.log(i)
	} while (i > 0)


// 3. Iterate 0 to n using for loop
// Solution:
	let n=prompt("Enter n:");
	for(let i=0;i<=n;i++)
	{
	  console.log(i);
	}

// 4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// Solution:
	let str = "";
	for (let i = 0; i < 7; i++) 
	{
	    str += "#";
	    console.log(str);
	}

/*5. Use loop to print the following pattern:

	0 x 0 = 0
	1 x 1 = 1
	2 x 2 = 4
	3 x 3 = 9
	4 x 4 = 16
	5 x 5 = 25
	6 x 6 = 36
	7 x 7 = 49
	8 x 8 = 64
	9 x 9 = 81
	10 x 10 = 100
Solution:
*/
	for (let i = 0; i <= 10; i++) 
	{
  	console.log(`${i} x ${i} = ${i * i}`);
	}
/*6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
Solution:
*/
	for (let i = 0; i <= 10; i++) 
	{
	    console.log(`${i} ${i ** 2} ${i ** 3}`)
	}
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// Solution:
	for (i = 0; i <= 100; i++) 
	{
	    if (i % 2 == 0) {
	        console.log(i)
	    }
	}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// Solution:
	for (i = 0; i <= 100; i++) 
	{
	    if (i % 2 != 0) {
	        console.log(i)
	    }
	}
		
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// Solution:
	for (let i = 0; i <= 100; i++) 
	{
	    for (let k = 2; k < i; k++) 
		{
	        if (i % k === 0 && i > 1) 
		{
	            console.log(i)
	        }
	    }
	}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// 	The sum of all numbers from 0 to 100 is 5050.
// Solution:
	let sum = 0;
	for (let i = 0; i <= 100; i++) 
	{
	    sum += i;
	}
	console.log(sum)
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// 	The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Solution:
	let even = 0;
	let odd = 0;
	for (let i = 0; i <= 100; i++) 
	{
	    if (i % 2 == 0) {
	        even += i;
	    }
	    else if (i % 2 > 0) {
	        odd += i
	    }
	}
	console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]
// Solution:
	let sumEvenOdd = [0, 0]
	for (let i = 0; i <= 100; i++) {
	    if (i % 2 == 0) {
	        sumEvenOdd[0] += i;
	    } else if (i % 2 > 0) {
	        sumEvenOdd[1] += i;
	    }
	}
console.log(sumEvenOdd)
// 13. Develop a small script which generate array of 5 random numbers
// Solution:
	let randomArr = [];
	for (let i = 0; i < 5; i++) {
	    randomArr.push(Math.floor(Math.random() * 10));
	}
	console.log(randomArr)

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// Solution:
	let randomArr = [];
	for (let i = 0; i < 5; i++) {
	    randomArr.push(Math.floor(Math.random() * 10));
	}
	console.log(randomArr)

// 15. Develop a small script which generate a six characters random id:

// 	5j2khz
// Solution:
	let randomUniqueArr = [];
	for (let i = 5; randomUniqueArr.length < i;) {
	    let random = Math.floor(Math.random() * 10);
		    if (randomUniqueArr.indexOf(random) === -1) {
	        randomUniqueArr.push(random);
	    }
	}
	console.log(randomUniqueArr)
	
											Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Solution:
	let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	let r = Math.floor(Math.random() * chars.length);
	let randChars = "";
	for (let i = 0; i < r; i++) {
	    let random = Math.floor(Math.random() * chars.length);
	    randChars += chars[random];
	}
	console.log(randChars)

// 2. Write a script which generates a random hexadecimal number.
// 	'#ee33df'
// Solution:
	let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	let randomChars = ""
	for (let i = 0; i < 6; i++) {
	    let random = Math.floor(Math.random() * chars.length);
	    randomChars += chars[random];
	}
	console.log(randomChars)

// 3. Write a script which generates a random rgb color number.
// 	rgb(240,180,80)
// Solution:
	let n1=Math.random()*100;
	let n2 =Math.randoom()*100;
	let n3=Math.random()*100;
// 4. Using the above countries array, create the following new array.
// 	["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Solution:
	let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
	let newCountries = [];
	for (let i = 0; i < countries.length; i++) {
	    newCountries.push([countries[i], countries[i].slice(0, 3), countries[i].length])
	}
	console.log(newCountries)

// 5. Using the above countries array, create an array for countries length'.
// 	[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Solution:
	let newCountries = [];
	for (let i = 0; i < countries.length; i++) {
	    newCountries.push( countries[i].length);
	}
	console.log(newCountries)
/*6. Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
Solution:
*/
	
// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// Solution:
	let countWithoutLand = []
	let countWithLand = []
	for (let i = 0; i < countries.length; i++) {
	    if (countries[i].includes("LAND")) {
	        countWithLand.push(countries[i]);
	    } else {
	        countWithoutLand.push(countries[i])
	    }
	}
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Solution:
	let countWithIa = []
	let countWithoutIa = []
	for (let i = 0; i < countries.length; i++) {
	    if (countries[i].includes("IA")) {
	        countWithIa.push(countries[i]);
	    } else {
	        countWithoutIa.push(countries[i])
	    }
	}

	console.log(`countries with "ia" ${countWithIa}`);
	console.log(`countries without "ia" ${countWithoutIa}`)

// 9. Using the above countries array, find the country containing the biggest number of characters.

// 	Ethiopia
// Solution:
	let countriesCharLength = [];
	for (let i = 0; i < countries.length; i++) {
	    countriesCharLength.push(countries[i].length);
	}
	console.log(countriesCharLength);

	let highest;
	highestNum = Math.max.apply(null, countriesCharLength);
	console.log(countries[countriesCharLength.indexOf(highestNum)]);
// 10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Solution:
	let countriesWithFiveChars = [];
	for (let i = 0; i < countries.length; i++) {
	    if (countries[i].length === 5) {
	        countriesWithFiveChars.push(countries[i])
	    }
	}
	console.log(countriesWithFiveChars)

// 11. Find the longest word in the webTechs array
// Solution:
	let webTechsLength = [];
	for (let i = 0; i < webTechs.length; i++) {
	    webTechsLength.push(webTechs[i].length);
	}
	console.log(webTechsLength);
	let highestChar;
	highestChar = Math.max.apply(null, webTechsLength);
	console.log(highestChar)
	console.log(webTechs[webTechsLength.indexOf(highestChar)]);
// 12. Use the webTechs array to create the following array of arrays:

// 	[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// Solution:
	let newWebTechs = [];
	for (let i = 0; i < webTechs.length; i++) {
	    newWebTechs.push([webTechs[i], webTechs[i].length])
	}
	console.log(newWebTechs)

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// Solution:
	let mernStack = ["MongoDb", "Express", "React", "Node"]
	let mern = "";
	for (let i = 0; i < mernStack.length; i++) {
	    mern += mernStack[i].slice(0, 0);
	}
	console.log(mern)

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// Solution:
	let arr= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
	for(let i=0;i<arr.length;i++)
	{
	  console.log(arr[i]);
	}
	for (let tech of techs) {
	    console.log(tech);
	}
	

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// Solution:
	let fruits = ['banana', 'orange', 'mango', 'lemon'];
	for (let i = fruits.length - 1; i >= 0; i--) {
	    console.log(fruits[i]);
	}

/*16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
Solution:
*/
	const fullStack = [
	  ['HTML', 'CSS', 'JS', 'React'],
	  ['Node', 'Express', 'MongoDB']
	]
	for(let i=0;i<fullStack.length;i++)
	{
	  for(let j=0;j<fullStack[i].length;j++)
	  {
	    console.log(fullStack[i][j]);
	  }
	}



	
	


























