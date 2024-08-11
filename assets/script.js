let employees = [];
let addEmployee = false;
let companySalaryTotal = 0;
const addButton = document.getElementById("addEmployee");
const infoBody = document.getElementById("infoBody");

function addEmployees() {
  // first we run reset to make sure every
  reset();
  let newEmployee = {};
  addEmployee = true;
  while (addEmployee) {
    newEmployee.firstName = prompt("Add New Employee's First Name");
    newEmployee.lastName = prompt("Add New Employee's Last Name");
    newEmployee.salary = prompt("Add New Employee's Salary");
    employees.push(newEmployee);
    companySalaryTotal += Number(newEmployee.salary);
    // console.log(employees, companySalaryTotal);
    displayEmployee(newEmployee);
    addEmployee = confirm("Do you want to add more new employee?");
  }
  console.table(employees);
  console.log(`The average employee salary between ${employees.length} employee(s) is $${companySalaryTotal/employees.length}`);
  console.log(`=============================================`);
  let randomNumber = Math.floor(Math.random() * employees.length);
  console.log(`Congratulations to ${employees[randomNumber].firstName} ${employees[randomNumber].lastName}, our random drawing winner!`);
}

function displayEmployee(newEmployee){
    const tr = `<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>$${newEmployee.salary}</td></tr>`;
    infoBody.innerHTML += tr;
}

function reset() {
  employees = [];
  addEmployee = false;
  companySalaryTotal = 0;
}

addButton.addEventListener("click", addEmployees);
