// We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [40,90,20,100,91,80,95,97];
let topper = marks.filter((val) => {
    return val>90; 
});

console.log(topper);