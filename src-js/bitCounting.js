var countBits = function (n) {
    let count = 0;
    let binary = n.toString(2).split('');
    for (let i = 0; i < binary.length; i++) {
        let number = parseFloat(binary[i]);
        count += number;
    }
    return count
};