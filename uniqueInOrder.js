var uniqueInOrder = function (iterable) {
    let ta = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) {
            ta.push(iterable[i])
        }
    }
    return ta
}

uniqueInOrder('ABBCcAD')