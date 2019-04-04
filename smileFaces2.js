function countSmileys(arr) {
    let number = 0;
    let eyes = [];
    let noses = [];
    let noNoses = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === ':' || arr[i][0] === ';') {
            eyes.push(arr[i]);
        }
    }
    for (let n = 0; n < eyes.length; n++) {
        if (eyes[n].length === 2) {
            noNoses.push(eyes[n]);
        } else if (eyes[n].length === 3) {
            if (eyes[n][1] === '-' || eyes[n][1] === '~') {
                noses.push(eyes[n])
            }
        }
    }
    for (let m = 0; m < noNoses.length; m++) {
        if (noNoses[m][1] === ')' || noNoses[m][1] === 'D') {
            number++
        }
    }
    for (let k = 0; k < noses.length; k++) {
        if (noses[k][2] === ')' || noses[k][2] === 'D') {
            number++
        }
    }

    return number
}