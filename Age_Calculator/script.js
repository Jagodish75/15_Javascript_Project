let birthDate = document.getElementById("birthDay");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click", () => {
    calculateAgeDifference(birthDate.value, currentDate.value);
});

function calculateAgeDifference(start, end) {
    let dobYear = parseInt(start.substring(0, 4));
    let dobMonth = parseInt(start.substring(5, 7));
    let dobDate = parseInt(start.substring(8, 10));

    let currYear = parseInt(end.substring(0, 4));
    let currMonth = parseInt(end.substring(5, 7));
    let currDate = parseInt(end.substring(8, 10));

    //Year Difference Calculation
    let yearDifference = currYear - dobYear;

    //Month Difference Calculation
    let monthDifference = 0;
    if (currMonth > dobMonth) {
        monthDifference = currMonth - dobMonth;
    } else {
        yearDifference--;
        monthDifference = 12 + currMonth - dobMonth;
    }

    //Date Difference Calculation
    let dateDifference;
    if (currDate > dobDate) {
        dateDifference = currDate - dobDate;
    } else {
        monthDifference--;
        let noOfDaysInMonth = daysInMonth(dobYear, dobMonth);
        dateDifference = noOfDaysInMonth + currDate - dobDate;
    }
    //Calculate days in month
    function daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    //case when monthDifference goes negative
    if (monthDifference < 0) {
        monthDifference = 11;
        yearDifference--;
    }
    output.innerHTML = `Your age is ${yearDifference} years ${monthDifference} months ${dateDifference} days.`;
}
