function isLeapYear(stringofdate) {
    let year = (new Date(stringofdate)).getFullYear()
    if (isNaN(year)) {
        return ('Invalid Date')
    } else {
        if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
            return (year + ' is a leap year')
        }
    }

    return (year + ' is not a leap year')
}
isLeapYear(1213131313)
