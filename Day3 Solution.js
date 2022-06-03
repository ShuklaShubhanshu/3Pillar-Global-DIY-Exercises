// 											Day 3: EXERCISES
// 										       Exercises: Level 1
// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// Solution:
	let firstName="Shubhanshu";				
	let lastName="Shukla";					
	let country="India";					
	let city="Lucknow";					
	let age=21;						
	let isMarrried=false;					
	let year=2022;						
	console.log(typeof firstName);			//string
	console.log(typeof lastName);			//string
	console.log(typeof country);			//string
	console.log(typeof city);			//string
	console.log(typeof age);			//number
	console.log(typeof isMarrried);			//boolean
	console.log(typeof year);			//number

// 2.Check if type of '10' is equal to 10
// Solution:
	Not equal

// 3.Check if parseInt('9.8') is equal to 10
// Solution:
	No.

// 4.Boolean value is either true or false.
// Solution:
	No

// i).Write three JavaScript statement which provide truthy value.
// Solution:
	// examples of "truthy" values
	let example4a = "false";  // The string "false"
	let example4b = -2;       // A negative number
	let example4c = {};       // An empty object

// ii).Write three JavaScript statement which provide falsy value.
// Solution:
// 	examples of "falsy" values
	let example5a = -0;   // Negative 0
	let example5b = NaN;  // Value for Not A Number
	let example5c = 0n;   // BigInt 0
//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// i) 4 > 3			=>true
// ii) 4 >= 3			=>true
// iii) 4 < 3			=>false
// iv)  4<= 3			=>false
// v) 4 == 4			=>true
// vi) 4 === 4			=>true
// vii) 4 != 4			=>false
// viii) 4 !== 4			=>false
// ix) 4 != '4'			=>false
// x) 4 == '4'			=>true
// xi) 4 === '4'			=>false
// xii) Find the length of python and jargon and make a falsy comparison statement.
// Solution:
	let st1="python";
	let st2="jargon";
	console.log(st1.length != st2.length);
// 6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// i. 4 > 3 && 10 < 12					=>true
// ii. 4 > 3 && 10 > 12					=>false
// iii. 4 > 3 || 10 < 12					=>true
// iv. 4 > 3 || 10 > 12					=>true
// v. !(4 > 3)						=>false
// vi. !(4 < 3)						=>true
// vii. !(false)						=>true
// viii. !(4 > 3 && 10 < 12)				=>false
// ix. !(4 > 3 && 10 > 12)					=>true
// x. !(4 === '4')						=>true
// xi. There is no 'on' in both dragon and python		=>false

// 7.Use the Date object to do the following activities

// i) What is the year today?
// Solution:
	const obj=new Date();
	console.log(obj.getFullYear());

// ii) What is the month today as a number?
// Solution:
	const obj=new Date();
	console.log(obj.getMonth());
// iii) What is the date today?
// Solution:
	const obj=new Date();
	console.log(obj.getDate());
	
// iv) What is the day today as a number?
// Solution:
	const obj=new Date();
	console.log(obj.getDay());
	
// v) What is the hours now?
// Solution:
	const obj=new Date();
	console.log(obj.getHours());	

// vi) What is the minutes now?
// Solution:	
	const obj=new Date();
	console.log(obj.getMinutes());
	
// vii) Find out the numbers of seconds elapsed from January 1, 1970 to now.
// Solution:
	const obj=new Date();
	console.log(obj.getTime());
								
// 											EXERCISE LEVEL 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// 	Enter base: 20
// 	Enter height: 10
// 	The area of the triangle is 100
// Solution:
	let base=prompt("Enter base of the triangle");
	let height=prompt("Enter the height of the triangle:");
	let area=0.5*base*height;
	console.log("Area of the traingle is : "+area);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// 	Enter side a: 5
