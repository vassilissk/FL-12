function makeNumber(str) {
    let mas = []
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            continue
        } else {
            mas.push(str[i])
        }
    }

    return (mas.join(''))
}
function countNumbers(str) {
    let numstr = makeNumber(str)
    let answer = {}
    for (let i = 0; i < 10; i++) {
        answer[String(i)] = 0
    }
    for (let i in numstr) {
        answer[numstr[i]]++
    }
    for (let i in answer) {
        if (answer[i] === 0) {
            delete (answer[i])
        }
    }
    return answer
}
countNumbers('erer384jj4444666888jfd123')