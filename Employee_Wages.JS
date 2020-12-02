const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
  
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let totalEmpWage = 0;

function getWorkingHours(empCheck) { 
    switch (empCheck) {
        case IS_FULL_TIME:
        console.log("Employee is Present for Full Time");  
        return FULL_TIME_HOURS;

        case IS_PART_TIME:
        console.log("Employee is Present for Part Time");   
        return PART_TIME_HOURS;
        
        default:
        console.log("Employee is Absent");
        return 0;
     }
    }

function calcDailyWage(empHrs) {
return empHrs * WAGE_PER_HOUR;
        }

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays , calcDailyWage(empHrs));
        
     }    
     console.log(empDailyWageMap);
     function totalWages(totalWages , dailyWage)
     {
        return totalWages+dailyWage;
     }
        console.log("Uc8 - Storing Daily Wage into Map"+Array.from(empDailyWageMap.values()).reduce(totalWages,0));
