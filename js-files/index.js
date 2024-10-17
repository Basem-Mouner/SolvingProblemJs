//-------------------------------------------------------------------------------------------------
"use strict";
alert("Wellcom \n You Can See Results On Console And Web Dom Page");
console.log(" You Can See Results by interacting on web page");

//----------------------------------Assignment for js QN-(1).----------------------------------------------------------------
//-------1-Create a function that calculates the sum of two given numbers
{
  const userInput1 = document.getElementById("INPUT1");
  const userInput2 = document.getElementById("INPUT2");
  const btn1 = document.getElementById("ACTION1");
  const result = document.getElementById("RESULT1");

  function sum(num1, num2) {
    return num1 + num2;
  }

  btn1.addEventListener("click", () => {
    console.log(sum(Number(userInput1.value), Number(userInput2.value)));
    result.innerHTML = sum(Number(userInput1.value), Number(userInput2.value));
  });
}

//--------------------------------------------------------------------------------------------------
// //-2-Write a function that checks if a number is prime
{
  const userInput1 = document.getElementById("INPUT1-Q2");
  const btn1 = document.getElementById("ACTION2");
  const result = document.getElementById("RESULT2");
  //flag to count how many time number able to devide
  let countFlag = 0;

  function checkPrime(num) {
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        countFlag++;
        if (countFlag > 2) {
          break;
        }
      }
    }

    if (countFlag == 2) {
      countFlag = 0;
      return "Aprime";
    } else {
      countFlag = 0;
      return "Not Aprime";
    }
  }

  btn1.addEventListener("click", () => {
    console.log(checkPrime(Number(userInput1.value)));
    result.innerHTML = checkPrime(Number(userInput1.value));
  });
}

// //--------------------------------------------------------------------------------------------------
// //---3- Write a function to reverse a given string (using built in method).
{
  let userStringInput = document.getElementById("INPUT1-Q3");
  const btn1 = document.getElementById("ACTION3");
  const result = document.getElementById("RESULT3");

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  btn1.addEventListener("click", () => {
    console.log(userStringInput.value);
    result.innerHTML = reverseString(userStringInput.value);
  });
}

