											// Exercise: Level 1

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
// 1. Declare an empty array
// Solution:
	const arr=-new Array();

// 2. Declare an array with more than 5 number of elements
// Solution:
	let arr=-new Array();
	arr=[1,2,3,4,5,6,7,8,9,10];
	console.log(arr);
// 3. Find the length of your array
// Solution:
	console.log(arr.length);

// 4. Get the first item, the middle item and the last item of the array
// Solution:
	let arr=-new Array();
	arr=[1,2,3,4,5,6,7,8,9,10];
	let len=arr.length;
	console.log("First Item: "+arr[0]);
	console.log("Middle Item: "+arr[len/2]);
	console.log("Last Item : "+arr[len-1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Solution:
	arr=['Shubhanshu',21,true,'Shukla','3pillarGlobal',obj={Name:'Shubhanshu'},786];
	console.log(arr);
	console.log("Length of Array: "+(arr.length));
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Solution:
	itCompanies=[ "Facebook", "Google", 'Microsoft', "Apple", "IBM", "Oracle" ,"Amazon"];
// 7. Print the array using console.log()
// Solution:
	console.log(itCompanies);
// 8. Print the number of companies in the array
// Solution:
	console.log("Number of companies are:" +(itCompanies.length));
// 9. Print the first company, middle and last company
// Solution:
	let len=itCompanies.length
	console.log("First Company: "+itCompanies[0]);
	console.log("Middle Item: "+itCompanies[len/2]);
	console.log("Last Item : "+itCompanies[len-1]);
// 10. Print out each company
// Solution:
	for(let i=0;i<itCompanies.length;i++)
	{
	  console.log(itCompanies[i]);
	}
// 11. Change each company name to uppercase one by one and print them out
// Solution:
 	for(let i=0;i<itCompanies.length;i++)
	{
 	  console.log(itCompanies[i].toUpperCase());
	}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Solution:
	console.log("Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Solution:
	let company=prompt("Enter a company name;");
	let index=itCompanies.indexOf(company);
	if(index==-1)
	{
	  console.log("Company not found");
	}
	else
	{
	  console.log(company);
	}

// 14. Filter out companies which have more than one 'o' without the filter method
// Solution:
	Console.log("Google,facebook");

// 15. Sort the array using sort() method
// Solution:
	itCompanies.sort();
	console.log(itCompanies);

// 16. Reverse the array using reverse() method
// Solution:
	itCompanies.reverse();
	console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
// Solution:
	for(let i =0;i<3;i++)
	{
	  itCompanies.shift();
	}
// 18. Slice out the last 3 companies from the array
// Solution:
	for(let i =0;i<3;i++)
	{
	  itCompanies.pop();
	}
// 19. Slice out the middle IT company or companies from the array
// Solution:
	itCompanies.shift();
// 20. Remove the first IT company from the array
// Solution:
	itCompanies.shift();

// 22. Remove the last IT company from the array.
// Solution:
	itCompanies.pop();

// 23. Remove all IT companies
// Solution:
	itCompanies=[ "Facebook", "Google", 'Microsoft', "Apple", "IBM", "Oracle" ,"Amazon"];
	for(let i=0;i<itCompanies.length;i++)
	{
         	itCompanies.shift();
	}
	for(let i=0;i<itCompanies.length;i++)
	{
	  itCompanies.pop();
	}
	itCompanies.pop();
	console.log(itCompanies);

// 												Exercise: Level 2

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

// 	let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// Solution:
	let text = 'I love teaching and empowering people I teach HTML CSS JS React Python';
	let arr=text.split(" ");
	console.log(arr);
	console.log(arr.length);
// 3. In the following shopping cart add, remove, edit items

// 	const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// 	i. add 'Meat' in the beginning of your shopping cart if it has not been already added
// 	Solution:
		const arr = ['Milk', 'Coffee', 'Tea', 'Honey'];
		if(arr.indexOf('Meat')==-1)
		{
		  arr.unshift('Meat');
		  
		}
		console.log(arr);
	// ii. add Sugar at the end of you shopping cart if it has not been already added
	// Solution:
		const arr = ['Milk', 'Coffee', 'Tea', 'Honey'];
		if(arr.indexOf('Sugar')==-1)
		{
		  arr.push("Sugar");
  
		}
		console.log(arr);

	// iii. remove 'Honey' if you are allergic to honey
	// Solution:
		arr.splice(arr.indexOf("Honey"),1);
		
	// iv. modify Tea to 'Green Tea'
	// Solution:
		let index=arr.indexOf("Tea");
	arr[index]="Green Tea";
	console.log(arr);


// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// Solution:
	if(countries.indexOf("Ethiopia")==-1)
	{
	  countries.push("Ethiopia");
	}
	else
	{
	  console.log("Ethiopia");
	}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// Solution:
	if(webTechs.indexOf("Sass")==-1)
	{
	  webTechs.push("Sass");
	}
	console.log(webTechs);
// 6. Concatenate the following two variables and store it in a fullStack variable.

// 	const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// 	const backEnd = ['Node','Express', 'MongoDB']
// Solution:
	const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
	const backEnd = ['Node','Express', 'MongoDB'];
 	let fullStack=frontEnd.concat(backEnd);
  	console.log(fullStack);
	
					

// 											Exercise: Level 3
// 1. The following is an array of 10 students ages:

	const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// i. Sort the array and find the min and max age
// Solution:
	const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
	ages.sort();
	console.log("Min: "+ages[0]);
	console.log("Max: "+ages[ages.length-1]);

// ii. Find the median age(one middle item or two middle items divided by two)
// Solution:
	let len=ages.length;
	if(len%2==0)
	{
	  let elem1=ages[len/2];
	  let elem2=ages[(len/2)+1];
	  let median=(elem1+elem2)/2;
	  console.log("Median: "+median);
	}
	else
	{
	  console.log("Median: "+(ages[len/2]));
	}

// iii. Find the average age(all items divided by number of items)
// Solution:
	let sum=0;
	for(let i=0;i<ages.length;i++)
	{
	  sum=sum+ages[i];
	}
	let avg=sum/ages.length;
	console.log("Average: "+avg);

// iv. Find the range of the ages(max minus min)
// Solution:
	console.log(ages[ages.length-1]-ages[0]);
// v. Compare the value of (min - average) and (max - average), use abs() method 
// Solution:
	let sum=0;
	for(let i=0;i<ages.length;i++)
	{
	  sum=sum+ages[i];
	}
	let avg=sum/ages.length;
	let mindiff=Math.abs(avg-ages[0]);
	let maxdiff=Math.abs(ages[ages.length-1]-avg);
	console.log(mindiff==maxdiff);

// 2. Find the middle country(ies) in the countries array
	
// Solution:
	let middle_Country=countries[Math.floor(countries.length/2)];
	console.log(middle_Country);





