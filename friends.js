function friend(friends) {
  tab = [];
  for (let i = 0; i < friends.length; i++) {
    friends[i].length === 4 ? tab.push(friends[i]) : "no";
  }
  return tab;
}
