function executePostfix(instructions) {
    let stack = [];
    
    for (let instruction of instructions) {
        if (typeof instruction === 'number') {
            stack.push(instruction);
        } else if (typeof instruction === 'string' && ['+', '-', '*', '/'].includes(instruction)) {
            if (stack.length < 2) {
                return "Error: not enough operands!";
            }
            let b = stack.pop();
            let a = stack.pop();
            
            switch (instruction) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    return "Error: unknown operator!";
            }
        } else {
            return "Error: invalid instruction!";
        }
    }
    
    if (stack.length > 1) {
        return "Error: too many operands!";
    } else if (stack.length === 0) {
        return "Error: not enough operands!";
    } else {
        return stack[0];
    }
}
