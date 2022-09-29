var lengthOfLastWord = function (s) {
  let arrWords = s.split(" ");
  let j = arrWords.length - 1;
  while (j >= 1) {
    if (arrWords[j] !== "") {
      break;
    }
    --j;
  }
  return arrWords[j].length;
};
