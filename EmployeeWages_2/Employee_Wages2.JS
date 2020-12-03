class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }
  
    tostring() {
      return (
        "id: " + this.id + " name: " + this.name + " salary : " + this.salary
      );
    }
  }
  let employeePayrollData = new EmployeePayrollData(1, "Google", 60000);
  console.log(employeePayrollData.tostring());
  employeePayrollData.name = "Amazon";
  console.log(employeePayrollData.tostring());