
const two = 2;
const four = 4;
let a = parseInt(prompt('input a', 'a'))
if (isNaN(a) || a === 0) {
    console.log('Invalid input data')
} else {
    let b = parseInt(prompt('input b', 'b'))
    if (isNaN(b)) {
        console.log('Invalid input data')
    } else {
        let c = parseInt(prompt('input c', 'c'))
        if (isNaN(c)) {
            console.log('Invalid input data')
        } else {
            let discriminant = b * b - four * a * c;
            if (discriminant < 0) {
                console.log('no solution')
            } else if (discriminant === 0) {
                console.log('x=' + -b / two / a)
            } else {
                let x1 = (-b + Math.sqrt(discriminant)) / two / a
                let x2 = (-b - Math.sqrt(discriminant)) / two / a
                console.log('x1=' + Math.round(x1) + ' and x2=' + Math.round(x2))
            }
        }
    }
}
