const getCount = (str: string): number => {
  let i = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.split("").map(letter => vowels.find(vowel => vowel === letter && i++));
  return i;
};

getCount("ola ma sie swietnie");
