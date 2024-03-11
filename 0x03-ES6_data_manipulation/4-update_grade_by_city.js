export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentLoc = studentList.filter((student) => student.location === city);
  const updateStudent = studentLoc.map((student) => {
    const matchGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchGrade) {
      return { ...student, grade: matchGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updateStudent;
}
