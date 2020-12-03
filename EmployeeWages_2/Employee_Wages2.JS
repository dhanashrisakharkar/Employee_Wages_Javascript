class EmployeePayrollData {
<<<<<<< HEAD
=======
    //property
>>>>>>> Uc12-ExtendEmployee_PayRollClass
    id;
    salary;
<<<<<<< HEAD
    gender;
    startDate;
<<<<<<< HEAD
Constructor(...params)
{
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
}

get name() {
    return this.name;
}
set name(name){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name))
    this._name=name;
    else throw'Name is Incorrect:';
}

toString() {
    const options = {Year : 'numeric',month: 'long',day: 'numeric'};
    const empDate = this.startDate === undefined ? "undefined": this.startDate.toLocalDateString("en-Us",options);
    return "id" + this.id+",name="+this.name+",salary="+this.salary+","+"gender"+this.gender+",startdate="+empDate;
}
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(EmployeePayrollData.toString());
try{
EmployeePayrollData.name = "john";
console.log(EmployeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayRollData = new EmployeePayrollData(1,"Terrise",30000,"F",new Date());
console.log(newEmployeePayRollData.toString());
=======

    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
=======
    //constructor
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
>>>>>>> Uc12-ExtendEmployee_PayRollClass
    }
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }
  
    tostring() {
<<<<<<< HEAD
      return (
        "id: " + this.id + " name: " + this.name + " salary : " + this.salary
      );
    }
  }
  let employeePayrollData = new EmployeePayrollData(1, "Google", 60000);
  console.log(employeePayrollData.tostring());
  employeePayrollData.name = "Amazon";
  console.log(employeePayrollData.tostring());
>>>>>>> Uc11B-Employee_PayrollClass
=======
      const options = { year: "numeric", month: "long", day: "numeric" };
      const empDate =this.startDate === undefined ? "undefined":
       this.startDate.toLocaleDateString("en-US", options);
      return (
        "id: " + this.id +
        " name: " + this.name +
        " salary : " + this.salary +
        " gender : " + this.gender +
        " startdate : " + empDate
      );
    }
  }
  let employeePayrollData = new EmployeePayrollData(1, "Puma", 60000);
  console.log(employeePayrollData.tostring());
  employeePayrollData.name = "Nike";
  console.log(employeePayrollData.tostring());
  let newEmployeePayrollData = new EmployeePayrollData(1, "Puma", 60000, "F", new Date());
  console.log(newEmployeePayrollData.tostring());
  
>>>>>>> Uc12-ExtendEmployee_PayRollClass
