let grade = require('./grades.js')

const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
];

describe('getHighestScoringStudent', () => {
  it('given an array of objects, return the one with the highest grade', () =>{
    expect(grade.getHighestScoringStudent(students)).toEqual({ name: 'Alice', grade: 90 })
  })
})

describe('getAverageScore', () =>{
  it('given an array of objects, return the mean, rounded up', () =>{
    expect(grade.getAverageScore(students)).toBe(67)
  })
})