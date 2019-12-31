function getMin(...args) {
    var min = args[0];
    for (var i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i]
        }
    }
    return min
}

getMin(1, -2, -3)