// //--------------------------------------------------------------------------------------------------
// //--4-Write a function to find the largest number in an array.
{
  const userInput1 = document.getElementById("INPUT1-Q4"); //filling your array
  let userInput2 = document.getElementById("INPUT2-Q4"); // display your array
  const btn2 = document.getElementById("ACTION4_Fill"); //btn to fill
  const btn1 = document.getElementById("ACTION4");
  const result = document.getElementById("RESULT4");

  let maxNum = 0;
  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`; //display
  }

  function largestInArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
    return maxNum;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(largestInArray(arrayFill));

    result.innerHTML = largestInArray(arrayFill);
  });
}

// //--------------------------------------------------------------------------------------------------
// //--5-Write a function that filters an array and returns only the even numbers.
{
  const userInput1 = document.getElementById("INPUT1-Q5");
  let userInput2 = document.getElementById("INPUT2-Q5");
  const btn2 = document.getElementById("ACTION5_Fill");
  const btn1 = document.getElementById("ACTION5");
  const result = document.getElementById("RESULT5");

  let filterArray = [];
  //fill array-------------------
  let arrayFill = [];
  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }
  //-------------------
  function filterEven(array) {
    filterArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        //we can do by splice also
        filterArray.push(array[i]);
      }
    }
    return filterArray;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(filterEven(arrayFill));

    result.innerHTML = filterEven(arrayFill);
  });
}

// //--------------------------------------------------------------------------------------------------
// //--6-Implement a function to reverse a string without using the built-in reverse() method.
{
  let userStringInput = document.getElementById("INPUT1-Q6");
  const btn1 = document.getElementById("ACTION6");
  const result = document.getElementById("RESULT6");
  function reverseString(str) {
    let reversed = "";

    // Iterate through the string backwords
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  btn1.addEventListener("click", () => {
    console.log(reverseString(userStringInput.value));
    result.innerHTML = reverseString(userStringInput.value);
  });
}
// //--------------------------------------------------------------------------------------------------
// //-7-Write a function to calculate the average value of all numbers in an array.
{
  const userInput1 = document.getElementById("INPUT1-Q7");
  let userInput2 = document.getElementById("INPUT2-Q7");
  const btn2 = document.getElementById("ACTION7_Fill");
  const btn1 = document.getElementById("ACTION7");
  const result = document.getElementById("RESULT7");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }
  function avarageAray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(avarageAray(arrayFill));
    result.innerHTML = avarageAray(arrayFill);
  });
}

// //--------------------------------------------------------------------------------------------------
// //--8-Write a function that determines whether a given day number (1-7) represents a weekday or weekend.
{
  const userInput1 = document.getElementById("INPUT1-Q8");
  const btn1 = document.getElementById("ACTION8");
  const result = document.getElementById("RESULT8");

  function representDay(num) {
    let representDay = "";
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        representDay = "Weekday";
        break;
      case 6:
      case 7:
        representDay = "Weekend";
        break;
      default:
        representDay = "enter Day 1-->7";
        break;
    }
    return representDay;
  }

  btn1.addEventListener("click", () => {
    console.log(representDay(Number(userInput1.value)));
    result.innerHTML = representDay(Number(userInput1.value));
  });
}
// //--------------------------------------------------------------------------------------------------
// //--9-Write a function that filters an array of numbers and returns only those that are divisible by 2 or 3.
{
  const userInput1 = document.getElementById("INPUT1-Q9");
  let userInput2 = document.getElementById("INPUT2-Q9");
  const btn2 = document.getElementById("ACTION9_Fill");
  const btn1 = document.getElementById("ACTION9");
  const result = document.getElementById("RESULT9");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }

  function filterDivisibleBy2and3(array) {
    let filterArray = [];
    //one solved
    //    return array.filter(num => num % 2 === 0 || num % 3 ===0)
    //sec solved
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0 || array[i] % 3 === 0) {
        filterArray.push(array[i]);
      }
    }
    return filterArray;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(filterDivisibleBy2and3(arrayFill));
    result.innerHTML = filterDivisibleBy2and3(arrayFill);
  });
}

// //--------------------------------------------------------------------------------------------------
// //-10-Write a function that finds the index of a given element in an array. If the element isn't found, return `-1`.
{
  const userInput1 = document.getElementById("INPUT1-Q10"); //fill array
  const userInput2 = document.getElementById("INPUT2-Q10"); //display array
  const userInput3 = document.getElementById("INPUT3-Q10"); //index

  const btn2 = document.getElementById("ACTION10_Fill");
  const btn1 = document.getElementById("ACTION10");
  const result = document.getElementById("RESULT10");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }

  function findIndex(num) {
    for (let i = 0; i < arrayFill.length; i++) {
      if (arrayFill[i] === num) {
        return i;
      }
    }
    return -1; // Return -1 if num is not found
  }

  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(findIndex(Number(userInput3.value)));

    result.innerHTML = findIndex(Number(userInput3.value));
  });
}

// //--------------------------------------------------------------------------------------------------
// //-11-Write a function to calculate the factorial of a given number.
{
  const userInput1 = document.getElementById("INPUT1-Q11");
  const btn1 = document.getElementById("ACTION11");
  const result = document.getElementById("RESULT11");

  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  //another method

  //   function factorial(num) {
  //     let fact = 1;
  //     for (let i = num; i > 0; i--) {
  //       fact *= i;
  //     }
  //     return fact;
  //   }

  btn1.addEventListener("click", () => {
    console.log(factorial(userInput1.value));
    result.innerHTML = factorial(userInput1.value);
  });
}

// //--------------------------------------------------------------------------------------------------
// //-12-Write a function that takes an object and returns an array containing only its keys.
{
  const userInput1 = document.getElementById("INPUT1-Q12");
  const btn1 = document.getElementById("ACTION12");
  const result = document.getElementById("RESULT12");

  function getObjectKeys(obj) {
    return Object.keys(obj);
  }

  btn1.addEventListener("click", () => {
    //convert stringfy format json to real object
    let myObject = JSON.parse(userInput1.value);

    console.log(getObjectKeys(myObject));
    result.innerHTML = `[${getObjectKeys(myObject)}]`;
  });
}

// //--------------------------------------------------------------------------------------------------
// //-13-Write a function that returns only the unique numbers from an array.
{
  const userInput1 = document.getElementById("INPUT1-Q13");
  let userInput2 = document.getElementById("INPUT2-Q13");
  const btn2 = document.getElementById("ACTION13_Fill");
  const btn1 = document.getElementById("ACTION13");
  const result = document.getElementById("RESULT13");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }
  function filterUnique(array) {
    let filterArray = [];
    let flag = 0;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
          flag++;
        }
      }
      if (flag == 1) {
        filterArray.push(array[i]);
      }
      flag = 0;
    }
    return filterArray;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(filterUnique(arrayFill));

    result.innerHTML = `[${filterUnique(arrayFill)}]`;
  });
}

// //--------------------------------------------------------------------------------------------------
// //-14-Write a function to count the occurrences of each character in a string.
{
  let userStringInput = document.getElementById("INPUT1-Q14");
  const btn1 = document.getElementById("ACTION14");
  const result = document.getElementById("RESULT14");
  function countCharOccurrences(str) {
    const charCount = {};

    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++; // increment char
      } else {
        charCount[char] = 1; // at first assign char by 1
      }
    }
    return charCount; // return object of char of str by count the occurrences
  }

  btn1.addEventListener("click", () => {
    console.log(countCharOccurrences(userStringInput.value));
    // to display object on dom key and value --> entries
    result.innerHTML = `{${Object.entries(
      countCharOccurrences(userStringInput.value)
    )} }`;
  });
}

// //--------------------------------------------------------------------------------------------------
// //-15-Write a function that sorts an array of numbers in ascending order.
{
  let userInput1 = document.getElementById("INPUT1-Q15");
  let userInput2 = document.getElementById("INPUT2-Q15");
  const btn2 = document.getElementById("ACTION15_Fill");
  const btn1 = document.getElementById("ACTION15");
  const result = document.getElementById("RESULT15");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }
  function ascendingSort(array) {
    let temp;
    for (let x = 0; x < array.length; x++) {
      for (let y = x + 1; y < array.length; y++) {
        if (array[y] < array[x]) {
          temp = array[x];
          array[x] = array[y];
          array[y] = temp;
        }
      }
    }
    return array;
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(ascendingSort(arrayFill));
    result.innerHTML = `[${ascendingSort(arrayFill)} ]`;
  });
}

// //--------------------------------------------------------------------------------------------------
// //-16-Write a function to check if a given string is an anagram of another string (i.e., contains the same characters in a different order).
{
  let userInput1 = document.getElementById("INPUT1-Q16");
  let userInput2 = document.getElementById("INPUT2-Q16");
  const btn1 = document.getElementById("ACTION16");
  const result = document.getElementById("RESULT16");

  function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters by regular expression and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

    // Check if lengths are equal
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }

    // Sort both strings and compare
    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
  }

  btn1.addEventListener("click", () => {
    console.log(areAnagrams(userInput1.value, userInput2.value));
    result.innerHTML = `${areAnagrams(userInput1.value, userInput2.value)} `;
  });
}

// //--------------------------------------------------------------------------------------------------
// //-17-Write a function that removes all falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`) from an array.
{
  let userInput1 = document.getElementById("INPUT1-Q17");
  let userInput2 = document.getElementById("INPUT2-Q17");
  const btn1 = document.getElementById("ACTION17");
  const btn2 = document.getElementById("ACTION17_Fill");
  const result = document.getElementById("RESULT17");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(userInput1.value);
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }

  function convertStingToRealValue(ARRAY) {
    for (let i = 0; i < ARRAY.length; i++) {
      if (ARRAY[i] === "null") {
        ARRAY[i] = null;
      } else if (ARRAY[i] === "undefined") {
        ARRAY[i] = undefined;
      } else if (ARRAY[i] === "false") {
        ARRAY[i] = false;
      } else if (ARRAY[i] === "NaN") {
        ARRAY[i] = NaN;
      } else if (ARRAY[i] === "") {
        ARRAY[i] = "";
      } else if (
        Number(ARRAY[i]) > 0 ||
        Number(ARRAY[i]) < 0 ||
        Number(ARRAY[i]) == 0
      ) {
        ARRAY[i] = Number(ARRAY[i]);
      }
    }
  }

  function RemoveFalsy(array) {
    let arrAfterFalsy = [];
    for (let i = 0; i < array.length; i++) {
      //    if (Boolean(array[i])==false) {
      //        array.splice(i,1);
      //    }
      //or
      if (Boolean(array[i]) == true) {
        arrAfterFalsy.push(array[i]);
      }
    }
    return arrAfterFalsy;
  }

  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    //convert array of string caption from user to real value false ,null, ...
    convertStingToRealValue(arrayFill);
    console.log(arrayFill);

    result.innerHTML = `[${RemoveFalsy(arrayFill)}]`;
    console.log(RemoveFalsy(arrayFill));
  });
}

