// chatGPT code


function calculate(expression) {
    // Tokenize the input expression
    const tokens = expression.match(/\d+|\+|\-|\*|\/|\(|\)/g).filter(token => token.trim() !== '');

    // Helper function to evaluate expressions inside parentheses
    function evaluateInParentheses(tokens) {
        const stack = [];
        let i = 0;
        while (i < tokens.length) {
            const token = tokens[i];
            if (token === '(') {
                const closingIndex = tokens.indexOf(')', i);
                const subexpression = tokens.slice(i + 1, closingIndex);
                stack.push(evaluateInParentheses(subexpression));
                i = closingIndex + 1;
            } else {
                stack.push(token);
                i++;
            }
        }
        return evaluate(stack);
    }

    // Helper function to evaluate a list of tokens following BODMAS rule
    function evaluate(tokens) {
        let result = 0;
        let operator = '+';
        let i = 0;
        while (i < tokens.length) {
            const token = tokens[i];
            if (token === '+' || token === '-') {
                operator = token;
            } else {
                let operand = token;
                if (token === '(') {
                    const closingIndex = tokens.indexOf(')', i);
                    operand = evaluateInParentheses(tokens.slice(i + 1, closingIndex));
                    i = closingIndex;
                }
                if (operator === '+') {
                    result += parseFloat(operand);
                } else if (operator === '-') {
                    result -= parseFloat(operand);
                }
            }
            i++;
        }
        return result;
    }

    return evaluate(tokens);
}

// Example usage:
const expression = "10 + 2 * (6 - (4 + 1) / 2) + 7";
console.log(calculate(expression)); // Output: 20
