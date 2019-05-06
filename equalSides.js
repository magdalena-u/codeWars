function findEvenIndex(arr) {
  let result;
  for (let n = 1; n <= arr.length; n++) {
    console.log(arr.slice(0, n - 1).reduce((prev, next) => prev + next, 0));
    console.log(
      arr.slice(n, arr.length).reduce((prev, next) => prev + next, 0)
    );
    console.log("ups");
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
