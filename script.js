//=================================================
// Part 1: Array Higher-Order Methods
//=================================================
// 1. Create an array of 10 numbers and use forEach() to print each number.
let one1 = [1,2,3,4,5,6,7,8,9,10]
one1.forEach((c,i,t)=>{
    console.log(c);
}) //output=1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let one2 = [1,2,3,4,5,6]
 let new1 = one2.map((c,i,t)=>{
    return c*5
})
console.log(new1);//output=(6) [5, 10, 15, 20, 25, 30]

// 3. Given an array of numbers, use filter() to get only numbers greater than 20.
let one3 = [20,15,14,29,37,42,9]
let newFilter = one3.filter((c,i,t)=>{
    return c > 20
})
console.log(newFilter); //output=(3) [29, 37, 42]

// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
let employee = [
    {name:"Pavani" ,salary:500000 },
    {name:"Chandu" ,salary:400000 },
    {name:"Arun" ,salary:150000 },
    {name:"Pavan" ,salary:200000 },
    {name:"Chandrika" ,salary:1000000 },
]
let newFilter1 = employee.filter((c,i,t)=>{
    return c.salary <= 300000
})
console.log(newFilter1);
// output=(2) [{…}, {…}]
// 0: {name: 'Arun', salary: 150000}
// 1: {name: 'Pavan', salary: 200000}
// length: 2

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let newFind = employee.find((c,i,t)=>{
    return c.salary >= 200000
})
console.log(newFind);
//output={name: 'Pavani', salary: 500000}

// 6. Use reduce() to calculate the total of all numbers in an array.
let array = [10,20,25,30,5]
let newReduce = array.reduce((acc,c,i,t)=>{
    return acc + c },0)
console.log(newReduce);//output=90

// 7. Create an array of numbers and use some() to check whether at least one number is even.
let arr1 = [7,3,8,2,9]
let newSome = arr1.some((c,i,t)=>{
    return c % 2 == 0
})
console.log(newSome);//output=true

// 8. Use every() to check whether all numbers in an array are greater than zero.
let arr2 = [7,3,8,2,9]
let newEvery = arr2.every((c,i,t)=>{
    return c >= 0
})
console.log(newEvery);//output=true


// 9. Given an array of numbers, sort them in ascending order using the sort callback.
let sortArr = [1,7,3,9,23,17,5]

console.log(sortArr.sort((a, b) => {
    return a - b;
}));//output=(7) [1, 3, 5, 7, 9, 17, 23]

// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
let sortArr1 = [1,7,3,9,23,17,5]
let newSort = sortArr.sort((a, b) => {
    return b - a;
});
console.log(newSort);//output=(7) [23, 17, 9, 7, 5, 3, 1]

//=================================================
// Part 2: String Methods
//=================================================
// 11. Create a string "javascript" and print the character at index 4 using charAt().
let str = "javascript"
console.log(str.charAt(4));//output=s

// 12. Find the character code at index 2 using charCodeAt().
let str1 = "javascript"
console.log(str1.charCodeAt(2));//output= 118

// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
let str2 = "  javascript  "
console.log(str2.trim());//output=javascript

// 14. Convert a string to uppercase and lowercase using the appropriate methods.
let str3 = "JavaScript"
console.log(str3.toUpperCase());//output=JAVASCRIPT
console.log(str3.toLowerCase());//output=javascript

// 15. Check whether a string contains "script" using includes().
let str4 = "java script"
console.log(str4.includes("script"));//output=true

// 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
let str5 = "Java Script"
console.log(str5.startsWith("Java"));//output=true
console.log(str5.endsWith("Script"));//output=true

// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
let str6 = "javascriptjavascriptjava"
console.log(str6.replaceAll("java","python"));//output=pythonscriptpythonscriptpython

// 18. Split the string "html-css-javascript-react" into an array using split().
let str7 = "html-css-javascript-react"
console.log(str7.split("-"));//output=(4) ['html', 'css', 'javascript', 'react']

// 19. Convert an array of names into a single string using join() with a comma separator.
let array1 = ["Pavani","Chandu","LakshmiReddy","savithri"]
console.log(array1.join(","));//output=Pavani,Chandu,LakshmiReddy,savithri

// 20. Create a string and extract a portion of it using slice().
let str8 = "JavaScript"
console.log(str8.slice(4,10));//output=Script

//=================================================================
//Part 3: Date Methods
//=================================================================
// 21. Create a Date object and print the current year, month, date, and day.
let data = new Date()
console.log("Year:", data.getFullYear());//otput=Year:2026
console.log("Month:", data.getMonth());//output=Month:9
console.log("Date:", data.getDate());//output=Date:28
console.log("Day:", data.getDay());//output=Day:3

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let data1 = new Date()
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month[data1.getMonth()]);//output=October

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
let data2 = new Date()
console.log("Hour:", data.getHours());//output=Hour: 13
console.log("Minutes:", data.getMinutes());//output=Minutes: 40
console.log("Seconds:", data.getSeconds());//output=Seconds: 48

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let data3 = new Date()
data3.setFullYear(2003)
data3.setMonth(0)
data3.setDate(30)
console.log(data3);//output=Thu Jan 30 2003 13:44:03 GMT+0530 (India Standard Time)

//====================================================================
// Part 4: Asynchronous JavaScript
//====================================================================
// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");
},3000)
//output=after 3sec it will print Welcome to JavaScript

