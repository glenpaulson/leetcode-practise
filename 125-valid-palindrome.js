var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]+/gim, "");
  s = s.toLowerCase();
  var l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s.charAt(l) != s.charAt(r)) return false;
    l++;
    r--;
  }
  return true;
};