// //-18-Write a function that creates a car object with properties such as `model` and `year’ and includes a method to display the car's details.
{
  let userInput1 = document.getElementById("INPUT1-Q18");
  let userInput2 = document.getElementById("INPUT2-Q18");
  const btn1 = document.getElementById("ACTION18");
  const btn2 = document.getElementById("ACTION18_Fill");
  const result = document.getElementById("RESULT18");

  function createCar(model, year) {
    // Creating a car object with model and year properties
    const car = {
      model: model,
      year: year,

      // Method to display car details
      displayDetails: function () {
        console.log(`Car Model: ${this.model}, Year: ${this.year}`);
        result.innerHTML = `Car Model: ${this.model}, Year: ${this.year}`;
      },
    };

    return car;
  }

  btn1.addEventListener("click", () => {
    console.log(userInput1.value);

    const myCar = createCar(userInput1.value, Number(userInput2.value));
    myCar.displayDetails();
  });
}

// //--------------------------------------------------------------------------------------------------
// //-19-Write a function that checks if a given object contains a specific property.
{
  const userInput1 = document.getElementById("INPUT1-Q19");
  const userInput2 = document.getElementById("INPUT2-Q19");
  const btn1 = document.getElementById("ACTION19");
  const result = document.getElementById("RESULT19");
  let myObject = {};

  function checkKey(key) {
    // console.log(Object.keys(myObject));  //retern array of keys
    return Object.keys(myObject).includes(key);
  }

  btn1.addEventListener("click", () => {
    myObject = JSON.parse(userInput1.value);

    console.log(checkKey(userInput2.value));
    result.innerHTML = `${checkKey(userInput2.value)}`;
  });
}