// // 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
//  let newInterval = setInterval(() => {
//     console.log("Learning JavaScript");
// },2000)
// //output= after 2sec it will print Learning JavaScript infinity times

// // 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
// setTimeout(() => {
//     clearInterval(newInterval)
// },8000)

// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
function one(){
    console.log("One");
}
function two(){
    console.log("Two");
}
function three(){
    console.log("Three");
}
one()
setTimeout(two,0)
three()
//output=One
// Three
// Two

//===============================================================
//Part 5: Promises and API Fetching
//===============================================================
// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
let login1 = new Promise((resolve, reject) => {
    resolve("Login successful");
});
login1.then(result => console.log(result));
//output=Login successful

// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch()
// 30. Create a Promise that rejects with the message "Invalid password"
// and handle the error using .catch().

let login = new Promise((resolve, reject) => {
    reject("Invalid password");
});

login.catch((error) => {
    console.log(error);
});//outut=Invalid password

// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.

const login3 = new Promise((resolve, reject) => {
    resolve("Success");
});
login3
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });//output=Success
    // Process completed

// 32. Fetch product data from the Fake Store API:
// https://fakestoreapi.com/products
// Convert the response to JSON and print all product titles using forEach().

let api = "https://fakestoreapi.com/products"
fetch(api).then((dataStore) => {
    return dataStore.json()
})
.then((jsdata)=>{
    jsdata.forEach((c,i,t)=>{
         console.log(c.title);
    })
})
.catch((error) => {
        console.log("Error:", error);
    });
// 33. Fetch the same API and print the title, price, and category of every product.
fetch(api).then((dataStore) => {
    return dataStore.json()
})
.then((jsdata)=>{
    jsdata.forEach((c,i,t)=>{
         console.log(c.title);
         console.log(c.price);
         console.log(c.category);
    })
})
.catch((error) => {
        console.log("Error:", error);
    });

// 34. Handle API errors using .catch() and display the error message using console.warn().
let api1 = "https://fakestoreapi.com/product"
fetch(api1).then((dataStore) => {
    return dataStore.json()
})
.then((jsdata)=>{
    jsdata.forEach((c,i,t)=>{
         console.log(c.title);
    })
})
.catch((errorData)=>{
    console.warn(errorData.message);
})

// 35. Use .finally() to print "API call completed" after the fetch process.
// 35. Use .finally() to print "API call completed" after the fetch process.
let api2 = "https://fakestoreapi.com/products"
fetch(api2).then((dataStore) => {
    return dataStore.json()
})
    .then((jsData) => {
        console.log(jsData);
    })
    .catch((errorData) => {
        console.warn(errorData.message);
    })
    .finally(() => {
        console.log("API call completed");
    });
//==================================================
//Part 6: Real-Time Mini Tasks
//==================================================
// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
let employee1 = [
    {name:"Pavani" ,salary:500000 },
    {name:"Chandu" ,salary:400000 },
    {name:"Arun" ,salary:150000 },
    {name:"Pavan" ,salary:200000 },
    {name:"Chandrika" ,salary:1000000 },
]
let newFil = employee1.filter((c,i,t)=>{
    return c.salary < 300000
        })
newFil.forEach((c) => {
    console.log("Name:", c.name, "Salary:", c.salary);
});
//output= Name: Arun Salary: 150000
//        Name: Pavan Salary: 200000

// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.

 // 37. Product price calculator
fetch("https://fakestoreapi.com/products")
    .then((dataStore) => {
        return dataStore.json();
    })
    .then((jsdata) => {
        let newArray = jsdata.map((c) => {
            return {
                title: c.title,
                price: c.price
            };
        });
        console.log(newArray);
    })
    .catch((error) => {
        console.warn(error.message);
    });

// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
fetch("https://fakestoreapi.com/products")
    .then((dataStore) => {
        return dataStore.json();
    })
    .then((jsdata) => {
        let newFilter = jsdata.filter((c) => {
            return c.category === "jewelery";
        });
        console.log(newFilter);
    })
    .catch((error) => {
        console.warn(error.message);
    });

// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.

 // 39. Number analysis

let numbers = [10, 15, 20, 25, 30];

// 1. map() - Multiply every number by 2
let newMap1 = numbers.map((c) => {
    return c * 2;
});
console.log("Map:", newMap1);

// 2. filter() - Get numbers greater than 20
let newFilter2 = numbers.filter((c) => {
    return c > 20;
});
console.log("Filter:", newFilter2);

// 3. reduce() - Calculate the sum of all numbers
let newReduce1 = numbers.reduce((total, c) => {
    return total + c;
}, 0);
console.log("Reduce:", newReduce1);

// 4. some() - Check if at least one number is greater than 25
let newSome1 = numbers.some((c) => {
    return c > 25;
});
console.log("Some:", newSome1);

// 5. every() - Check if every number is greater than 5
let newEvery1 = numbers.every((c) => {
    return c > 5;
});
console.log("Every:", newEvery1);

// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().

 // 40. Product listing

fetch("https://fakestoreapi.com/products")
    .then((dataStore) => {
        return dataStore.json();
    })
    .then((jsData) => {
        jsData.forEach((c,i,t) => {
            console.log("Title:", c.title);
            console.log("Price:", c.price);
            console.log("Category:", c.category);
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product listing completed");
    });
