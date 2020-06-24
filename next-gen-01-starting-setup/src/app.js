var Department = /** @class */ (function () {
  function Department(name, id) {
    this.name = name;
    this.id = id;
  }
  Department.prototype.describe = function (hello) {
    console.log('Department ' + this.name + hello + this.id);
  };
  return Department;
})();
var accounting = new Department('Accounting', ' d');
accounting.describe(' hello');
console.log(accounting);
console.log(accounting['id']);
accounting['id'] = 'hello;';
