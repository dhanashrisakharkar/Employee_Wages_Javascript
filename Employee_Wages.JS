const IS_PART_TIME = 0;
const IS_FULL_TIME = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUES = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME :
        return PART_TIME_HOURS;
    case IS_FULL_TIME :
        return FULL_TIME_HOUES ;
    default :
        return 0;
}
}
for (let day = 0 ; day < NUM_OF_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours"+empHrs+"Emp Wage"+empWage);