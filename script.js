// CHAPTER 12 and 13

// ANSWER NO: 1
// var input = prompt("Enter any Number or String: ");
// if (input >= 65 && input <= 90) {
//   alert(`The Character is a Uppercase letter..`);
// } else if (input >= 97 && input <= 122) {
//   alert(`The Character is a Lowercase letter..`);
// } else if (input >= 48 && input <= 57) {
//   alert(`The Character is a Number..`);
// }

// ANSWER NO: 2
// var input1 = +prompt("Enter a First Number: "),
//   input2 = +prompt("Enter a Second Number: ");

// if (input1 > input2) {
//   document.write(`${input1} is greater than\t ${input2}`);
// }
// else if (input2 > input1) {
//   document.write(`${input2} is greater than\t ${input1}`);
// }
// else if (input1 === input2) {
//   document.write(`Both numbers are equal.`);
// }

// ANSWER NO: 3
// var input = +prompt("Enter any Number: ");
// if (input >= 1) {
//   document.write("The inputted number is Positive..");
// }
// else if (input < 0) {
//   document.write("The inputted number is Negative..");
// }
// else if (input === 0) {
//   document.write("The inputted number is Zero..");
// }

// ANSWER NO: 4
// var char = prompt("Enter any Character: ");
// if (
//   char === "a" ||
//   char === "A" ||
//   char === "e" ||
//   char === "E" ||
//   char === "i" ||
//   char === "I" ||
//   char === "o" ||
//   char === "O" ||
//   char === "u" ||
//   char === "U"
// ) {
//   document.write("It's a Vowel..");
// } else {
//   document.write("It's a Consonant..");
// }

// ANSWER NO: 5
// var pass = 123456,
//   input_pass = prompt("Please enter your Password: ");
// if (pass == input_pass) {
//   alert("Correct! The Password you entered matches the original password..");
// } else {
//   alert("Incorrect Pasword! ");
// }

// ANSWER NO: 6
// var greeting = "Good Evening";
// var hour = 15;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(`${greeting}`);
// } else {
//   alert(`${greeting}`);
// }

// ANSWER NO: 7
// var time = +prompt("Enter a time in 24 hours Format: ");
// if (time >= 1 && time < 12) {
//   alert("Good Morning");
// } else if (time >= 12 && time < 17) {
//   alert("Good Afternoon");
// } else if (time >= 17 && time < 21) {
//   alert("Good Evening");
// } else if (time >= 21 && time <= 24) {
//   alert("Good Night");
// } else if (time > 24) {
//   alert("Invalid Time..");
// }

// CHAPTER 14 to 16

// ANSWER NO: 1 and 2
// var arr = [];
// arr.push("");
// alert(`${arr}`);

// ANSWER NO: 3
// var arr = ["Raza"];

// ANSWER NO: 4
// var arr = [10];

// ANSWER NO: 5
// var arr = [true];

// ANSWER NO: 6
// var arr = ["Raza", 10, true];

// ANSWER NO: 7
// var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("Qualifications: ");
// document.write(`<br>1) ${arr[0]}`);
// document.write(`<br>2) ${arr[1]}`);
// document.write(`<br>3) ${arr[2]}`);
// document.write(`<br>4) ${arr[3]}`);
// document.write(`<br>5) ${arr[4]}`);
// document.write(`<br>6) ${arr[5]}`);
// document.write(`<br>7) ${arr[6]}`);
// document.write(`<br>8) ${arr[7]}`);

// ANSWER NO: 8
// var stidentsName = ["Michael", "John", "Tony"];
// var percentage = [64, 96, 46];
// document.write(
//   `Score of ${stidentsName[0]} is 320, Percentage: ${percentage[0]}%`
// );
// document.write(
//   `<br>Score of ${stidentsName[1]} is 480, Percentage: ${percentage[1]}%`
// );
// document.write(
//   `<br>Score of ${stidentsName[2]} is 230, Percentage: ${percentage[2]}%`
// );

// ANSWER NO: 9(a)
// var arr = ["Red", "Green", "Blue", "Orange"];
// alert(arr);
// userColor = prompt("Enter the colour you want to add at the beginning: ");
// arr.unshift(userColor);
// alert(arr);

// ANSWER NO: 9(b)
// var arr = ["Red", "Green", "Blue", "Orange"];
// alert(arr);
// userColor = prompt("Enter the colour you want to add at the end: ");
// arr.push(userColor);
// alert(arr);

// ANSWER NO: 9(c)
// var arr = ["Red", "Green", "Blue", "Orange"];
// arr.unshift("Yellow", "Black");
// alert(arr);

// ANSWER NO: 9(d)
// var arr = ["Red", "Green", "Blue", "Orange"];
// arr.unshift("Yellow", "Black");
// alert(arr);
// arr.shift(0);
// alert(arr);

// ANSWER NO: 9(e)
// var arr = ["Red", "Green", "Blue", "Orange"];
// alert(arr);
// arr.pop("orange");
// alert(arr);

// ANSWER NO: 9(f)
// var arr = ["Red", "Green", "Blue", "Orange"];
// alert(arr);
// userColor = prompt("Enter the colour you want to add at the end: ");
// userInd = +prompt("At what index number you want to add: ");
// arr.splice(userInd, 0, userColor);
// alert(arr);

// ANSWER NO: 9(g)
// var arr = ["Red", "Green", "Blue", "Orange"];
// alert(arr);
// userColor = +prompt("Which index color you want to delete: ");
// userInd = +prompt("Number of colors you want to delete: ");
// arr.splice(userColor, userInd);
// alert(arr);

// ANSWER NO: 10
// var arr = [320, 230, 480, 120];
// document.write(`Scores of students: ${arr}`);
// arr.sort(function(a,b) {return a - b });
// document.write(`<br>Scores of students after sorting: ${arr}`);

// ANSWER NO: 11

// var cities = [
//   "Karachi",
//   "Lahore",
//   "Islamabad",
//   "Peshawar",
//   "Quetta",
//   "Multan",
// ];

// var selectedCities = [];

// selectedCities.push(cities[0]);
// selectedCities.push(cities[2]);
// selectedCities.push(cities[4]);

// alert("Selected Cities: " + selectedCities);

// ANSWER NO: 12
// var arr = ["This", "is", "my", "cat"],
//   arrJoined;
// document.write(`Array before joining method: ${arr}`);
// arrJoined = arr.join(" ");
// document.write(`<br>Array after joining method: ${arrJoined}`);

// ANSWER NO: 13
// var arr = [];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// document.write(arr);

// var first = arr.shift(0);
// var second = arr.shift(1);
// var third = arr.shift(2);

// document.write("<br>" + first);
// document.write("<br>" + second);
// document.write("<br>" + third);

// ANSWER NO: 14
// var arr = [];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// document.write(arr);

// var first = arr.pop(0);
// var second = arr.pop(1);
// var third = arr.pop(2);

// document.write("<br>" + first);
// document.write("<br>" + second);
// document.write("<br>" + third);

// ANSWER NO: 15
// var arr = ["Apple", "Samsung", "Oppo", "Sony", "Pixel"];

// document.write("<select id='arr'>");

// for (var i = 0; i < arr.length; i++) {
//   document.write("<option value='" + arr[i] + "'>" + arr[i] + "</option>");
// }

// document.write("</select>");
