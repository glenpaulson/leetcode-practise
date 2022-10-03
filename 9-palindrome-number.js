var isPalindrome = function (x) {
  let str = x.toString();
  let i = 0;
  let j = str.length - 1;
  let flag = true;
  while (i < str.length - 1 && j > i) {
    if (str[i] !== str[j]) {
      flag = false;
    }
    i++;
    j--;
  }
  return flag;
};
