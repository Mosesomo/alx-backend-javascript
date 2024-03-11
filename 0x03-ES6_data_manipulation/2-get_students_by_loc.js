export default function getStudentsByLocation(studentList, city) {
  const filteredStudents = studentList.filter((student) => student.location === city);
  return filteredStudents;
}
