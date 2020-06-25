function isPrime(num) {
    let flag = false;
    if (num > 1) {
        flag = true;
        for (let n = 2; n < num; n++) {
            if (num % n === 0) {
                return flag = false
            }
        }
    }
    return flag
}