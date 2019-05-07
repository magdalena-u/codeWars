fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ["up", "left", "right", "left", "left"];
position = [0, 0];

function streetFighterSelection(fighters, position, moves) {
  let tab = [];
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "right") {
      if (index2 === 5) {
        index2 = -1;
      }
      index2 += 1;
      tab.push(fighters[index1][index2]);
    } else if (moves[i] === "left") {
      if (index2 === 0) {
        index2 = 6;
      }
      index2 -= 1;
      tab.push(fighters[index1][index2]);
    } else if (moves[i] === "up") {
      if (index1 === 1) {
        index1 -= 1;
      }
      tab.push(fighters[index1][index2]);
    } else if (moves[i] === "down") {
      if (index1 === 0) {
        index1 += 1;
      }
      tab.push(fighters[index1][index2]);
    }
  }
  return tab;
}

streetFighterSelection(fighters, position, moves);
