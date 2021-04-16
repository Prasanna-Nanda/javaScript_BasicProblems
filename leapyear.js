const prompt = require('prompt-sync')();
let year = prompt('Enter a year: ');


function checkLeapYear(year) {


    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + '  leap year');
    } else {
        console.log(year + ' not a leap year');
    }
}
checkLeapYear(year);

