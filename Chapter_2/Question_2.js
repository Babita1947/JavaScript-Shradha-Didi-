/* Write a code which can give grades to students according to their scores:
   80-100,A
   70-89,B
   60-69,C
   50-59,D
   0-49,F
*/

let num=prompt("Enter your score(0-100):");
let grade;
if(num>=80 && num<=100)
  grade="A";
else if(num>=70 && num<90)
  grade="B";
else if(num>=60 && num<70)
  grade="C";
else if(num>=50 && num<60)
  grade="D";
else if(num>=0 && num<50)
  grade="E";

console.log("According to your scores, your grade was : ",grade);
