/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */
  /* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */

  var firstName    = "Shripathi Raman R";
  var companyName  = "Annaki Consultant Software Services";
  var mobileNumber = 9840315320;
  var isAutomation = true;
  var hasPlaywright;
  
  console.log(`${firstName} is the value of [firstName] and the datatype is ${typeof firstName}`);
  console.log(`${companyName} is the value of [companyName] and the datatype is ${typeof companyName}`);
  console.log(`${mobileNumber} is the value of [mobileNumber] and the datatype is ${typeof mobileNumber}`);
  console.log(`${isAutomation} is the value of [isAutomation] and the datatype is ${typeof isAutomation}`);
  console.log(`${hasPlaywright} is the value of [hasPlaywright] and the datatype is ${typeof hasPlaywright}`);

  const browserName = "chrome";

function getBrowserVersion(){
  var first = "Chrome Browser";
	if (browserName === "chrome"){
		console.log("12.34.56.78");
	}
}

getBrowserVersion();