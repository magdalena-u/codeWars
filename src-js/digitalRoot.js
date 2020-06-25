function digital_root(n) {
  let result = n;

  const circle = () => {
    const tab = [];
    result
      .toString()
      .split("")
      .forEach(item => tab.push(parseFloat(item)));
    result = tab.reduce((a, b) => a + b, 0);
    check();
    return result;
  };

  const check = () => {
    if (result > 9) {
      circle();
    } else return result;
  };

  check();
  return result;
}

digital_root(123);
