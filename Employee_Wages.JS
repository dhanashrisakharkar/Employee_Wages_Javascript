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
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
totalEmpHrs += totalEmpHrs + WAGE_PER_HOURS ;
console.log("Uc5-Total Days:"+totalWorkingDays+"Total Hours: "+totalEmpHrs+"Emp Wage:"+empWage);