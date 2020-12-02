class EmployeePayrollData{
    id ;
    salary;
Constructor(id , name,salary)
{
    this.id;
    this.name;
    this.salary;
}

get name() {
    return this.name;
}
set name(name){
    this._name=name;
}

toString() {
    return "id" + this.id+",name="+this.name+",salary="+this.salary;
}
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(EmployeePayrollData.toString());
EmployeePayrollData.name = "john";
console.log(EmployeePayrollData.toString());