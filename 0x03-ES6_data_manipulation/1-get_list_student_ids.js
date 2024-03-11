export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  const studentIds = arrayObject.map((student) => student.id);
  return studentIds;
}
