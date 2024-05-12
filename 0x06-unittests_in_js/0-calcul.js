const calculateNumber = (a, b) => {
    const ar = Math.round(a);
    const br = Math.round(b);
    const res = ar + br;
    return res;
}

module.exports = calculateNumber;
