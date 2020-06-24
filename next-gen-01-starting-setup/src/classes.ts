class Department {
  constructor(public name: string, private id: string) {}

  describe(hello: string) {
    console.log('Department ' + this.name + hello + this.id);
  }
}
class ItDepartment extends Department {
  constructor(id: string, name: string) {
    super(id, name);
  }
}

const iTdepatment = new ItDepartment('IT', 'it1');

const accounting = new Department('Accounting', ' d');

accounting.describe(' hello');
console.log(accounting);
console.log(accounting['id']);
accounting['id'] = 'hello;';
