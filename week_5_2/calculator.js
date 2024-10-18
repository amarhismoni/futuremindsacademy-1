

exports.add = function (a, b) {
    return a + b;
};
exports.substract = function (a, b) {
    return a - b;
};
exports.multiply = function (a, b) {
    return a * b;
};
exports.divide = function (a, b) {
    if (b == 0) {
        throw new error("cant divide by zero");
    } else {
        return a / b;
    }
};
