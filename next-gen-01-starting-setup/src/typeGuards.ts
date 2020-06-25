type Admin = {
  name: String;
  privileges: string[];
};

type Employee = { name: String; startDate: Date };

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
