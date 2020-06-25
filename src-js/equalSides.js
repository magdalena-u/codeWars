function findEvenIndex(arr) {
  let result;
  for (let n = 1; n <= arr.length; n++) {
    if (
      arr.slice(0, n - 1).reduce((prev, next) => prev + next, 0) ===
      arr.slice(n, arr.length).reduce((prev, next) => prev + next, 0)
    ) {
      result = n - 1;
      return result;
    }
  }
  if (!result) {
    result = -1;
    return result;
  }
}
