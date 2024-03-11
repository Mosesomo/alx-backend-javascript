export default function getStudentIdsSum(studentList) {
  const sumOfIds = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}
