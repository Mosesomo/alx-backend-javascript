const calculateNumber = (a, b, type) => {
    if (type === 'SUM') {
        const ar = Math.round(a);
        const br = Math.round(b);
        const res = ar + br;
        return res;
    } else if (type === "SUBTRACT") {
        const ar = Math.round(a);
        const br = Math.round(b);
        const res = br - ar;
        return res;
    } else if (type === "DIVIDE") {
        const ar = Math.round(a);
        const br = Math.round(b);
        if (br === 0) {
            return "Error";
        }
        const res = ar / br;
        return res;
    }
}

module.exports = calculateNumber;
