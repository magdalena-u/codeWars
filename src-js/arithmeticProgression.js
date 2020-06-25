function arithmeticSequenceElements(a, r, n) {
  const array = [];

  for (let i = 0; i < n; i++) {
    i === 0 ? array.push(a) : array.push(array[i - 1] + r);
  }
  return array.join(", ");
}

arithmeticSequenceElements(1, 2, 5);

function arithmeticSequenceElements(a, r, n) {
  return Array.from({ length: n }, (_, i) => a + r * i).join(", ");
}