//--------------------------------------------------------------------------------------------------
// //-20-Write a function to count the number of vowels (a, e, i, o, u) in a string, regardless of case.
{
  const userInput1 = document.getElementById("INPUT1-Q20");
  const btn1 = document.getElementById("ACTION20");
  const result = document.getElementById("RESULT20");

  function countVowels(str) {
    // Convert string to lowercase to handle both uppercase and lowercase letters
    str = str.toLowerCase();

    // Define a string containing all vowels
    const vowels = "aeiou";

    // Initialize a counter for vowels
    let count = 0;

    // Loop through the string and count vowels
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    return count;
  }

  btn1.addEventListener("click", () => {
    console.log(countVowels(userInput1.value));
    result.innerHTML = countVowels(userInput1.value);
  });
}

//--------------------------------------------------------------------------------------------------
// //-21-Write a function that splits a string into an array of words based on spaces.
{
  const userInput1 = document.getElementById("INPUT1-Q21");
  const btn1 = document.getElementById("ACTION21");
  const result = document.getElementById("RESULT21");

  function splitBySpace(str) {
    return str.split(" ");
  }

  btn1.addEventListener("click", () => {
    console.log(splitBySpace(userInput1.value));
    result.innerHTML = `[${splitBySpace(userInput1.value)}]`;
  });
}

//-----------------------------------------------------------------------------------------------
//-------22-Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`) on two numbers.
{
  const userInput1 = document.getElementById("INPUT1-Q22"); //num1
  const userInput2 = document.getElementById("INPUT2-Q22"); //operations
  const userInput3 = document.getElementById("INPUT3-Q22"); //num3
  const btn1 = document.getElementById("ACTION22");
  const result = document.getElementById("RESULT22");

  function calculate(num1, num2) {
    let result = 0;

    switch (userInput2.value) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        break;
      case "*":
        result = Number(num1) * Number(num2);
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }

  btn1.addEventListener("click", () => {
    console.log(
      `${userInput2.value} operation are ${calculate(
        Number(userInput1.value),
        Number(userInput3.value)
      )}`
    );

    result.innerHTML = calculate(
      Number(userInput1.value),
      Number(userInput3.value)
    );
  });
}
//*************************************************************************************************
//---------------------------------END OF ASSIGNMENT THANK YOU-------------------------------------
//*************************************************************************************************
//********************************Dev by Basem mouner rizk**********************************************
