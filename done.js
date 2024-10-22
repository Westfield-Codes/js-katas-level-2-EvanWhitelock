/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */


/* Prompt */

/* Prompt with Conditional */


/* AGE */
/* AGE KATA */
main();
/* Var, Alert, Prompt, Function */

/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let age = prompt("How old are you?");
    let born = prompt("What year were you born?");
    if (myAge(age) == born) alert("Welcome!");
    else alert("Underaged!!!");
}

/* FUNCTION myAge(age)
 * define a function called myAge with number parameter age
 * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
 * set birthYear as thisYear minus age and return that
 * @param: age (integer)
 * @return: birthYear (year)
 */
function myAge(age){
    let today = new Date();
    let thisYear = today.getFullYear();
    let birthYear = thisYear - age;
    return birthYear;
}

/* NOTE TO PROGRAMMERS: myAge(age) only works if you have not had your birthday.  
 * An additional checkAlready(birthYear) checks for that and makes an adjustment. 
 * To use it, add birthYear = checkAlready(birthYear); before you return the value.
 * function checkAlready(birthYear) asks if you had your birthday already this year.  
 * If you have, it adds 1 to your birthYear and returns that.
 */

/* ************************************* */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */
