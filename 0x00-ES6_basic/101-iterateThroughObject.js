export default function iterateThroughObject(reportWithIterator) {
  const employeesString = [];

  for (const employee of reportWithIterator) {
    employeesString.push(employee);
  }

  return employeesString.join(' | ');
}