// 	Enter side b: 4
// 	Enter side c: 3
// 	The perimeter of the triangle is 12
// Solution:
	let a=prompt("Enter side a");
	let b=prompt("Enter side b");
	let c=prompt("Enter side c");
	let perimeter=parseInt(a)+parseInt(b)+parseInt(c);
	console.log("Perimeter of the triangle is: "+perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// Solution:
	let width=prompt("Enter width:");
	let length=prompt("Enter length");
	console.log("Area of the rectangle = "+(width*length));
	console.log("Perimeter of the rectangle = "+(2*(parseInt(length)+parseInt(width))));

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// Solution:
	let radius=prompt("Enter the radius:");
	console.log("Area of the circle = "+(Math.PI*radius*radius));

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Solution:
	console.log("Slope: "+2);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// Solution:
	let x1=2;
	let x2=6;
	let y1=2;
	let y2=10;
	let slope=(y2-y1)/(x2-x1);
	console.log("Slope : "+slope);

// 7. Compare the slope of above two questions.
// Solution:
	let slope1=2;
	let slope2=2;
	console.log(slope1==slope2);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// Solution:
	let x=-3;
	let y=x*x+6*x+9;
	console.log("Value of y at x=-3 : "+y);

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// 	Enter hours: 40
// 	Enter rate per hour: 28
// 	Your weekly earning is 1120

// Solution:
	let hours=prompt("Enter the no. of hours");
	let rate=prompt("Enter the rate per hour");
	console.log("Your weekly earning is  : "+(hours * rate));
	
// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// Solution:
	let name1=prompt("Enter a name:");
	let len=name1.length;
	if(len>7)
	{
	  console.log("Your name is long");
	}
	else{
	  console.log("Your name is short");
	}

// 11.Compare your first name length and your family name length and you should get this output.
// Solution:
	let firstName=prompt("Enter your first name: ");
	let familyName=prompt("Enter your last name:");
	let len1=firstName.length;
	let len2=familyName.length;
	if(len1>len2)
	{
	  console.log("your first name, "+firstName+" is longer than your family name, "+familyName);

	}
	else
	{
	  console.log("your family name, "+familyName+" is longer than your first name, "+firstName);
	}

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// 	let myAge = 250
// 	let yourAge = 25
// 	I am 225 years older than you.
// Solution:
	let myage=225;
	let yourage=prompt("Enter your age:");
	console.log("I am "+(myage-parseInt(yourage))+" years older than you");

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Solution:
	let obj=new Date();
	let currYear=obj.getFullYear();
	let birthYear=prompt("Enter your birth year");
	let age=parseInt(currYear)-parseInt(birthYear);
	if(age>=18)
	{
	  console.log("Your age is "+age+". You can drive.")
	}
	else 
	{
	  console.log("Your age is "+age+". You cannot drive");
	}
// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// 	Enter number of years you live: 100
// 	You lived 3153600000 seconds.
// Solution:
	let years=prompt("Enter the years you will live");
	console.log("you lived "+(years*365*24*60*60)+"seconds.");
// 15. Create a human readable time format using the Date time object

// i.)YYYY-MM-DD HH:mm
	
// Solution:
	let obj=new Date();
	let year=obj.getFullYear();
	let month=obj.getMonth();
	let date=obj.getDate();
	let hours=obj.getHours();
	let min=obj.getMinutes();
	console.log(year+"-"+month+"-"+date+ " "+hours+":"+min);
// ii.)DD-MM-YYYY HH:mm
// Solution:
	let obj=new Date();
	let year=obj.getFullYear();
	let month=obj.getMonth();
	let date=obj.getDate();
	let hours=obj.getHours();
	let min=obj.getMinutes();
	console.log(+date+"-"+month+"-"+year+"-" + " "+hours+":"+min);
										
// 											EXERCISE LEVEL 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// 	YYY-MM-DD HH:mm eg. 20120-01-02 07:05
// Solution:
	let obj=new Date();
	let year=obj.getFullYear();
	let month=obj.getMonth();
	month+=1;
	let date=obj.getDate();
	let hours=obj.getHours();
	let min=obj.getMinutes();
	if((month).toString().length==1);
	{
	  month="0"+month;
	}
	if(date.toString().length==1)
	{
	  date="0"+date;
	}
	if(hours.toString().length==1)
	{
	  hours="0"+hours;
	}
	if(min.toString().length==1)
	{
	  min="0"+min;
	}
	console.log(year+"-"+month+"-"+date+ " "+hours+":"+min);
	







