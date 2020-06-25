var uniqueInOrder = function (iterable) {
    let tab = iterable.split('');
    let ta = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] != tab[i + 1]) {
            ta.push(tab[i])
        }
    }
    return ta
}