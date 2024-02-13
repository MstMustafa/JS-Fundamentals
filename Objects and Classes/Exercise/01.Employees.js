function listEmployees(employeeNames) {
  const employees = {}; 

  employeeNames.forEach(name => {
    const personalNum = name.length;

    employees[name] = personalNum;
  });
  
  for (const [name, personalNum] of Object.entries(employees)) {
    console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
  }
}
