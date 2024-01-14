/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(number){
   switch (true) {
      case number > 80 :
         return "grade A"
         break;
      case number >60 && number <= 80 :
            return "grade B"
            break;
      case number >40 && number <= 60 :
         return "grade C"
         break;
      default:
         return "grade d"
         break;
   }
}

let grade; 

grade = calculateGrade(100);
console.log(grade);
grade = calculateGrade(79);
console.log(grade);
grade = calculateGrade(59);
console.log(grade);
grade = calculateGrade(39);
console.log(grade);