const {getHighestScoringStudent, 
  getAverageScore, getPassingStudents, getPassingStudentsFilter
} = require('./grades.js');

const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
];

const students1 = [
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 },
    { name: 'Alice', grade: 90 }
];

describe('getHighestScoringStudent', () => {
  it('given an array of objects, return the one with the highest grade', () =>{
    expect(getHighestScoringStudent(students)).toEqual({ name: 'Alice', grade: 90 })
  })
})

describe('getAverageScore', () =>{
  it('given an array of objects, return the mean, rounded up', () =>{
    expect(getAverageScore(students)).toBe(67)
  })
})

describe('getPassingStudents', () => {
  it('given an array of students will display all students who pass in alphabetical order', () =>{
    expect(getPassingStudents(students)).toEqual(['Alice','Charlie'])
  })

})

describe('getPassingStudentsFiltered', () => {
  it('given an array of students will display all students who pass in alphabetical order', () =>{
    expect(getPassingStudents(students1)).toEqual(['Alice','Charlie'])
  })

})


describe('getPassingStudents', () => {
  it('given an array of students will display all students who pass in alphabetical order', () =>{
    expect(getPassingStudentsFilter(students1)).toEqual(['Alice','Charlie'])
  })

})