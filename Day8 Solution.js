// 					EXERCISES LEVEL: 1

// 1. Create an empty object called dog
// Solution:
	let dog={};
// 2. Print the the dog object on the console
// Solution:
	console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Solution:
	let dog={};
	dog.Name="Bruno";
	dog.legs="Four legs";
	dog.color="Black";
	dog.age="2 years";
	dog.bark=()=>{
	  return "woof woof";
	}
	console.log(dog);
// 4. Get name, legs, color, age and bark value from the dog object
// Solution:
	let dog={};
	dog.Name="Bruno";
	dog.legs="Four legs";
	dog.color="Black";
	dog.age="2 years";
	dog.bark=()=>{
	  return "woof woof";
	}

	console.log(dog.Name);
	console.log(dog.legs);
	console.log(dog.color);
	console.log(dog.age);

// 5. Set new properties the dog object: breed, getDogInfo.
// Solution:
	dog.breed="German Shepherd";
	dog.getDogInfo="Not Known";

										// EXERCISE Level: 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


// 1. Find the person who has many skills in the users object.
// Solution:
	let max=0;
	let winner;
	for(let property in users)
	{
	  if(users[property].skills.length>max)
	  {
	    max=users[property].skills.length;
	    winner=property;
	  }
	}
	console.log(winner);
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
// Solution:
	let count=0;
	let countpoints=0;
	for(let property in users)
	{
	  if(users[property].isLoggedIn)
	  {
	    count++;
	  }
	  if(users[property].points>=50)
	  {
	    countpoints++;
	  }
	}
	console.log(count);
	console.log(countpoints);
// 3. Find people who are MERN stack developer from the users object
// Solution:
	let arr=[];
	for(let property in users)
	{
	  if(users[property].skills.indexOf("Mern")!=-1)
	  {
	    arr.push(property);
	  }
	}
	console.log(arr);
// 4. Set your name in the users object without modifying the original users object
// Solution: 
	users.Shubhanshu={
  	email: 'asab@asab.com',
  	skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
  	age: 25,
  	isLoggedIn: false,
  	points: 50
 	}
// 5. Get all keys or properties of users object

// Solution:
	let keys=Object.keys(users);
	console.log(keys);
	let properties=Object.values(users);
	console.log(properties);
// 6. Use the countries object to print a country name, capital, populations and languages.
// Solution:
	let country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
	}

// 												Exercise Level: 3


// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties 
//    and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//    Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// Solution:
	let personalAccount={
	  firstName: "Shubhanshu",
	  lastName:"Shukla",
	  income:"50000 per month",
	  expenses:" ",
	  totalIncome : ()=>{
	    return this.income;
	  },
	 totalExpense:()=>{
	   return this.expenses;
	 },
	 accountInfo:()=>{
	
	 },
	 addIncome:()=>{

	 }
	 addExpense:()=>{
	
	 }
	}
// 2. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// Solution:
	let like=true;
	let likeProduct=()=>{
	  if(like==true)
	  {
	    like=false;
	  }
	  else{
	    like =true;
	  }
	}























