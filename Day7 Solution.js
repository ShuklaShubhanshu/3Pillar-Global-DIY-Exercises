// Exercises
// Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.
//Solution:


  function fullname(){
    console.log("Shubhanshu Shukla");
  }

// 2.  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

//Solution:
const fullname=(firstname,lastname)=>{
  let fullname=firstname+lastname;
  return fullname;
}

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
// Solution:
  let sum=(a,b)=>{
    s=a+b;
    return s;
  }
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// Solution:
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
//5.  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// Solution:
perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length * width);
  return perimeter;
}


//6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
//Solutin:

volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume;
}
//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

AreaOfCircle = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
}
AreaOfCircle(7);
// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

circumOfCircle = (r) => {
  const PI = 3.14;
  return PI * r
}
circumOfCircle(6);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

density = (mass, volume) => {
  return mass * volume;
}
density(4, 8);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
// Write a function which calculates a speed of a moving object, speed.

speed = (TDC, TT) => {
  return TDC / TT
}
speed(4, 6);
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

weight = (mass, gravity) => {
  return mass * gravity;
}
weight(4, 5);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

celsiusToFahrenheit = (celsius) => {
  let fahrenheit = (celsius * 9 / 5) + 32
  return fahrenheit;
}
celsiusToFahrenheit(5);

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//  BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal,
//  overweight or obese based the information given below.
/*
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

BMI = (weight, height) => {
  let bmi = weight / (height / height);
  if (bmi < 18.5) {
      return `underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
      return `overweight`;
  } else if (bmi > 25 && bmi < 29.9) {
      return `overweight`;
  } else {
      return `obese`;
  }
}
BMI(4, 7);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

checkSeasons = (month) => {
  switch (month) {
      case "september":
      case "october":
      case "November":
          console.log("the season is Autumn");
          break;
      case "december":
      case "january":
      case "febuary":
          console.log("the season is Winter");
          break;
      case "march":
      case "april":
      case "may":
          console.log("the season is Spring");
          break;
      case "june":
      case "july":
      case "august":
          console.log("the season is Summer");
          break;
      default:
          console.log("invalid Month")
  }
}
checkSeasons("january");

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method

findMax = (x, y, z) => {
  return Math.max(x, y, z);
}
findMax(5, 7, 4)
 //                                                     ExerCises Level 2
 // 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

printArr = (arr) => {
  arr.forEach(function (ar) {
      console.log(ar);
  })
}
printArr([3, 4, 5])

// 4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime = () => {
  let date = new Date();
  let datee = date.getDate();
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

//5. Declare a function name swapValues. This function swaps value of x to y.


swapValues = (a, b) => {
  let x = b;
  let y = a;
  console.log(x, y)
}
swapValues(2, 4)

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

reverseArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      newArr.unshift(arr[i]);
  }
  console.log(newArr);
}
reverseArr([3, 4, 5])

//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

capitalizeArr = (arr) => {
  let newArr = [];
  arr.forEach(function (ar) {
      newArr.push(ar.toUpperCase());
  })
  return newArr;
}
capitalizeArr(["john", "mike"]);

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

removeitem = (index) => {
  let names = ["john", "mike"]
  names.splice(index);
  return names
}
removeitem(1);

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

sumOfNumbers = (...args) => {
  let sum = 0;
  args.forEach(function (arg) {
      sum += arg
  })
  return sum;
}
sumOfNumbers(1, 2, 3, 4)
//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.


sumOfEven = (...args) => {
  let evenSum = 0;
  args.forEach(function (arg) {
      if (arg % 2 === 0) {
          evenSum += arg
      }
  })
  return evenSum;
}
sumOfEven(1, 2, 3, 4)

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

sumOfOdd = (...args) => {
  let oddSum = 0;
  args.forEach(function (arg) {
      if (arg % 2 === 0) {
          oddSum += arg
      }
  })
  return oddSum;
}
sumOfOdd(1, 2, 3, 4)

// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evenAndOdds = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          even++
      } else if (i % 2 !== 0) {
          odd++
      }
  }
  return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

//14. Write a function which takes any number of arguments and return the sum of the arguments

sum = (...args) => {
  let sum = 0;
  args.forEach(function (num) {
      sum += num;
  })
}
sum(1, 2, 3)
// 15. Writ a function which generates a randomUserIp.

generateRandomIp = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let four = Math.floor(Math.random() * 255);
  return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

//16.Write a function which generates a randomMacAddress 

generateRandomMacAdd = () => {}

//.17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. 
// The function return the hexadecimal number.

generateRandomHex = () => {
  let chars = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i <= 6; i++) {
      hex += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${hex}`
}
generateRandomHex();

//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

generateUserId = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let userId = "";
  for (let i = 0; i <= 7; i++) {
      userId += chars[Math.floor(Math.random() * chars.length)];
  }
  return userId;
}
generateUserId();


//                                          Exercises: Level 3     

// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let noId = Number(prompt("how many id do you want to generate"));
  let noChars = Number(prompt("in how many chars"));
  let ids = [];
  for (i = 0; i < noId; i++) {
      ids[i] = "";
      for (k = 0; k < noChars; k++) {
          ids[i] += chars[Math.floor(Math.random() * chars.length)];
      }
  }
  console.log(ids)
  ids.forEach(function (id) {
      console.log(id);
  })
}
userIdGeneratedByUser();

//2. Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGnerator = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

arrayOfHexaColors = () => {
  let chars = "0123456789ABCDEF";
  let hex = [];
  for (let k = 0; k < 3; k++) {
      hex[k] = "#";
      for (let i = 0; i < 6; i++) {
          hex[k] += chars[Math.floor(Math.random() * chars.length)];
      }
  }

  return hex;
}
arrayOfHexaColors();

//7. Write a function generateColors which can generate any number of hexa or rgb colors.

generateColors = (type, arrLength) => {
  let chars = "0123456789ABCDEF";
  let colors = [];
  if (type === "rgb") {
      for (i = 0; i < arrLength; i++) {
          colors[i] = "rgb";
          colors[i] += `(${ Math.floor(Math.random() * 255) },`;
          colors[i] += `${ Math.floor(Math.random() * 255) },`
          colors[i] += `${ Math.floor(Math.random() * 255) },)`
      }
  } else if (type === "hex") {
      for (let i = 0; i < arrLength; i++) {
          colors[i] = "#";
          for (k = 0; k < 6; k++) {
              colors[i] += chars[Math.floor(Math.random() * chars.length)];
          }
      }
  }
  return colors;
}
generateColors("rgb", 3);

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

shuffleArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      let rand = Math.floor(Math.random() * arr.length - 1);
      if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
          newArr.push(arr[rand]);
      }
  }
  return newArr
}
shuffleArray([1, 2, 3]);

// 9. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

factorial = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
      // if (i === 0) {
      //     break;
      // }

      factorial *= i;
  }
  return factorial;
}
factorial(5);

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

isEmpty = (val) => {
  if (val === undefined) {
      return `it's empty`
  } else {
      return `not empty`
  }
}
isEmpty()

//11. Call your function sum, it takes any number of arguments and it returns the sum.



sum = (...args) => {
  let sum = 0;
  args.forEach(function (arg) {
      sum += arg
  })
  return sum;
}
sum(1, 2, 3, 4);
// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
// Check if all the array items are number types. If not give return reasonable feedback.

sumOfArrayItems = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar
      } else {
          sum = `it's a string`
      }
  })
  return sum;
}
sumOfArrayItems([1, 2, 3])
//13. Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.

average = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar;
          sum = arr.length / sum;
      } else {
          sum = `it's a string`;
      }
  })
  return sum;
}
average([1, 2, 3]);

//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
// If the array length is less than five it return 'item not found'.

modifyArray = (arr) => {
  if (arr.length >= 6) {
      for (let i = 0; i < arr.length; i++) {
          if (i = 5) {
              arr.splice(5)
          }
      }
      return arr
  } else {
      return `item not found`
  }
}
modifyArray([1, 2, 3]);
//15. Write a function called isPrime, which checks if a number is prime number.

isPrime = (num) => {
  for (let i = 2; i < num; i++) {
      if (num % i === 0 && num > 1) {
          return `${num} is a prime number`;
      } else {
          return `not prime`
      }
  }
}
isPrime(5);
// 16.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

reverseCountries = () => {
  let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
  return countries.reverse();
}
reverseCountries();