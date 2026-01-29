students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
  ];



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
  function filterGrades(student) {
    return student.grade >= 50
  }
  const passingStudents = students.filter(filterGrades)
  return passingStudents
}


module.exports = {getHighestScoringStudent, getAverageScore, getPassingStudents,getPassingStudentsFilter}