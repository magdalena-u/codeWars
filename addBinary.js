function addBinary(a, b) {
    let sum = a + b;
    let tab2 = []
    while (sum > 0) {
        let binary = Math.floor(sum % 2)
        tab2.push(binary)
        sum = Math.floor(sum / 2)
    }
    tab2.reverse()
    return tab2.join('')
}