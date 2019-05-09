function humanReadable(seconds) {
    const a = Math.floor(seconds/3600) 
    resultA = a > 9 ? a : `0${a}`;
    const b = Math.floor((seconds%3600)/60);
    resultB = b > 9 ? b : `0${b}`;
    const c = (seconds%3600)%60;
    resultC = c > 9 ? c : `0${c}`;
    return `${resultA}:${resultB}:${resultC}`;
  }