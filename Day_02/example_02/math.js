
function add(a, b) {
    return a + b;
}

function muilt(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

module.exports = {
    add,
    muilt,
    sub,
    div
};
