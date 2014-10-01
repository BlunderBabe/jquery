/*Javascript/Jquery cheatsheet assignment due 10/1 begins*/
$(document).ready(function(){ //document ready snippet and function- shows that the document is ready for execution 
	alert('click here...');
})

$("element").slideDown(1000) // selected html element will slide down for 1 sec
$("element").slideUp(2000)//selected html element will slide up for 2 secs
$("element").fadeOut() // selected element will fade out
$("element").fadeIn() //selected element will fade in

$("element").animate( {   //command to animate the selected html element 
	opacity: 0.25 ,
	width: "70%"
} , 2000 ) ;

$("element").click ( function(){    // click on the element for the alert to appear
	alert('whatever you want to say') ;
}
) ;

// cheatsheet assignment 10/1 ends//

//Create a “cheat sheet” JavaScript file that contains examples of all of the things we learned today, delineated with comments:

Variables 
var y = 8
var x = 4
//JavaScript variables are like containers that hold information

Debugging (alerts, comments, the console)
//debugging is the process of finding, testing and reducing bugs in a computer program
 
 //alert eg. 
 alert ("hi boo bop!");

 //Comments: there are two differnt types. "//" is a one-line comment
 
 /* This is a multi-
 line comment.*/

 // the Console : a part of developer tools in the Google Chrome browser. It allows you to test and debug code. Press "control" and "J" to bring it up. Then there is the
 console.log() //method which displays JavaScript values in the browser. It's used for debugging. EG. 
var x = 8;
var y = 6;
 
 if (x < 10) {
 	console.log("you will see this message because 8 is less than 10");
} else {
	console.log("you will not see this message");
}

Different data types /* There are four types of data in JavaScript. They are:
 String "Hola people"
 Numbers : 5, 5.5, 2800
 Boolean: True, False
 Undefined: (no value, var with no value)

 The command to find out what kind of data you are looking at :*/
 yourData = "Data example"
 typeof(yourData);
 >string 


Arrays /* Arrays are special types of varialbes that can hold more than one value at a time. 
Eg. */ [ "data doo", data dee", "data da", Data dum"] ; //arrays a. can hold differnt types of data and b. can be stored in variables

[ 22, 14, 18, "data doo",];
 
 Variable_eg = [ "data dee", "data doo" "data etc"]

/* how to access arrays*/ 
var myArr = ["data_1", "data_2", "data_3", "data_4"];
console.log (myArr [0]);
> "data_1"

/* When unsure of an index number ****DON'T QUITE UNDERSTAND WHAT THIS ONE DOES*/
 var data_1Position = myArr.indexOf("data_1");
 console.log(myArr[data_1Position]);
 > "data_1"

 /* Multidimensional arrays store other arrays. EG */

 var fruit = ["pear", "peach", "mango", "kiwi"] ;
 var meat = ["beef", "chicken", "pork", "fish"] ;
 var food = ["fruit", "meat"] ;
 console.log (food [0] [0]); > "pear";  /* a little confused on this one too and how the [0], [0] equals first form of fruit. 

Testing - tests return boolean True or False; to test if two strings are equal. Must test as below otherwise bugs can occur.*/
 "stringone" === "stringtwo" ;  /* to test if two strings are equal*/
 >false

 "stringone" !== "stringtwo"; /* To test if two strings are unequal */
 >true 

6 > 15; /* To test if one number is greater than another: */
> false

<, >, <=, >= /* other comparison operators */

Logic-  /*controls the flow of your program and allows your computer to think for you. If/Then structure */

if(5>10){
console.log(“You’ll never see this
because 5 is not greater than 10”);
} else{
console.log(“You will see this because
5 is not greater than 10”);
}

Functions : /*a function is a block of reusable code. You can execute it over and over again. To define a function, use var. It can take arguments, which are used as
variables inside the function*/


/* Write 3 different functions that take input and return something via the console or an alert
Upload your work to GitHub and submit it here.*/


var little = 9;
if (little < 15) {
	alert("this is less than 15")
}else {
	alert("little is" + little) ;
}


var hello = function () {
  // Print hello on the console.
  console.log("i am saying hello");
};

hello();

var spy= function () {
	//print I see you on the console.
	console.log("I see you!");
};
I see you ();

alert("I see you!")






