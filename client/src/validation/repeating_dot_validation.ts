
// Условия проверки:
// первый символ не точка;
// точки не повторяются
function repeating_dot_validation(string: string): boolean {
    let counter = 0

    if(string[0] === '.') {
        return false
    }

    for(let i = 1; i < string.length; i++) {
        if(string[i] === '.') {
            counter++

            if(counter > 1) return false
        }
    }
    
    return true
}

export default repeating_dot_validation