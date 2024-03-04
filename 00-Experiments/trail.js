const expression = "2+3*(4-(3*4/2)-2)";

// Use regular expression to split the string
const parts = expression.split(/([\+\-\*\/])/).filter(part => part.trim() !== '');

console.log(parts); // Output: ["2", "+", "3", "*", "(", "4", "-", "(", "3", "*", "4", "/", "2", ")", "-", "2", ")"]


function calc(expression){
    let a = expression;
    console.log(a);
}

calc("10 +   2 *    (   6 - (4 + 1) / 2) + 7");