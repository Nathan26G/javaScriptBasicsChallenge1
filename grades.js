students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
  ];



const generateMessagesCustom = (namesAndDiscounts) => 
    namesAndDiscounts.map(({name, discount}) =>  
        `Hi ${name}! ${discount}% off our best candies for you today!`);



function getHighestScoringStudent(students){
  let highest = {name: 'nothing', grade: 0};
  for(let student = 0; student < students.length; student++){
    let grade = students[student].grade;
    if(grade > highest.grade){
      highest = students[student];
    }
  }
  return highest
}



const getAverageScore = (students) => {
  let total = 0;
  for(let student = 0; student < students.length; student++){
    total += students[student].grade;
  }
  return Math.ceil(total / students.length)
}
console.log(getAverageScore(students))


// 🌶️🌶️ Level 2
// Implement a function getPassingStudents(students) that:

// Takes an array of student objects { name, grade }

// Returns an array of names of students with grades >= 50

// Sorts the passing students alphabetically.

// function getHighestScoringStudent(students){
//   let highest = {name: 'nothing', grade: 0};
//   for(let index = 0; index < students.length; index++){
//     let grade = students[index].grade;
//     if(grade > highest.grade){
//       highest = students[index];
//     }
//   }
//   return highest
// }
// console.log(getHighestScoringStudent(students))

function getPassingStudents(students){
  let passingStudents = [];
  for(let index = 0; index < students.length; index++){
    let grade = students[index].grade
    if (grade >= 50) {
      passingStudents.push(students[index].name)
      console.log(passingStudents)
    }
  }
  return passingStudents.sort()
}



function getPassingStudentsFilter(students){
  console.log(students)
  function filterGrades(student) {
    return student.grade >= 50
  };
  const passingStudents = students.filter(filterGrades).map(({name}) => name);

  return passingStudents
  
}

console.log(getPassingStudentsFilter(students))

  // const students1 = [
  //   { studentName: 'Alice', grade1: 90 },
  //   { studentName: 'Bob', grade1: 40 },
  //   { studentName: 'Charlie', grade1: 70 }
  // ];


// function getPassingStudentsFilter(students1){
//   console.log(students1)
//   function filterGrades(student) {
//     return student.grade1 >= 50
//   };
//   const passingStudents = students1.filter(filterGrades)
//   console.log("this is output from line 85", passingStudents)

//   const finalPassingStudentOutput = passingStudents.map(({studentName}) => studentName);

//   console.log("this is output from line 89", finalPassingStudentOutput)
//   return finalPassingStudentOutput
  
// }

// const namesAndDiscounts = [
//   { name: 'Anna', discount: 50 },
//   { name: 'Laura', discount: 40 },
//   { name: 'Josh', discount: 30 },
//   { name: 'Min', discount: 50 },
//   { name: 'Karla', discount: 60 }
// ];

// const generateMessagesCustom = (namesAndDiscounts) => 
//     namesAndDiscounts.map(({name, discount}) =>  
//         `Hi ${name}! ${discount}% off our best candies for you today!`);





// module.exports = {getHighestScoringStudent, getAverageScore, getPassingStudents,getPassingStudentsFilter}