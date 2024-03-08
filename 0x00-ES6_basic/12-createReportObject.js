export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };
  const reportObject = {
    allEmployees,
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  return reportObject;
}
