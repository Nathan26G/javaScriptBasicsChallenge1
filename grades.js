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

module.exports.getHighestScoringStudent = getHighestScoringStudent;

const getAverageScore = (students) => {
  let total = 0;
  for(let student = 0; student < students.length; student++){
    total += students[student].grade;
  }
  return Math.ceil(total / students.length)
}
console.log(getAverageScore(students))

module.exports.getAverageScore = getAverageScore;