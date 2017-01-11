// 1.Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var apple = 5;
var banana = 6;
var fruits = apple + banana;
console.log(fruits)

var fristName = "Mike";
var lastName = "Smith";
var fullName = fristName +" " + lastName;
console.log(fullName);


// 2.Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var basketball = ["Sixers","Suns","Lakers"];
var soccer = ["Barcelona","Arsenal","ManUtd"];
var sportteams = [basketball, soccer];
console.log(sportteams[1][0]);
console.log(sportteams[0][2]);


// 3.Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
var age = 55;
if (age < 100) {
	alert("the variable is less than 100")
} else {
	alert("the variable is" + " " + age + " " + "and it is greater than 100")
}


// 4.Try running the script and then changing the variable's value to see how this affects the program's output.
var tution = 10000;
var livingCost = 5000;
var totalCost = tution + livingCost;
console.log(totalCost);


// now I'm going to change one of the variable (var tution)
var tution = 4000;
var livingCost = 5000;
var totalCost = tution + livingCost;
console.log(totalCost);


// 5.Write a similar script to check if a string stored in a variable is the same as another string.
var totalCost = tution + livingCost;
console.log(totalCost); /*it is the same as another string.*/


// 6.Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function whatIsYourName(name) {
	return "You have entered" + " " + name
}
 console.log(whatIsYourName(name));


 // 7.Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function nowords () {
	return "no text for you"
}
console.log  (nowords());


// 8.Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

// So if the user
// enter door 1 - the user will win a banana,
// door 2 - a shirt,
// door 3 - a car.
// If the user will not enter anyalertuser won't receive any prize.
function opendoor(num) {
	if (num == 1) {
		alert("You won a banana");
	} else if (num ==2) {
		alert("you won a shirt");
	} else if (num==3) {
		alert("you won a car");
	} else {
		alert("you won't receive any prize");
	}
}
console.log(opendoor(3));	/*the user entered the door 3 and won a car.*/
console.log(opendoor(1));	/*the user entered the door 1 and won a banana.*/


