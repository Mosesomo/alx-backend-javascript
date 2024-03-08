export default function createEmployeesObject(departmentName, employees) {
  const employeessObject = {
    [departmentName]: [...employees],
  };

  return employeessObject;
}
