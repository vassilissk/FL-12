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
makeNumber('erer384jjjfd123')