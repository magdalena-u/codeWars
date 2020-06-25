function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (i !== j) {
        if (i % j === 0) {
          return;
        }
        return console.log(i);
      }
    }
  }
}

step(2, 1, 5);
