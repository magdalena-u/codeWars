function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const regex = /[a-z]/g;
    let result = [];
    const alphaTab = text.toLowerCase().match(regex);
    if (alphaTab != null) {
        for (let i = 0; i < alphaTab.length; i++) {
            let position = alphabet.indexOf(alphaTab[i]);
            result.push(position + 1);
        }
    }
    return result.join(' ')
}